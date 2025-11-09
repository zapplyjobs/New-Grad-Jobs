const fs = require("fs");
const path = require("path");

// Read selectors.json (keeps structure consistent)
const selectorsPath = path.join(__dirname, "selectors.json");
const selectors = JSON.parse(fs.readFileSync(selectorsPath, "utf8"));

/**
 * Company configuration module
 *
 * NOTE: Individual company API integrations have been removed.
 * All job data is now sourced from a single aggregator endpoint which provides:
 * - 600+ jobs from 277+ companies
 * - Software and AI/ML/Data categories
 * - Already includes major tech companies (FAANG, etc.)
 *
 * This approach:
 * - Reduces API dependencies (12 → 1)
 * - Eliminates redundant data fetching
 * - Simplifies maintenance
 * - Improves reliability (no multiple points of failure)
 *
 * See: apiService.js > fetchExternalJobsData() for data source integration
 */

function getCompanies(searchQuery = "", pageNum = 1) {
  // No individual company configs needed
  // All jobs fetched from central aggregator
  return {};
}

module.exports = {
  getCompanies
};
