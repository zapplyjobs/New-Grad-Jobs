#!/usr/bin/env node

/**
 * Discord Duplicate Post Cleanup Script
 * Removes all bot posts from the last 6 hours across all configured channels
 *
 * Usage: node cleanup-duplicate-posts.js
 *
 * Environment variables required:
 * - DISCORD_TOKEN
 * - All channel IDs (DISCORD_TECH_CHANNEL_ID, etc.)
 */

const { Client, GatewayIntentBits } = require('discord.js');

// Create Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
});

// Time threshold: 6 hours ago
const SIX_HOURS_AGO = Date.now() - (6 * 60 * 60 * 1000);

// Collect all configured channel IDs
const CHANNEL_IDS = [
  // Category channels
  process.env.DISCORD_TECH_CHANNEL_ID,
  process.env.DISCORD_SALES_CHANNEL_ID,
  process.env.DISCORD_MARKETING_CHANNEL_ID,
  process.env.DISCORD_FINANCE_CHANNEL_ID,
  process.env.DISCORD_HEALTHCARE_CHANNEL_ID,
  process.env.DISCORD_PRODUCT_CHANNEL_ID,
  process.env.DISCORD_SUPPLY_CHANNEL_ID,
  process.env.DISCORD_PM_CHANNEL_ID,
  process.env.DISCORD_HR_CHANNEL_ID,

  // Location channels
  process.env.DISCORD_REMOTE_USA_CHANNEL_ID,
  process.env.DISCORD_NY_CHANNEL_ID,
  process.env.DISCORD_AUSTIN_CHANNEL_ID,
  process.env.DISCORD_CHICAGO_CHANNEL_ID,
  process.env.DISCORD_SEATTLE_CHANNEL_ID,
  process.env.DISCORD_REDMOND_CHANNEL_ID,
  process.env.DISCORD_MV_CHANNEL_ID,
  process.env.DISCORD_SF_CHANNEL_ID,
  process.env.DISCORD_SUNNYVALE_CHANNEL_ID,
  process.env.DISCORD_SAN_BRUNO_CHANNEL_ID,

  // Fallback channel
  process.env.DISCORD_CHANNEL_ID
].filter(id => id); // Remove undefined values

console.log('========================================');
console.log('Discord Duplicate Post Cleanup');
console.log('========================================\n');
console.log(`⏰ Removing bot posts from last 6 hours`);
console.log(`📋 Channels to clean: ${CHANNEL_IDS.length}`);
console.log(`🤖 Bot will only delete its own messages\n`);

async function cleanupChannel(channel) {
  console.log(`\n🔍 Cleaning channel: #${channel.name} (${channel.id})`);

  let totalDeleted = 0;
  let hasMore = true;
  let lastMessageId = null;

  try {
    while (hasMore) {
      // Fetch messages (100 at a time, Discord API limit)
      const options = { limit: 100 };
      if (lastMessageId) {
        options.before = lastMessageId;
      }

      const messages = await channel.messages.fetch(options);

      if (messages.size === 0) {
        hasMore = false;
        break;
      }

      // Filter messages to delete:
      // 1. Posted by this bot
      // 2. Posted in last 6 hours
      const messagesToDelete = messages.filter(msg => {
        const isBot = msg.author.id === client.user.id;
        const isRecent = msg.createdTimestamp > SIX_HOURS_AGO;
        return isBot && isRecent;
      });

      console.log(`   Found ${messagesToDelete.size} bot messages in last batch`);

      // Delete messages
      for (const [id, message] of messagesToDelete) {
        try {
          await message.delete();
          totalDeleted++;

          // Rate limiting: 50 deletes per second max
          await new Promise(resolve => setTimeout(resolve, 25));

          if (totalDeleted % 10 === 0) {
            console.log(`   Deleted ${totalDeleted} messages so far...`);
          }
        } catch (error) {
          console.error(`   ❌ Failed to delete message ${id}: ${error.message}`);
        }
      }

      // Check if we've gone past the 6-hour threshold
      const oldestMessage = messages.last();
      if (oldestMessage && oldestMessage.createdTimestamp < SIX_HOURS_AGO) {
        hasMore = false;
      } else {
        lastMessageId = messages.last()?.id;
      }
    }

    console.log(`✅ Cleaned #${channel.name}: Deleted ${totalDeleted} messages`);
    return totalDeleted;

  } catch (error) {
    console.error(`❌ Error cleaning #${channel.name}: ${error.message}`);
    return 0;
  }
}

client.once('ready', async () => {
  console.log(`✅ Bot logged in as ${client.user.tag}\n`);
  console.log('Starting cleanup...\n');

  let totalDeleted = 0;
  let successCount = 0;
  let failCount = 0;

  for (const channelId of CHANNEL_IDS) {
    try {
      const channel = await client.channels.fetch(channelId);

      if (!channel) {
        console.log(`⚠️ Channel ${channelId} not found, skipping`);
        failCount++;
        continue;
      }

      const deleted = await cleanupChannel(channel);
      totalDeleted += deleted;
      successCount++;

    } catch (error) {
      console.error(`❌ Failed to process channel ${channelId}: ${error.message}`);
      failCount++;
    }
  }

  console.log('\n========================================');
  console.log('Cleanup Complete');
  console.log('========================================');
  console.log(`📊 Summary:`);
  console.log(`   - Channels processed: ${successCount}`);
  console.log(`   - Channels failed: ${failCount}`);
  console.log(`   - Total messages deleted: ${totalDeleted}`);
  console.log('\n✅ Duplicate cleanup finished!\n');

  client.destroy();
  process.exit(0);
});

client.on('error', (error) => {
  console.error('Discord client error:', error);
  process.exit(1);
});

// Login
client.login(process.env.DISCORD_TOKEN).catch(error => {
  console.error('Failed to login:', error.message);
  process.exit(1);
});
