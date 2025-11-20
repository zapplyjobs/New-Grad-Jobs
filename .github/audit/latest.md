# Discord Bot Execution Audit
**Timestamp:** 2025-11-20T21:46:52.460Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-20T21:46:35.291Z] ========================================
[2025-11-20T21:46:35.292Z] Discord Bot Execution Log
[2025-11-20T21:46:35.293Z] Environment: GitHub Actions
[2025-11-20T21:46:35.293Z] Node Version: v20.19.5
[2025-11-20T21:46:35.293Z] ========================================
[2025-11-20T21:46:35.293Z] Environment Variables Check:
[2025-11-20T21:46:35.293Z] DISCORD_TOKEN: ✅ Set
[2025-11-20T21:46:35.293Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-20T21:46:35.293Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-20T21:46:35.293Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-20T21:46:35.293Z] 
Multi-Channel Configuration:
[2025-11-20T21:46:35.293Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-20T21:46:35.293Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-20T21:46:35.293Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-20T21:46:35.293Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-20T21:46:35.293Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-20T21:46:35.293Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-20T21:46:35.293Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-20T21:46:35.293Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-20T21:46:35.293Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-20T21:46:35.293Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-20T21:46:35.293Z] 
Data Files Check:
[2025-11-20T21:46:35.294Z] .github/data/new_jobs.json: ✅ Exists (6 items, 13840 bytes)
[2025-11-20T21:46:35.296Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 324553 bytes)
[2025-11-20T21:46:35.296Z] 
========================================
[2025-11-20T21:46:35.296Z] Starting Enhanced Discord Bot...
[2025-11-20T21:46:35.296Z] ========================================
[2025-11-20T21:46:35.568Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-20T21:46:35.569Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-20T21:46:36.389Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-20T21:46:36.390Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-20T21:46:36.390Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-20T21:46:36.390Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 3 new jobs (3 already posted)...
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-20T21:46:36.391Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-20T21:46:36.391Z] [BOT] 📍 [ROUTING] "Operations Analytics Analyst" @ ORG_be3702e3inal Health
[2025-11-20T21:46:36.391Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T21:46:36.395Z] [BOT ERROR] (node:2493) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-20T21:46:36.544Z] [BOT] ✅ Created forum post: 🏢 Operations Analytics Analyst @ ORG_be3702e3inal Health in #💻・tech-jobs
  ✅ Industry: Operations Analytics Analyst @ ORG_be3702e3inal Health
[2025-11-20T21:46:38.046Z] [BOT] 🔍 DEBUG: Job "Operations Analytics Analyst" | City: "Goshen" | State: "NY" | Location Channel ID: "1429..."
[2025-11-20T21:46:38.232Z] [BOT] ✅ Created forum post: 🏢 Operations Analytics Analyst @ ORG_be3702e3inal Health in #🗽・new-york
[2025-11-20T21:46:38.232Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-20T21:46:39.733Z] [BOT] 📝 Marking as posted: JID_817db28e...
[2025-11-20T21:46:39.734Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T21:46:39.734Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-20T21:46:39.734Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_9cf1f7f3
[2025-11-20T21:46:39.734Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T21:46:39.736Z] [BOT] 🔍 DEBUG: Temp file written (324594 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T21:46:39.736Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T21:46:39.736Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324594 bytes
[2025-11-20T21:46:39.737Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Associate Software Engineer" @ ORG_6be94934
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T21:46:39.918Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_6be94934 in #💻・tech-jobs
[2025-11-20T21:46:39.918Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_6be94934
[2025-11-20T21:46:41.419Z] [BOT] 🔍 DEBUG: Job "Associate Software Engineer" | City: "Overland Park" | State: "KS" | Location Channel ID: "1429..."
[2025-11-20T21:46:41.658Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_6be94934 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-20T21:46:43.158Z] [BOT] 📝 Marking as posted: JID_a3ae9640...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-20T21:46:43.159Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T21:46:43.159Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-20T21:46:43.159Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_3e0cb6f6
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T21:46:43.160Z] [BOT] 🔍 DEBUG: Temp file written (324642 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T21:46:43.160Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T21:46:43.160Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324642 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-20T21:46:43.161Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer" @ ORG_0728f366 Panalytical
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T21:46:43.491Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer @ ORG_0728f366 Panalytical in #💻・tech-jobs
  ✅ Industry: Graduate Software Engineer @ ORG_0728f366 Panalytical
[2025-11-20T21:46:44.993Z] [BOT] 🔍 DEBUG: Job "Graduate Software Engineer" | City: "Northampton" | State: "MA" | Location Channel ID: "1429..."
[2025-11-20T21:46:45.143Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer @ ORG_0728f366 Panalytical in #💻・remote-usa
[2025-11-20T21:46:45.143Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-20T21:46:46.644Z] [BOT] 📝 Marking as posted: JID_0608687c-malvern_p...
[2025-11-20T21:46:46.644Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T21:46:46.645Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-20T21:46:46.645Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_c2bdfbc1
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T21:46:46.646Z] [BOT] 🔍 DEBUG: Temp file written (324700 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T21:46:46.647Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T21:46:46.647Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324700 bytes
[2025-11-20T21:46:46.647Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-20T21:46:49.648Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-11-20T21:46:49.648Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-20T21:46:49.687Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 3
   Timestamp: 2025-11-20T21:46:49.686Z
[2025-11-20T21:46:51.696Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2493) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*