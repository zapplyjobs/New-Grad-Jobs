const Puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

function parseAmazonDate(postedDate, timeElapsed) {
    try {
        // Try to parse timeElapsed first (e.g., "2 days ago", "1 week ago")
        if (timeElapsed) {
            const match = timeElapsed.match(/(\d+)\s+(day|hour|week|month)s?\s+ago/i);
            if (match) {
                const value = parseInt(match[1]);
                const unit = match[2].toLowerCase();
                const now = new Date();

                switch (unit) {
                    case 'hour':
                        now.setHours(now.getHours() - value);
                        break;
                    case 'day':
                        now.setDate(now.getDate() - value);
                        break;
                    case 'week':
                        now.setDate(now.getDate() - (value * 7));
                        break;
                    case 'month':
                        now.setMonth(now.getMonth() - value);
                        break;
                }
                return now.toISOString();
            }
        }

        // Try to parse postedDate if available
        if (postedDate && postedDate !== '') {
            const date = new Date(postedDate);
            if (!isNaN(date.getTime())) {
                return date.toISOString();
            }
        }

        // Fallback: assume posted today
        return new Date().toISOString();
    } catch (error) {
        console.warn('Date parsing failed:', error);
        return new Date().toISOString();
    }
}

// Helper function to build Amazon jobs URL
function buildAmazonUrl(jobTitle = null, offset = 0) {
    const baseUrl = 'https://amazon.jobs/en-gb/search?';
    const params = new URLSearchParams({
        offset: offset.toString(),
        result_limit: '10',
        sort: 'relevant',
        'country[]': 'USA',
        distanceType: 'Mi',
        radius: '24km',
        industry_experience: 'one_to_three_years',
        latitude: '',
        longitude: '',
        loc_group_id: '',
        loc_query: '',
        base_query: jobTitle || 'software engineering', // Add job title here
        city: '',
        country: '',
        region: '',
        county: '',
        query_options: ''
    });
    
    return baseUrl + params.toString();
}

async function scrapeAmazonJobs(specificJobTitle = null) {
    console.log('🔍 Starting Amazon job scraping...');
    
    if (specificJobTitle) {
        console.log(`🎯 Searching for specific job: "${specificJobTitle}"`);
    } else {
        console.log('🔍 Using default search: All available jobs');
    }

    const browser = await Puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    const maxPages = 13;
    let allJobs = [];
    
    for (let offset = 0; offset < maxPages * 10; offset += 10) {
        const pageNum = offset / 10 + 1;
        const searchType = specificJobTitle || 'all available jobs';
        console.log(`📄 Scraping ${searchType} - Amazon page ${pageNum}...`);
        
        try {
            const url = buildAmazonUrl(specificJobTitle, offset);
            console.log(`🔗 URL: ${url}`);
            
            await page.goto(url, {
                waitUntil: 'networkidle2',
                timeout: 10000
            });

            const jobs = await page.evaluate(() => {
                const jobDivs = document.querySelectorAll('.job-tile-lists .job-tile');
                const jobsarray = Array.from(jobDivs).map(job => {
                    return {
                        title: job.querySelector('.job-link')?.innerText.trim() || '',
                        location: job.querySelector('.location-and-id li')?.innerText.trim() || '',
                        jobId: job.querySelector('.job')?.getAttribute('data-job-id') || '',
                        postedDate: job.querySelector('.posting-date')?.innerText.trim() || '',
                        timeElapsed: job.querySelector('.time-elapsed')?.innerText.trim() || '',
                        url: job.querySelector('.job-link')?.href || '',
                        // Get just the first part of qualifications
                        qualificationsPreview: job.querySelector('.qualifications-preview')?.innerText.split('\n')[0] || ''
                    };
                });
                return jobsarray;
            });
            
            console.log(`   Found ${jobs.length} jobs on page ${pageNum}`);

            if (jobs.length === 0) {
                console.log(`   No more jobs found at page ${pageNum}, stopping...`);
                break;
            }

            allJobs = [...allJobs, ...jobs];
            await new Promise(resolve => setTimeout(resolve, 2000));
            
        } catch (error) {
            console.error(`❌ Error scraping page ${pageNum}:`, error.message);
            continue;
        }
    }
    
    console.log('Total jobs found:', allJobs.length);
    
    // Log all job details
    allJobs.forEach((job, index) => {
        console.log(`job-details ${index + 1}:`, job);
    });
    
    await browser.close();

    // Remove duplicates based on jobId
    const uniqueJobs = allJobs.filter((job, index, self) =>
        index === self.findIndex(j => j.jobId === job.jobId && j.jobId !== '')
    );

    // Transform to standard format
    const transformedJobs = uniqueJobs.map(job => ({
        job_title: job.title,
        employer_name: 'Amazon',
        job_city: job.location.split(', ')[0] || 'Multiple',
        job_state: job.location.split(', ')[1] || 'Locations',
        job_description: job.qualificationsPreview || 'Management position at Amazon',
        job_apply_link: job.url,
        job_posted_at: parseAmazonDate(job.postedDate, job.timeElapsed),
        job_posted_at_datetime_utc: parseAmazonDate(job.postedDate, job.timeElapsed),
    }));

    console.log(`🎯 Amazon scraping completed: ${transformedJobs.length} unique jobs found`);

    // Determine the filename based on whether it's a specific job search
    // let fileName;
    // if (specificJobTitle) {
    //     // Convert job title to a safe filename (replace spaces with underscores, remove special characters)
    //     const safeJobTitle = specificJobTitle.toLowerCase()
    //         .replace(/[^a-z0-9\s]/g, '')
    //         .replace(/\s+/g, '_');
    //     fileName = `amazon_${safeJobTitle}_jobs.json`;
    // } else {
    //     fileName = 'amazon_jobs.json';
    // }

    // Save to JSON file
    // try {
    //     const filename = path.join(__dirname, fileName);
    //     fs.writeFileSync(filename, JSON.stringify(transformedJobs, null, 2));
    //     console.log(`💾 Saved ${transformedJobs.length} jobs to ${filename}`);
    //     console.log(`📅 Save time: ${new Date().toLocaleString()}`);
    // } catch (error) {
    //     console.error('❌ Error saving jobs to file:', error);
    // }

    return transformedJobs;
}

// Export the function for use in other modules
module.exports = scrapeAmazonJobs;

// // Execute the script if run directly
// if (require.main === module) {
//     // Check if a specific job title was provided as a command line argument
//     const args = process.argv.slice(2);
//     // Join all arguments with spaces to handle multi-word job titles
//     const specificJobTitle = args.length > 0 ? args.join(' ') : null;
    
//     if (specificJobTitle) {
//         console.log(`🎯 Job title argument received: "${specificJobTitle}"`);
//     }
    
//     scrapeAmazonJobs(specificJobTitle)
//         .then(() => {
//             console.log('\n✅ Amazon job scraping and saving completed!');
//             process.exit(0);
//         })
//         .catch(error => {
//             console.error('\n❌ Amazon job scraping failed:', error);
//             process.exit(1);
//         });
// }