#!/usr/bin/env node

/**
 * Enhanced Channel Router
 * Returns detailed routing information including matched keywords for debugging
 */

/**
 * Get detailed job channel routing information
 * @param {Object} job - Job object
 * @param {Object} CHANNEL_CONFIG - Channel configuration object
 * @returns {Object} { channelId, category, matchedKeyword, matchedPattern }
 */
function getJobChannelDetails(job, CHANNEL_CONFIG) {
  const title = (job.job_title || '').toLowerCase();
  const description = (job.job_description || '').toLowerCase();
  const combined = `${title} ${description}`;

  // Define patterns with category names
  const patterns = [
    {
      category: 'sales',
      channelId: CHANNEL_CONFIG.sales,
      regex: /\b(sales|account executive|account manager|bdr|sdr|business development|customer success|revenue|quota)\b/,
      keywords: ['sales', 'account executive', 'account manager', 'bdr', 'sdr', 'business development', 'customer success', 'revenue', 'quota']
    },
    {
      category: 'marketing',
      channelId: CHANNEL_CONFIG.marketing,
      regex: /\b(marketing|growth|seo|sem|content marketing|brand|campaign|digital marketing|social media|copywriter|creative director)\b/,
      keywords: ['marketing', 'growth', 'seo', 'sem', 'content marketing', 'brand', 'campaign', 'digital marketing', 'social media', 'copywriter', 'creative director']
    },
    {
      category: 'finance',
      channelId: CHANNEL_CONFIG.finance,
      regex: /\b(finance|accounting|financial analyst|controller|treasury|audit|tax|bookkeep|cfo|actuarial|investment|banker)\b/,
      keywords: ['finance', 'accounting', 'financial analyst', 'controller', 'treasury', 'audit', 'tax', 'bookkeep', 'cfo', 'actuarial', 'investment', 'banker']
    },
    {
      category: 'healthcare',
      channelId: CHANNEL_CONFIG.healthcare,
      regex: /\b(healthcare|medical|clinical|health|nurse|doctor|physician|therapist|pharmaceutical|biotech|hospital|patient care)\b/,
      keywords: ['healthcare', 'medical', 'clinical', 'health', 'nurse', 'doctor', 'physician', 'therapist', 'pharmaceutical', 'biotech', 'hospital', 'patient care']
    },
    {
      category: 'product',
      channelId: CHANNEL_CONFIG.product,
      regex: /\b(product manager|product owner|product marketing|(\bpm\b)|product lead|product strategy|product analyst)\b/,
      keywords: ['product manager', 'product owner', 'product marketing', 'pm', 'product lead', 'product strategy', 'product analyst']
    },
    {
      category: 'supply-chain',
      channelId: CHANNEL_CONFIG['supply-chain'],
      regex: /\b(supply chain|logistics|(?<!people )operations manager|procurement|inventory|warehouse|distribution|sourcing|fulfillment|shipping)\b/,
      keywords: ['supply chain', 'logistics', 'operations manager', 'procurement', 'inventory', 'warehouse', 'distribution', 'sourcing', 'fulfillment', 'shipping']
    },
    {
      category: 'project-management',
      channelId: CHANNEL_CONFIG['project-management'],
      regex: /\b(project manager|program manager|scrum master|agile coach|pmo|project coordinator|delivery manager)\b/,
      keywords: ['project manager', 'program manager', 'scrum master', 'agile coach', 'pmo', 'project coordinator', 'delivery manager']
    },
    {
      category: 'hr',
      channelId: CHANNEL_CONFIG.hr,
      regex: /\b(human resources|(\bhr\b)|recruiter|talent acquisition|people operations|compensation|benefits|hiring manager|recruitment|workforce)\b/,
      keywords: ['human resources', 'hr', 'recruiter', 'talent acquisition', 'people operations', 'compensation', 'benefits', 'hiring manager', 'recruitment', 'workforce']
    }
  ];

  // Check each pattern
  for (const pattern of patterns) {
    const match = combined.match(pattern.regex);
    if (match) {
      // Find which specific keyword was matched
      const matchedKeyword = pattern.keywords.find(keyword =>
        combined.includes(keyword.toLowerCase())
      ) || match[1]; // Fallback to first regex capture group

      return {
        channelId: pattern.channelId,
        category: pattern.category,
        matchedKeyword: matchedKeyword,
        matchedPattern: pattern.regex.source
      };
    }
  }

  // Default to tech
  return {
    channelId: CHANNEL_CONFIG.tech,
    category: 'tech',
    matchedKeyword: null,
    matchedPattern: null
  };
}

/**
 * Backwards compatible wrapper (returns only channel ID)
 * @param {Object} job - Job object
 * @param {Object} CHANNEL_CONFIG - Channel configuration object
 * @returns {string} Channel ID
 */
function getJobChannel(job, CHANNEL_CONFIG) {
  return getJobChannelDetails(job, CHANNEL_CONFIG).channelId;
}

module.exports = {
  getJobChannelDetails,
  getJobChannel
};
