const {
  handleChevronClickPagination,
  infiniteScroll,
  handleShowMoreButton,
} = require('../utils/pagination.js');
const { getNextPageCompany } = require('./companyService.js');
const { navigateToPage } = require('./navigationService.js');

/**
 * Handle pagination based on company configuration
 * @param {Object} page - Puppeteer page instance
 * @param {Object} selector - Selector configuration
 * @param {Object} company - Company configuration
 * @param {string} searchQuery - Search query
 * @param {number} pageNum - Current page number
 * @param {number} maxPages - Maximum pages to scrape
 * @returns {boolean} Whether pagination can continue
 */
async function handlePagination(page, selector, company, searchQuery, pageNum, maxPages) {
  if (pageNum >= maxPages) {
    return false;
  }

  if (!selector.pagination) {
    console.log(`No pagination defined for ${company.name}, stopping...`);
    return false;
  }

  const paginationType = selector.pagination.type;

  switch (paginationType) {
    case 'chevron-click':
      return await handleChevronClickPagination(page, pageNum, company.name, selector);

    case 'url-page':
      return await handleUrlPagePagination(page, company, searchQuery, pageNum);

    case 'infinite-scroll':
      console.log(`Starting infinite scroll for ${company.name} with ${maxPages} scrolls...`);
      return await infiniteScroll(page, company.name, maxPages);

    default:
      console.log(`Unknown pagination type for ${company.name}: ${paginationType}, stopping...`);
      return false;
  }
}

/**
 * Handle URL-based pagination
 * @param {Object} page - Puppeteer page instance
 * @param {Object} company - Company configuration
 * @param {string} searchQuery - Search query
 * @param {number} pageNum - Current page number
 * @returns {boolean} Whether navigation was successful
 */
async function handleUrlPagePagination(page, company, searchQuery, pageNum) {
  const nextPageCompany = getNextPageCompany(company, searchQuery, pageNum);
  
  if (nextPageCompany) {
    await navigateToPage(page, nextPageCompany.url, nextPageCompany.name, pageNum + 1);
    return true;
  } else {
    console.log(`No next page URL for ${company.name}, stopping...`);
    return false;
  }
}

/**
 * Handle infinite scroll pagination
 * @param {Object} page - Puppeteer page instance
 * @param {string} companyName - Company name
 * @param {number} maxPages - Maximum scroll iterations
 * @returns {boolean} Whether scrolling was successful
 */
async function handleInfiniteScrollPagination(page, companyName, maxPages) {
  console.log(`Starting infinite scroll for ${companyName} with ${maxPages} scrolls...`);
  return await infiniteScroll(page, companyName, maxPages);
}

/**
 * Handle show more button pagination
 * @param {Object} page - Puppeteer page instance
 * @param {string} companyName - Company name
 * @param {number} maxPages - Maximum button clicks
 * @returns {boolean} Whether button clicking was successful
 */
async function handleShowMorePagination(page, companyName, maxPages) {
  return await handleShowMoreButton(page, companyName, maxPages);
}

module.exports = {
  handlePagination,
  handleUrlPagePagination,
  handleInfiniteScrollPagination,
  handleShowMorePagination
};