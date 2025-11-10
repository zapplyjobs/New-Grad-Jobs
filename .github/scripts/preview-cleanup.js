#!/usr/bin/env node

/**
 * Discord Duplicate Post Cleanup - DRY RUN PREVIEW
 * Shows what WOULD be deleted without actually deleting anything
 *
 * Usage: node preview-cleanup.js
 */

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
});

const SIX_HOURS_AGO = Date.now() - (6 * 60 * 60 * 1000);

const CHANNEL_IDS = [
  process.env.DISCORD_TECH_CHANNEL_ID,
  process.env.DISCORD_SALES_CHANNEL_ID,
  process.env.DISCORD_MARKETING_CHANNEL_ID,
  process.env.DISCORD_FINANCE_CHANNEL_ID,
  process.env.DISCORD_HEALTHCARE_CHANNEL_ID,
  process.env.DISCORD_PRODUCT_CHANNEL_ID,
  process.env.DISCORD_SUPPLY_CHANNEL_ID,
  process.env.DISCORD_PM_CHANNEL_ID,
  process.env.DISCORD_HR_CHANNEL_ID,
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
  process.env.DISCORD_CHANNEL_ID
].filter(id => id);

console.log('========================================');
console.log('🔍 DRY RUN - Duplicate Post Preview');
console.log('========================================\n');
console.log('⚠️  THIS WILL NOT DELETE ANYTHING');
console.log('📋 Showing what WOULD be deleted\n');
console.log(`⏰ Looking for bot posts from last 6 hours`);
console.log(`📋 Channels to scan: ${CHANNEL_IDS.length}\n`);

async function previewChannel(channel) {
  console.log(`\n🔍 Scanning channel: #${channel.name} (${channel.id})`);

  let totalFound = 0;
  let hasMore = true;
  let lastMessageId = null;
  const sampleMessages = [];

  try {
    while (hasMore) {
      const options = { limit: 100 };
      if (lastMessageId) {
        options.before = lastMessageId;
      }

      const messages = await channel.messages.fetch(options);

      if (messages.size === 0) {
        hasMore = false;
        break;
      }

      const botMessages = messages.filter(msg => {
        const isBot = msg.author.id === client.user.id;
        const isRecent = msg.createdTimestamp > SIX_HOURS_AGO;
        return isBot && isRecent;
      });

      totalFound += botMessages.size;

      // Collect first 3 messages as samples
      if (sampleMessages.length < 3) {
        botMessages.forEach(msg => {
          if (sampleMessages.length < 3) {
            const timeAgo = Math.round((Date.now() - msg.createdTimestamp) / 60000);
            sampleMessages.push({
              content: msg.content.substring(0, 60),
              timeAgo: `${timeAgo} min ago`,
              timestamp: new Date(msg.createdTimestamp).toISOString()
            });
          }
        });
      }

      const oldestMessage = messages.last();
      if (oldestMessage && oldestMessage.createdTimestamp < SIX_HOURS_AGO) {
        hasMore = false;
      } else {
        lastMessageId = messages.last()?.id;
      }
    }

    if (totalFound > 0) {
      console.log(`   ⚠️  WOULD DELETE: ${totalFound} messages`);
      console.log(`   📝 Sample messages:`);
      sampleMessages.forEach((msg, i) => {
        console.log(`      ${i + 1}. "${msg.content}..." (${msg.timeAgo})`);
      });
    } else {
      console.log(`   ✅ No bot messages found in last 6 hours`);
    }

    return totalFound;

  } catch (error) {
    console.error(`   ❌ Error scanning: ${error.message}`);
    return 0;
  }
}

client.once('ready', async () => {
  console.log(`✅ Bot logged in as ${client.user.tag}\n`);
  console.log('Starting preview scan...\n');

  let totalWouldDelete = 0;
  let channelsWithDuplicates = [];

  for (const channelId of CHANNEL_IDS) {
    try {
      const channel = await client.channels.fetch(channelId);

      if (!channel) {
        console.log(`⚠️ Channel ${channelId} not found, skipping`);
        continue;
      }

      const count = await previewChannel(channel);
      totalWouldDelete += count;

      if (count > 0) {
        channelsWithDuplicates.push({ name: channel.name, count });
      }

    } catch (error) {
      console.error(`❌ Failed to scan channel ${channelId}: ${error.message}`);
    }
  }

  console.log('\n========================================');
  console.log('📊 DRY RUN Summary');
  console.log('========================================');

  if (totalWouldDelete === 0) {
    console.log('✅ No duplicate bot messages found!');
    console.log('   Your channels are clean - no cleanup needed.\n');
  } else {
    console.log(`⚠️  WOULD DELETE: ${totalWouldDelete} total messages\n`);
    console.log('Channels with duplicates:');
    channelsWithDuplicates.forEach(ch => {
      console.log(`   - #${ch.name}: ${ch.count} messages`);
    });
    console.log(`\n💡 To actually delete these messages, run:`);
    console.log(`   node .github/scripts/cleanup-duplicate-posts.js\n`);
  }

  client.destroy();
  process.exit(0);
});

client.on('error', (error) => {
  console.error('Discord client error:', error);
  process.exit(1);
});

client.login(process.env.DISCORD_TOKEN).catch(error => {
  console.error('Failed to login:', error.message);
  process.exit(1);
});
