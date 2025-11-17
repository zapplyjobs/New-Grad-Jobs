# Discord Bot Execution Audit
**Timestamp:** 2025-11-17T00:40:30.948Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-17T00:40:22.132Z] ========================================
[2025-11-17T00:40:22.133Z] Discord Bot Execution Log
[2025-11-17T00:40:22.134Z] Environment: GitHub Actions
[2025-11-17T00:40:22.134Z] Node Version: v20.19.5
[2025-11-17T00:40:22.134Z] ========================================
[2025-11-17T00:40:22.134Z] Environment Variables Check:
[2025-11-17T00:40:22.134Z] DISCORD_TOKEN: ✅ Set
[2025-11-17T00:40:22.134Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-17T00:40:22.134Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-17T00:40:22.134Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-17T00:40:22.134Z] 
Multi-Channel Configuration:
[2025-11-17T00:40:22.134Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-17T00:40:22.134Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-17T00:40:22.134Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-17T00:40:22.134Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-17T00:40:22.134Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-17T00:40:22.134Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-17T00:40:22.134Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-17T00:40:22.134Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-17T00:40:22.134Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-17T00:40:22.134Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-17T00:40:22.134Z] 
Data Files Check:
[2025-11-17T00:40:22.135Z] .github/data/new_jobs.json: ✅ Exists (1 items, 3121 bytes)
[2025-11-17T00:40:22.136Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322050 bytes)
[2025-11-17T00:40:22.136Z] 
========================================
[2025-11-17T00:40:22.136Z] Starting Enhanced Discord Bot...
[2025-11-17T00:40:22.136Z] ========================================
[2025-11-17T00:40:22.376Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-17T00:40:22.377Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-17T00:40:23.104Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-17T00:40:23.105Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-17T00:40:23.105Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-17T00:40:23.106Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-17T00:40:23.106Z] [BOT] 📍 [ROUTING] "Senior Analyst - Application Development and Maintenance" @ ORG_be3702e3inal Health
[2025-11-17T00:40:23.106Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-17T00:40:23.110Z] [BOT ERROR] (node:2284) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-17T00:40:23.665Z] [BOT] ✅ Created forum post: 🏢 Senior Analyst - Application Development and Maintenance @ ORG_be3702e3inal Health in #🩺・healthcare-jobs
[2025-11-17T00:40:23.665Z] [BOT] ✅ Industry: Senior Analyst - Application Development and Maintenance @ ORG_be3702e3inal Health
[2025-11-17T00:40:25.167Z] [BOT] 🔍 DEBUG: Job "Senior Analyst - Application Development and Maintenance" | City: "Indiana" | State: "Locations" | Location Channel ID: null
[2025-11-17T00:40:25.168Z] [BOT] 📝 Marking as posted: JID_817db28e...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-17T00:40:25.168Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-17T00:40:25.168Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_fe912c5e
[2025-11-17T00:40:25.168Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-17T00:40:25.169Z] [BOT] 🔍 DEBUG: Temp file written (322115 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-17T00:40:25.170Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-17T00:40:25.170Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322115 bytes
[2025-11-17T00:40:25.170Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-17T00:40:28.170Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-17T00:40:28.170Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-17T00:40:28.211Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 1
   Timestamp: 2025-11-17T00:40:28.210Z
[2025-11-17T00:40:30.219Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2284) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*