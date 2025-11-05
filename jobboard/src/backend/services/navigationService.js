const { NAVIGATION_CONSTANTS } = require('../utils/constants.js');

/**
 * Navigate to the first page of a company
 * @param {Object} page - Puppeteer page instance
 * @param {Object} company - Company configuration
 */
async function navigateToFirstPage(page, company) {
  const firstPageUrl = company.url;
  console.log(`Navigating to ${company.name}: ${firstPageUrl}`);
  
  await page.goto(firstPageUrl, {
    waitUntil: NAVIGATION_CONSTANTS.WAIT_UNTIL,
    timeout: NAVIGATION_CONSTANTS.TIMEOUT,
  });
}

/**
 * Navigate to a specific page URL
 * @param {Object} page - Puppeteer page instance
 * @param {string} url - Target URL
 * @param {string} companyName - Company name for logging
 * @param {number} pageNum - Page number for logging
 */
async function navigateToPage(page, url, companyName, pageNum) {
  console.log(`Navigating to ${companyName} page ${pageNum}: ${url}`);
  
  await page.goto(url, {
    waitUntil: NAVIGATION_CONSTANTS.WAIT_UNTIL,
    timeout: NAVIGATION_CONSTANTS.TIMEOUT,
  });
}

/**
 * Prepare page for data extraction (scroll, wait for content)
 * @param {Object} page - Puppeteer page instance
 */
async function preparePageForExtraction(page) {
  // Scroll to bottom to load dynamic content
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise((resolve) => setTimeout(resolve, NAVIGATION_CONSTANTS.SCROLL_WAIT));
}

/**
 * Wait for selector to be available
 * @param {Object} page - Puppeteer page instance
 * @param {string} selector - CSS selector to wait for
 * @param {number} timeout - Optional timeout override
 */
async function waitForJobSelector(page, selector, timeout = NAVIGATION_CONSTANTS.SELECTOR_TIMEOUT) {
  await page.waitForSelector(selector, { timeout });
}

module.exports = {
  navigateToFirstPage,
  navigateToPage,
  preparePageForExtraction,
  waitForJobSelector
};