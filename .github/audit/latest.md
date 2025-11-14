# Discord Bot Execution Audit
**Timestamp:** 2025-11-14T01:50:58.922Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-14T01:50:48.807Z] ========================================
[2025-11-14T01:50:48.808Z] Discord Bot Execution Log
[2025-11-14T01:50:48.808Z] Environment: GitHub Actions
[2025-11-14T01:50:48.808Z] Node Version: v20.19.5
[2025-11-14T01:50:48.808Z] ========================================
[2025-11-14T01:50:48.808Z] Environment Variables Check:
[2025-11-14T01:50:48.808Z] DISCORD_TOKEN: ✅ Set
[2025-11-14T01:50:48.808Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-14T01:50:48.808Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-14T01:50:48.809Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-14T01:50:48.809Z] 
Multi-Channel Configuration:
[2025-11-14T01:50:48.809Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-14T01:50:48.809Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-14T01:50:48.809Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-14T01:50:48.809Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-14T01:50:48.809Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-14T01:50:48.809Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-14T01:50:48.809Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-14T01:50:48.809Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-14T01:50:48.809Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-14T01:50:48.809Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-14T01:50:48.809Z] 
Data Files Check:
[2025-11-14T01:50:48.809Z] .github/data/new_jobs.json: ✅ Exists (1 items, 517 bytes)
[2025-11-14T01:50:48.810Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 317833 bytes)
[2025-11-14T01:50:48.811Z] 
========================================
[2025-11-14T01:50:48.811Z] Starting Enhanced Discord Bot...
[2025-11-14T01:50:48.811Z] ========================================
[2025-11-14T01:50:49.082Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-14T01:50:49.082Z] [BOT] 🔍 DEBUG: Location channel configuration:
  - remote-usa: "1429...9802"
  - new-york: "1429...9032"
  - austin: "1429...5915"
  - chicago: "1429...5179"
  - seattle: "1429...6267"
  - redmond: "1429...1724"
  - mountain-view: "1429...8265"
  - san-francisco: "1429...9088"
  - sunnyvale: "1429...4859"
  - san-bruno: "1429...9086"
[2025-11-14T01:50:49.772Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-14T01:50:49.773Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-14T01:50:49.773Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-14T01:50:49.774Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-14T01:50:49.778Z] [BOT ERROR] (node:2173) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-14T01:50:49.974Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0baaf6f2 Express in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0baaf6f2 Express
[2025-11-14T01:50:51.476Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "Phoenix" | State: "AZ" | Location Channel ID: "1429..."
[2025-11-14T01:50:51.700Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0baaf6f2 Express in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T01:50:53.201Z] [BOT] 📝 Marking as posted: JID_ea089937
[2025-11-14T01:50:53.203Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-14T01:50:56.204Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-14T01:50:56.204Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-14T01:50:58.212Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2173) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*