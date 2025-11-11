const fs = require('fs');
const path = require('path');
const { fetchAllJobs } = require('../unified-job-fetcher');
const { 
    companies, 
    ALL_COMPANIES, 
    COMPANY_BY_NAME, 
    generateJobId,
    migrateOldJobId,
    normalizeCompanyName, 
    getCompanyEmoji, 
    getCompanyCareerUrl,
    formatTimeAgo,
    isJobOlderThanWeek,
    isUSOnlyJob,
    getExperienceLevel,
    getJobCategory,
    formatLocation,
    delay 
} = require('./utils');

// Generate company statistics with categories
function generateCompanyStats(jobs) {
    const stats = {
        byCategory: {},
        byLevel: { 'Entry-Level': 0, 'Mid-Level': 0, 'Senior': 0 },
        byLocation: {},
        totalByCompany: {}
    };
    
    jobs.forEach(job => {
        // Category stats
        const category = getJobCategory(job.job_title, job.job_description);
        stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
        
        // Level stats
        const level = getExperienceLevel(job.job_title, job.job_description);
        stats.byLevel[level]++;
        
        // Location stats
        const location = formatLocation(job.job_city, job.job_state);
        stats.byLocation[location] = (stats.byLocation[location] || 0) + 1;
        
        // Company stats
        stats.totalByCompany[job.employer_name] = (stats.totalByCompany[job.employer_name] || 0) + 1;
    });
    
    return stats;
}

// Write the new jobs JSON for Discord with atomic writes
function writeNewJobsJson(jobs) {
    // Get repository root (3 levels up from .github/scripts/job-fetcher)
    const repoRoot = path.join(__dirname, '..', '..', '..');
    const dataDir = path.join(repoRoot, '.github', 'data');
    
    try {
        // Ensure data folder exists
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Atomic write: write to temp file then rename
        const outPath = path.join(dataDir, 'new_jobs.json');
        const tempPath = path.join(dataDir, 'new_jobs.tmp.json');
        
        // Write to temporary file
        fs.writeFileSync(tempPath, JSON.stringify(jobs, null, 2), 'utf8');
        
        // Atomic rename - this prevents corruption if process is killed mid-write
        fs.renameSync(tempPath, outPath);
        
        console.log(`✨ Wrote ${jobs.length} new jobs to ${outPath}`);
        
    } catch (error) {
        console.error('❌ Error writing new_jobs.json:', error.message);
        
        // Clean up temp file if it exists
        const tempPath = path.join(dataDir, 'new_jobs.tmp.json');
        if (fs.existsSync(tempPath)) {
            try {
                fs.unlinkSync(tempPath);
            } catch (cleanupError) {
                console.error('⚠️ Could not clean up temp file:', cleanupError.message);
            }
        }
        
        throw error; // Re-throw to stop execution
    }
}

// Update seen jobs store with atomic writes to prevent corruption
function updateSeenJobsStore(jobs, seenIds) {
    // Get repository root (3 levels up from .github/scripts/job-fetcher)
    const repoRoot = path.join(__dirname, '..', '..', '..');
    const dataDir = path.join(repoRoot, '.github', 'data');
    
    try {
        // Ensure data folder exists
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }
        
        // Mark new jobs as seen
        jobs.forEach(job => seenIds.add(job.id));
        
        // Convert Set to sorted array for consistency
        let seenJobsArray = [...seenIds].sort();
        
        // Cleanup: Remove entries older than 30 days to prevent infinite growth
        // This is safe because we only track jobs from the last week anyway
        const maxEntries = 10000; // Reasonable upper limit
        if (seenJobsArray.length > maxEntries) {
            seenJobsArray = seenJobsArray.slice(-maxEntries); // Keep most recent entries
            console.log(`🧹 Trimmed seen_jobs.json to ${maxEntries} most recent entries`);
        }
        
        // Atomic write: write to temp file then rename
        const seenPath = path.join(dataDir, 'seen_jobs.json');
        const tempPath = path.join(dataDir, 'seen_jobs.tmp.json');
        
        // Write to temporary file
        fs.writeFileSync(tempPath, JSON.stringify(seenJobsArray, null, 2), 'utf8');
        
        // Atomic rename - this prevents corruption if process is killed mid-write
        fs.renameSync(tempPath, seenPath);
        
        console.log(`✅ Updated seen_jobs.json with ${jobs.length} new entries (total: ${seenJobsArray.length})`);
        
    } catch (error) {
        console.error('❌ Error updating seen jobs store:', error.message);
        
        // Clean up temp file if it exists
        const tempPath = path.join(dataDir, 'seen_jobs.tmp.json');
        if (fs.existsSync(tempPath)) {
            try {
                fs.unlinkSync(tempPath);
            } catch (cleanupError) {
                console.error('⚠️ Could not clean up temp file:', cleanupError.message);
            }
        }
        
        throw error; // Re-throw to stop execution
    }
}

