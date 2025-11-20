# Discord Bot Execution Audit
**Timestamp:** 2025-11-20T19:02:38.310Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-20T19:02:11.801Z] ========================================
[2025-11-20T19:02:11.802Z] Discord Bot Execution Log
[2025-11-20T19:02:11.802Z] Environment: GitHub Actions
[2025-11-20T19:02:11.802Z] Node Version: v20.19.5
[2025-11-20T19:02:11.802Z] ========================================
[2025-11-20T19:02:11.802Z] Environment Variables Check:
[2025-11-20T19:02:11.802Z] DISCORD_TOKEN: ✅ Set
[2025-11-20T19:02:11.802Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-20T19:02:11.802Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-20T19:02:11.802Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-20T19:02:11.802Z] 
Multi-Channel Configuration:
[2025-11-20T19:02:11.802Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-20T19:02:11.802Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-20T19:02:11.802Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-20T19:02:11.803Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-20T19:02:11.803Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-20T19:02:11.803Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-20T19:02:11.803Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-20T19:02:11.803Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-20T19:02:11.803Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-20T19:02:11.803Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-20T19:02:11.803Z] 
Data Files Check:
[2025-11-20T19:02:11.803Z] .github/data/new_jobs.json: ✅ Exists (7 items, 41982 bytes)
[2025-11-20T19:02:11.805Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 324288 bytes)
[2025-11-20T19:02:11.805Z] 
========================================
[2025-11-20T19:02:11.805Z] Starting Enhanced Discord Bot...
[2025-11-20T19:02:11.805Z] ========================================
[2025-11-20T19:02:12.088Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-20T19:02:12.088Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-20T19:02:13.307Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-20T19:02:13.308Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-20T19:02:13.308Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-20T19:02:13.308Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 4 new jobs (3 already posted)...
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-20T19:02:13.311Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-11-20T19:02:13.311Z] [BOT] 📍 [ROUTING] "Cricket Systems Operator" @ Hawk-Eye Innovations
[2025-11-20T19:02:13.312Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-11-20T19:02:13.316Z] [BOT ERROR] (node:2324) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-20T19:02:13.646Z] [BOT] ✅ Created forum post: 🏢 Cricket Systems Operator @ Hawk-Eye Innovations in #📣・marketing-jobs
[2025-11-20T19:02:13.647Z] [BOT] ✅ Industry: Cricket Systems Operator @ Hawk-Eye Innovations
[2025-11-20T19:02:15.149Z] [BOT] 🔍 DEBUG: Job "Cricket Systems Operator" | City: "United Kingdom" | State: "Locations" | Location Channel ID: null
[2025-11-20T19:02:15.149Z] [BOT] 📝 Marking as posted: JID_c9a65fca...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-20T19:02:15.149Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T19:02:15.150Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-20T19:02:15.150Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_99c9a6df
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T19:02:15.151Z] [BOT] 🔍 DEBUG: Temp file written (324293 bytes)
[2025-11-20T19:02:15.151Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T19:02:15.183Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T19:02:15.183Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324293 bytes
[2025-11-20T19:02:15.183Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-20T19:02:18.185Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-20T19:02:18.185Z] [BOT] 📍 [ROUTING] "Software Engineer Backend/Platform Systems 1" @ ORG_aa669b28
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T19:02:18.402Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Backend/Platform Systems 1 @ ORG_aa669b28 in #💻・tech-jobs
[2025-11-20T19:02:18.402Z] [BOT] ✅ Industry: Software Engineer Backend/Platform Systems 1 @ ORG_aa669b28
[2025-11-20T19:02:19.904Z] [BOT] 🔍 DEBUG: Job "Software Engineer Backend/Platform Systems 1" | City: "Boston" | State: "MA" | Location Channel ID: "1429..."
[2025-11-20T19:02:20.196Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Backend/Platform Systems 1 @ ORG_aa669b28 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-20T19:02:21.697Z] [BOT] 📝 Marking as posted: JID_e43f12d6
[2025-11-20T19:02:21.698Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T19:02:21.698Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-20T19:02:21.699Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_33610119
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T19:02:21.700Z] [BOT] 🔍 DEBUG: Temp file written (324286 bytes)
[2025-11-20T19:02:21.700Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T19:02:21.700Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T19:02:21.700Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324286 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-20T19:02:21.700Z] [BOT] 📍 [ROUTING] "Software Engineer Data/AI/Intelligent Systems 1" @ ORG_aa669b28
[2025-11-20T19:02:21.700Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T19:02:22.108Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Data/AI/Intelligent Systems 1 @ ORG_aa669b28 in #💻・tech-jobs
[2025-11-20T19:02:22.109Z] [BOT] ✅ Industry: Software Engineer Data/AI/Intelligent Systems 1 @ ORG_aa669b28
[2025-11-20T19:02:23.610Z] [BOT] 🔍 DEBUG: Job "Software Engineer Data/AI/Intelligent Systems 1" | City: "Boston" | State: "MA" | Location Channel ID: "1429..."
[2025-11-20T19:02:23.855Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Data/AI/Intelligent Systems 1 @ ORG_aa669b28 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-20T19:02:25.355Z] [BOT] 📝 Marking as posted: JID_33df5a48
[2025-11-20T19:02:25.355Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T19:02:25.356Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-20T19:02:25.356Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_3b1d86b8
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T19:02:25.358Z] [BOT] 🔍 DEBUG: Temp file written (324266 bytes)
[2025-11-20T19:02:25.358Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T19:02:25.358Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T19:02:25.358Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324266 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-20T19:02:28.359Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-11-20T19:02:28.360Z] [BOT] 📍 [ROUTING] "Insights Analyst" @ ORG_b344d80e Campbell's Company
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2025-11-20T19:02:28.617Z] [BOT] ✅ Created forum post: 🏢 Insights Analyst @ ORG_b344d80e Campbell's Company in #💲・sales-jobs
[2025-11-20T19:02:28.617Z] [BOT] ✅ Industry: Insights Analyst @ ORG_b344d80e Campbell's Company
[2025-11-20T19:02:30.119Z] [BOT] 🔍 DEBUG: Job "Insights Analyst" | City: "Philadelphia" | State: "PA" | Location Channel ID: "1429..."
[2025-11-20T19:02:30.491Z] [BOT] ✅ Created forum post: 🏢 Insights Analyst @ ORG_b344d80e Campbell's Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-20T19:02:31.992Z] [BOT] 📝 Marking as posted: JID_d3ac1b7e...
  🔍 DEBUG: Set size before add: 5000
[2025-11-20T19:02:31.992Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T19:02:31.992Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_4398260c
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T19:02:31.994Z] [BOT] 🔍 DEBUG: Temp file written (324328 bytes)
[2025-11-20T19:02:31.995Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T19:02:31.995Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T19:02:31.995Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324328 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-20T19:02:34.996Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2025-11-20T19:02:34.996Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-20T19:02:35.035Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 4
   Timestamp: 2025-11-20T19:02:35.035Z
[2025-11-20T19:02:37.045Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2324) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*