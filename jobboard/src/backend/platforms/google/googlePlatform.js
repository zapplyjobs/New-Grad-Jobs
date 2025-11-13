const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const baseUrl = "https://www.google.com/about/careers/applications/jobs/results/?";

const searchConfigs = [
  {
    "category": [
       "DEVELOPER_RELATIONS",
      "INFORMATION_TECHNOLOGY",
      "PRODUCT_MANAGEMENT", "PROGRAM_MANAGEMENT", "SOFTWARE_ENGINEERING",
      "TECHNICAL_WRITING", "USER_EXPERIENCE"
    ],
    // "jex": ["ENTRY_LEVEL","INTERN_AND_APPRENTICE", "EARLY"],
    "target_level": ["MID", "INTERN_AND_APPRENTICE", "EARLY"],
    "employment_type": ["FULL_TIME", "PART_TIME", "TEMPORARY"],
    "degree": ["BACHELORS", "ASSOCIATE", "MASTERS"],
    "location": ["United%20States"],
    "categoryName": "Engineering and Technology"
  },
  {
    "category": [
       "DEVELOPER_RELATIONS",
      "INFORMATION_TECHNOLOGY",
      "PRODUCT_MANAGEMENT", "PROGRAM_MANAGEMENT", "SOFTWARE_ENGINEERING",
      "TECHNICAL_WRITING", "USER_EXPERIENCE"
    ],
    // "jex": ["ENTRY_LEVEL","INTERN_AND_APPRENTICE", "EARLY"],
    "target_level": ["MID", "INTERN_AND_APPRENTICE", "EARLY"],
    "employment_type": ["INTERN", "FULL_TIME", "PART_TIME", "TEMPORARY"],
    "degree": ["BACHELORS", "MASTERS", "ASSOCIATE"],
    "location": ["United%20States"],
    "categoryName": "Engineering and Technology Internship"
  },
  {
    "category": [
      "ADMINISTRATIVE", "BUSINESS_STRATEGY", "FINANCE", "LEGAL", "MARKETING",
      "PARTNERSHIPS", "PEOPLEOPS", "PRODUCT_SUPPORT", "PROGRAM_MANAGEMENT",
      "REAL_ESTATE", "SALES", "SALES_OPERATIONS"
    ],
    // "jex": ["ENTRY_LEVEL","INTERN_AND_APPRENTICE", "EARLY"],
    "target_level": ["EARLY", "MID", "INTERN_AND_APPRENTICE"],
    "employment_type": ["FULL_TIME", "PART_TIME", "TEMPORARY"],
    "degree": ["BACHELORS", "MASTERS", "ASSOCIATE"],
    "location": ["United%20States"],
    "categoryName": "Business"
  },
  {
    "category": [
      "ADMINISTRATIVE", "BUSINESS_STRATEGY", "FINANCE", "LEGAL", "MARKETING",
      "PARTNERSHIPS", "PEOPLEOPS", "PRODUCT_SUPPORT", "PROGRAM_MANAGEMENT",
      "REAL_ESTATE", "SALES", "SALES_OPERATIONS"
    ],
    //  "jex": ["ENTRY_LEVEL","INTERN_AND_APPRENTICE", "EARLY"],
    "target_level": ["INTERN_AND_APPRENTICE", "EARLY", "MID"],
    "employment_type": ["INTERN", "FULL_TIME", "PART_TIME", "TEMPORARY"],
    "degree": ["BACHELORS", "MASTERS", "ASSOCIATE"],
    "location": ["United%20States"],
    "categoryName": "Business Internship"
  }
];

function buildUrl(config, page = 1) {
  const params = new URLSearchParams();
  Object.keys(config).forEach(key => {
    if (key === 'categoryName') return; // Skip categoryName from URL
    if (Array.isArray(config[key])) {
      config[key].forEach(value => {
        params.append(key, decodeURIComponent(value));
      });
    } else {
      params.append(key, decodeURIComponent(config[key]));
    }
  });

  // Add page parameter if it's not the first page
  if (page > 1) {
    params.append('page', page.toString());
  }

  return baseUrl + params.toString();
}

function buildSpecificJobUrl(jobTitle, page = 1) {
  const params = new URLSearchParams();
  
  // Add the specific job title in quotes for exact search
  params.append('q', `"${jobTitle}"`);
  
  // Add location
  params.append('location', 'United States');
  
  // Add target levels (same order as in your URLs)
  const targetLevels = ['INTERN_AND_APPRENTICE', 'EARLY', 'ADVANCED', 'MID'];
  targetLevels.forEach(level => {
    params.append('target_level', level);
  });
  
  // Add degrees (same order as in your URLs)
  const degrees = ['MASTERS', 'ASSOCIATE', 'BACHELORS'];
  degrees.forEach(degree => {
    params.append('degree', degree);
  });
  
  // Add employment types (same order as in your URLs)
  const employmentTypes = ['TEMPORARY', 'INTERN', 'PART_TIME', 'FULL_TIME'];
  employmentTypes.forEach(type => {
    params.append('employment_type', type);
  });
  
  // Add page parameter if it's not the first page
  if (page > 1) {
    params.append('page', page.toString());
  }

  return baseUrl + params.toString();
}