// Load seen jobs for deduplication with error handling and validation
function loadSeenJobsStore() {
    // Get repository root (3 levels up from .github/scripts/job-fetcher)
    const repoRoot = path.join(__dirname, '..', '..', '..');
    const dataDir = path.join(repoRoot, '.github', 'data');
    const seenPath = path.join(dataDir, 'seen_jobs.json');
    
    try {
        if (!fs.existsSync(seenPath)) {
            console.log('ℹ️ No existing seen_jobs.json found - starting fresh');
            return new Set();
        }
        
        const fileContent = fs.readFileSync(seenPath, 'utf8');
        if (!fileContent.trim()) {
            console.log('⚠️ Empty seen_jobs.json file - starting fresh');
            return new Set();
        }
        
        const seenJobs = JSON.parse(fileContent);
        if (!Array.isArray(seenJobs)) {
            console.log('⚠️ Invalid seen_jobs.json format - expected array, starting fresh');
            return new Set();
        }
        
        // Filter out invalid entries (non-strings or empty strings)
        const validSeenJobs = seenJobs.filter(id => typeof id === 'string' && id.trim().length > 0);
        
        if (validSeenJobs.length !== seenJobs.length) {
            console.log(`⚠️ Filtered ${seenJobs.length - validSeenJobs.length} invalid entries from seen_jobs.json`);
        }
        
        console.log(`✅ Loaded ${validSeenJobs.length} previously seen jobs`);
        
        // Migration check: if all IDs are in old format, we need to regenerate them
        // Old format contains commas and multiple dashes, new format doesn't
        const hasOldFormatIds = validSeenJobs.some(id => id.includes(',') || id.includes('---'));
        
        if (hasOldFormatIds && validSeenJobs.length > 0) {
            console.log('⚠️ Detected old job ID format - migrating to new standardized format');
            
            // Migrate old IDs to new format to minimize re-posting
            const migratedIds = validSeenJobs.map(oldId => {
                if (oldId.includes(',') || oldId.includes('---')) {
                    return migrateOldJobId(oldId);
                }
                return oldId; // Already in new format
            });
            
            const uniqueMigratedIds = [...new Set(migratedIds)];
            console.log(`📝 Migrated ${validSeenJobs.length} old IDs to ${uniqueMigratedIds.length} new format IDs`);
            
            return new Set(uniqueMigratedIds);
        }
        
        return new Set(validSeenJobs);
        
    } catch (error) {
        console.error('❌ Error loading seen_jobs.json:', error.message);
        console.log('ℹ️ Creating backup and starting fresh');
        
        // Create backup of corrupted file
        try {
            const backupPath = path.join(dataDir, `seen_jobs_backup_${Date.now()}.json`);
            fs.copyFileSync(seenPath, backupPath);
            console.log(`📁 Backup created: ${backupPath}`);
        } catch (backupError) {
            console.error('⚠️ Could not create backup:', backupError.message);
        }
        
        return new Set();
    }
}

