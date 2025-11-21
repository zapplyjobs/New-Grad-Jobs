# Discord Bot Execution Audit
**Timestamp:** 2025-11-21T10:36:51.318Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-21T10:36:34.016Z] ========================================
[2025-11-21T10:36:34.017Z] Discord Bot Execution Log
[2025-11-21T10:36:34.017Z] Environment: GitHub Actions
[2025-11-21T10:36:34.017Z] Node Version: v20.19.5
[2025-11-21T10:36:34.017Z] ========================================
[2025-11-21T10:36:34.017Z] Environment Variables Check:
[2025-11-21T10:36:34.017Z] DISCORD_TOKEN: ✅ Set
[2025-11-21T10:36:34.017Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-21T10:36:34.017Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-21T10:36:34.018Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-21T10:36:34.018Z] 
Multi-Channel Configuration:
[2025-11-21T10:36:34.018Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-21T10:36:34.018Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-21T10:36:34.018Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-21T10:36:34.018Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-21T10:36:34.018Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-21T10:36:34.018Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-21T10:36:34.018Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-21T10:36:34.018Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-21T10:36:34.018Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-21T10:36:34.018Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-21T10:36:34.018Z] 
Data Files Check:
[2025-11-21T10:36:34.018Z] .github/data/new_jobs.json: ✅ Exists (6 items, 15017 bytes)
[2025-11-21T10:36:34.020Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327090 bytes)
[2025-11-21T10:36:34.020Z] 
========================================
[2025-11-21T10:36:34.020Z] Starting Enhanced Discord Bot...
[2025-11-21T10:36:34.020Z] ========================================
[2025-11-21T10:36:34.293Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-21T10:36:34.294Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-21T10:36:35.042Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-21T10:36:35.043Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-21T10:36:35.043Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-21T10:36:35.044Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 3 new jobs (3 already posted)...
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-21T10:36:35.044Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-21T10:36:35.044Z] [BOT] 📍 [ROUTING] "Systems Software Engineer" @ ORG_f223faa9
[2025-11-21T10:36:35.044Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T10:36:35.048Z] [BOT ERROR] (node:2310) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-21T10:36:35.249Z] [BOT] ✅ Created forum post: 🍎 Systems Software Engineer @ ORG_f223faa9 in #💻・tech-jobs
[2025-11-21T10:36:35.249Z] [BOT] ✅ Industry: Systems Software Engineer @ ORG_f223faa9
[2025-11-21T10:36:36.751Z] [BOT] 🔍 DEBUG: Job "Systems Software Engineer" | City: "San Diego" | State: "CA" | Location Channel ID: "1429..."
[2025-11-21T10:36:37.068Z] [BOT] ✅ Created forum post: 🍎 Systems Software Engineer @ ORG_f223faa9 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-21T10:36:38.569Z] [BOT] 📝 Marking as posted: JID_15cacb35
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T10:36:38.569Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T10:36:38.569Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_2b6f1abc
[2025-11-21T10:36:38.569Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T10:36:38.571Z] [BOT] 🔍 DEBUG: Temp file written (327045 bytes)
[2025-11-21T10:36:38.571Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T10:36:38.571Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T10:36:38.571Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327045 bytes
[2025-11-21T10:36:38.571Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Database Analyst - Part-Time/Remote - School of Law" @ ORG_f5f75c9b U
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T10:36:38.756Z] [BOT] ✅ Created forum post: 🏢 Database Analyst - Part-Time/Remote - School of Law @ ORG_f5f75c9b U in #💻・tech-jobs
[2025-11-21T10:36:38.756Z] [BOT] ✅ Industry: Database Analyst - Part-Time/Remote - School of Law @ ORG_f5f75c9b U
[2025-11-21T10:36:40.258Z] [BOT] 🔍 DEBUG: Job "Database Analyst - Part-Time/Remote - School of Law" | City: "St. Louis" | State: "MO" | Location Channel ID: "1429..."
[2025-11-21T10:36:40.419Z] [BOT] ✅ Created forum post: 🏢 Database Analyst - Part-Time/Remote - School of Law @ ORG_f5f75c9b U in #💻・remote-usa
[2025-11-21T10:36:40.419Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-21T10:36:41.920Z] [BOT] 📝 Marking as posted: JID_f4ebbc02...
[2025-11-21T10:36:41.920Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T10:36:41.921Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T10:36:41.921Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_dde5392f
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T10:36:41.922Z] [BOT] 🔍 DEBUG: Temp file written (327092 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T10:36:41.922Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T10:36:41.923Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327092 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T10:36:41.923Z] [BOT] 📍 [ROUTING] "Java Software Engineer - Oracle Health and Analytics" @ ORG_dc7620eb
   Category: TECH (matched: "software")
[2025-11-21T10:36:41.923Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T10:36:42.249Z] [BOT] ✅ Created forum post: 🔴 Java Software Engineer - Oracle Health and Analytics @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Java Software Engineer - Oracle Health and Analytics @ ORG_dc7620eb
[2025-11-21T10:36:43.751Z] [BOT] 🔍 DEBUG: Job "Java Software Engineer - Oracle Health and Analytics" | City: "Seattle" | State: "WA" | Location Channel ID: "1429..."
[2025-11-21T10:36:43.996Z] [BOT] ✅ Created forum post: 🔴 Java Software Engineer - Oracle Health and Analytics @ ORG_dc7620eb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-11-21T10:36:45.496Z] [BOT] 📝 Marking as posted: JID_703859f1...
[2025-11-21T10:36:45.496Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T10:36:45.497Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T10:36:45.497Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_5a6f1e9d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T10:36:45.499Z] [BOT] 🔍 DEBUG: Temp file written (327115 bytes)
[2025-11-21T10:36:45.499Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T10:36:45.499Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T10:36:45.499Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327115 bytes
[2025-11-21T10:36:45.499Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-21T10:36:48.500Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-21T10:36:48.538Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 3
   Timestamp: 2025-11-21T10:36:48.538Z
[2025-11-21T10:36:50.545Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2310) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*