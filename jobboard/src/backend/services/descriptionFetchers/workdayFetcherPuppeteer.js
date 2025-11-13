/**
 * Workday ATS Description Fetcher (Puppeteer)
 * Handles fetching job descriptions from Workday-powered job boards using headless browser
 */

const puppeteer = require('puppeteer');

/**
 * Fetch job description from Workday using Puppeteer
 * @param {string} url - Workday job URL
 * @param {Object} options - Fetch options
 * @returns {Promise<Object>} Description data
 */
async function fetch(url, options = {}) {
  const { timeout = 30000 } = options;

  let browser;

  try {
    // Launch headless browser
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();

    // Set user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');

    // Navigate to job page
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout
    });

    // Wait for description to load (Workday uses specific data attributes)
    await page.waitForSelector('[data-automation-id="jobPostingDescription"]', {
      timeout: 10000
    }).catch(() => {
      // If specific selector not found, continue anyway
    });

    // Extract description and other data
    const result = await page.evaluate(() => {
      let description = '';
      let requirements = [];
      let responsibilities = [];

      // Try Workday-specific selectors
      const descElement = document.querySelector('[data-automation-id="jobPostingDescription"]');
      if (descElement) {
        description = descElement.textContent.trim();
      }

      // Fallback selectors
      if (!description) {
        const fallback = document.querySelector('.job-description') ||
                        document.querySelector('[class*="description"]') ||
                        document.querySelector('main');
        if (fallback) {
          description = fallback.textContent.trim();
        }
      }

      // Extract lists (requirements/responsibilities)
      const listItems = document.querySelectorAll('ul li');
      listItems.forEach(item => {
        const text = item.textContent.trim();
        if (text.length > 10) {
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

      return {
        description,
        requirements,
        responsibilities
      };
    });

    await browser.close();

    // Clean up description
    const cleanDescription = result.description
      .replace(/\s+/g, ' ')
      .replace(/[\r\n]+/g, ' ')
      .trim();

    if (!cleanDescription || cleanDescription.length < 50) {
      throw new Error('Description too short or not found');
    }

    return {
      description: cleanDescription,
      requirements: result.requirements.length > 0 ? result.requirements : null,
      responsibilities: result.responsibilities.length > 0 ? result.responsibilities : null,
      metadata: {
        source: 'workday-puppeteer',
        url,
        fetchedAt: new Date().toISOString()
      }
    };

  } catch (error) {
    if (browser) {
      await browser.close();
    }
    throw new Error(`Workday Puppeteer fetch failed: ${error.message}`);
  }
}

module.exports = {
  fetch
};