// Load posted jobs for accurate deduplication
function loadPostedJobsStore() {
    // Get repository root (3 levels up from .github/scripts/job-fetcher)
    const repoRoot = path.join(__dirname, '..', '..', '..');
    const dataDir = path.join(repoRoot, '.github', 'data');
    const postedPath = path.join(dataDir, 'posted_jobs.json');

    try {
        if (!fs.existsSync(postedPath)) {
            console.log('ℹ️ No existing posted_jobs.json found - starting fresh');
            return new Set();
        }

        const fileContent = fs.readFileSync(postedPath, 'utf8');
        if (!fileContent.trim()) {
            console.log('⚠️ Empty posted_jobs.json file - starting fresh');
            return new Set();
        }

        const postedJobs = JSON.parse(fileContent);
        if (!Array.isArray(postedJobs)) {
            console.log('⚠️ Invalid posted_jobs.json format - expected array, starting fresh');
            return new Set();
        }

        // Filter out invalid entries (non-strings or empty strings)
        const validPostedJobs = postedJobs.filter(id => typeof id === 'string' && id.trim().length > 0);

        if (validPostedJobs.length !== postedJobs.length) {
            console.log(`⚠️ Filtered ${postedJobs.length - validPostedJobs.length} invalid entries from posted_jobs.json`);
        }

        console.log(`✅ Loaded ${validPostedJobs.length} previously posted jobs for deduplication`);

        return new Set(validPostedJobs);

    } catch (error) {
        console.error('❌ Error loading posted_jobs.json:', error.message);
        console.log('ℹ️ Starting with empty posted jobs set');

        return new Set();
    }
}

// Main job processing function
async function processJobs() {
    console.log('🚀 Starting job processing...');
    
    try {
        // Load posted jobs for accurate deduplication
        // Use posted_jobs.json (what we've successfully posted to Discord)
        // instead of seen_jobs.json (what we've fetched from APIs)
        const postedIds = loadPostedJobsStore();
        const seenIds = loadSeenJobsStore(); // Keep for backwards compatibility

        // Fetch jobs from both API and real career pages
        const allJobs = await fetchAllJobs();
        const usJobs = allJobs.filter(isUSOnlyJob);

        // Filter for jobs posted between 24 hours and 90 days ago
        // Lower bound (24h): Avoids duplicate entries from data source that get cleaned up within hours
        // Upper bound (90 days): Excludes stale jobs that are months old
        // This ensures we post stable, recent, and relevant job listings
        const ONE_DAY_AGO = Date.now() - (24 * 60 * 60 * 1000);
        const NINETY_DAYS_AGO = Date.now() - (90 * 24 * 60 * 60 * 1000);
        const currentJobs = usJobs.filter(job => {
            const jobDate = new Date(job.date_posted || job.date_updated || 0);
            const isOldEnough = jobDate.getTime() < ONE_DAY_AGO;
            const isNotTooOld = jobDate.getTime() > NINETY_DAYS_AGO;

            if (!isOldEnough) {
                console.log(`⏰ Skipping recent job (posted ${Math.round((Date.now() - jobDate.getTime()) / (60 * 60 * 1000))}h ago): ${job.title || job.job_title} at ${job.company_name || job.employer_name}`);
            } else if (!isNotTooOld) {
                console.log(`📅 Skipping stale job (posted ${Math.round((Date.now() - jobDate.getTime()) / (24 * 60 * 60 * 1000))} days ago): ${job.title || job.job_title} at ${job.company_name || job.employer_name}`);
            }

            return isOldEnough && isNotTooOld;
        });

        console.log(`📅 Age filter: ${usJobs.length} total jobs → ${currentJobs.length} jobs (24h-90d window)`);

        currentJobs.forEach(job => {
            job.id = generateJobId(job);
        });

        // Filter for truly NEW jobs (deduplication against posted_jobs.json)
        // This ensures failed posts can be retried and avoids skipping valid jobs
        const freshJobs = currentJobs.filter(job => !postedIds.has(job.id));

        if (freshJobs.length === 0) {
            console.log('ℹ️ No new jobs found - all current openings already processed');
            writeNewJobsJson([]);
        } else {
            console.log(`📬 Found ${freshJobs.length} new jobs to process`);
            writeNewJobsJson(freshJobs);
            updateSeenJobsStore(freshJobs, seenIds);
        }

        // No archived jobs (showing all jobs as current)
        const archivedJobs = [];

        console.log(`✅ Job processing complete - ${currentJobs.length} current jobs`);

        return {
            currentJobs,
            archivedJobs,
            freshJobs,
            stats: generateCompanyStats(currentJobs)
        };
        
    } catch (error) {
        console.error('❌ Error in job processing:', error);
        throw error;
    }
}

module.exports = {
    generateCompanyStats,
    writeNewJobsJson,
    updateSeenJobsStore,
    loadSeenJobsStore,
    processJobs
};