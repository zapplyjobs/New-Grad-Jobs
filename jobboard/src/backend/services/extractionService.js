const { navigateToPage, preparePageForExtraction, waitForJobSelector } = require('./navigationService.js');
const { buildApplyLink, convertToDescriptionLink } = require('../utils/urlBuilder.js');
const { EXTRACTION_CONSTANTS } = require('../utils/constants.js');

/**
 * Extract job data for a single page with integrated description extraction
 * @param {Object} page - Puppeteer page instance
 * @param {Object} selector - Selector configuration
 * @param {Object} company - Company configuration
 * @param {number} pageNum - Current page number
 * @returns {Array} Array of job objects
 */
async function extractJobData(page, selector, company, pageNum) {
  const jobs = [];

  try {
    await waitForJobSelector(page, selector.jobSelector);
    await preparePageForExtraction(page);

    let jobElements = await page.$$(selector.jobSelector);

    if (selector.name === 'Applied Materials') {
      jobElements = jobElements.slice(-EXTRACTION_CONSTANTS.APPLIED_MATERIALS_LIMIT);
    }

    console.log(`Found ${jobElements.length} job elements for ${company.name} on page ${pageNum}`);

    if (jobElements.length === 0) {
      console.log(`No job elements for ${company.name} on page ${pageNum}, stopping...`);
      return jobs;
    }

    // Check description type and extract accordingly
    const descriptionType = selector.descriptionType || 'same-page';
    const currentUrl = page.url();

    if (descriptionType === 'next-page') {
      // Extract basic data first, then navigate to each job page
      for (let i = 0; i < jobElements.length; i++) {
        // Re-fetch job elements to avoid stale references after navigation
        jobElements = await page.$$(selector.jobSelector);
        if (selector.name === 'Applied Materials') {
          jobElements = jobElements.slice(-EXTRACTION_CONSTANTS.APPLIED_MATERIALS_LIMIT);
        }
        
        if (i >= jobElements.length) {
          console.warn(`Job element ${i} no longer exists, skipping...`);
          continue;
        }

        const jobData = await extractSingleJobData(page, jobElements[i], selector, company, i, pageNum);
        
        if (jobData.title || jobData.applyLink) {
          // Extract description by navigating to job page
          if (selector.descriptionSelector && jobData.applyLink) {
            jobData.description = await extractDescriptionNextPage(page, jobData.applyLink, selector, currentUrl, i + 1);
          }
          jobs.push(jobData);
        }
      }
      
    } else {
      // Same-page extraction - FIXED VERSION
      const jobCount = await page.$$eval(selector.jobSelector, els => els.length);
      
      for (let i = 0; i < jobCount; i++) {
        // Re-select job elements fresh each time to avoid detached nodes
        const currentJobElements = await page.$$(selector.jobSelector);
        if (selector.name === 'Applied Materials') {
          currentJobElements = currentJobElements.slice(-EXTRACTION_CONSTANTS.APPLIED_MATERIALS_LIMIT);
        }
        
        if (i >= currentJobElements.length) {
          console.warn(`Job element ${i} no longer exists, skipping...`);
          continue;
        }

        const jobData = await extractSingleJobData(page, currentJobElements[i], selector, company, i, pageNum);
        
        if (jobData.title || jobData.applyLink) {
          // Extract description on same page if selector exists - FIXED TO USE INDEX
          if (selector.descriptionSelector) {
            jobData.description = await extractDescriptionSamePage(page, i, selector, i + 1);
          }
          jobs.push(jobData);
        }
      }
    }

  } catch (error) {
    console.error(`Error scraping ${company.name} page ${pageNum}: ${error.message}`);
  }

  return jobs;
}

/**
 * Extract job data from a single job element
 * @param {Object} page - Puppeteer page instance
 * @param {Object} jobElement - Puppeteer element handle
 * @param {Object} selector - Selector configuration
 * @param {Object} company - Company configuration
 * @param {number} index - Job element index
 * @param {number} pageNum - Current page number
 * @returns {Object} Job data object
 */
