/**
 * Description Fetcher Service
 * Orchestrates fetching job descriptions from various ATS platforms
 */

const greenhouseFetcher = require('./greenhouseFetcher');
const ashbyFetcher = require('./ashbyFetcher');
const genericFetcher = require('./genericFetcher');
const cache = require('./cache');

// Puppeteer-based fetchers for JS-rendered platforms
const workdayFetcherPuppeteer = require('./workdayFetcherPuppeteer');
const leverFetcherPuppeteer = require('./leverFetcherPuppeteer');

/**
 * Detect which ATS platform from URL
 * @param {string} url - Job application URL
 * @returns {string} Platform name
 */
function detectPlatform(url) {
  if (!url) return 'unknown';

  const urlLower = url.toLowerCase();

  if (urlLower.includes('myworkdayjobs.com')) return 'workday';
  if (urlLower.includes('greenhouse.io')) return 'greenhouse';
  if (urlLower.includes('ashbyhq.com')) return 'ashby';
  if (urlLower.includes('lever.co') || urlLower.includes('jobs.lever')) return 'lever';
  if (urlLower.includes('icims.com')) return 'icims';
  if (urlLower.includes('taleo.net')) return 'taleo';

  return 'generic';
}

/**
 * Fetch job description from URL
 * @param {string} url - Job application URL
 * @param {Object} options - Additional options
 * @param {number} options.timeout - Request timeout in ms (default: 10000)
 * @param {number} options.retries - Number of retries (default: 3)
 * @returns {Promise<Object>} Job description data
 */
async function fetchDescription(url, options = {}) {
  const {
    timeout = 10000,
    retries = 3,
    useCache = true
  } = options;

  // Check cache first
  if (useCache) {
    const cached = cache.get(url);
    if (cached) {
      console.log(`✅ Description found in cache`);
      return cached;
    }
  }

  const platform = detectPlatform(url);

  console.log(`📝 Fetching description from ${platform} platform...`);

  let lastError;

  // Retry logic
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      let result;

      switch (platform) {
        case 'workday':
          // Try Puppeteer first, fallback to generic if it fails
          try {
            console.log('   Using Puppeteer for Workday...');
            result = await workdayFetcherPuppeteer.fetch(url, { timeout });
          } catch (puppeteerError) {
            console.log('   Puppeteer failed, trying generic fallback...');
            result = await genericFetcher.fetch(url, { timeout });
          }
          break;

        case 'greenhouse':
          // Fast HTTP scraping
          result = await greenhouseFetcher.fetch(url, { timeout });
          break;

        case 'ashby':
          // Fast HTTP scraping (JSON-LD)
          result = await ashbyFetcher.fetch(url, { timeout });
          break;

        case 'lever':
          // Try Puppeteer first, fallback to generic if it fails
          try {
            console.log('   Using Puppeteer for Lever...');
            result = await leverFetcherPuppeteer.fetch(url, { timeout });
          } catch (puppeteerError) {
            console.log('   Puppeteer failed, trying generic fallback...');
            result = await genericFetcher.fetch(url, { timeout });
          }
          break;

        case 'generic':
        default:
          // Fallback HTTP scraping
          result = await genericFetcher.fetch(url, { timeout });
          break;
      }

      if (result && result.description) {
        console.log(`✅ Description fetched successfully (${result.description.length} chars)`);

        const descriptionData = {
          success: true,
          platform,
          description: result.description,
          requirements: result.requirements || null,
          responsibilities: result.responsibilities || null,
          metadata: result.metadata || {}
        };

        // Cache the result
        if (useCache) {
          cache.set(url, descriptionData);
        }

        return descriptionData;
      }

      // If no description found, throw to retry
      throw new Error('No description found');

    } catch (error) {
      lastError = error;
      console.warn(`⚠️ Attempt ${attempt}/${retries} failed: ${error.message}`);

      if (attempt < retries) {
        // Exponential backoff: 2s, 4s, 8s
        const delay = Math.pow(2, attempt) * 1000;
        console.log(`   Retrying in ${delay / 1000}s...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  // All retries failed
  console.error(`❌ Failed to fetch description after ${retries} attempts: ${lastError.message}`);

  return {
    success: false,
    platform,
    description: null,
    error: lastError.message
  };
}

/**
 * Fetch descriptions for multiple jobs in batches
 * @param {Array<Object>} jobs - Array of job objects with job_apply_link
 * @param {Object} options - Batch options
 * @param {number} options.batchSize - Jobs per batch (default: 10)
 * @param {number} options.delayBetweenRequests - Delay in ms (default: 1000)
 * @returns {Promise<Array>} Jobs with descriptions added
 */
async function fetchDescriptionsBatch(jobs, options = {}) {
  const {
    batchSize = 10,
    delayBetweenRequests = 1000
  } = options;

  const results = [];

  console.log(`\n🔄 Fetching descriptions for ${jobs.length} jobs (batch size: ${batchSize})...`);

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];

    // Fetch description
    const descResult = await fetchDescription(job.job_apply_link);

    // Add description to job object
    const enrichedJob = {
      ...job,
      job_description: descResult.description || job.job_description || 'No description available',
      description_platform: descResult.platform,
      description_success: descResult.success
    };

    results.push(enrichedJob);

    // Progress logging
    if ((i + 1) % 10 === 0) {
      console.log(`   Progress: ${i + 1}/${jobs.length} jobs processed`);
    }

    // Rate limiting: delay between requests
    if (i < jobs.length - 1) {
      await new Promise(resolve => setTimeout(resolve, delayBetweenRequests));
    }
  }

  // Summary stats
  const successCount = results.filter(j => j.description_success).length;
  const failCount = results.length - successCount;

  console.log(`\n✅ Batch complete: ${successCount} successful, ${failCount} failed`);

  return results;
}

module.exports = {
  fetchDescription,
  fetchDescriptionsBatch,
  detectPlatform,
  cache
};
