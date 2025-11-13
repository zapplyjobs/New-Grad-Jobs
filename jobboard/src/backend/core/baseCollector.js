const puppeteer = require('puppeteer');

// List of multiple user agents to rotate
const userAgents = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1',
];

// Function to get a random user agent
function getRandomUserAgent() {
  return userAgents[Math.floor(Math.random() * userAgents.length)];
}

// Function to initialize browser and page
async function initBrowser() {
  const browser = await puppeteer.launch({
    headless: 'new',
     protocolTimeout: 900000,
    args: [
      
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-first-run',
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-renderer-backgrounding',
      '--disable-web-security',
      '--disable-features=TranslateUI',
      '--disable-ipc-flooding-protection',
      '--disable-blink-features=AutomationControlled',
      '--disable-extensions-except',
      '--disable-plugins-discovery',
      '--no-default-browser-check',
      '--no-first-run',
      '--disable-default-apps',
      '--disable-popup-blocking',
      '--disable-translate',
      '--disable-background-networking',
      '--disable-sync',
      '--metrics-recording-only',
      '--safebrowsing-disable-auto-update',
      '--disable-component-update',
    ],
  });
  const page = await browser.newPage();
  await page.setUserAgent(getRandomUserAgent());
  await page.setDefaultNavigationTimeout(900000);
  // Disable CSS, images, and fonts
  await page.setViewport({ width: 1366, height: 768 });
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const resourceType = req.resourceType();
    if (resourceType === 'stylesheet' || resourceType === 'image' || resourceType === 'font') {
      req.abort();
    } else {
      req.continue();
    }
  });

  return { browser, page };
}

// Function to close browser
async function closeBrowser(browser) {
  if (browser) {
    await browser.close();
  }
}


module.exports = { initBrowser, closeBrowser };