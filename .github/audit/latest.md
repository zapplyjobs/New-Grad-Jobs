# Discord Bot Execution Audit
**Timestamp:** 2025-11-18T07:21:12.903Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-18T07:21:10.765Z] ========================================
[2025-11-18T07:21:10.766Z] Discord Bot Execution Log
[2025-11-18T07:21:10.766Z] Environment: GitHub Actions
[2025-11-18T07:21:10.766Z] Node Version: v20.19.5
[2025-11-18T07:21:10.766Z] ========================================
[2025-11-18T07:21:10.767Z] Environment Variables Check:
[2025-11-18T07:21:10.767Z] DISCORD_TOKEN: ✅ Set
[2025-11-18T07:21:10.767Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-18T07:21:10.767Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-18T07:21:10.767Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-18T07:21:10.767Z] 
Multi-Channel Configuration:
[2025-11-18T07:21:10.767Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-18T07:21:10.767Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-18T07:21:10.767Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-18T07:21:10.767Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-18T07:21:10.767Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-18T07:21:10.767Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-18T07:21:10.767Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-18T07:21:10.767Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-18T07:21:10.767Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-18T07:21:10.767Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-18T07:21:10.767Z] 
Data Files Check:
[2025-11-18T07:21:10.768Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6206 bytes)
[2025-11-18T07:21:10.769Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323598 bytes)
[2025-11-18T07:21:10.769Z] 
========================================
[2025-11-18T07:21:10.769Z] Starting Enhanced Discord Bot...
[2025-11-18T07:21:10.769Z] ========================================
[2025-11-18T07:21:11.064Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-18T07:21:11.065Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-18T07:21:11.865Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-18T07:21:11.866Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-18T07:21:11.866Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2025-11-18T07:21:11.874Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*