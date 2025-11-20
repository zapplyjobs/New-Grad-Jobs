# Discord Bot Execution Audit
**Timestamp:** 2025-11-20T23:02:30.468Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-20T23:02:00.401Z] ========================================
[2025-11-20T23:02:00.403Z] Discord Bot Execution Log
[2025-11-20T23:02:00.403Z] Environment: GitHub Actions
[2025-11-20T23:02:00.403Z] Node Version: v20.19.5
[2025-11-20T23:02:00.403Z] ========================================
[2025-11-20T23:02:00.403Z] Environment Variables Check:
[2025-11-20T23:02:00.403Z] DISCORD_TOKEN: ✅ Set
[2025-11-20T23:02:00.403Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-20T23:02:00.403Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-20T23:02:00.403Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-20T23:02:00.403Z] 
Multi-Channel Configuration:
[2025-11-20T23:02:00.403Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-20T23:02:00.403Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-20T23:02:00.403Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-20T23:02:00.403Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-20T23:02:00.403Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-20T23:02:00.403Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-20T23:02:00.403Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-20T23:02:00.403Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-20T23:02:00.403Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-20T23:02:00.403Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-20T23:02:00.404Z] 
Data Files Check:
[2025-11-20T23:02:00.404Z] .github/data/new_jobs.json: ✅ Exists (7 items, 41410 bytes)
[2025-11-20T23:02:00.406Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 324658 bytes)
[2025-11-20T23:02:00.406Z] 
========================================
[2025-11-20T23:02:00.406Z] Starting Enhanced Discord Bot...
[2025-11-20T23:02:00.406Z] ========================================
[2025-11-20T23:02:00.688Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-20T23:02:00.689Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-20T23:02:01.191Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-20T23:02:01.192Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-20T23:02:01.192Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-20T23:02:01.192Z] [BOT] 📬 Found 5 new jobs (2 already posted)...
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-20T23:02:01.195Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-11-20T23:02:01.196Z] [BOT] 📍 [ROUTING] "Technical Associate" @ ORG_b1a04a15
[2025-11-20T23:02:01.196Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-20T23:02:01.200Z] [BOT ERROR] (node:2753) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-20T23:02:01.402Z] [BOT] ✅ Created forum post: 🏢 Technical Associate @ ORG_b1a04a15 in #📁・JID_e938df7b
  ✅ Industry: Technical Associate @ ORG_b1a04a15
[2025-11-20T23:02:02.904Z] [BOT] 🔍 DEBUG: Job "Technical Associate" | City: "Arlington" | State: "TX" | Location Channel ID: "1429..."
[2025-11-20T23:02:03.041Z] [BOT] ✅ Created forum post: 🏢 Technical Associate @ ORG_b1a04a15 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-20T23:02:04.542Z] [BOT] 📝 Marking as posted: JID_182856ec...
  🔍 DEBUG: Set size before add: 5000
