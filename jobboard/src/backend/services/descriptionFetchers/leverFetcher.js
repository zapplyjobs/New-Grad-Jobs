/**
 * Lever ATS Description Fetcher
 * Handles fetching job descriptions from Lever-powered job boards
 */

const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Fetch job description from Lever
 * @param {string} url - Lever job URL
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

    let description = '';
    let requirements = [];
    let responsibilities = [];

    // Lever typically uses these selectors
    const descContainer = $('.posting-description') ||
                         $('.content') ||
                         $('[class*="description"]').first();

    if (descContainer.length > 0) {
      description = descContainer.text().trim();
    }

    // Try alternate selectors
    if (!description) {
      description = $('.section-wrapper').text().trim();
    }

    // Extract lists for requirements/responsibilities
    $('.posting-description ul li, .content ul li').each((_, elem) => {
      const text = $(elem).text().trim();
      if (text.length > 10) {
        const lowerText = text.toLowerCase();

        if (lowerText.includes('require') ||
            lowerText.includes('minimum') ||
            lowerText.includes('qualifications') ||
            lowerText.includes('degree') ||
            lowerText.includes('year')) {
          requirements.push(text);
        } else if (lowerText.includes('will') ||
                   lowerText.includes('responsible') ||
                   lowerText.includes('build') ||
                   lowerText.includes('develop')) {
          responsibilities.push(text);
        }
      }
    });

    // Extract metadata
    const metadata = {
      source: 'lever',
      url,
      fetchedAt: new Date().toISOString()
    };

    // Clean up description
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
    throw new Error(`Lever fetch failed: ${error.message}`);
  }
}

module.exports = {
  fetch
};
