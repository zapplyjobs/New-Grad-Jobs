/**
 * Greenhouse ATS Description Fetcher
 * Handles fetching job descriptions from Greenhouse-powered job boards
 */

const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Fetch job description from Greenhouse
 * @param {string} url - Greenhouse job URL
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
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    const $ = cheerio.load(response.data);

    // Greenhouse typically uses these selectors
    let description = '';
    let requirements = [];
    let responsibilities = [];

    // Primary description container (verified selector)
    const descContainer = $('.job__description') || $('.job-post') || $('#content');

    if (descContainer.length > 0) {
      description = descContainer.text().trim();
    }

    // Try alternate selectors
    if (!description) {
      description = $('[class*="description"]').first().text().trim();
    }

    // Extract requirements section
    $('li', 'ul').each((_, elem) => {
      const text = $(elem).text().trim();
      if (text.length > 10) {
        // Filter out short items
        if (text.toLowerCase().includes('year') ||
            text.toLowerCase().includes('experience') ||
            text.toLowerCase().includes('degree') ||
            text.toLowerCase().includes('knowledge')) {
          requirements.push(text);
        }
      }
    });

    // Extract metadata
    const metadata = {
      source: 'greenhouse',
      url,
      fetchedAt: new Date().toISOString()
    };

    // Clean up description (remove excessive whitespace)
    description = description.replace(/\s+/g, ' ').trim();

    if (!description || description.length < 50) {
      throw new Error('Description too short or not found');
    }

    return {
      description,
      requirements: requirements.length > 0 ? requirements : null,
      responsibilities: responsibilities.length > 0 ? responsibilities : null,
      metadata
    };

  } catch (error) {
    throw new Error(`Greenhouse fetch failed: ${error.message}`);
  }
}

module.exports = {
  fetch
};
