/**
 * Validate company configuration object
 * @param {Object} company - Company configuration
 * @returns {boolean} True if configuration is valid
 */
function validateCompanyConfig(company) {
  if (!company) {
    console.error('Company configuration is null or undefined');
    return false;
  }

  if (!company.name) {
    console.error('Company configuration missing required field: name');
    return false;
  }

  if (!company.url) {
    console.error(`Company ${company.name} configuration missing required field: url`);
    return false;
  }

  if (!company.selector) {
    console.error(`Company ${company.name} configuration missing required field: selector`);
    return false;
  }

  return validateSelectorConfig(company.selector, company.name);
}

/**
 * Validate selector configuration object
 * @param {Object} selector - Selector configuration
 * @param {string} companyName - Company name for error reporting
 * @returns {boolean} True if configuration is valid
 */
function validateSelectorConfig(selector, companyName) {
  if (!selector.jobSelector) {
    console.error(`Selector for ${companyName} missing required field: jobSelector`);
    return false;
  }

  if (!selector.titleSelector) {
    console.error(`Selector for ${companyName} missing required field: titleSelector`);
    return false;
  }

  if (!selector.locationSelector) {
    console.warn(`Selector for ${companyName} missing locationSelector - location data may be incomplete`);
  }

  return true;
}

/**
 * Validate job data object
 * @param {Object} job - Job data object
 * @returns {boolean} True if job data is valid
 */
function validateJobData(job) {
  if (!job) {
    return false;
  }

  // At minimum, we need either a title or apply link
  if (!job.title && !job.applyLink) {
    return false;
  }

  // Validate required fields exist
  const requiredFields = ['company'];
  for (const field of requiredFields) {
    if (!job[field]) {
      console.warn(`Job data missing required field: ${field}`);
      return false;
    }
  }

  return true;
}

/**
 * Validate URL format
 * @param {string} url - URL to validate
 * @returns {boolean} True if URL is valid
 */
function validateUrl(url) {
  if (!url || typeof url !== 'string') {
    return false;
  }

  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate pagination configuration
 * @param {Object} paginationConfig - Pagination configuration
 * @returns {boolean} True if pagination config is valid
 */
function validatePaginationConfig(paginationConfig) {
  if (!paginationConfig) {
    return false;
  }

  if (!paginationConfig.type) {
    console.error('Pagination configuration missing required field: type');
    return false;
  }

  const validTypes = ['chevron-click', 'url-page', 'infinite-scroll', 'show-more-button'];
  if (!validTypes.includes(paginationConfig.type)) {
    console.error(`Invalid pagination type: ${paginationConfig.type}. Valid types: ${validTypes.join(', ')}`);
    return false;
  }

  return true;
}

/**
 * Sanitize and validate search query
 * @param {string} searchQuery - Search query to validate
 * @returns {string} Sanitized search query
 */
function sanitizeSearchQuery(searchQuery) {
  if (!searchQuery || typeof searchQuery !== 'string') {
    return '';
  }

  // Remove potentially dangerous characters
  return searchQuery
    .trim()
    .replace(/[<>'"]/g, '')
    .slice(0, 200); // Limit length
}

/**
 * Validate page number
 * @param {number} pageNum - Page number to validate
 * @returns {boolean} True if page number is valid
 */
function validatePageNumber(pageNum) {
  return typeof pageNum === 'number' && pageNum > 0 && Number.isInteger(pageNum);
}

module.exports = {
  validateCompanyConfig,
  validateSelectorConfig,
  validateJobData,
  validateUrl,
  validatePaginationConfig,
  sanitizeSearchQuery,
  validatePageNumber,
};