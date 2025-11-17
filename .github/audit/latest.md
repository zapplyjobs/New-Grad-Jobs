# Discord Bot Execution Audit
**Timestamp:** 2025-11-17T08:22:27.853Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-17T08:22:25.578Z] ========================================
[2025-11-17T08:22:25.579Z] Discord Bot Execution Log
[2025-11-17T08:22:25.579Z] Environment: GitHub Actions
[2025-11-17T08:22:25.579Z] Node Version: v20.19.5
[2025-11-17T08:22:25.579Z] ========================================
[2025-11-17T08:22:25.579Z] Environment Variables Check:
[2025-11-17T08:22:25.579Z] DISCORD_TOKEN: ✅ Set
[2025-11-17T08:22:25.580Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-17T08:22:25.580Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-17T08:22:25.580Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-17T08:22:25.580Z] 
Multi-Channel Configuration:
[2025-11-17T08:22:25.580Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-17T08:22:25.580Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-17T08:22:25.580Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-17T08:22:25.580Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-17T08:22:25.580Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-17T08:22:25.580Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-17T08:22:25.580Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-17T08:22:25.580Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-17T08:22:25.580Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-17T08:22:25.580Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-17T08:22:25.580Z] 
Data Files Check:
[2025-11-17T08:22:25.581Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-11-17T08:22:25.582Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322331 bytes)
[2025-11-17T08:22:25.582Z] 
========================================
[2025-11-17T08:22:25.582Z] Starting Enhanced Discord Bot...
[2025-11-17T08:22:25.582Z] ========================================
[2025-11-17T08:22:25.858Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-17T08:22:25.858Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-17T08:22:26.622Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-17T08:22:26.622Z] [BOT] ℹ️ No new jobs to post
[2025-11-17T08:22:26.633Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*