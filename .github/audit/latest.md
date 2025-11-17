# Discord Bot Execution Audit
**Timestamp:** 2025-11-17T16:51:27.306Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-17T16:51:25.122Z] ========================================
[2025-11-17T16:51:25.123Z] Discord Bot Execution Log
[2025-11-17T16:51:25.123Z] Environment: GitHub Actions
[2025-11-17T16:51:25.123Z] Node Version: v20.19.5
[2025-11-17T16:51:25.123Z] ========================================
[2025-11-17T16:51:25.123Z] Environment Variables Check:
[2025-11-17T16:51:25.124Z] DISCORD_TOKEN: ✅ Set
[2025-11-17T16:51:25.124Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-17T16:51:25.124Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-17T16:51:25.124Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-17T16:51:25.124Z] 
Multi-Channel Configuration:
[2025-11-17T16:51:25.124Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-17T16:51:25.124Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-17T16:51:25.124Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-17T16:51:25.124Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-17T16:51:25.124Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-17T16:51:25.124Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-17T16:51:25.124Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-17T16:51:25.124Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-17T16:51:25.124Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-17T16:51:25.124Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-17T16:51:25.124Z] 
Data Files Check:
[2025-11-17T16:51:25.125Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-11-17T16:51:25.126Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322456 bytes)
[2025-11-17T16:51:25.126Z] 
========================================
[2025-11-17T16:51:25.126Z] Starting Enhanced Discord Bot...
[2025-11-17T16:51:25.126Z] ========================================
[2025-11-17T16:51:25.409Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-17T16:51:25.410Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-17T16:51:26.192Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-17T16:51:26.192Z] [BOT] ℹ️ No new jobs to post
[2025-11-17T16:51:26.201Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*