// Helper function to parse location into city and state
function parseLocation(locationString) {
  if (!locationString || locationString === 'N/A') {
    return { city: null, state: null };
  }

  // Handle formats like "Mountain View, CA, USA" or "Mountain View, CA"
  const parts = locationString.split(',').map(part => part.trim());

  if (parts.length >= 2) {
    const city = parts[0];
    const state = parts[1];
    return { city, state };
  }

  // If only one part, assume it's the city
  return { city: parts[0], state: null };
}

// Helper function to clean job title (extract main title only)
function cleanJobTitle(title) {
  if (!title) return title;

  // Split by comma and take the first part (main title)
  const mainTitle = title.split(',')[0].trim();

  return mainTitle;
}

// Helper function to convert scraped data to required format
function transformJobData(scrapedJob) {
  const { city, state } = parseLocation(scrapedJob.location);

  return {
    employer_name: "Google", // Hard-coded since this is Google's scraper
    job_title: cleanJobTitle(scrapedJob.role), // Clean the title to get main part only
    job_city: city,
    job_state: state,
    job_posted_at: scrapedJob.posted, // Use the scraped date as-is
    job_description: `Category: ${scrapedJob.category}. Level: ${scrapedJob.level}. Posted: ${scrapedJob.posted}. Full Title: ${scrapedJob.role}`, // Include full title in description
    job_apply_link: scrapedJob.apply
  };
}

async function scrapePage(page, config, pageNumber, isSpecificJob = false) {
  let url;
  let categoryName;
  
  if (isSpecificJob) {
    url = buildSpecificJobUrl(config.jobTitle, pageNumber);
    categoryName = config.jobTitle;
  } else {
    url = buildUrl(config, pageNumber);
    categoryName = config.categoryName;
  }
  
  console.log(`\n🔗 Scraping ${categoryName} - Page ${pageNumber} - URL: ${url}`);

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
  console.log(`⏳ Waiting for job listings to load on page ${pageNumber}...`);

  await new Promise(resolve => setTimeout(resolve, 5000));

  const jobs = await page.evaluate((categoryName) => {
    const results = [];

    // Look for job containers
    const selectors = [
      'div[jsaction*="JObD"]',
      'div[jscontroller*="sMhJd"]',
      'div[jsaction][jsdata]',
      'div.VfPpkd-LgbsSe',
      'div[jsname]'
    ];

    let jobElements = [];
    for (const selector of selectors) {
      jobElements = document.querySelectorAll(selector);
      if (jobElements.length > 0) break;
    }

    jobElements.forEach((job, index) => {
      try {
        // Extract Role - ONLY from h3.QJPWVe
        const roleElement = job.querySelector('h3.QJPWVe');
        const role = roleElement ? roleElement.innerText.trim() : 'N/A';

        // Extract Location - ONLY from span.r0wTof
        const locationElement = job.querySelector('span.r0wTof');
        const location = locationElement ? locationElement.innerText.trim() : 'N/A';

        // Extract Level - ONLY from span elements (first one found)
        let level = 'N/A';
        const levelElement = job.querySelector('span');
        if (levelElement && levelElement.innerText.trim()) {
          level = levelElement.innerText.trim();
        }

        // Try to extract posted date from various possible elements
        let posted = 'Recently'; // Default value

        // Look for date-related elements (these selectors might need adjustment based on actual HTML)
        const dateSelectors = [
          'span[class*="date"]',
          'div[class*="date"]',
          'span[class*="time"]',
          'div[class*="time"]',
          'span[class*="posted"]',
          'div[class*="posted"]'
        ];

        for (const selector of dateSelectors) {
          const dateElement = job.querySelector(selector);
          if (dateElement && dateElement.innerText.trim() &&
            dateElement.innerText.trim() !== level &&
            dateElement.innerText.trim() !== location &&
            dateElement.innerText.trim() !== role) {
            const dateText = dateElement.innerText.trim();
            // Check if it looks like a date (contains words like "ago", "day", "week", etc.)
            if (dateText.includes('ago') || dateText.includes('day') ||
              dateText.includes('week') || dateText.includes('month') ||
              dateText.match(/\d+[dwm]/)) {
              posted = dateText;
              break;
            }
          }
        }

        // Extract Apply Link - ONLY from a[jsname="hSRGPd"]
        const applyElement = job.querySelector('a[jsname="hSRGPd"]');
        const applyLink = applyElement ? applyElement.href : '';

        if (role !== 'N/A') {
          results.push({
            role,
            location,
            posted, // Keep the original scraped date text
            level,
            category: categoryName,
            apply: applyLink
          });
        }
      } catch (err) {
        console.log(`Error processing job ${index}:`, err.message);
      }
    });

    return results;
  }, categoryName);

  console.log(`✅ Found ${jobs.length} jobs on page ${pageNumber} for ${categoryName}`);
  return jobs;
}

