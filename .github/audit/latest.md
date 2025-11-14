# Discord Bot Execution Audit
**Timestamp:** 2025-11-14T13:23:38.176Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-14T13:23:35.979Z] ========================================
[2025-11-14T13:23:35.980Z] Discord Bot Execution Log
[2025-11-14T13:23:35.981Z] Environment: GitHub Actions
[2025-11-14T13:23:35.981Z] Node Version: v20.19.5
[2025-11-14T13:23:35.981Z] ========================================
[2025-11-14T13:23:35.981Z] Environment Variables Check:
[2025-11-14T13:23:35.981Z] DISCORD_TOKEN: ✅ Set
[2025-11-14T13:23:35.981Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-14T13:23:35.981Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-14T13:23:35.981Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-14T13:23:35.981Z] 
Multi-Channel Configuration:
[2025-11-14T13:23:35.981Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-14T13:23:35.981Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-14T13:23:35.981Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-14T13:23:35.981Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-14T13:23:35.981Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-14T13:23:35.981Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-14T13:23:35.981Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-14T13:23:35.981Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-14T13:23:35.981Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-14T13:23:35.981Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-14T13:23:35.981Z] 
Data Files Check:
[2025-11-14T13:23:35.982Z] .github/data/new_jobs.json: ✅ Exists (2 items, 10179 bytes)
[2025-11-14T13:23:35.982Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 317861 bytes)
[2025-11-14T13:23:35.983Z] 
========================================
[2025-11-14T13:23:35.983Z] Starting Enhanced Discord Bot...
[2025-11-14T13:23:35.983Z] ========================================
[2025-11-14T13:23:36.217Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-14T13:23:36.218Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-14T13:23:37.165Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-14T13:23:37.165Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-14T13:23:37.166Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
ℹ️ No new jobs to post - all jobs have been posted already
[2025-11-14T13:23:37.173Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*