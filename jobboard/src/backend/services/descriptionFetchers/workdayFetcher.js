/**
 * Workday ATS Description Fetcher
 * Handles fetching job descriptions from Workday-powered job boards
 */

const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Fetch job description from Workday
 * @param {string} url - Workday job URL
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
    let requirements = [];
    let responsibilities = [];

    // Workday typically uses these selectors
    // Primary description container
    const descContainer = $('[data-automation-id="jobPostingDescription"]') ||
                         $('.job-description') ||
                         $('[class*="description"]').first();

    if (descContainer.length > 0) {
      description = descContainer.text().trim();
    }

    // Try alternate selectors if primary didn't work
    if (!description) {
      description = $('div[role="main"]').text().trim();
    }

    // Another common Workday pattern
    if (!description) {
      description = $('.jobdescriptionsection').text().trim();
    }

    // Extract requirements and responsibilities
    $('ul li', descContainer).each((_, elem) => {
      const text = $(elem).text().trim();
      if (text.length > 10) {
        // Categorize based on keywords
        const lowerText = text.toLowerCase();

        if (lowerText.includes('require') ||
            lowerText.includes('qualifications') ||
            lowerText.includes('must have') ||
            lowerText.includes('degree') ||
            lowerText.includes('year')) {
          requirements.push(text);
        } else if (lowerText.includes('responsibilities') ||
                   lowerText.includes('will') ||
                   lowerText.includes('develop') ||
                   lowerText.includes('collaborate')) {
          responsibilities.push(text);
        }
      }
    });

    // Extract metadata
    const metadata = {
      source: 'workday',
      url,
      fetchedAt: new Date().toISOString()
    };

    // Clean up description (remove excessive whitespace and special chars)
    description = description
      .replace(/\s+/g, ' ')
      .replace(/[\r\n]+/g, ' ')
      .trim();

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
    throw new Error(`Workday fetch failed: ${error.message}`);
  }
}

module.exports = {
  fetch
};
