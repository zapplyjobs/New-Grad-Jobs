/**
 * Description Cache
 * Caches fetched job descriptions to avoid redundant API calls
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Cache directory
const CACHE_DIR = path.join(__dirname, '..', '..', '..', '..', '.github', 'data', 'description-cache');

// Cache TTL (time to live) - 7 days in milliseconds
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000;

/**
 * Generate cache key from URL
 * @param {string} url - Job URL
 * @returns {string} Cache key (hash)
 */
function generateCacheKey(url) {
  return crypto.createHash('md5').update(url).digest('hex');
}

/**
 * Ensure cache directory exists
 */
function ensureCacheDir() {
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  }
}

/**
 * Get cached description for URL
 * @param {string} url - Job URL
 * @returns {Object|null} Cached description or null if not found/expired
 */
function get(url) {
  try {
    ensureCacheDir();

    const cacheKey = generateCacheKey(url);
    const cachePath = path.join(CACHE_DIR, `${cacheKey}.json`);

    // Check if cache file exists
    if (!fs.existsSync(cachePath)) {
      return null;
    }

    // Read cache file
    const cacheData = JSON.parse(fs.readFileSync(cachePath, 'utf8'));

    // Check if cache has expired
    const now = Date.now();
    const cacheAge = now - cacheData.cachedAt;

    if (cacheAge > CACHE_TTL) {
      // Cache expired, delete file
      fs.unlinkSync(cachePath);
      return null;
    }

    return cacheData.data;

  } catch (error) {
    // Cache read failed, return null to fetch fresh
    return null;
  }
}

/**
 * Set cached description for URL
 * @param {string} url - Job URL
 * @param {Object} data - Description data to cache
 */
function set(url, data) {
  try {
    ensureCacheDir();

    const cacheKey = generateCacheKey(url);
    const cachePath = path.join(CACHE_DIR, `${cacheKey}.json`);

    const cacheData = {
      url,
      data,
      cachedAt: Date.now()
    };

    fs.writeFileSync(cachePath, JSON.stringify(cacheData, null, 2), 'utf8');

  } catch (error) {
    // Cache write failed, log but don't throw (cache is optional)
    console.warn(`⚠️ Failed to cache description for ${url}: ${error.message}`);
  }
}

/**
 * Clear all cached descriptions
 */
function clear() {
  try {
    ensureCacheDir();

    const files = fs.readdirSync(CACHE_DIR);

    for (const file of files) {
      if (file.endsWith('.json')) {
        fs.unlinkSync(path.join(CACHE_DIR, file));
      }
    }

    console.log(`🗑️ Cleared ${files.length} cached descriptions`);

  } catch (error) {
    console.error(`❌ Failed to clear cache: ${error.message}`);
  }
}

/**
 * Clear expired cache entries
 */
function clearExpired() {
  try {
    ensureCacheDir();

    const files = fs.readdirSync(CACHE_DIR);
    let expiredCount = 0;

    for (const file of files) {
      if (!file.endsWith('.json')) continue;

      const filePath = path.join(CACHE_DIR, file);
      const cacheData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      const now = Date.now();
      const cacheAge = now - cacheData.cachedAt;

      if (cacheAge > CACHE_TTL) {
        fs.unlinkSync(filePath);
        expiredCount++;
      }
    }

    if (expiredCount > 0) {
      console.log(`🗑️ Cleared ${expiredCount} expired cache entries`);
    }

  } catch (error) {
    console.error(`❌ Failed to clear expired cache: ${error.message}`);
  }
}

/**
 * Get cache statistics
 * @returns {Object} Cache stats
 */
function getStats() {
  try {
    ensureCacheDir();

    const files = fs.readdirSync(CACHE_DIR).filter(f => f.endsWith('.json'));
    let totalSize = 0;
    let expiredCount = 0;

    for (const file of files) {
      const filePath = path.join(CACHE_DIR, file);
      const stats = fs.statSync(filePath);
      totalSize += stats.size;

      const cacheData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const now = Date.now();
      const cacheAge = now - cacheData.cachedAt;

      if (cacheAge > CACHE_TTL) {
        expiredCount++;
      }
    }

    return {
      totalEntries: files.length,
      activeEntries: files.length - expiredCount,
      expiredEntries: expiredCount,
      totalSizeMB: (totalSize / (1024 * 1024)).toFixed(2),
      cacheDir: CACHE_DIR
    };

  } catch (error) {
    return {
      totalEntries: 0,
      activeEntries: 0,
      expiredEntries: 0,
      totalSizeMB: 0,
      cacheDir: CACHE_DIR,
      error: error.message
    };
  }
}

module.exports = {
  get,
  set,
  clear,
  clearExpired,
  getStats,
  CACHE_TTL,
  CACHE_DIR
};
