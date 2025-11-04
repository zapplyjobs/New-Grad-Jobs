/**
 * Create a standardized job object
 * @param {Object} jobData - Raw job data
 * @returns {Object} Standardized job object
 */
function createJobObject(jobData = {}) {
  return {
    company: jobData.company || '',
    title: jobData.title || '',
    applyLink: jobData.applyLink || '',
    location: jobData.location || '',
    posted: jobData.posted || 'Recently',
    reqId: jobData.reqId || '',
    category: jobData.category || '',
    description: jobData.description || '',
    // Add metadata
    scrapedAt: new Date().toISOString(),
    ...jobData // Allow additional fields
  };
}

/**
 * Job data field definitions and validation rules
 */
const JOB_FIELDS = {
  // Required fields
  company: {
    required: true,
    type: 'string',
    description: 'Company name'
  },
  
  // Core fields
  title: {
    required: false,
    type: 'string',
    description: 'Job title'
  },
  applyLink: {
    required: false,
    type: 'string',
    description: 'URL to apply for the job'
  },
  location: {
    required: false,
    type: 'string',
    description: 'Job location'
  },
  posted: {
    required: false,
    type: 'string',
    description: 'When the job was posted',
    default: 'Recently'
  },
  
  // Optional fields
  reqId: {
    required: false,
    type: 'string',
    description: 'Job requisition ID'
  },
  category: {
    required: false,
    type: 'string',
    description: 'Job category or department'
  },
  description: {
    required: false,
    type: 'string',
    description: 'Job description or summary'
  },
  
  // Metadata fields
  scrapedAt: {
    required: false,
    type: 'string',
    description: 'ISO timestamp when job was scraped'
  }
};

/**
 * Get default job object with all fields
 * @returns {Object} Default job object
 */
function getDefaultJobObject() {
  const defaultJob = {};
  
  Object.entries(JOB_FIELDS).forEach(([field, config]) => {
    if (config.default !== undefined) {
      defaultJob[field] = config.default;
    } else {
      defaultJob[field] = config.type === 'string' ? '' : null;
    }
  });
  
  return defaultJob;
}

/**
 * Get required job fields
 * @returns {Array} Array of required field names
 */
function getRequiredJobFields() {
  return Object.entries(JOB_FIELDS)
    .filter(([, config]) => config.required)
    .map(([field]) => field);
}

/**
 * Validate job object against field definitions
 * @param {Object} job - Job object to validate
 * @returns {Object} Validation result with isValid and errors
 */
function validateJobObject(job) {
  const errors = [];
  const requiredFields = getRequiredJobFields();
  
  // Check required fields
  requiredFields.forEach(field => {
    if (!job[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  });
  
  // Check field types
  Object.entries(JOB_FIELDS).forEach(([field, config]) => {
    if (job[field] !== undefined && job[field] !== null) {
      if (config.type === 'string' && typeof job[field] !== 'string') {
        errors.push(`Field ${field} must be a string, got ${typeof job[field]}`);
      }
    }
  });
  
  // Business logic validation
  if (!job.title && !job.applyLink) {
    errors.push('Job must have either a title or apply link');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Sanitize job object by trimming strings and removing empty values
 * @param {Object} job - Job object to sanitize
 * @returns {Object} Sanitized job object
 */
function sanitizeJobObject(job) {
  const sanitized = { ...job };
  
  Object.keys(sanitized).forEach(key => {
    if (typeof sanitized[key] === 'string') {
      sanitized[key] = sanitized[key].trim();
      // Remove empty strings (but keep 'Recently' for posted field)
      if (sanitized[key] === '' && key !== 'posted') {
        delete sanitized[key];
      }
    }
  });
  
  return sanitized;
}

module.exports = {
  createJobObject,
  getDefaultJobObject,
  getRequiredJobFields,
  validateJobObject,
  sanitizeJobObject,
  JOB_FIELDS,
};