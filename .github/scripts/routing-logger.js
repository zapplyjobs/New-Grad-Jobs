#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { encryptLog } = require('./encryption-utils');

/**
 * Channel Routing Logger
 * Tracks which channel each job is routed to for debugging
 */
class RoutingLogger {
  constructor() {
    this.routingLog = [];
  }

  /**
   * Log a job routing decision
   * @param {Object} job - Job object
   * @param {string} category - Category detected (tech, sales, etc.)
   * @param {string|null} matchedKeyword - Keyword that triggered the match
   * @param {string} channelId - Discord channel ID
   * @param {string} channelName - Discord channel name
   * @param {Object} locationInfo - Optional location channel info
   */
  logRouting(job, category, matchedKeyword, channelId, channelName, locationInfo = null) {
    const entry = {
      timestamp: new Date().toISOString(),
      job_title: job.job_title,
      company: job.employer_name,
      category: category.toUpperCase(),
      matched_keyword: matchedKeyword || 'default',
      channel_id: channelId,
      channel_name: channelName
    };

    // Add location channel info if provided
    if (locationInfo) {
      entry.location_channel_id = locationInfo.channelId;
      entry.location_channel_name = locationInfo.channelName;
      entry.location_city = job.job_city;
      entry.location_state = job.job_state;
    }

    this.routingLog.push(entry);

    // Console output for immediate visibility
    console.log(`📍 [ROUTING] "${job.job_title}" @ ${job.employer_name}`);
    console.log(`   Category: ${category.toUpperCase()} ${matchedKeyword ? `(matched: "${matchedKeyword}")` : '(default)'}`);
    console.log(`   Channel: ${channelName} (${channelId.substring(0, 4)}...${channelId.substring(channelId.length - 4)})`);
    if (locationInfo) {
      console.log(`   Location: ${locationInfo.channelName} (${job.job_city}, ${job.job_state})`);
    }
  }

  /**
   * Save routing log (encrypted) to file
   * @param {string} password - Encryption password
   */
  saveEncrypted(password) {
    if (this.routingLog.length === 0) {
      console.log('ℹ️ No routing entries to save');
      return;
    }

    const auditDir = path.join(process.cwd(), '.github', 'audit');
    fs.mkdirSync(auditDir, { recursive: true });

    const encryptedData = encryptLog(this.routingLog, password);
    const outputPath = path.join(auditDir, 'routing-encrypted.json');

    fs.writeFileSync(outputPath, JSON.stringify(encryptedData, null, 2));
    console.log(`\n🔐 Encrypted routing log saved: ${outputPath}`);
    console.log(`   Total entries: ${this.routingLog.length}`);
    console.log(`   Timestamp: ${encryptedData.timestamp}`);
  }

  /**
   * Save routing log (plaintext) for local debugging
   * Only use in local development, NOT in GitHub Actions
   */
  savePlaintext() {
    if (this.routingLog.length === 0) {
      return;
    }

    const localDir = path.join(process.cwd(), '.local', 'logs');
    fs.mkdirSync(localDir, { recursive: true });

    const outputPath = path.join(localDir, `routing-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(this.routingLog, null, 2));
    console.log(`💾 Plaintext routing log saved (local only): ${outputPath}`);
  }

  /**
   * Get summary statistics
   */
  getSummary() {
    const categoryCount = {};
    this.routingLog.forEach(entry => {
      categoryCount[entry.category] = (categoryCount[entry.category] || 0) + 1;
    });

    return {
      total: this.routingLog.length,
      categories: categoryCount
    };
  }
}

module.exports = RoutingLogger;
