# Discord Bot Execution Audit
**Timestamp:** 2025-11-17T07:21:07.804Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-17T07:21:05.364Z] ========================================
[2025-11-17T07:21:05.365Z] Discord Bot Execution Log
[2025-11-17T07:21:05.365Z] Environment: GitHub Actions
[2025-11-17T07:21:05.365Z] Node Version: v20.19.5
[2025-11-17T07:21:05.365Z] ========================================
[2025-11-17T07:21:05.365Z] Environment Variables Check:
[2025-11-17T07:21:05.365Z] DISCORD_TOKEN: ✅ Set
[2025-11-17T07:21:05.365Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-17T07:21:05.365Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-17T07:21:05.366Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-17T07:21:05.366Z] 
Multi-Channel Configuration:
[2025-11-17T07:21:05.366Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-17T07:21:05.366Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-17T07:21:05.366Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-17T07:21:05.366Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-17T07:21:05.366Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-17T07:21:05.366Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-17T07:21:05.366Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-17T07:21:05.366Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-17T07:21:05.366Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-17T07:21:05.366Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-17T07:21:05.366Z] 
Data Files Check:
[2025-11-17T07:21:05.366Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-11-17T07:21:05.367Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322231 bytes)
[2025-11-17T07:21:05.367Z] 
========================================
[2025-11-17T07:21:05.367Z] Starting Enhanced Discord Bot...
[2025-11-17T07:21:05.368Z] ========================================
[2025-11-17T07:21:05.638Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-17T07:21:05.638Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-17T07:21:06.407Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-17T07:21:06.408Z] [BOT] ℹ️ No new jobs to post
[2025-11-17T07:21:06.416Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*