async function extractSingleJobData(page, jobElement, selector, company, index, pageNum) {
  const rawJobData = await jobElement.evaluate(
    (el, sel, jobIndex) => {
      // Helper functions
      const getText = (selector) => {
        const elem = selector ? el.querySelector(selector) : null;
        return elem ? elem.textContent.trim() : '';
      };

      const getAttr = (selector, attr) => {
        const elem = selector ? el.querySelector(selector) : null;
        return elem ? elem.getAttribute(attr) : '';
      };

      // Extract title
      let title = '';
      if (sel.titleAttribute) {
        title = getAttr(sel.titleSelector, sel.titleAttribute);
      } else {
        title = getText(sel.titleSelector);
      }

      // Extract raw apply link
      let applyLink = '';
      if (sel.applyLinkSelector) {
        applyLink = getAttr(sel.applyLinkSelector.replace(/\${index}/g, jobIndex), sel.linkAttribute);
      } else if (sel.linkSelector) {
        applyLink = getAttr(sel.linkSelector, sel.linkAttribute);
      } else if (sel.jobLinkSelector && sel.linkAttribute) {
        applyLink = el.getAttribute(sel.linkAttribute) || '';
      }

      // Extract location with special handling
      let location = '';
      if (['Honeywell', 'JPMorgan Chase', 'Texas Instruments'].includes(sel.name)) {
        const locationSpans = el.querySelectorAll('span:not(.job-tile__title)');
        for (const span of locationSpans) {
          const text = span.textContent.trim();
          if (
            text.includes(',') ||
            text.toLowerCase().includes('united states') ||
            text.match(/[A-Z]{2}/) ||
            text.includes('TX') ||
            text.includes('Dallas')
          ) {
            location = text;
            break;
          }
        }
      } else {
        location = getText(sel.locationSelector);
      }

      // Extract posted date - return null if not found
      let posted = null;
      if (sel.postedSelector) {
        const postedText = getText(sel.postedSelector);
        posted = postedText || null;

        // Special handling for 10x Genomics
        if (sel.name === '10x Genomics') {
          const dateElements = el.querySelectorAll(sel.postedSelector);
          posted = null;
          for (const div of dateElements) {
            const text = div.textContent.trim();
            if (
              text.toLowerCase().includes('posted') ||
              text.includes('ago') ||
              text.includes('month') ||
              text.includes('day') ||
              text.includes('week')
            ) {
              posted = text;
              break;
            }
          }
        }
      }

      return { title, applyLink, location, posted };
    },
    selector,
    index
  );

  // Build full apply link
  let finalApplyLink = buildApplyLink(rawJobData.applyLink, company.baseUrl || '');
  if (!finalApplyLink && company.baseUrl) {
    finalApplyLink = company.baseUrl;
  }

  // Build job object
  const job = {
    company: selector.name,
    title: rawJobData.title,
    applyLink: finalApplyLink,
    location: rawJobData.location,
    posted: rawJobData.posted,
  };

  // Add optional fields
  if (selector.reqIdSelector) {
    job.reqId = await jobElement.evaluate((el, sel) => {
      const elem = el.querySelector(sel.reqIdSelector);
      return elem ? elem.textContent.trim() : '';
    }, selector);
  }
  
  if (selector.categorySelector) {
    job.category = await jobElement.evaluate((el, sel) => {
      const elem = el.querySelector(sel.categorySelector);
      return elem ? elem.textContent.trim() : '';
    }, selector);
  }

  return job;
}

/**
 * Extract description on same page by using job index
 * @param {Object} page - Puppeteer page instance
 * @param {number} jobIndex - Job element index (0-based)
 * @param {Object} selector - Selector configuration
 * @param {number} jobNumber - Job number for logging (1-based)
 * @returns {string} Job description
 */
