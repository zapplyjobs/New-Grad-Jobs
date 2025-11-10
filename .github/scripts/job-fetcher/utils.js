const fs = require('fs');
const path = require('path');

// Load company database
const companies = JSON.parse(fs.readFileSync(path.join(__dirname, 'companies.json'), 'utf8'));

// Flatten all companies for easy access
const ALL_COMPANIES = Object.values(companies).flat();
const COMPANY_BY_NAME = {};
ALL_COMPANIES.forEach(company => {
    COMPANY_BY_NAME[company.name.toLowerCase()] = company;
    company.api_names.forEach(name => {
        COMPANY_BY_NAME[name.toLowerCase()] = company;
    });
});

/**
 * Utility functions for job processing
 */

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generate enhanced job ID with normalization fallback
 * Handles title variations: Roman numerals (I vs 1), abbreviations (Sr. vs Senior)
 *
 * Supports multiple data formats:
 * - Primary format: title, company_name, locations[]
 * - Legacy format: job_title, employer_name, job_city
 */
function generateEnhancedId(job) {
    // Support both primary and legacy data formats
    let title = (job.title || job.job_title || '').toLowerCase().trim();

    // Normalize Roman numerals BEFORE replacing spaces (word boundary matching)
    title = title
        .replace(/\bi\b/g, '1')       // " I " → " 1 "
        .replace(/\bii\b/g, '2')      // " II " → " 2 "
        .replace(/\biii\b/g, '3')     // " III " → " 3 "
        .replace(/\biv\b/g, '4')      // " IV " → " 4 "
        .replace(/\bv\b/g, '5')       // " V " → " 5 "
        // Common abbreviations
        .replace(/\bsr\.?\b/g, 'senior')
        .replace(/\bjr\.?\b/g, 'junior')
        .replace(/\b&\b/g, 'and')
        .replace(/\s+/g, '-');        // Spaces to dashes

    // Support both formats for company name
    const company = (job.company_name || job.employer_name || '').toLowerCase().trim().replace(/\s+/g, '-');

    // Support both formats for location
    // Primary: locations[] array, Legacy: job_city string
    let city = '';
    if (job.locations && Array.isArray(job.locations) && job.locations.length > 0) {
        city = job.locations[0].toLowerCase().trim(); // Use first location
    } else {
        city = (job.job_city || '').toLowerCase().trim();
    }
    city = city.replace(/\s+/g, '-');

    // Remove special characters and normalize
    const normalize = (str) => str
        .replace(/[^\w-]/g, '-')  // Replace special chars with dashes
        .replace(/-+/g, '-')      // Collapse multiple dashes
        .replace(/^-|-$/g, '');   // Remove leading/trailing dashes

    return `${normalize(company)}-${normalize(title)}-${normalize(city)}`;
}

/**
 * Generate a standardized job ID for consistent deduplication across systems
 * This ensures the same job gets the same ID in both the scraper and Discord posting
 *
 * Strategy: Hybrid approach
 * 1. Primary: Use job URL (most reliable, handles all title variations)
 * 2. Fallback: Enhanced normalization (Roman numerals, abbreviations)
 *
 * Supports multiple data formats:
 * - Primary format: url field
 * - Legacy format: job_apply_link field
 */
function generateJobId(job) {
    // Primary method: URL-based ID (99%+ of jobs have URLs)
    // Support both primary (url) and legacy (job_apply_link) formats
    const jobUrl = job.url || job.job_apply_link;

    if (jobUrl) {
        try {
            const urlObj = new URL(jobUrl);
            // Normalize: hostname + pathname (remove query params, trailing slashes)
            const normalized = urlObj.hostname + urlObj.pathname.replace(/\/$/, '');
            // Convert to safe ID format
            return normalized.toLowerCase().replace(/[^\w]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        } catch (e) {
            // Invalid URL format, fall through to enhanced method
        }
    }

    // Fallback method: Enhanced normalization (handles Roman numerals, abbreviations)
    return generateEnhancedId(job);
}

/**
 * Convert old job ID format to new standardized format
 * This helps with migration from the old inconsistent ID system
 */
function migrateOldJobId(oldId) {
    // Old format was: company-title-city with inconsistent normalization
    // We can't perfectly reverse it, but we can normalize what we have
    const normalized = oldId
        .replace(/[^\w-]/g, '-')  // Replace special chars with dashes
        .replace(/-+/g, '-')     // Collapse multiple dashes
        .replace(/^-|-$/g, '');  // Remove leading/trailing dashes
    
    return normalized;
}

function normalizeCompanyName(companyName) {
    const company = COMPANY_BY_NAME[companyName.toLowerCase()];
    return company ? company.name : companyName;
}

function getCompanyEmoji(companyName) {
    const company = COMPANY_BY_NAME[companyName.toLowerCase()];
    return company ? company.emoji : '🏢';
}

function getCompanyCareerUrl(companyName) {
    const company = COMPANY_BY_NAME[companyName.toLowerCase()];
    return company ? company.career_url : '#';
}

function formatTimeAgo(dateString) {
    if (!dateString) return 'Recently';
    
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
        return `${diffInHours}h ago`;
    } else {
        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays === 1) return '1d ago';
        if (diffInDays < 7) return `${diffInDays}d ago`;
        if (diffInDays < 30) return `${Math.floor(diffInDays / 7)}w ago`;
        return `${Math.floor(diffInDays / 30)}mo ago`;
    }
}

