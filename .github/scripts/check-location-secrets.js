#!/usr/bin/env node
/**
 * Location Channel Secrets Diagnostic
 *
 * Checks if location-based posting secrets are configured correctly.
 * Run this locally to verify secrets are set, or check GitHub Actions logs.
 */

// Location-specific channel configuration (mirrors enhanced-discord-bot.js)
const LOCATION_CHANNEL_CONFIG = {
  'remote-usa': process.env.DISCORD_REMOTE_USA_CHANNEL_ID,
  'new-york': process.env.DISCORD_NY_CHANNEL_ID,
  'austin': process.env.DISCORD_AUSTIN_CHANNEL_ID,
  'chicago': process.env.DISCORD_CHICAGO_CHANNEL_ID,
  'seattle': process.env.DISCORD_SEATTLE_CHANNEL_ID,
  'redmond': process.env.DISCORD_REDMOND_CHANNEL_ID,
  'mountain-view': process.env.DISCORD_MV_CHANNEL_ID,
  'san-francisco': process.env.DISCORD_SF_CHANNEL_ID,
  'sunnyvale': process.env.DISCORD_SUNNYVALE_CHANNEL_ID,
  'san-bruno': process.env.DISCORD_SAN_BRUNO_CHANNEL_ID
};

// Check if multi-channel mode is enabled
const LOCATION_MODE_ENABLED = Object.values(LOCATION_CHANNEL_CONFIG).some(id => id && id.trim() !== '');

console.log('🔍 Location-Based Posting Configuration Check\n');
console.log('='.repeat(70));

console.log('\n📊 LOCATION_MODE_ENABLED:', LOCATION_MODE_ENABLED ? '✅ TRUE' : '❌ FALSE');

if (!LOCATION_MODE_ENABLED) {
  console.log('\n⚠️  WARNING: Location mode is DISABLED!');
  console.log('   Reason: No location channel IDs are set in environment variables.\n');
  console.log('   Jobs will NOT be posted to location-specific channels.');
  console.log('   They will only go to industry channels (tech, sales, etc.).\n');
}

console.log('\n📋 Channel Configuration Status:\n');

let configuredCount = 0;
let missingCount = 0;

Object.entries(LOCATION_CHANNEL_CONFIG).forEach(([channelName, channelId]) => {
  const envVarName = `DISCORD_${channelName.toUpperCase().replace(/-/g, '_')}_CHANNEL_ID`;

  if (channelId && channelId.trim() !== '') {
    console.log(`  ✅ ${channelName.padEnd(20)} - SET (${envVarName})`);
    console.log(`     Value: "${channelId.substring(0, 4)}...${channelId.substring(channelId.length - 4)}"`);
    configuredCount++;
  } else {
    console.log(`  ❌ ${channelName.padEnd(20)} - NOT SET (${envVarName})`);
    missingCount++;
  }
});

console.log('\n' + '='.repeat(70));
console.log(`\n📈 Summary: ${configuredCount}/10 location channels configured`);

if (configuredCount === 0) {
  console.log('\n🚨 CRITICAL: No location channels configured!');
  console.log('\n💡 To enable location-based posting:');
  console.log('   1. Go to: https://github.com/YOUR_REPO/settings/secrets/actions');
  console.log('   2. Add the following secrets (get channel IDs from Discord):');
  console.log('');
  Object.keys(LOCATION_CHANNEL_CONFIG).forEach(channelName => {
    const envVarName = `DISCORD_${channelName.toUpperCase().replace(/-/g, '_')}_CHANNEL_ID`;
    console.log(`      - ${envVarName}`);
  });
  console.log('');
  console.log('   3. Re-run the update-jobs workflow to test');
  console.log('');
} else if (missingCount > 0) {
  console.log(`\n⚠️  ${missingCount} location channel(s) not configured.`);
  console.log('   Jobs matching those locations will NOT be posted to location channels.');
} else {
  console.log('\n✅ All location channels configured correctly!');
}

console.log('\n🔍 How to get Discord channel IDs:');
console.log('   1. Enable Developer Mode in Discord (Settings → Advanced → Developer Mode)');
console.log('   2. Right-click the channel → Copy Channel ID');
console.log('   3. Add to GitHub Secrets with exact name shown above');
console.log('');

// Test location detection with sample jobs
console.log('='.repeat(70));
console.log('\n🧪 Testing Location Detection Logic\n');

const testJobs = [
  { job_city: 'San Francisco', job_state: 'CA', job_title: 'Software Engineer', expected: 'san-francisco' },
  { job_city: '', job_state: '', job_title: 'Remote - USA, CA', job_description: '', expected: 'san-francisco' },
  { job_city: 'New York', job_state: 'NY', job_title: 'Data Analyst', expected: 'new-york' },
  { job_city: '', job_state: '', job_title: 'Remote USA', job_description: '', expected: 'remote-usa' },
  { job_city: 'Seattle', job_state: 'WA', job_title: 'PM', expected: 'seattle' },
  { job_city: 'Redmond', job_state: 'WA', job_title: 'SDE', expected: 'redmond' },
];

// Simplified version of getJobLocationChannel for testing
function testLocationDetection(job) {
  const city = (job.job_city || '').toLowerCase().trim();
  const state = (job.job_state || '').toLowerCase().trim();
  const title = (job.job_title || '').toLowerCase();
  const description = (job.job_description || '').toLowerCase();
  const combined = `${title} ${description} ${city} ${state}`;

  const cityMatches = {
    'san francisco': 'san-francisco',
    'new york': 'new-york',
    'austin': 'austin',
    'chicago': 'chicago',
    'seattle': 'seattle',
    'redmond': 'redmond'
  };

  // Check city field first
  for (const [searchCity, channelKey] of Object.entries(cityMatches)) {
    if (city.includes(searchCity)) {
      return channelKey;
    }
  }

  // Check combined for city names
  for (const [searchCity, channelKey] of Object.entries(cityMatches)) {
    if (combined.includes(searchCity)) {
      return channelKey;
    }
  }

  // State mapping for remote jobs
  if (/\b(remote|work from home|wfh)\b/.test(combined)) {
    if (state === 'ca' || /\bca\b/.test(combined)) return 'san-francisco';
    if (state === 'ny' || /\bny\b/.test(combined)) return 'new-york';
    if (state === 'tx' || /\btx\b/.test(combined)) return 'austin';
    if (state === 'wa' || /\bwa\b/.test(combined)) {
      if (combined.includes('redmond')) return 'redmond';
      return 'seattle';
    }
    if (state === 'il' || /\bil\b/.test(combined)) return 'chicago';
  }

  // Fallback to remote-usa
  if (/\b(remote|work from home|wfh|distributed|anywhere)\b/.test(combined) &&
      /\b(usa|united states|u\.s\.|us only|us-based|us remote)\b/.test(combined)) {
    return 'remote-usa';
  }

  return null;
}

testJobs.forEach(job => {
  const detected = testLocationDetection(job);
  const match = detected === job.expected;
  const icon = match ? '✅' : '❌';

  console.log(`${icon} "${job.job_title}" (${job.job_city || 'No city'}, ${job.job_state || 'No state'})`);
  console.log(`   Expected: ${job.expected} | Detected: ${detected || 'null'}`);

  if (!match) {
    console.log(`   ⚠️  MISMATCH!`);
  }
  console.log('');
});

console.log('='.repeat(70));
console.log('\n✅ Diagnostic complete. Review results above.\n');
