#!/usr/bin/env node

/**
 * Enhanced Channel Router v2
 *
 * HIERARCHICAL ROUTING SYSTEM (Title-First Approach)
 *
 * Priority 1 (HIGHEST): Explicit Tech Title Detection
 *   - Checks job title for tech keywords
 *   - Prevents industry keywords in description from overriding tech roles
 *   - Covers: software, data, ML/AI, engineering, analytics, etc.
 *
 * Priority 2 (HIGH): Explicit Non-Tech Title Detection
 *   - Checks job title for specific role keywords
 *   - Only for unambiguous roles (Sales Manager, Marketing Director, etc.)
 *
 * Priority 3 (MEDIUM): Description Keyword Matching
 *   - Falls back to existing pattern matching
 *   - Only reached if title is ambiguous (Coordinator, Associate, etc.)
 *
 * Priority 4 (LOWEST): Default Fallback
 *   - Defaults to TECH (largest category, 76% of jobs)
 *
 * Created: 2025-11-17
 * Based on analysis of 539 real job titles showing 76% are tech roles
 */

/**
 * Check if job title indicates a tech role
 * @param {string} title - Job title (lowercase)
 * @returns {Object|null} Match details or null
 */
function isTechRole(title) {
  // Comprehensive tech keyword detection
  const techPatterns = [
    // Software engineering
    { regex: /\b(software|developer|programmer|coder|coding)\b/, keyword: 'software' },

    // Data & Analytics (CRITICAL - was causing misrouting to sales/supply-chain)
    { regex: /\b(data|database|sql|nosql)\b/, keyword: 'data' },
    { regex: /\b(data scien(ce|tist)|data engineer|data analyst)\b/, keyword: 'data science' },
    // Analytics/Analyst - BUT exclude Financial Analyst, Business Analyst (those are ambiguous)
    { regex: /\b(analytics|web analyst|marketing analyst|product analyst|business intelligence|bi)\b/, keyword: 'analytics' },

    // Machine Learning & AI (CRITICAL - was routing to supply-chain)
    { regex: /\b(machine learning|ml|artificial intelligence|ai|deep learning)\b/, keyword: 'machine learning' },
    { regex: /\b(computer vision|nlp|natural language)\b/, keyword: 'AI/ML' },

    // Specific engineer types (tech-specific only)
    { regex: /\b(backend|frontend|full[- ]?stack) engineer\b/, keyword: 'web engineer' },
    { regex: /\b(devops|sre|site reliability|cloud) engineer\b/, keyword: 'DevOps/SRE' },
    { regex: /\b(qa|quality assurance|test|testing) engineer\b/, keyword: 'QA engineer' },
    { regex: /\b(ml|machine learning|ai) engineer\b/, keyword: 'ML engineer' },
    { regex: /\b(data|database|platform) engineer\b/, keyword: 'data engineer' },

    // Generic "engineer" ONLY if NOT preceded by non-tech context
    // Excludes: Sales Engineer, Manufacturing Engineer, Biomedical Engineer, etc.
    // Uses negative lookbehind to check what comes BEFORE "engineer"
    { regex: /\bengineer\b(?!\s)/i, keyword: 'engineer',
      validate: (title) => !/(sales|manufacturing|biomedical|industrial|mechanical|civil|chemical|process)\s+engineer/i.test(title) },

    // Tech specializations
    { regex: /\b(web|mobile|ios|android|react|angular|vue)\b/, keyword: 'web/mobile dev' },
    { regex: /\b(cloud|aws|azure|gcp|kubernetes|docker)\b/, keyword: 'cloud' },
    { regex: /\b(security|cybersecurity|infosec|appsec)\b/, keyword: 'security' },

    // Programming languages (strong tech indicator)
    { regex: /\b(python|java|javascript|typescript|c\+\+|golang|rust|ruby)\b/, keyword: 'programming' }
  ];

  for (const pattern of techPatterns) {
    const match = title.match(pattern.regex);
    if (match) {
      // If pattern has a validate function, use it for additional checking
      if (pattern.validate && !pattern.validate(title)) {
        continue; // Skip this pattern, validation failed
      }

      return {
        matched: true,
        keyword: pattern.keyword,
        matchedText: match[0]
      };
    }
  }

  return null;
}

/**
 * Check if job title indicates a non-tech role
 * Only checks for EXPLICIT, UNAMBIGUOUS role titles
 * @param {string} title - Job title (lowercase)
 * @returns {Object|null} { category, keyword, matchedText } or null
 */
