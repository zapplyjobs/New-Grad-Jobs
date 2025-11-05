/**
 * API Service Layer
 * Handles HTTP requests to external job data sources
 */

const axios = require('axios');

/**
 * Fetch jobs from API-based companies
 * @param {Object} company - Company configuration object
 * @returns {Promise<Array>} Array of job objects
 */
async function fetchAPIJobs(company) {
  if (!company.apiMode) {
    return null; // Not an API company, skip
  }

  try {
    console.log(`📡 Fetching from ${company.name} API...`);

    const response = await axios.get(company.url, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'JobAggregator/1.0'
      },
      timeout: 30000 // 30 second timeout
    });

    // Use company-specific parser if available
    if (company.parser && typeof company.parser === 'function') {
      const jobs = company.parser(response.data);
      console.log(`✅ ${company.name}: ${jobs.length} jobs`);
      return jobs;
    }

    console.log(`⚠️  ${company.name}: No parser function defined`);
    return [];

  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      console.error(`⏱️  ${company.name}: Request timeout (>30s)`);
    } else if (error.response) {
      console.error(`❌ ${company.name}: HTTP ${error.response.status}`);
    } else {
      console.error(`❌ ${company.name}: ${error.message}`);
    }
    return [];
  }
}

/**
 * Fetch jobs from external aggregator service
 * @returns {Promise<Array>} Array of job objects
 */
async function fetchExternalJobsData() {
  const externalSource = process.env.EXTERNAL_JOBS_SOURCE || process.env.PRIMARY_DATA_SOURCE_URL;

  if (!externalSource) {
    console.log('⚠️  External aggregator not configured');
    return [];
  }

  try {
    console.log('📡 Fetching from external aggregator...');

    const response = await axios.get(externalSource, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'JobAggregator/1.0'
      },
      timeout: 60000 // 60 second timeout for large dataset
    });

    // Transform external data to standard format
    const jobs = response.data
      .filter(job => job.active && job.url &&
        (job.title.toLowerCase().includes('engineer') ||
         job.title.toLowerCase().includes('developer')))
      .map(job => ({
        job_title: job.title,
        employer_name: job.company_name,
        job_city: job.locations?.[0]?.split(', ')?.[0] || 'Multiple',
        job_state: job.locations?.[0]?.split(', ')?.[1] || 'Locations',
        job_description: `Join ${job.company_name} in this exciting opportunity.`,
        job_apply_link: job.url,
        job_posted_at_datetime_utc: safeISOString(job.date_posted * 1000),
        job_employment_type: 'FULLTIME'
      }));

    console.log(`✅ External aggregator: ${jobs.length} jobs`);
    return jobs;

  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      console.error(`⏱️  External aggregator: Request timeout (>60s)`);
    } else if (error.response) {
      console.error(`❌ External aggregator: HTTP ${error.response.status}`);
    } else {
      console.error(`❌ External aggregator: ${error.message}`);
    }
    return [];
  }
}

/**
 * Helper function to safely convert dates to ISO string
 * @param {*} dateValue - Date value to convert
 * @returns {string|null} ISO string or null
 */
function safeISOString(dateValue) {
  if (!dateValue) return null;
  try {
    const date = new Date(dateValue);
    return isNaN(date.getTime()) ? null : date.toISOString();
  } catch {
    return null;
  }
}

module.exports = {
  fetchAPIJobs,
  fetchExternalJobsData
};