function isJobOlderThanWeek(dateString) {
    if (!dateString) return false;
    
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    return diffInDays >= 7;
}

function isUSOnlyJob(job) {
    // Note: There's no job_country field, but country info sometimes appears in job_state
    const state = (job.job_state || '').toLowerCase().trim();
    const city = (job.job_city || '').toLowerCase().trim();
    
    // Normalize location string by removing extra spaces and punctuation
    const cleanCity = city.replace(/[,\s]+/g, ' ').trim();
    const cleanState = state.replace(/[,\s]+/g, ' ').trim();
    
    // Expanded list of non-US countries (including variations)
    const nonUSCountries = [
        'estonia', 'canada', 'uk', 'united kingdom', 'great britain', 'britain',
        'germany', 'deutschland', 'france', 'netherlands', 'holland',
        'sweden', 'norway', 'denmark', 'finland', 'australia', 'india', 'singapore',
        'japan', 'south korea', 'korea', 'brazil', 'mexico', 'spain', 'italy', 'poland',
        'ireland', 'israel', 'switzerland', 'austria', 'belgium', 'czech republic',
        'russia', 'china', 'ukraine', 'serbia', 'romania', 'bulgaria', 'hungary',
        'portugal', 'greece', 'turkey', 'croatia', 'slovakia', 'slovenia', 'lithuania',
        'latvia', 'luxembourg', 'malta', 'cyprus', 'iceland', 'new zealand', 'thailand',
        'vietnam', 'philippines', 'indonesia', 'malaysia', 'taiwan', 'hong kong'
    ];
    
    // Check if state field contains non-US countries (this is the main filter since country appears in state)
    if (nonUSCountries.some(nonUSCountry => cleanState.includes(nonUSCountry))) {
        return false;
    }
    
    // Expanded non-US cities (including variations and major cities)
    const nonUSCities = [
        'toronto', 'vancouver', 'montreal', 'ottawa', 'calgary', 'edmonton',
        'london', 'manchester', 'birmingham', 'glasgow', 'liverpool', 'bristol',
        'berlin', 'munich', 'hamburg', 'cologne', 'frankfurt',
        'amsterdam', 'rotterdam', 'the hague',
        'stockholm', 'gothenburg', 'malmo',
        'copenhagen', 'aarhus', 'odense',
        'helsinki', 'espoo', 'tampere',
        'oslo', 'bergen', 'trondheim',
        'sydney', 'melbourne', 'brisbane', 'perth', 'adelaide',
        'bangalore', 'bengaluru', 'mumbai', 'bombay', 'delhi', 'new delhi',
        'hyderabad', 'pune', 'chennai', 'madras', 'kolkata', 'calcutta',
        'ahmedabad', 'jaipur', 'surat', 'lucknow', 'kanpur', 'nagpur',
        'singapore', 'tokyo', 'osaka', 'kyoto', 'yokohama', 'nagoya',
        'seoul', 'busan', 'incheon', 'daegu', 'daejeon',
        'tel aviv', 'jerusalem', 'haifa', 'beer sheva',
        'zurich', 'geneva', 'basel', 'bern',
        'dublin', 'cork', 'galway', 'limerick',
        'tallinn', 'tartu', 'riga', 'vilnius', 'kaunas',
        'prague', 'brno', 'ostrava', 'budapest', 'debrecen',
        'paris', 'marseille', 'lyon', 'toulouse', 'nice',
        'madrid', 'barcelona', 'valencia', 'seville', 'bilbao',
        'rome', 'milan', 'naples', 'turin', 'palermo',
        'warsaw', 'krakow', 'gdansk', 'wroclaw', 'poznan',
        'moscow', 'st petersburg', 'novosibirsk', 'yekaterinburg',
        'beijing', 'shanghai', 'guangzhou', 'shenzhen', 'chengdu',
        'kyiv', 'kiev', 'kharkiv', 'odesa', 'dnipro',
        'belgrade', 'novi sad', 'nis'
    ];
    
    // Check if city contains any non-US cities
    if (nonUSCities.some(nonUSCity => cleanCity.includes(nonUSCity))) {
        return false;
    }
    
    // Handle "Remote - [Country]" patterns
    if (cleanCity.includes('remote') && nonUSCountries.some(country => cleanCity.includes(country))) {
        return false;
    }
    
    if (cleanState.includes('remote') && nonUSCountries.some(country => cleanState.includes(country))) {
        return false;
    }
    
    // US country indicators in state field (since country info appears in state)
    const usCountryIndicators = [
        'us', 'usa', 'united states', 'united states of america', 'america'
    ];
    
    // If state contains US indicators
    if (usCountryIndicators.some(indicator => cleanState.includes(indicator))) {
        return true;
    }
    
    // US state codes and full names
    const usStates = [
        // State codes
        'al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'de', 'fl', 'ga', 'hi', 'id', 'il', 'in', 'ia',
        'ks', 'ky', 'la', 'me', 'md', 'ma', 'mi', 'mn', 'ms', 'mo', 'mt', 'ne', 'nv', 'nh', 'nj',
        'nm', 'ny', 'nc', 'nd', 'oh', 'ok', 'or', 'pa', 'ri', 'sc', 'sd', 'tn', 'tx', 'ut', 'vt',
        'va', 'wa', 'wv', 'wi', 'wy', 'dc',
        // Full state names
        'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
        'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa',
        'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',
        'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire',
        'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota', 'ohio',
        'oklahoma', 'oregon', 'pennsylvania', 'rhode island', 'south carolina', 'south dakota',
        'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west virginia',
        'wisconsin', 'wyoming', 'district of columbia'
    ];
    
    // Check if state matches US states
    if (usStates.some(usState => cleanState === usState || cleanState.includes(usState))) {
        return true;
    }
    
    // Major US cities (to catch cases where state might be missing or incorrect)
    const majorUSCities = [
        'new york', 'los angeles', 'chicago', 'houston', 'phoenix', 'philadelphia',
        'san antonio', 'san diego', 'dallas', 'san jose', 'austin', 'jacksonville',
        'fort worth', 'columbus', 'charlotte', 'san francisco', 'indianapolis',
        'seattle', 'denver', 'washington', 'boston', 'el paso', 'detroit', 'nashville',
        'portland', 'memphis', 'oklahoma city', 'las vegas', 'louisville', 'baltimore',
        'milwaukee', 'albuquerque', 'tucson', 'fresno', 'sacramento', 'kansas city',
        'mesa', 'atlanta', 'colorado springs', 'raleigh', 'omaha', 'miami', 'oakland',
        'tulsa', 'cleveland', 'wichita', 'arlington', 'new orleans', 'bakersfield',
        'tampa', 'honolulu', 'aurora', 'anaheim', 'santa ana', 'corpus christi',
        'riverside', 'lexington', 'stockton', 'toledo', 'saint paul', 'newark',
        'greensboro', 'plano', 'henderson', 'lincoln', 'buffalo', 'jersey city',
        'chula vista', 'fort wayne', 'orlando', 'st petersburg', 'chandler',
        'laredo', 'norfolk', 'durham', 'madison', 'lubbock', 'irvine', 'winston salem',
        'glendale', 'garland', 'hialeah', 'reno', 'chesapeake', 'gilbert', 'baton rouge',
        'irving', 'scottsdale', 'north las vegas', 'fremont', 'boise', 'richmond',
        'san bernardino', 'birmingham', 'spokane', 'rochester', 'des moines', 'modesto',
        'fayetteville', 'tacoma', 'oxnard', 'fontana', 'columbus', 'montgomery',
        'moreno valley', 'shreveport', 'aurora', 'yonkers', 'akron', 'huntington beach',
        'little rock', 'augusta', 'amarillo', 'glendale', 'mobile', 'grand rapids',
        'salt lake city', 'tallahassee', 'huntsville', 'grand prairie', 'knoxville',
        'worcester', 'newport news', 'brownsville', 'santa clarita', 'providence',
        'fort lauderdale', 'chattanooga', 'oceanside', 'jackson', 'garden grove',
        'rancho cucamonga', 'port st lucie', 'tempe', 'ontario', 'vancouver',
        'cape coral', 'sioux falls', 'springfield', 'peoria', 'pembroke pines',
        'elk grove', 'salem', 'lancaster', 'corona', 'eugene', 'palmdale', 'salinas',
        'springfield', 'pasadena', 'fort collins', 'hayward', 'pomona', 'cary',
        'rockford', 'alexandria', 'escondido', 'mckinney', 'kansas city', 'joliet',
        'sunnyvale', 'torrance', 'bridgeport', 'lakewood', 'hollywood', 'paterson',
        'naperville', 'syracuse', 'mesquite', 'dayton', 'savannah', 'clarksville',
        'orange', 'pasadena', 'fullerton', 'killeen', 'frisco', 'hampton',
        'mcallen', 'warren', 'bellevue', 'west valley city', 'columbia', 'olathe',
        'sterling heights', 'new haven', 'miramar', 'waco', 'thousand oaks',
        'cedar rapids', 'charleston', 'visalia', 'topeka', 'elizabeth', 'gainesville',
        'thornton', 'roseville', 'carrollton', 'coral springs', 'stamford', 'simi valley',
        'concord', 'hartford', 'kent', 'lafayette', 'midland', 'surprise', 'denton',
        'victorville', 'evansville', 'santa clara', 'abilene', 'athens', 'vallejo',
        'allentown', 'norman', 'beaumont', 'independence', 'murfreesboro', 'ann arbor',
        'fargo', 'wilmington', 'golden valley', 'pearland', 'richardson', 'broken arrow',
        'richmond', 'college station', 'league city', 'sugar land', 'lakeland',
        'duluth', 'woodbridge', 'charleston'
    ];
    
    // Check if city matches major US cities
    if (majorUSCities.some(usCity => cleanCity.includes(usCity))) {
        return true;
    }
    
    // Handle remote jobs - assume US remote unless specified otherwise
    if (cleanCity.includes('remote') && !cleanCity.includes('-') && !cleanState.includes('-')) {
        return true;
    }
    
    if (cleanState.includes('remote') && !cleanState.includes('-')) {
        return true;
    }
    
    // Handle "United States" variations in state field (main case since country info is in state)
    if (cleanState.includes('united states')) {
        return true;
    }
    
    // If both city and state are empty, can't determine - exclude for safety
    if (!cleanCity && !cleanState) {
        return false;
    }
    
    // Default to exclude if we can't determine (changed from include to be more selective)
    return false;
}

