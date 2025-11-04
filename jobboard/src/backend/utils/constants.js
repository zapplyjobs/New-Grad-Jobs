/**
 * Navigation-related constants
 */
const NAVIGATION_CONSTANTS = {
  WAIT_UNTIL: 'domcontentloaded',
  TIMEOUT: 60000,
  SELECTOR_TIMEOUT: 30000,
  SCROLL_WAIT: 2000,
};

/**
 * Extraction-related constants
 */
const EXTRACTION_CONSTANTS = {
  APPLIED_MATERIALS_LIMIT: 10,
};

/**
 * Pagination-related constants
 */
const PAGINATION_CONSTANTS = {
  DEFAULT_MAX_PAGES: 4,
  SCROLL_DELAY: 1000,
  CLICK_DELAY: 2000,
};

/**
 * Pagination types
 */
const PAGINATION_TYPES = {
  CHEVRON_CLICK: 'chevron-click',
  URL_PAGE: 'url-page',
  INFINITE_SCROLL: 'infinite-scroll',
  SHOW_MORE_BUTTON: 'show-more-button',
};

/**
 * Company names with special handling requirements
 */
const SPECIAL_COMPANIES = {
  APPLIED_MATERIALS: 'Applied Materials',
  HONEYWELL: 'Honeywell',
  JPMORGAN_CHASE: 'JPMorgan Chase',
  TEXAS_INSTRUMENTS: 'Texas Instruments',
  TEN_X_GENOMICS: '10x Genomics',
};

/**
 * Default job data structure
 */
const JOB_DEFAULTS = {
  POSTED_DATE: '',
  EMPTY_STRING: '',
};

module.exports = {
  NAVIGATION_CONSTANTS,
  EXTRACTION_CONSTANTS,
  PAGINATION_CONSTANTS,
  PAGINATION_TYPES,
  SPECIAL_COMPANIES,
  JOB_DEFAULTS,
};