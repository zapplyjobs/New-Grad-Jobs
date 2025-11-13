/**
 * Lever ATS Description Fetcher (Puppeteer)
 * Handles fetching job descriptions from Lever-powered job boards using headless browser
 */

const puppeteer = require('puppeteer');

/**
 * Fetch job description from Lever using Puppeteer
 * @param {string} url - Lever job URL
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

    // Wait for description to load (Lever uses specific classes)
    await page.waitForSelector('.posting-description, .content', {
      timeout: 10000
    }).catch(() => {
      // If specific selector not found, continue anyway
    });

    // Extract description and other data
    const result = await page.evaluate(() => {
      let description = '';
      let requirements = [];
      let responsibilities = [];

      // Try Lever-specific selectors
      const descElement = document.querySelector('.posting-description') ||
                         document.querySelector('.content') ||
                         document.querySelector('.section-wrapper');

      if (descElement) {
        description = descElement.textContent.trim();
      }

      // Fallback selectors
      if (!description) {
        const fallback = document.querySelector('[class*="description"]') ||
                        document.querySelector('main');
        if (fallback) {
          description = fallback.textContent.trim();
        }
      }

      // Extract lists (requirements/responsibilities)
      const listItems = document.querySelectorAll('.posting-description ul li, .content ul li');
      listItems.forEach(item => {
        const text = item.textContent.trim();
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
        source: 'lever-puppeteer',
        url,
        fetchedAt: new Date().toISOString()
      }
    };

  } catch (error) {
    if (browser) {
      await browser.close();
    }
    throw new Error(`Lever Puppeteer fetch failed: ${error.message}`);
  }
}

module.exports = {
  fetch
};
