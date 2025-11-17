# Discord Bot Execution Audit
**Timestamp:** 2025-11-17T23:32:56.335Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-17T23:32:54.536Z] ========================================
[2025-11-17T23:32:54.537Z] Discord Bot Execution Log
[2025-11-17T23:32:54.537Z] Environment: GitHub Actions
[2025-11-17T23:32:54.537Z] Node Version: v20.19.5
[2025-11-17T23:32:54.537Z] ========================================
[2025-11-17T23:32:54.537Z] Environment Variables Check:
[2025-11-17T23:32:54.538Z] DISCORD_TOKEN: ✅ Set
[2025-11-17T23:32:54.538Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-17T23:32:54.538Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-17T23:32:54.538Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-17T23:32:54.538Z] 
Multi-Channel Configuration:
[2025-11-17T23:32:54.538Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-17T23:32:54.538Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-17T23:32:54.538Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-17T23:32:54.538Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-17T23:32:54.538Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-17T23:32:54.538Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-17T23:32:54.538Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-17T23:32:54.538Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-17T23:32:54.538Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-17T23:32:54.538Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-17T23:32:54.538Z] 
Data Files Check:
[2025-11-17T23:32:54.539Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-11-17T23:32:54.540Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322839 bytes)
[2025-11-17T23:32:54.540Z] 
========================================
[2025-11-17T23:32:54.540Z] Starting Enhanced Discord Bot...
[2025-11-17T23:32:54.540Z] ========================================
[2025-11-17T23:32:54.804Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-17T23:32:54.805Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-17T23:32:55.533Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-17T23:32:55.533Z] [BOT] ℹ️ No new jobs to post
[2025-11-17T23:32:55.541Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*