async function extractDescriptionSamePage(page, jobIndex, selector, jobNumber) {
  try {
    console.log(`[${jobNumber}] Same-page description extraction...`);
    
    // Wait for job elements to be stable
    await page.waitForSelector(selector.jobSelector, { timeout: 5000 });
    
    // Use page.evaluate to handle clicking in a more robust way - avoids detached nodes
    const clickResult = await page.evaluate((jobSelector, titleSelector, jobIdx) => {
      const jobElements = document.querySelectorAll(jobSelector);
      
      if (!jobElements[jobIdx]) {
        return { success: false, error: 'Job element not found' };
      }
      
      const titleElement = jobElements[jobIdx].querySelector(titleSelector);
      if (!titleElement) {
        return { success: false, error: 'Title element not found' };
      }
      
      titleElement.click();
      return { success: true };
    }, selector.jobSelector, selector.titleSelector, jobIndex);
    
    if (!clickResult.success) {
      throw new Error(clickResult.error);
    }
    
    // Wait for description to load
    await new Promise(resolve => setTimeout(resolve, 1200));
    await page.waitForSelector(selector.descriptionSelector, { timeout: 6000 });
    
    // Extract description
    const description = await extractAndFormatDescription(page, selector.descriptionSelector);
    
    console.log(`[${jobNumber}] Same-page description extracted (${description.length} chars)`);
    return description;
    
  } catch (error) {
    console.warn(`[${jobNumber}] Same-page extraction failed: ${error.message}`);
    return 'Same-page description extraction failed';
  }
}

/**
 * Extract description by navigating to job details page
 * @param {Object} page - Puppeteer page instance
 * @param {string} applyLink - URL to job details page
 * @param {Object} selector - Selector configuration
 * @param {string} originalUrl - Original listing page URL to return to
 * @param {number} jobNumber - Job number for logging
 * @returns {string} Job description
 */
