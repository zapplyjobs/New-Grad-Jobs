#!/usr/bin/env node

/**
 * Clear All Channel Messages and Threads
 * Handles both text channels (messages) and forum channels (threads)
 *
 * Usage: node clear-all-channels.js
 */

const { Client, GatewayIntentBits, ChannelType } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
});

// Time window: Clear messages between 4-12 hours old
// Keep recent jobs (0-4h) and very old messages (12h+)
const FOUR_HOURS_AGO = Date.now() - (4 * 60 * 60 * 1000);
const TWELVE_HOURS_AGO = Date.now() - (12 * 60 * 60 * 1000);

// Collect all configured channel IDs
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
console.log('Clear All Channels');
console.log('========================================\n');
console.log(`⏰ Removing bot posts between 4-12 hours old`);
console.log(`📋 Channels to clear: ${CHANNEL_IDS.length}`);
console.log(`🤖 Bot will delete its own messages and threads`);
console.log(`✅ Preserving recent jobs (0-4 hours old)\n`);

/**
 * Clear messages from a text channel
 */
async function clearTextChannel(channel) {
  console.log(`\n💬 Clearing text channel: #${channel.name}`);

  let totalDeleted = 0;
  let hasMore = true;
  let lastMessageId = null;

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

      // Filter: posted by bot AND between 4-12 hours old
      const messagesToDelete = messages.filter(msg => {
        const isBot = msg.author.id === client.user.id;
        const olderThan4h = msg.createdTimestamp < FOUR_HOURS_AGO;
        const newerThan12h = msg.createdTimestamp > TWELVE_HOURS_AGO;
        return isBot && olderThan4h && newerThan12h;
      });

      console.log(`   Found ${messagesToDelete.size} bot messages in batch`);

      // Delete messages
      for (const [id, message] of messagesToDelete) {
        try {
          await message.delete();
          totalDeleted++;

          // Rate limiting
          await new Promise(resolve => setTimeout(resolve, 25));

          if (totalDeleted % 10 === 0) {
            console.log(`   Deleted ${totalDeleted} messages...`);
          }
        } catch (error) {
          console.error(`   ❌ Failed to delete message: ${error.message}`);
        }
      }

      const oldestMessage = messages.last();
      if (oldestMessage && oldestMessage.createdTimestamp < TWELVE_HOURS_AGO) {
        hasMore = false;
      } else {
        lastMessageId = messages.last()?.id;
      }
    }

    console.log(`✅ Cleared text channel: ${totalDeleted} messages deleted`);
    return totalDeleted;

  } catch (error) {
    console.error(`❌ Error clearing text channel: ${error.message}`);
    return 0;
  }
}

/**
 * Clear threads from a forum channel
 */
async function clearForumChannel(channel) {
  console.log(`\n📋 Clearing forum channel: #${channel.name}`);

  let totalDeleted = 0;

  try {
    // Fetch all active threads
    const threads = await channel.threads.fetchActive();
    console.log(`   Found ${threads.threads.size} active threads`);

    // Also fetch archived threads (last 6 hours)
    const archivedThreads = await channel.threads.fetchArchived({ limit: 100 });
    console.log(`   Found ${archivedThreads.threads.size} archived threads`);

    // Combine all threads
    const allThreads = new Map([...threads.threads, ...archivedThreads.threads]);

    // Filter: created by bot AND between 4-12 hours old
    const threadsToDelete = Array.from(allThreads.values()).filter(thread => {
      const isBot = thread.ownerId === client.user.id;
      const olderThan4h = thread.createdTimestamp < FOUR_HOURS_AGO;
      const newerThan12h = thread.createdTimestamp > TWELVE_HOURS_AGO;
      return isBot && olderThan4h && newerThan12h;
    });

    console.log(`   ${threadsToDelete.length} bot threads to delete`);

    // Delete threads
    for (const thread of threadsToDelete) {
      try {
        await thread.delete();
        totalDeleted++;
        console.log(`   Deleted thread: "${thread.name.substring(0, 50)}..."`);

        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));

      } catch (error) {
        console.error(`   ❌ Failed to delete thread "${thread.name}": ${error.message}`);
      }
    }

    console.log(`✅ Cleared forum channel: ${totalDeleted} threads deleted`);
    return totalDeleted;

  } catch (error) {
    console.error(`❌ Error clearing forum channel: ${error.message}`);
    return 0;
  }
}

/**
 * Clear a channel (auto-detect type)
 */
async function clearChannel(channel) {
  // Forum channel (has threads/posts)
  if (channel.type === ChannelType.GuildForum) {
    return await clearForumChannel(channel);
  }

  // Text channel (has messages)
  else if (channel.type === ChannelType.GuildText) {
    return await clearTextChannel(channel);
  }

  // Unknown type
  else {
    console.log(`\n⚠️  Skipping #${channel.name}: Unsupported channel type (${channel.type})`);
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

      const deleted = await clearChannel(channel);
      totalDeleted += deleted;
      successCount++;

    } catch (error) {
      console.error(`❌ Failed to process channel ${channelId}: ${error.message}`);
      failCount++;
    }
  }

  console.log('\n========================================');
  console.log('Clear Complete');
  console.log('========================================');
  console.log(`📊 Summary:`);
  console.log(`   - Channels processed: ${successCount}`);
  console.log(`   - Channels failed: ${failCount}`);
  console.log(`   - Total deleted: ${totalDeleted} (messages + threads)`);
  console.log('\n✅ All channels cleared!\n');

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
