const { initBrowser, closeBrowser } = require("./baseCollector.js");
const { getCompanyConfig, getPaginationType } = require("../services/companyService.js");
const { navigateToFirstPage } = require("../services/navigationService.js");
const { extractJobData } = require("../services/extractionService.js");
const {applyUSAFilter} = require("../utils/applyUSAFilter.js")
const { 
  handlePagination, 
  handleInfiniteScrollPagination, 
  handleShowMorePagination 
} = require("../services/paginationService.js");
const { validateJobObject, sanitizeJobObject } = require("../types/JobTypes.js");
const { PAGINATION_CONSTANTS, PAGINATION_TYPES } = require("../utils/constants.js");

/**
 * Main function to scrape data for a single company
 * @param {string} companyKey - Company identifier key
 * @param {string} searchQuery - Search query parameter
 * @param {number} maxPages - Maximum pages to scrape (default: 4)
 * @param {number} startPage - Starting page (IGNORED to prevent multiple browser instances)
 * @returns {Promise<Array>} Array of job objects
 */
async function scrapeCompanyData(companyKey, searchQuery, maxPages, startPage) {
  // Set default values properly
  maxPages = maxPages || PAGINATION_CONSTANTS.DEFAULT_MAX_PAGES;
  startPage = startPage || 1;

  let browser, page;
  const jobs = [];

  try {
    // Log that we're ignoring startPage to prevent multiple browser instances
    if (startPage > 1) {
      console.log(`WARNING: Ignoring startPage=${startPage} for ${companyKey} to prevent multiple browser instances. Will scrape all pages 1-${maxPages} in single session.`);
    }

    // Initialize browser ONCE per company - this is the ONLY browser instance
    console.log(`Initializing single browser instance for ${companyKey}...`);
    ({ browser, page } = await initBrowser());

    // Get company configuration
    const company = getCompanyConfig(companyKey, searchQuery, 1);
    if (!company) {
      console.error(`Failed to get configuration for company: ${companyKey}`);
      return jobs;
    }

    const selector = company.selector;
    const paginationType = getPaginationType(company);

    console.log(`Starting complete scrape for ${company.name} with pagination type: ${paginationType || 'none'} (Pages 1-${maxPages})`);

    // Handle different pagination strategies - each will scrape ALL pages in one go
    if (paginationType === PAGINATION_TYPES.INFINITE_SCROLL) {
      await scrapeWithInfiniteScroll(page, company, selector, maxPages, jobs);
    } else if (paginationType === PAGINATION_TYPES.SHOW_MORE_BUTTON) {
      await scrapeWithShowMoreButton(page, company, selector, maxPages, jobs);
    } else {
      await scrapeWithTraditionalPagination(page, company, selector, searchQuery, maxPages, jobs);
    }

    console.log(`Completed scraping ${company.name}. Found ${jobs.length} jobs using single browser instance.`);

  } catch (error) {
    console.error(`Fatal error scraping ${companyKey}: ${error.message}`);
    console.error(`Stack trace: ${error.stack}`);
  } finally {
    // Ensure browser is closed only once at the end
    if (browser) {
      try {
        await closeBrowser(browser);
        console.log(`Browser closed for ${companyKey}`);
      } catch (closeError) {
        console.error(`Error closing browser for ${companyKey}: ${closeError.message}`);
      }
    }
  }

  return jobs;
}

/**
 * Scrape company with infinite scroll pagination
 * @param {Object} page - Puppeteer page instance
 * @param {Object} company - Company configuration
 * @param {Object} selector - Selector configuration
 * @param {number} maxPages - Maximum scroll iterations
 * @param {Array} jobs - Jobs array to populate
 */
async function scrapeWithInfiniteScroll(page, company, selector, maxPages, jobs) {
  await navigateToFirstPage(page, company);
  await handleInfiniteScrollPagination(page, company.name, maxPages);
  
  const jobData = await extractJobData(page, selector, company, 1);
  const validJobs = processJobData(jobData);
  jobs.push(...validJobs);
}

/**
 * Scrape company with show more button pagination
 * @param {Object} page - Puppeteer page instance
 * @param {Object} company - Company configuration
 * @param {Object} selector - Selector configuration
 * @param {number} maxPages - Maximum button clicks
 * @param {Array} jobs - Jobs array to populate
 */
async function scrapeWithShowMoreButton(page, company, selector, maxPages, jobs) {
  await navigateToFirstPage(page, company);
  await handleShowMorePagination(page, company.name, maxPages);
  
  const jobData = await extractJobData(page, selector, company, 1);
  const validJobs = processJobData(jobData);
  jobs.push(...validJobs);
  
  console.log(`Extracted ${validJobs.length} jobs using show more button`);
}

/**
 * Scrape company with traditional pagination (chevron-click or url-page)
 * @param {Object} page - Puppeteer page instance
 * @param {Object} company - Company configuration
 * @param {Object} selector - Selector configuration
 * @param {string} searchQuery - Search query parameter
 * @param {number} maxPages - Maximum pages to scrape
 * @param {Array} jobs - Jobs array to populate
 */
