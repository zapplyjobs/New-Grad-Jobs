# Discord Bot Execution Audit
**Timestamp:** 2025-11-21T21:32:29.548Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-21T21:32:27.837Z] ========================================
[2025-11-21T21:32:27.838Z] Discord Bot Execution Log
[2025-11-21T21:32:27.839Z] Environment: GitHub Actions
[2025-11-21T21:32:27.839Z] Node Version: v20.19.5
[2025-11-21T21:32:27.839Z] ========================================
[2025-11-21T21:32:27.839Z] Environment Variables Check:
[2025-11-21T21:32:27.839Z] DISCORD_TOKEN: ✅ Set
[2025-11-21T21:32:27.839Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-21T21:32:27.839Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-21T21:32:27.839Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-21T21:32:27.839Z] 
Multi-Channel Configuration:
[2025-11-21T21:32:27.839Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-21T21:32:27.839Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-21T21:32:27.839Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-21T21:32:27.839Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-21T21:32:27.839Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-21T21:32:27.839Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-21T21:32:27.839Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-21T21:32:27.839Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-21T21:32:27.839Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-21T21:32:27.839Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-21T21:32:27.839Z] 
Data Files Check:
[2025-11-21T21:32:27.840Z] .github/data/new_jobs.json: ✅ Exists (2 items, 6751 bytes)
[2025-11-21T21:32:27.841Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327088 bytes)
[2025-11-21T21:32:27.841Z] 
========================================
[2025-11-21T21:32:27.841Z] Starting Enhanced Discord Bot...
[2025-11-21T21:32:27.842Z] ========================================
[2025-11-21T21:32:28.121Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-21T21:32:28.122Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-21T21:32:28.939Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-21T21:32:28.940Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-21T21:32:28.940Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-21T21:32:28.941Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2025-11-21T21:32:28.949Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*