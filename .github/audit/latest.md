# Discord Bot Execution Audit
**Timestamp:** 2025-11-22T06:01:26.065Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-22T06:01:24.514Z] ========================================
[2025-11-22T06:01:24.515Z] Discord Bot Execution Log
[2025-11-22T06:01:24.515Z] Environment: GitHub Actions
[2025-11-22T06:01:24.515Z] Node Version: v20.19.5
[2025-11-22T06:01:24.515Z] ========================================
[2025-11-22T06:01:24.515Z] Environment Variables Check:
[2025-11-22T06:01:24.515Z] DISCORD_TOKEN: ✅ Set
[2025-11-22T06:01:24.516Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-22T06:01:24.516Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-22T06:01:24.516Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-22T06:01:24.516Z] 
Multi-Channel Configuration:
[2025-11-22T06:01:24.516Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-22T06:01:24.516Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-22T06:01:24.516Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-22T06:01:24.516Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-22T06:01:24.516Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-22T06:01:24.516Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-22T06:01:24.516Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-22T06:01:24.516Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-22T06:01:24.516Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-22T06:01:24.516Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-22T06:01:24.516Z] 
Data Files Check:
[2025-11-22T06:01:24.517Z] .github/data/new_jobs.json: ✅ Exists (3 items, 12667 bytes)
[2025-11-22T06:01:24.518Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327572 bytes)
[2025-11-22T06:01:24.519Z] 
========================================
[2025-11-22T06:01:24.519Z] Starting Enhanced Discord Bot...
[2025-11-22T06:01:24.519Z] ========================================
[2025-11-22T06:01:24.786Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-22T06:01:24.787Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-22T06:01:25.503Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-22T06:01:25.503Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6389278a at Amentum
[2025-11-22T06:01:25.504Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6389278a at Amentum
[2025-11-22T06:01:25.504Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
ℹ️ No new jobs to post - all jobs have been posted already
[2025-11-22T06:01:25.512Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*