async function scrapeJobs(config, configIndex, isSpecificJob = false) {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    args: ['--start-maximized', '--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    );
    await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US,en;q=0.9' });

    const allJobs = [];
    let currentPage = 1;
    let hasMorePages = true;

    // Continue scraping until we find a page with less than 20 jobs
    while (hasMorePages) {
      const jobs = await scrapePage(page, config, currentPage, isSpecificJob);

      if (jobs.length > 0) {
        allJobs.push(...jobs);

        // Log the posted dates for debugging
        jobs.forEach((job, index) => {
          console.log(`Page ${currentPage} - Job ${index + 1}: ${job.role} - Posted: ${job.posted}`);
        });
      }

      // If we got less than 20 jobs, this is likely the last page
      if (jobs.length < 20) {
        hasMorePages = false;
        console.log(`📄 Page ${currentPage} has ${jobs.length} jobs (less than 20), stopping pagination.`);
      } else {
        console.log(`📄 Page ${currentPage} has ${jobs.length} jobs, checking for next page...`);
        currentPage++;

        // Wait between pages to be respectful
        console.log('⏸ Waiting 3 seconds before next page...');
        await new Promise(resolve => setTimeout(resolve, 3000));
      }

      // Safety check to prevent infinite loops
      if (currentPage > 10) {
        console.log('⚠️ Reached maximum page limit (10), stopping pagination.');
        hasMorePages = false;
      }
    }

    const categoryName = isSpecificJob ? config.jobTitle : config.categoryName;
    console.log(`🎉 Total jobs scraped for ${categoryName}: ${allJobs.length} across ${currentPage} pages`);
    return allJobs;

  } catch (err) {
    const categoryName = isSpecificJob ? config.jobTitle : config.categoryName;
    console.error(`❌ Error scraping ${categoryName}:`, err);
    return [];
  } finally {
    await browser.close();
  }
}

async function googleScraper(specificJobTitle = null) {
  console.log('🚀 Starting Google Jobs Scraper with Pagination...');
  
  if (specificJobTitle) {
    console.log(`🎯 Searching for specific job: "${specificJobTitle}"`);
  }
  
  const allScrapedJobs = [];

  if (specificJobTitle) {
    // Scrape specific job title
    const config = { jobTitle: specificJobTitle };
    const jobs = await scrapeJobs(config, 0, true);
    allScrapedJobs.push(...jobs);
  } else {
    // Scrape each configuration as before
    for (let i = 0; i < searchConfigs.length; i++) {
      const jobs = await scrapeJobs(searchConfigs[i], i, false);
      allScrapedJobs.push(...jobs);

      // Wait between configurations to be respectful
      if (i < searchConfigs.length - 1) {
        console.log('⏸ Waiting 5 seconds before next configuration...');
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
  }

  // Transform scraped data to the format required by generateJobTable
  const transformedJobs = allScrapedJobs.map(transformJobData);

  // // Determine the filename based on whether it's a specific job search
  // let fileName;
  // if (specificJobTitle) {
  //   // Convert job title to a safe filename (replace spaces with underscores, remove special characters)
  //   const safeJobTitle = specificJobTitle.toLowerCase()
  //     .replace(/[^a-z0-9\s]/g, '')
  //     .replace(/\s+/g, '_');
  //   fileName = `${safeJobTitle}_jobs.json`;
  // } else {
  //   fileName = 'googlescrapingdata.json';
  // }

  // Save to the appropriate JSON file in the same directory as the script
  // const filePath = path.join(__dirname, fileName);
  // fs.writeFileSync(filePath, JSON.stringify(transformedJobs, null, 2));
  // console.log(`📝 Saved ${transformedJobs.length} jobs to ${filePath}`);

  // Display results in original format for debugging
  console.log(`\n=== 🧾 Total Jobs Found: ${allScrapedJobs.length} ===`);
  allScrapedJobs.forEach((job, index) => {
    console.log(`\n🔹 Job ${index + 1}:`);
    console.log(`Role:     ${job.role}`);
    console.log(`Location: ${job.location}`);
    console.log(`Posted:   ${job.posted}`);
    console.log(`Level:    ${job.level}`);
    console.log(`Category: ${job.category}`);
    console.log(`Apply:    ${job.apply}`);
  });

  console.log('\n=== 📋 Transformed Jobs Array (Ready for generateJobTable) ===');
  console.log(JSON.stringify(transformedJobs, null, 2));

  console.log('\n✅ Scraping completed!');

  // Return the transformed jobs array
  return transformedJobs;
}

// Export the function for use in other modules
module.exports = googleScraper;

// // Execute the script if run directly
// if (require.main === module) {
//   // Check if a specific job title was provided as a command line argument
//   const args = process.argv.slice(2);
//   // Join all arguments with spaces to handle multi-word job titles
//   const specificJobTitle = args.length > 0 ? args.join(' ') : null;
  
//   if (specificJobTitle) {
//     console.log(`🎯 Job title argument received: "${specificJobTitle}"`);
//   }
  
//   googleScraper(specificJobTitle).catch(console.error);
// }