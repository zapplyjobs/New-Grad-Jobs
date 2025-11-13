/**
 * Ashby ATS Description Fetcher
 * Handles fetching job descriptions from Ashby-powered job boards
 */

const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Fetch job description from Ashby
 * @param {string} url - Ashby job URL
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

    // Ashby uses JavaScript rendering, but provides JSON-LD structured data
    // Extract from JSON-LD first (most reliable for Ashby)
    const jsonLdScript = $('script[type="application/ld+json"]').first();

    if (jsonLdScript.length > 0) {
      try {
        const jsonData = JSON.parse(jsonLdScript.html());
        if (jsonData['@type'] === 'JobPosting' && jsonData.description) {
          // Remove HTML tags from description
          description = jsonData.description.replace(/<[^>]*>/g, ' ').trim();
        }
      } catch (e) {
        // JSON parsing failed, continue to HTML fallback
      }
    }

    // Fallback: try HTML selectors (may not work for JS-rendered content)
    if (!description) {
      const descContainer = $('.ashby-job-posting-description') ||
                           $('[class*="description"]').first() ||
                           $('main').first();

      if (descContainer.length > 0) {
        description = descContainer.text().trim();
      }
    }

    // Extract lists for requirements/responsibilities
    $('ul li').each((_, elem) => {
      const text = $(elem).text().trim();
      if (text.length > 10) {
        const lowerText = text.toLowerCase();

        if (lowerText.includes('require') ||
            lowerText.includes('qualifications') ||
            lowerText.includes('experience') ||
            lowerText.includes('degree')) {
          requirements.push(text);
        } else if (lowerText.includes('will') ||
                   lowerText.includes('responsible') ||
                   lowerText.includes('work with')) {
          responsibilities.push(text);
        }
      }
    });

    // Extract metadata
    const metadata = {
      source: 'ashby',
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
    throw new Error(`Ashby fetch failed: ${error.message}`);
  }
}

module.exports = {
  fetch
};