function isNonTechRole(title) {
  const nonTechPatterns = [
    // Sales (explicit titles only)
    {
      category: 'sales',
      regex: /\b(sales (manager|director|executive|representative|rep)|account executive|account manager|bdr|sdr|business development (manager|rep))\b/,
      keyword: 'sales'
    },

    // Marketing (explicit titles only)
    {
      category: 'marketing',
      regex: /\b(marketing (manager|director|coordinator)|seo (specialist|manager)|content (strategist|manager)|brand manager|campaign manager)\b/,
      keyword: 'marketing'
    },

    // Finance (explicit titles only)
    {
      category: 'finance',
      regex: /\b(financial analyst|accountant|controller|treasury|audit|tax (analyst|specialist)|investment (analyst|banker))\b/,
      keyword: 'finance'
    },

    // Healthcare (explicit titles only)
    {
      category: 'healthcare',
      regex: /\b(nurse|doctor|physician|therapist|clinical|pharmacist|medical (assistant|technician))\b/,
      keyword: 'healthcare'
    },

    // Product Management
    {
      category: 'product',
      regex: /\b(product manager|product owner|product lead)\b/,
      keyword: 'product'
    },

    // Supply Chain (explicit titles only)
    {
      category: 'supply-chain',
      regex: /\b(supply chain (manager|analyst)|logistics (manager|coordinator)|procurement (specialist|manager)|warehouse (manager|supervisor))\b/,
      keyword: 'supply-chain'
    },

    // Project Management
    {
      category: 'project-management',
      regex: /\b(project manager|program manager|scrum master|agile coach)\b/,
      keyword: 'project-management'
    },

    // HR (explicit titles only)
    {
      category: 'hr',
      regex: /\b(hr (manager|specialist|coordinator)|recruiter|talent acquisition|people operations)\b/,
      keyword: 'hr'
    }
  ];

  for (const pattern of nonTechPatterns) {
    const match = title.match(pattern.regex);
    if (match) {
      return {
        category: pattern.category,
        keyword: pattern.keyword,
        matchedText: match[0]
      };
    }
  }

  return null;
}

/**
 * Get detailed job channel routing information (v2 - Hierarchical)
 * @param {Object} job - Job object
 * @param {Object} CHANNEL_CONFIG - Channel configuration object
 * @returns {Object} { channelId, category, matchedKeyword, matchType, priority }
 */
function getJobChannelDetails(job, CHANNEL_CONFIG) {
  const title = (job.job_title || '').toLowerCase();
  const description = (job.job_description || '').toLowerCase();

  // ============================================================================
  // PRIORITY 1 (HIGHEST): Tech Title Detection
  // ============================================================================
  const techMatch = isTechRole(title);
  if (techMatch) {
    return {
      channelId: CHANNEL_CONFIG.tech,
      category: 'tech',
      matchedKeyword: techMatch.keyword,
      matchType: 'title-tech-explicit',
      priority: 'HIGHEST',
      matchedText: techMatch.matchedText,
      source: 'title'
    };
  }

  // ============================================================================
  // PRIORITY 2 (HIGH): Non-Tech Explicit Title Detection
  // ============================================================================
  const nonTechMatch = isNonTechRole(title);
  if (nonTechMatch) {
    return {
      channelId: CHANNEL_CONFIG[nonTechMatch.category],
      category: nonTechMatch.category,
      matchedKeyword: nonTechMatch.keyword,
      matchType: 'title-explicit',
      priority: 'HIGH',
      matchedText: nonTechMatch.matchedText,
      source: 'title'
    };
  }

  // ============================================================================
  // PRIORITY 3 (MEDIUM): Description Keyword Matching
  // (Only reached if title is ambiguous: Coordinator, Associate, Intern, etc.)
  // ============================================================================
  const combined = `${title} ${description}`;

  const descriptionPatterns = [
    {
      category: 'sales',
      channelId: CHANNEL_CONFIG.sales,
      regex: /\b(sales|account executive|account manager|bdr|sdr|business development|customer success|revenue|quota|donor)\b/,
      keywords: ['sales', 'account executive', 'account manager', 'bdr', 'sdr', 'business development', 'customer success', 'revenue', 'quota', 'donor']
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

  // Check description patterns
  for (const pattern of descriptionPatterns) {
    const match = combined.match(pattern.regex);
    if (match) {
      // Find which specific keyword was matched
      const matchedKeyword = pattern.keywords.find(keyword =>
        combined.includes(keyword.toLowerCase())
      ) || match[1];

      // Determine if match was in title or description
      const inTitle = title.match(pattern.regex);
      const source = inTitle ? 'title' : 'description';

      return {
        channelId: pattern.channelId,
        category: pattern.category,
        matchedKeyword: matchedKeyword,
        matchType: 'description-keyword',
        priority: 'MEDIUM',
        matchedPattern: pattern.regex.source,
        source: source
      };
    }
  }

  // ============================================================================
  // PRIORITY 4 (LOWEST): Default Fallback to TECH
  // (76% of jobs are tech, safest default)
  // ============================================================================
  return {
    channelId: CHANNEL_CONFIG.tech,
    category: 'tech',
    matchedKeyword: null,
    matchType: 'default-fallback',
    priority: 'LOWEST',
    source: 'default'
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
  getJobChannel,
  // Export helper functions for testing
  isTechRole,
  isNonTechRole
};