async function extractDescriptionNextPage(page, applyLink, selector, originalUrl, jobNumber) {
  try {
    console.log(`[${jobNumber}] Next-page extraction...`);
    
    // Convert apply link to description link and navigate
    const descriptionLink = convertToDescriptionLink(applyLink, selector.name);
    console.log(`[${jobNumber}] Converting ${applyLink} to ${descriptionLink}`);
    
    await page.goto(descriptionLink, { 
      waitUntil: 'domcontentloaded', 
      timeout: 20000 
    });
    
    // Extract description
    await page.waitForSelector(selector.descriptionSelector, { timeout: 10000 });
    const description = await extractAndFormatDescription(page, selector.descriptionSelector);
    
    console.log(`[${jobNumber}] Next-page description extracted (${description.length} chars)`);
    
    // Navigate back to the original listing page
    try {
      await page.goto(originalUrl, { 
        waitUntil: 'domcontentloaded', 
        timeout: 115000 
      });
      await waitForJobSelector(page, selector.jobSelector);
      await new Promise(resolve => setTimeout(resolve, 500)); // Brief pause for page stability
      console.log(`[${jobNumber}] Successfully returned to listing page`);
    } catch (backNavError) {
      console.error(`[${jobNumber}] Failed to navigate back to listing: ${backNavError.message}`);
      // Still return the description even if navigation back fails
    }
    
    return description;
    
  } catch (error) {
    console.warn(`[${jobNumber}] Next-page extraction failed: ${error.message}`);
    
    // Try to go back to original URL
    try {
      await page.goto(originalUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await waitForJobSelector(page, selector.jobSelector);
    } catch (finalNavError) {
      console.error(`[${jobNumber}] Failed navigation back to listing: ${finalNavError.message}`);
    }
    
    return 'Next-page description extraction failed';
  }
}

/**
 * Optimized description text extraction and formatting
 * @param {Object} page - Puppeteer page instance
 * @param {string} descriptionSelector - CSS selector for description
 * @returns {string} Formatted job description
 */
async function extractAndFormatDescription(page, descriptionSelector) {
  return await page.evaluate((descSelector) => {
    const descElements = document.querySelectorAll(descSelector);
    
    if (descElements.length === 0) return 'No description found';
    
    // Enhanced keywords for filtering relevant content - prioritizing experience/qualification mentions
    const highPriorityKeywords = [
      // Experience and qualification keywords (highest priority)
      'experience', 'years', 'minimum', 'required', 'require', 'must have', 'need', 
      'prefer', 'qualification', 'background', 'track record', 'proven', 'demonstrated',
      
      // Education keywords
      'degree', 'bachelor', 'master', 'phd', 'doctorate', 'education', 'graduate',
      'university', 'college', 'certification', 'certified',
      
      // Skill and requirement keywords
      'skill', 'ability', 'knowledge', 'expertise', 'proficient', 'familiar',
      'essential', 'should', 'preferred', 'ideal', 'candidate', 'applicant'
    ];
    
    const mediumPriorityKeywords = [
      'responsibilities', 'duties', 'role', 'position', 'job', 'work', 'tasks',
      'opportunity', 'team', 'company', 'department', 'organization'
    ];
    
    // Level indicators that are important for filtering
    const levelKeywords = [
      'junior', 'senior', 'lead', 'principal', 'entry', 'entry-level', 'associate',
      'manager', 'director', 'head', 'chief', 'expert', 'specialist', 'consultant',
      'intern', 'trainee', 'graduate', 'fresh', 'beginner', 'experienced', 'veteran'
    ];
    
    let relevantSections = [];
    let allText = '';
    
    // First pass: collect high-priority content (experience, qualifications, requirements)
    Array.from(descElements).forEach(element => {
      const text = element.textContent.trim().toLowerCase();
      const hasHighPriority = highPriorityKeywords.some(keyword => text.includes(keyword));
      const hasLevelKeyword = levelKeywords.some(keyword => text.includes(keyword));
      
      if ((hasHighPriority || hasLevelKeyword) && text.length > 15) {
        relevantSections.push({
          text: element.textContent.trim(),
          priority: hasHighPriority ? 'high' : 'medium',
          element: element
        });
      }
    });
    
    // If we have high-priority content, prioritize it
    if (relevantSections.length > 0) {
      // Sort by priority (high first), then by text length
      relevantSections.sort((a, b) => {
        if (a.priority !== b.priority) {
          return a.priority === 'high' ? -1 : 1;
        }
        return b.text.length - a.text.length;
      });
      
      allText = relevantSections.slice(0, 10).map(section => section.text).join(' ');
    }
    
    // Fallback: if no high-priority content, look for medium priority
    if (!allText) {
      Array.from(descElements).forEach(element => {
        const text = element.textContent.trim().toLowerCase();
        const hasMediumPriority = mediumPriorityKeywords.some(keyword => text.includes(keyword));
        
        if (hasMediumPriority && text.length > 20) {
          allText += element.textContent.trim() + ' ';
        }
      });
    }
    
    // Final fallback: get all text if nothing else worked
    if (!allText) {
      allText = Array.from(descElements)
        .map(el => el.textContent.trim())
        .filter(text => text.length > 10)
        .join(' ');
    }
    
    if (!allText || allText.trim().length < 20) {
      return 'Description content not available';
    }
    
    // Enhanced text processing for better experience extraction
    function processTextForExperienceExtraction(text) {
      // Split into sentences and filter for experience-related content
      const sentences = text
        .split(/[.!?;]+/)
        .map(s => s.trim())
        .filter(s => s.length > 20); // Longer sentences more likely to contain requirements
      
      // Prioritize sentences with experience keywords
      const experienceKeywords = [
        'year', 'experience', 'minimum', 'require', 'must', 'need', 'prefer',
        'background', 'qualification', 'degree', 'education', 'skill'
      ];
      
      const experienceRelatedSentences = sentences.filter(sentence => 
        experienceKeywords.some(keyword => 
          sentence.toLowerCase().includes(keyword)
        )
      );
      
      const otherSentences = sentences.filter(sentence => 
        !experienceKeywords.some(keyword => 
          sentence.toLowerCase().includes(keyword)
        )
      );
      
      // Combine experience-related sentences first, then others
      const prioritizedSentences = [...experienceRelatedSentences, ...otherSentences];
      
      return prioritizedSentences.slice(0, 8); // Limit to 8 most relevant sentences
    }
    
    const processedSentences = processTextForExperienceExtraction(allText);
    
    if (processedSentences.length === 0) {
      // If no sentences, format the raw text
      let cleanText = allText.trim();
      cleanText = cleanText.charAt(0).toUpperCase() + cleanText.slice(1);
      
      if (!cleanText.endsWith('.') && !cleanText.endsWith('!') && !cleanText.endsWith('?')) {
        cleanText += '.';
      }
      
      return `• ${cleanText}`;
    }
    
    // Format sentences with proper structure
    return processedSentences
      .map(sentence => {
        // Clean up the sentence
        let cleanSentence = sentence.trim();
        
        // Remove redundant spaces and normalize
        cleanSentence = cleanSentence.replace(/\s+/g, ' ');
        
        // Capitalize first letter
        cleanSentence = cleanSentence.charAt(0).toUpperCase() + cleanSentence.slice(1);
        
        // Ensure it ends with proper punctuation
        if (!cleanSentence.endsWith('.') && !cleanSentence.endsWith('!') && !cleanSentence.endsWith('?')) {
          cleanSentence += '.';
        }
        
        // Add bullet point with proper indentation
        return `• ${cleanSentence}`;
      })
      .join('\n');
      
  }, descriptionSelector);
}

// Helper function to validate if extracted description contains experience info
function validateDescriptionForExperience(description) {
  if (!description || description === 'Description content not available' || description === 'No description found') {
    return { hasExperience: false, confidence: 0 };
  }
  
  const experienceIndicators = [
    /\d+\s*\+?\s*years?\s*(?:of\s*)?(?:experience|exp|work)/gi,
    /(?:minimum|require|need|must have)\s*\d+\s*years?/gi,
    /(?:experience|background|qualification).*?\d+\s*years?/gi,
    /\d+\s*years?\s*(?:minimum|required|needed)/gi
  ];
  
  const matches = experienceIndicators.reduce((count, pattern) => {
    const found = (description.match(pattern) || []).length;
    return count + found;
  }, 0);
  
  return {
    hasExperience: matches > 0,
    confidence: Math.min(matches * 0.3, 1), // 0.3 per match, max 1.0
    matchCount: matches
  };
}

/**
 * Extract descriptions in batch for multiple jobs (alternative approach)
 * @param {Object} page - Puppeteer page instance
 * @param {Array} jobs - Array of job objects with apply links
 * @param {Object} selector - Selector configuration
 * @returns {Array} Updated jobs array with descriptions
 */
async function extractDescriptionsInBatch(page, jobs, selector) {
  console.log(`Batch description extraction for ${jobs.length} jobs...`);
  
  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    
    if (!job.applyLink || !selector.descriptionSelector) {
      job.description = 'Description not available';
      continue;
    }

    try {
      console.log(`[${i + 1}/${jobs.length}] Batch extracting: ${job.title.substring(0, 40)}...`);
      
      await page.goto(job.applyLink, { 
        waitUntil: 'domcontentloaded', 
        timeout: 15000 
      });
      
      await page.waitForSelector(selector.descriptionSelector, { timeout: 8000 });
      job.description = await extractAndFormatDescription(page, selector.descriptionSelector);
      
      console.log(`Batch description extracted (${job.description.length} characters)`);
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.error(`Batch extraction failed for "${job.title}": ${error.message}`);
      job.description = 'Batch description extraction failed';
    }
  }
  
  return jobs;
}

module.exports = {
  extractJobData,
  extractSingleJobData,
  extractDescriptionsInBatch
};