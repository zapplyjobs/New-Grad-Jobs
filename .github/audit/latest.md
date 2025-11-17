# Discord Bot Execution Audit
**Timestamp:** 2025-11-17T14:21:23.439Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-17T14:21:21.977Z] ========================================
[2025-11-17T14:21:21.979Z] Discord Bot Execution Log
[2025-11-17T14:21:21.979Z] Environment: GitHub Actions
[2025-11-17T14:21:21.979Z] Node Version: v20.19.5
[2025-11-17T14:21:21.979Z] ========================================
[2025-11-17T14:21:21.979Z] Environment Variables Check:
[2025-11-17T14:21:21.979Z] DISCORD_TOKEN: ✅ Set
[2025-11-17T14:21:21.979Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-17T14:21:21.979Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-17T14:21:21.979Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-17T14:21:21.979Z] 
Multi-Channel Configuration:
[2025-11-17T14:21:21.979Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-17T14:21:21.979Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-17T14:21:21.979Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-17T14:21:21.979Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-17T14:21:21.979Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-17T14:21:21.979Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-17T14:21:21.979Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-17T14:21:21.979Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-17T14:21:21.980Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-17T14:21:21.980Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-17T14:21:21.980Z] 
Data Files Check:
[2025-11-17T14:21:21.980Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-11-17T14:21:21.981Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322385 bytes)
[2025-11-17T14:21:21.981Z] 
========================================
[2025-11-17T14:21:21.981Z] Starting Enhanced Discord Bot...
[2025-11-17T14:21:21.981Z] ========================================
[2025-11-17T14:21:22.259Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-17T14:21:22.260Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-17T14:21:22.847Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-17T14:21:22.847Z] [BOT] ℹ️ No new jobs to post
[2025-11-17T14:21:22.855Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*