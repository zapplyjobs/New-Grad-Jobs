/**
 * Build full apply link URL from relative path and base URL
 * @param {string} applyLink - Relative or absolute apply link
 * @param {string} baseUrl - Base URL for the company
 * @returns {string} Full apply link URL
 */
function buildApplyLink(applyLink, baseUrl) {
  if (!applyLink || !baseUrl) {
    return applyLink || '';
  }

  // Return as-is if already absolute URL
  if (applyLink.startsWith('http')) {
    return applyLink;
  }

  // Handle root-relative URLs
  if (applyLink.startsWith('/')) {
    return baseUrl + applyLink;
  }

  // Handle relative URLs
  return baseUrl + '/' + applyLink;
}

/**
 * Extract base URL from full URL
 * @param {string} url - Full URL
 * @returns {string} Base URL (protocol + host)
 */
function extractBaseUrl(url) {
  try {
    const urlObj = new URL(url);
    return `${urlObj.protocol}//${urlObj.host}`;
  } catch (error) {
    console.warn(`Failed to extract base URL from: ${url}`);
    return '';
  }
}

/**
 * Build search URL with query parameters
 * @param {string} baseUrl - Base URL
 * @param {Object} params - Query parameters
 * @returns {string} URL with query parameters
 */
function buildSearchUrl(baseUrl, params = {}) {
  if (!baseUrl) {
    return '';
  }

  try {
    const url = new URL(baseUrl);
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        url.searchParams.set(key, value.toString());
      }
    });

    return url.toString();
  } catch (error) {
    console.warn(`Failed to build search URL: ${error.message}`);
    return baseUrl;
  }
}

/**
 * Build pagination URL for page-based pagination
 * @param {string} baseUrl - Base URL
 * @param {number} pageNum - Page number
 * @param {string} pageParam - Page parameter name (default: 'page')
 * @returns {string} Paginated URL
 */
function buildPaginationUrl(baseUrl, pageNum, pageParam = 'page') {
  return buildSearchUrl(baseUrl, { [pageParam]: pageNum });
}

/**
 * Normalize URL by removing trailing slashes and fragments
 * @param {string} url - URL to normalize
 * @returns {string} Normalized URL
 */
function normalizeUrl(url) {
  if (!url) {
    return '';
  }

  try {
    const urlObj = new URL(url);
    // Remove fragment
    urlObj.hash = '';
    // Remove trailing slash from pathname (except root)
    if (urlObj.pathname.length > 1 && urlObj.pathname.endsWith('/')) {
      urlObj.pathname = urlObj.pathname.slice(0, -1);
    }
    return urlObj.toString();
  } catch (error) {
    console.warn(`Failed to normalize URL: ${url}`);
    return url;
  }
}

/**
 * Check if URL is valid
 * @param {string} url - URL to check
 * @returns {boolean} True if URL is valid
 */
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Add this to your urlBuilder.js file
/**
 * Convert an apply link to a job description link based on company-specific rules
 * @param {string} applyLink - The job application link
 * @param {string} companyName - The name of the company
 * @returns {string} The job description link or the original link if no conversion is needed
 */
function convertToDescriptionLink(applyLink, companyName) {
  if (!applyLink) return applyLink;

  // Normalize company name to lowercase for case-insensitive matching
  const normalizedCompany = companyName.toLowerCase();

  // Rule for icims.com-based companies (e.g., AMD, Rivian)
  if (applyLink.includes('icims.com') && applyLink.includes('/jobs/') && applyLink.includes('/login')) {
    const jobIdMatch = applyLink.match(/\/jobs\/(\d+)\/login/);
    if (jobIdMatch) {
      const jobId = jobIdMatch[1];
      if (normalizedCompany.includes('amd')) {
        return `https://careers.amd.com/careers-home/jobs/${jobId}?lang=en-us`;
      }
      if (normalizedCompany.includes('rivian')) {
        return `https://careers.rivian.com/careers-home/jobs/${jobId}?lang=en-us&previousLocale=en-US`;
      }
      // Fallback for other icims.com-based companies
      const domain = applyLink.match(/https:\/\/[^/]+/)[0];
      return `${domain.replace('careers-', 'careers.')}/careers-home/jobs/${jobId}?lang=en-us`;
    }
  }

  // Rule for Synopsys
  if (normalizedCompany.includes('synopsys') && applyLink.includes('careers.synopsys.com') && applyLink.includes('/search-jobs/')) {
    return applyLink.replace('/search-jobs/', '/');
  }

  // Default: Return the original link for companies like ABB, AIJobs, Arm
  return applyLink;
}







module.exports = {
  buildApplyLink,
  extractBaseUrl,
  buildSearchUrl,
  buildPaginationUrl,
  normalizeUrl,
  isValidUrl,
  convertToDescriptionLink
};