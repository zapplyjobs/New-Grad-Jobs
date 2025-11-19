# Discord Bot Execution Audit
**Timestamp:** 2025-11-19T23:20:56.588Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-19T23:20:54.992Z] ========================================
[2025-11-19T23:20:54.993Z] Discord Bot Execution Log
[2025-11-19T23:20:54.994Z] Environment: GitHub Actions
[2025-11-19T23:20:54.994Z] Node Version: v20.19.5
[2025-11-19T23:20:54.994Z] ========================================
[2025-11-19T23:20:54.994Z] Environment Variables Check:
[2025-11-19T23:20:54.994Z] DISCORD_TOKEN: ✅ Set
[2025-11-19T23:20:54.994Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-19T23:20:54.994Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-19T23:20:54.994Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-19T23:20:54.994Z] 
Multi-Channel Configuration:
[2025-11-19T23:20:54.994Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-19T23:20:54.994Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-19T23:20:54.994Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-19T23:20:54.994Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-19T23:20:54.994Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-19T23:20:54.994Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-19T23:20:54.994Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-19T23:20:54.994Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-19T23:20:54.994Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-19T23:20:54.994Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-19T23:20:54.994Z] 
Data Files Check:
[2025-11-19T23:20:54.995Z] .github/data/new_jobs.json: ✅ Exists (2 items, 1209 bytes)
[2025-11-19T23:20:54.996Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 324118 bytes)
[2025-11-19T23:20:54.996Z] 
========================================
[2025-11-19T23:20:54.996Z] Starting Enhanced Discord Bot...
[2025-11-19T23:20:54.996Z] ========================================
[2025-11-19T23:20:55.281Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-19T23:20:55.282Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-19T23:20:55.924Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-19T23:20:55.924Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-19T23:20:55.925Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-19T23:20:55.925Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2025-11-19T23:20:55.934Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*