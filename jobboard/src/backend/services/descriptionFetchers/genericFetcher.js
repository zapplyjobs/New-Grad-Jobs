/**
 * Generic Description Fetcher
 * Fallback fetcher for unknown ATS platforms using meta tags and JSON-LD
 */

const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Extract description from JSON-LD structured data
 * @param {Object} $ - Cheerio instance
 * @returns {string|null} Description if found
 */
function extractFromJsonLd($) {
  try {
    const jsonLdScripts = $('script[type="application/ld+json"]');

    for (let i = 0; i < jsonLdScripts.length; i++) {
      const scriptContent = $(jsonLdScripts[i]).html();
      if (!scriptContent) continue;

      try {
        const data = JSON.parse(scriptContent);

        // JobPosting schema
        if (data['@type'] === 'JobPosting') {
          return data.description || null;
        }

        // Array of structured data
        if (Array.isArray(data)) {
          const jobPosting = data.find(item => item['@type'] === 'JobPosting');
          if (jobPosting && jobPosting.description) {
            return jobPosting.description;
          }
        }
      } catch (e) {
        // Invalid JSON, continue to next script
        continue;
      }
    }
  } catch (error) {
    // JSON-LD extraction failed, return null to try other methods
  }

  return null;
}

/**
 * Extract description from meta tags
 * @param {Object} $ - Cheerio instance
 * @returns {string|null} Description if found
 */
function extractFromMetaTags($) {
  // Try Open Graph description
  const ogDesc = $('meta[property="og:description"]').attr('content');
  if (ogDesc && ogDesc.length > 50) return ogDesc;

  // Try meta description
  const metaDesc = $('meta[name="description"]').attr('content');
  if (metaDesc && metaDesc.length > 50) return metaDesc;

  // Try Twitter description
  const twitterDesc = $('meta[name="twitter:description"]').attr('content');
  if (twitterDesc && twitterDesc.length > 50) return twitterDesc;

  return null;
}

/**
 * Extract description from common HTML selectors
 * @param {Object} $ - Cheerio instance
 * @returns {string|null} Description if found
 */
function extractFromHtml($) {
  // Try common description containers
  const selectors = [
    '.job-description',
    '#job-description',
    '[class*="description"]',
    '.posting-description',
    '.jd-info',
    'main',
    '[role="main"]',
    'article',
    '.content'
  ];

  for (const selector of selectors) {
    const elem = $(selector).first();
    if (elem.length > 0) {
      const text = elem.text().trim();
      if (text.length > 100) {
        return text;
      }
    }
  }

  return null;
}

/**
 * Fetch job description using generic methods
 * @param {string} url - Job URL
 * @param {Object} options - Fetch options
 * @returns {Promise<Object>} Description data
 */
async function fetch(url, options = {}) {
  const { timeout = 10000 } = options;

  try {
    // Fetch the job page
    const response = await axios.get(url, {
      timeout,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    });

    const $ = cheerio.load(response.data);

    let description = '';
    let extractionMethod = '';

    // Try extraction methods in order of reliability
    // 1. JSON-LD (most structured)
    description = extractFromJsonLd($);
    if (description) {
      extractionMethod = 'json-ld';
    }

    // 2. HTML selectors (common patterns)
    if (!description) {
      description = extractFromHtml($);
      if (description) {
        extractionMethod = 'html-selectors';
      }
    }

    // 3. Meta tags (fallback, usually shorter)
    if (!description) {
      description = extractFromMetaTags($);
      if (description) {
        extractionMethod = 'meta-tags';
      }
    }

    // Extract metadata
    const metadata = {
      source: 'generic',
      extractionMethod,
      url,
      fetchedAt: new Date().toISOString()
    };

    // Clean up description
    if (description) {
      description = description
        .replace(/\s+/g, ' ')
        .replace(/[\r\n]+/g, ' ')
        .trim();
    }

    if (!description || description.length < 50) {
      throw new Error('Description too short or not found');
    }

    return {
      description,
      requirements: null, // Generic fetcher doesn't parse requirements
      responsibilities: null, // Generic fetcher doesn't parse responsibilities
      metadata
    };

  } catch (error) {
    throw new Error(`Generic fetch failed: ${error.message}`);
  }
}

module.exports = {
  fetch,
  extractFromJsonLd,
  extractFromMetaTags,
  extractFromHtml
};