[2025-11-20T23:02:04.542Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-20T23:02:04.542Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T23:02:04.543Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_7664f855
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T23:02:04.544Z] [BOT] 🔍 DEBUG: Temp file written (324682 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T23:02:04.545Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T23:02:04.545Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324682 bytes
[2025-11-20T23:02:04.545Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-20T23:02:07.545Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-20T23:02:07.545Z] [BOT] 📍 [ROUTING] "Program Administrator - Community Centered Data Science" @ ORG_9d38443e of Chicago
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T23:02:08.010Z] [BOT] ✅ Created forum post: 🏢 Program Administrator - Community Centered Data Science @ ORG_9d38443e of Chicago in #💻・tech-jobs
[2025-11-20T23:02:08.011Z] [BOT] ✅ Industry: Program Administrator - Community Centered Data Science @ ORG_9d38443e of Chicago
[2025-11-20T23:02:09.511Z] [BOT] 🔍 DEBUG: Job "Program Administrator - Community Centered Data Science" | City: "Chicago" | State: "IL" | Location Channel ID: "1429..."
[2025-11-20T23:02:10.101Z] [BOT] ✅ Created forum post: 🏢 Program Administrator - Community Centered Data Science @ ORG_9d38443e of Chicago in #🌆・chicago
[2025-11-20T23:02:10.101Z] [BOT] ✅ Location: 🌆・chicago
[2025-11-20T23:02:11.602Z] [BOT] 📝 Marking as posted: JID_96a99c4b-...
[2025-11-20T23:02:11.602Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T23:02:11.603Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-20T23:02:11.603Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_9c24d049
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T23:02:11.605Z] [BOT] 🔍 DEBUG: Temp file written (324746 bytes)
[2025-11-20T23:02:11.605Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T23:02:11.605Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T23:02:11.605Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324746 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-20T23:02:11.606Z] [BOT] 📍 [ROUTING] "Software Engineer 2: Cybersecurity" @ ORG_75f04b84
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T23:02:11.771Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2: Cybersecurity @ ORG_75f04b84 in #💻・tech-jobs
[2025-11-20T23:02:11.771Z] [BOT] ✅ Industry: Software Engineer 2: Cybersecurity @ ORG_75f04b84
[2025-11-20T23:02:13.272Z] [BOT] 🔍 DEBUG: Job "Software Engineer 2: Cybersecurity" | City: "Hartford" | State: "CT" | Location Channel ID: "1429..."
[2025-11-20T23:02:13.454Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2: Cybersecurity @ ORG_75f04b84 in #💻・remote-usa
[2025-11-20T23:02:13.454Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-20T23:02:14.955Z] [BOT] 📝 Marking as posted: JID_6957dde4-rec_rtx_e...
[2025-11-20T23:02:14.955Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T23:02:14.956Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-20T23:02:14.956Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_9ec9b411
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T23:02:14.957Z] [BOT] 🔍 DEBUG: Temp file written (324866 bytes)
[2025-11-20T23:02:14.957Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T23:02:14.957Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T23:02:14.957Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324866 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-20T23:02:14.958Z] [BOT] 📍 [ROUTING] "2026 Raytheon Vision Systems Software Engineer 2 - Goleta, CA" @ ORG_75f04b84
   Category: TECH (matched: "software")
[2025-11-20T23:02:14.958Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T23:02:15.089Z] [BOT] ✅ Created forum post: 🏢 2026 Raytheon Vision Systems Software Engineer 2 - Goleta, CA @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: 2026 Raytheon Vision Systems Software Engineer 2 - Goleta, CA @ ORG_75f04b84
[2025-11-20T23:02:16.590Z] [BOT] 🔍 DEBUG: Job "2026 Raytheon Vision Systems Software Engineer 2 - Goleta, CA" | City: "Goleta" | State: "CA" | Location Channel ID: "1429..."
[2025-11-20T23:02:16.920Z] [BOT] ✅ Created forum post: 🏢 2026 Raytheon Vision Systems Software Engineer 2 - Goleta, CA @ ORG_75f04b84 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-20T23:02:18.421Z] [BOT] 📝 Marking as posted: JID_6957dde4-rec_rtx_e...
[2025-11-20T23:02:18.421Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T23:02:18.422Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-20T23:02:18.422Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_dbe51bf7
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T23:02:18.423Z] [BOT] 🔍 DEBUG: Temp file written (325033 bytes)
[2025-11-20T23:02:18.423Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T23:02:18.424Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T23:02:18.424Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325033 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-20T23:02:21.425Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-20T23:02:21.425Z] [BOT] 📍 [ROUTING] "Systems Engineer 1" @ ORG_75f04b84
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-20T23:02:21.600Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer 1 @ ORG_75f04b84 in #🩺・healthcare-jobs
  ✅ Industry: Systems Engineer 1 @ ORG_75f04b84
[2025-11-20T23:02:23.102Z] [BOT] 🔍 DEBUG: Job "Systems Engineer 1" | City: "Cedar Rapids" | State: "IA" | Location Channel ID: "1429..."
[2025-11-20T23:02:23.301Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer 1 @ ORG_75f04b84 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-20T23:02:24.802Z] [BOT] 📝 Marking as posted: JID_6957dde4-rec_rtx_e...
  🔍 DEBUG: Set size before add: 5000
[2025-11-20T23:02:24.802Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T23:02:24.803Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_f64a518b
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T23:02:24.805Z] [BOT] 🔍 DEBUG: Temp file written (325142 bytes)
[2025-11-20T23:02:24.805Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T23:02:24.805Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T23:02:24.805Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325142 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-20T23:02:27.806Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-20T23:02:27.845Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 5
   Timestamp: 2025-11-20T23:02:27.845Z
[2025-11-20T23:02:29.855Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2753) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*