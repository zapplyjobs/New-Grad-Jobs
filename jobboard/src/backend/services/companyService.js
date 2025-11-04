const { getCompanies } = require('../config/companies.js');
const { validateCompanyConfig } = require('../utils/validation.js');

/**
 * Get and validate company configuration
 * @param {string} companyKey - Company identifier
 * @param {string} searchQuery - Search query parameter
 * @param {number} pageNum - Page number
 * @returns {Object|null} Company configuration or null if not found
 */
function getCompanyConfig(companyKey, searchQuery, pageNum) {
  const companies = getCompanies(searchQuery, pageNum);
  const company = companies[companyKey];
  
  if (!company) {
    console.error(`Company ${companyKey} not found`);
    return null;
  }

  if (!validateCompanyConfig(company)) {
    console.error(`Invalid configuration for company ${companyKey}`);
    return null;
  }

  return company;
}

/**
 * Get next page company configuration
 * @param {Object} company - Current company configuration
 * @param {string} searchQuery - Search query parameter
 * @param {number} currentPageNum - Current page number
 * @returns {Object|null} Next page company configuration
 */
function getNextPageCompany(company, searchQuery, currentPageNum) {
  const nextPageCompanies = getCompanies(searchQuery, currentPageNum + 1);
  const companyKey = company.key || company.name.toLowerCase().replace(/\s+/g, '');
  
  // For Infineon, use the exact key from companies.js
  if (company.name === 'Infineon Technologies') {
    return nextPageCompanies['infineon'] || null;
  }
  
  return nextPageCompanies[companyKey] || null;
}

/**
 * Check if company supports pagination
 * @param {Object} company - Company configuration
 * @returns {boolean} True if pagination is supported
 */
function supportsPagination(company) {
  return !!(company.selector && company.selector.pagination);
}

/**
 * Get pagination type for company
 * @param {Object} company - Company configuration
 * @returns {string|null} Pagination type or null
 */
function getPaginationType(company) {
  return company.selector?.pagination?.type || null;
}

module.exports = {
  getCompanyConfig,
  getNextPageCompany,
  supportsPagination,
  getPaginationType
};