# Discord Bot Execution Audit
**Timestamp:** 2025-11-15T10:01:39.664Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-15T10:01:37.307Z] ========================================
[2025-11-15T10:01:37.308Z] Discord Bot Execution Log
[2025-11-15T10:01:37.308Z] Environment: GitHub Actions
[2025-11-15T10:01:37.308Z] Node Version: v20.19.5
[2025-11-15T10:01:37.309Z] ========================================
[2025-11-15T10:01:37.309Z] Environment Variables Check:
[2025-11-15T10:01:37.309Z] DISCORD_TOKEN: ✅ Set
[2025-11-15T10:01:37.309Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-15T10:01:37.309Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-15T10:01:37.309Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-15T10:01:37.309Z] 
Multi-Channel Configuration:
[2025-11-15T10:01:37.309Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-15T10:01:37.309Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-15T10:01:37.309Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-15T10:01:37.309Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-15T10:01:37.309Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-15T10:01:37.309Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-15T10:01:37.309Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-15T10:01:37.309Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-15T10:01:37.309Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-15T10:01:37.309Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-15T10:01:37.309Z] 
Data Files Check:
[2025-11-15T10:01:37.310Z] .github/data/new_jobs.json: ✅ Exists (3 items, 10674 bytes)
[2025-11-15T10:01:37.312Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322103 bytes)
[2025-11-15T10:01:37.312Z] 
========================================
[2025-11-15T10:01:37.312Z] Starting Enhanced Discord Bot...
[2025-11-15T10:01:37.312Z] ========================================
[2025-11-15T10:01:37.595Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-15T10:01:37.595Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-15T10:01:38.451Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-15T10:01:38.452Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-15T10:01:38.452Z] [BOT] ⏭️ Skipping already posted (legacy ID): Entry Level - C Software Developer at mthree
[2025-11-15T10:01:38.452Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
ℹ️ No new jobs to post - all jobs have been posted already
[2025-11-15T10:01:38.461Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*