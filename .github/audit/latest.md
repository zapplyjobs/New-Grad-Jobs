# Discord Bot Execution Audit
**Timestamp:** 2025-11-14T02:12:45.553Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-14T02:12:34.244Z] ========================================
[2025-11-14T02:12:34.245Z] Discord Bot Execution Log
[2025-11-14T02:12:34.245Z] Environment: GitHub Actions
[2025-11-14T02:12:34.245Z] Node Version: v20.19.5
[2025-11-14T02:12:34.246Z] ========================================
[2025-11-14T02:12:34.246Z] Environment Variables Check:
[2025-11-14T02:12:34.246Z] DISCORD_TOKEN: ✅ Set
[2025-11-14T02:12:34.246Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-14T02:12:34.246Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-14T02:12:34.246Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-14T02:12:34.246Z] 
Multi-Channel Configuration:
[2025-11-14T02:12:34.246Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-14T02:12:34.246Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-14T02:12:34.246Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-14T02:12:34.246Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-14T02:12:34.246Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-14T02:12:34.246Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-14T02:12:34.246Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-14T02:12:34.246Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-14T02:12:34.246Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-14T02:12:34.246Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-14T02:12:34.246Z] 
Data Files Check:
[2025-11-14T02:12:34.247Z] .github/data/new_jobs.json: ✅ Exists (1 items, 517 bytes)
[2025-11-14T02:12:34.248Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 317833 bytes)
[2025-11-14T02:12:34.248Z] 
========================================
[2025-11-14T02:12:34.248Z] Starting Enhanced Discord Bot...
[2025-11-14T02:12:34.248Z] ========================================
[2025-11-14T02:12:34.539Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-14T02:12:34.540Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-14T02:12:35.455Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-14T02:12:35.456Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-14T02:12:35.456Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-14T02:12:35.457Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-14T02:12:35.461Z] [BOT ERROR] (node:2166) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-14T02:12:35.681Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0baaf6f2 Express in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0baaf6f2 Express
[2025-11-14T02:12:37.183Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "Phoenix" | State: "AZ" | Location Channel ID: "1429..."
[2025-11-14T02:12:37.661Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0baaf6f2 Express in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T02:12:39.162Z] [BOT] 📝 Marking as posted: JID_ea089937
[2025-11-14T02:12:39.164Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-14T02:12:42.165Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-14T02:12:44.173Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2166) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*