function getExperienceLevel(title, description = '') {
    const text = `${title} ${description}`.toLowerCase();
    
    // Senior level indicators
    if (text.includes('senior') || text.includes('sr.') || text.includes('lead') || 
        text.includes('principal') || text.includes('staff') || text.includes('architect')) {
        return 'Senior';
    }
    
    // Entry level indicators  
    if (text.includes('entry') || text.includes('junior') || text.includes('jr.') || 
        text.includes('new grad') || text.includes('graduate') || text.includes('university grad') ||
        text.includes('college grad') || text.includes(' grad ') || text.includes('recent grad') ||
        text.includes('intern') || text.includes('associate') || text.includes('level 1') || 
        text.includes('l1') || text.includes('campus') || text.includes('student') ||
        text.includes('early career') || text.includes('0-2 years')) {
        return 'Entry-Level';
    }
    
    return 'Mid-Level';
}

function getJobCategory(title, description = '') {
    const text = `${title} ${description}`.toLowerCase();
    
    if (text.includes('ios') || text.includes('android') || text.includes('mobile') || text.includes('react native')) {
        return 'Mobile Development';
    }
    if (text.includes('frontend') || text.includes('front-end') || text.includes('react') || text.includes('vue') || text.includes('ui')) {
        return 'Frontend Development'; 
    }
    if (text.includes('backend') || text.includes('back-end') || text.includes('api') || text.includes('server')) {
        return 'Backend Development';
    }
    if (text.includes('machine learning') || text.includes('ml ') || text.includes('ai ') || text.includes('artificial intelligence') || text.includes('deep learning')) {
        return 'Machine Learning & AI';
    }
    if (text.includes('data scientist') || text.includes('data analyst') || text.includes('analytics') || text.includes('data engineer')) {
        return 'Data Science & Analytics';
    }
    if (text.includes('devops') || text.includes('infrastructure') || text.includes('cloud') || text.includes('platform')) {
        return 'DevOps & Infrastructure';
    }
    if (text.includes('security') || text.includes('cybersecurity') || text.includes('infosec')) {
        return 'Security Engineering';
    }
    if (text.includes('product manager') || text.includes('product owner') || text.includes('pm ')) {
        return 'Product Management';
    }
    if (text.includes('design') || text.includes('ux') || text.includes('ui')) {
        return 'Design';
    }
    if (text.includes('full stack') || text.includes('fullstack')) {
        return 'Full Stack Development';
    }
    
    return 'Software Engineering';
}

