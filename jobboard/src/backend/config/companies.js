const fs = require("fs");
const path = require("path");

// Read selectors.json (not used for APIs, but keeps structure consistent)
const selectorsPath = path.join(__dirname, "selectors.json");
const selectors = JSON.parse(fs.readFileSync(selectorsPath, "utf8"));

// Helper function to safely convert dates to ISO string
function safeISOString(dateValue) {
  if (!dateValue) return null;
  try {
    const date = new Date(dateValue);
    return isNaN(date.getTime()) ? null : date.toISOString();
  } catch {
    return null;
  }
}

// Helper function to create API-based company configuration
function createGreenhouseCompany(name, boardName) {
  return {
    name: name,
    baseUrl: `https://api.greenhouse.io`,
    url: `https://api.greenhouse.io/v1/boards/${boardName}/jobs`,
    apiMode: true,  // Uses public API endpoint
    parser: (data) => {
      if (!Array.isArray(data.jobs)) return [];
      return data.jobs
        .filter(job => {
          const title = job.title.toLowerCase();
          return title.includes('engineer') ||
                 title.includes('developer') ||
                 title.includes('software') ||
                 title.includes('new grad') ||
                 title.includes('early career');
        })
        .map(job => ({
          job_title: job.title,
          employer_name: name,
          job_city: job.location?.name?.split(', ')?.[0] || '',
          job_state: job.location?.name?.split(', ')?.[1] || '',
          job_description: job.content || `Join ${name}`,
          job_apply_link: job.absolute_url,
          job_posted_at_datetime_utc: safeISOString(job.updated_at),
          job_employment_type: 'FULLTIME'
        }));
    }
  };
}

function getCompanies(searchQuery = "", pageNum = 1) {
  return {
    // === API-based Companies (12 total) ===
    // These use public endpoints - no website navigation required

    "stripe": createGreenhouseCompany("Stripe", "stripe"),
    "coinbase": createGreenhouseCompany("Coinbase", "coinbase"),
    "airbnb": createGreenhouseCompany("Airbnb", "airbnb"),
    "databricks": createGreenhouseCompany("Databricks", "databricks"),
    "figma": createGreenhouseCompany("Figma", "figma"),

    "apple": {
      ...createGreenhouseCompany("Apple", "apple"),
      url: `https://api.greenhouse.io/v1/boards/apple/jobs?content=true`
    },

    "microsoft": createGreenhouseCompany("Microsoft", "microsoft"),
    "netflix": createGreenhouseCompany("Netflix", "netflix"),
    "qualcomm": createGreenhouseCompany("Qualcomm", "qualcomm"),
    "paypal": createGreenhouseCompany("PayPal", "paypal"),
    "discord": createGreenhouseCompany("Discord", "discord"),
    "lyft": createGreenhouseCompany("Lyft", "lyft")

    // NOTE: External aggregator is handled separately
    // See unified-job-fetcher.js for integration details
  };
}

module.exports = {
  getCompanies
};