async function scrapeWithTraditionalPagination(page, company, selector, searchQuery, maxPages, jobs) {
  // Navigate to first page and apply filters ONCE at the beginning
  await navigateToFirstPage(page, company);
  
  if (company.filters && company.filters.applyUSAFilter) {
    console.log("About to call applyUSAFilter with:", company.filters.applyUSAFilter);
    try {
      const success = await applyUSAFilter(page, company.filters.applyUSAFilter);
      if (success) {
        console.log("USA filter applied successfully");
      } else {
        console.warn("USA filter application failed");
      }
    } catch (filterError) {
      console.error("Error applying USA filter:", filterError.message);
    }
  }

  for (let pageNum = 1; pageNum <= maxPages; pageNum++) {
    console.log(`Scraping ${company.name} - Page ${pageNum}/${maxPages}`);
    
    try {
      // Extract job data from current page using the SAME page instance
      const jobData = await extractJobData(page, selector, company, pageNum);
      const validJobs = processJobData(jobData);
      
      console.log(`Page ${pageNum}: Found ${validJobs.length} valid jobs`);

      // Check if current page returned 0 jobs
      if (validJobs.length === 0) {
        console.log(`No jobs found on page ${pageNum} for ${company.name}. Stopping pagination and returning collected jobs.`);
        break; // Stop pagination if no jobs found
      }

      // Add jobs to collection
      jobs.push(...validJobs);

      // Check if we should continue to the next page
      if (pageNum < maxPages) {
        const canContinue = await handlePaginationSafely(
          page,
          selector,
          company,
          searchQuery,
          pageNum,
          maxPages
        );
        
        if (!canContinue) {
          console.log(`Cannot continue pagination for ${company.name}, stopping at page ${pageNum}`);
          break;
        }
      }
    } catch (pageError) {
      console.error(`Error scraping page ${pageNum} for ${company.name}: ${pageError.message}`);
      // Continue to next page instead of breaking completely
      continue;
    }
  }
}

/**
 * Safe pagination handler that doesn't create new browser instances
 * @param {Object} page - Puppeteer page instance
 * @param {Object} selector - Selector configuration
 * @param {Object} company - Company configuration
 * @param {string} searchQuery - Search query parameter
 * @param {number} currentPage - Current page number
 * @param {number} maxPages - Maximum pages
 * @returns {boolean} Whether pagination can continue
 */
async function handlePaginationSafely(page, selector, company, searchQuery, currentPage, maxPages) {
  try {
    // Call the original handlePagination but ensure it uses the same page instance
    const canContinue = await handlePagination(
      page,
      selector,
      company,
      searchQuery,
      currentPage,
      maxPages
    );
    
    // Add a small delay to let the page load
    if (canContinue) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    return canContinue;
  } catch (error) {
    console.error(`Pagination error on page ${currentPage}: ${error.message}`);
    return false;
  }
}

/**
 * Process and validate job data
 * @param {Array} jobData - Raw job data array
 * @returns {Array} Array of valid, sanitized job objects
 */
function processJobData(jobData) {
  const validJobs = [];

  if (!jobData || !Array.isArray(jobData)) {
    console.warn('Invalid job data provided to processJobData');
    return validJobs;
  }

  jobData.forEach((job, index) => {
    try {
      // Sanitize job data
      const sanitizedJob = sanitizeJobObject(job);
      
      // Validate job data
      const validation = validateJobObject(sanitizedJob);
      
      if (validation.isValid) {
        validJobs.push(sanitizedJob);
      } else {
        console.warn(`Invalid job data at index ${index}:`, validation.errors.join(', '));
      }
    } catch (error) {
      console.error(`Error processing job data at index ${index}:`, error.message);
    }
  });

  return validJobs;
}

/**
 * Scrape multiple companies
 * @param {Array} companyKeys - Array of company identifier keys
 * @param {string} searchQuery - Search query parameter
 * @param {number} maxPages - Maximum pages to scrape per company
 * @returns {Promise<Object>} Object with company keys as keys and job arrays as values
 */
async function scrapeMultipleCompanies(companyKeys, searchQuery, maxPages) {
  maxPages = maxPages || PAGINATION_CONSTANTS.DEFAULT_MAX_PAGES;
  const results = {};

  for (const companyKey of companyKeys) {
    console.log(`\n=== Starting scrape for ${companyKey} ===`);
    
    try {
      // Each company gets its own browser instance, but only ONE per company
      const jobs = await scrapeCompanyData(companyKey, searchQuery, maxPages);
      results[companyKey] = jobs;
      
      console.log(`=== Completed ${companyKey}: ${jobs.length} jobs ===\n`);
      
      // Add delay between companies to be respectful
      if (companyKeys.indexOf(companyKey) < companyKeys.length - 1) {
        console.log('Waiting before next company...');
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    } catch (error) {
      console.error(`Failed to scrape ${companyKey}:`, error.message);
      results[companyKey] = [];
    }
  }

  return results;
}

module.exports = { 
  scrapeCompanyData,
  scrapeMultipleCompanies
};