function formatLocation(city, state) {
    if (!city && !state) return 'Remote';
    if (!city) return state;
    if (!state) return city;
    if (city.toLowerCase() === 'remote') return 'Remote 🏠';
    return `${city}, ${state}`;
}

// Fetch internship data from popular sources
async function fetchInternshipData() {
    console.log('🎓 Fetching 2025/2026 internship opportunities...');
    
    const internships = [];
    
    // Popular internship tracking repositories and sources
    const internshipSources = [
        {
            name: 'AngelList Internships',
            emogi: '👼',
            url: 'https://angel.co/jobs#internships',
            type: 'Job Board',
            description: 'Startup internships and entry-level positions'
        },
        {
            name: 'LinkedIn Student Jobs',
            emogi: '🔗',
            url: 'https://linkedin.com/jobs/student-jobs',
            type: 'Platform',
            description: 'Professional network for student opportunities'
        },
        {
            name: 'Indeed Internships',
            emogi: '🔵',
            url: 'https://indeed.com/q-software-engineering-intern-jobs.html',
            type: 'Job Board',
            description: 'Comprehensive internship search engine'
        },
        {
            name: 'Glassdoor Internships',
            emogi: '🏢',
            url: 'https://glassdoor.com/Job/software-engineer-intern-jobs-SRCH_KO0,23.htm',
            type: 'Job Board',
            description: 'Internships with company reviews and salary data'
        },
        {
            name: 'University Career Centers',
            emogi: '🏫',
            url: 'https://nace.org',
            type: 'Resource',
            description: 'National Association of Colleges and Employers'
        }
    ];
    
    // Add company-specific internship programs
    const companyInternshipPrograms = [
        { company: 'Google', program: 'STEP Internship', url: 'https://careers.google.com/students/', deadline: 'Various' },
        { company: 'Microsoft', program: 'Software Engineering Internship', url: 'https://careers.microsoft.com/students', deadline: 'Various' },
        { company: 'Meta', program: 'Software Engineer Internship', url: 'https://careers.meta.com/students', deadline: 'Various' },
        { company: 'Amazon', program: 'SDE Internship', url: 'https://amazon.jobs/internships', deadline: 'Various' },
        { company: 'Apple', program: 'Software Engineering Internship', url: 'https://jobs.apple.com/students', deadline: 'Various' },
        { company: 'Netflix', program: 'Software Engineering Internship', url: 'https://jobs.netflix.com/students', deadline: 'Various' },
        { company: 'Tesla', program: 'Software Engineering Internship', url: 'https://careers.tesla.com/internships', deadline: 'Various' },
        { company: 'Nvidia', program: 'Software Engineering Internship', url: 'https://careers.nvidia.com/internships', deadline: 'Various' },
        { company: 'Stripe', program: 'Software Engineering Internship', url: 'https://stripe.com/jobs/internships', deadline: 'Various' },
        { company: 'Coinbase', program: 'Software Engineering Internship', url: 'https://coinbase.com/careers/students', deadline: 'Various' }
    ];
    
    return {
        sources: internshipSources,
        companyPrograms: companyInternshipPrograms,
        lastUpdated: new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        })
    };
}

module.exports = {
    companies,
    ALL_COMPANIES,
    COMPANY_BY_NAME,
    delay,
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
    fetchInternshipData
};