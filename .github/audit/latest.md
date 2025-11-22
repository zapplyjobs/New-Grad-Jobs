# Discord Bot Execution Audit
**Timestamp:** 2025-11-22T00:38:53.703Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-22T00:38:12.764Z] ========================================
[2025-11-22T00:38:12.765Z] Discord Bot Execution Log
[2025-11-22T00:38:12.765Z] Environment: GitHub Actions
[2025-11-22T00:38:12.765Z] Node Version: v20.19.5
[2025-11-22T00:38:12.765Z] ========================================
[2025-11-22T00:38:12.765Z] Environment Variables Check:
[2025-11-22T00:38:12.765Z] DISCORD_TOKEN: ✅ Set
[2025-11-22T00:38:12.765Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-22T00:38:12.766Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-22T00:38:12.766Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-22T00:38:12.766Z] 
Multi-Channel Configuration:
[2025-11-22T00:38:12.766Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-22T00:38:12.766Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-22T00:38:12.766Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-22T00:38:12.766Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-22T00:38:12.766Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-22T00:38:12.766Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-22T00:38:12.766Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-22T00:38:12.766Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-22T00:38:12.766Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-22T00:38:12.766Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-22T00:38:12.766Z] 
Data Files Check:
[2025-11-22T00:38:12.767Z] .github/data/new_jobs.json: ✅ Exists (8 items, 47850 bytes)
[2025-11-22T00:38:12.768Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327239 bytes)
[2025-11-22T00:38:12.768Z] 
========================================
[2025-11-22T00:38:12.768Z] Starting Enhanced Discord Bot...
[2025-11-22T00:38:12.769Z] ========================================
[2025-11-22T00:38:13.048Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-22T00:38:13.049Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-22T00:38:13.834Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-22T00:38:13.835Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-22T00:38:13.835Z] [BOT] 📬 Found 7 new jobs (1 already posted)...
[2025-11-22T00:38:13.836Z] [BOT] 📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-22T00:38:13.839Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-22T00:38:13.839Z] [BOT] 📍 [ROUTING] "Associate HR Data Analyst" @ ORG_e5ca4df3 Group
[2025-11-22T00:38:13.840Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-22T00:38:13.844Z] [BOT ERROR] (node:2554) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-22T00:38:14.125Z] [BOT] ✅ Created forum post: 🏢 Associate HR Data Analyst @ ORG_e5ca4df3 Group in #💻・tech-jobs
[2025-11-22T00:38:14.126Z] [BOT] ✅ Industry: Associate HR Data Analyst @ ORG_e5ca4df3 Group
[2025-11-22T00:38:15.627Z] [BOT] 🔍 DEBUG: Job "Associate HR Data Analyst" | City: "Arlington" | State: "VA" | Location Channel ID: "1429..."
[2025-11-22T00:38:15.960Z] [BOT] ✅ Created forum post: 🏢 Associate HR Data Analyst @ ORG_e5ca4df3 Group in #💻・remote-usa
[2025-11-22T00:38:15.960Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-22T00:38:17.460Z] [BOT] 📝 Marking as posted: JID_7f93600c...
  🔍 DEBUG: Set size before add: 5000
[2025-11-22T00:38:17.460Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T00:38:17.461Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_3943adac
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T00:38:17.462Z] [BOT] 🔍 DEBUG: Temp file written (327293 bytes)
[2025-11-22T00:38:17.462Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T00:38:17.462Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T00:38:17.462Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327293 bytes
[2025-11-22T00:38:17.463Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Data Science Associate" @ ORG_2ed8b806
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-22T00:38:17.702Z] [BOT] ✅ Created forum post: 🏢 Data Science Associate @ ORG_2ed8b806 in #💻・tech-jobs
[2025-11-22T00:38:17.702Z] [BOT] ✅ Industry: Data Science Associate @ ORG_2ed8b806
[2025-11-22T00:38:19.204Z] [BOT] 🔍 DEBUG: Job "Data Science Associate" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-22T00:38:19.488Z] [BOT] ✅ Created forum post: 🏢 Data Science Associate @ ORG_2ed8b806 in #🗽・new-york
[2025-11-22T00:38:19.488Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-22T00:38:20.989Z] [BOT] 📝 Marking as posted: JID_3ce63f51...
[2025-11-22T00:38:20.989Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T00:38:20.990Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T00:38:20.990Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_54d51861
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T00:38:20.991Z] [BOT] 🔍 DEBUG: Temp file written (327236 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T00:38:20.991Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T00:38:20.992Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327236 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T00:38:20.992Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_9a42d40a Innovation (i3)
   Category: TECH (matched: "data")
[2025-11-22T00:38:20.992Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-22T00:38:21.211Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_9a42d40a Innovation (i3) in #💻・tech-jobs
  ✅ Industry: Data Analyst @ ORG_9a42d40a Innovation (i3)
[2025-11-22T00:38:22.712Z] [BOT] 🔍 DEBUG: Job "Data Analyst" | City: "Huntsville" | State: "AL" | Location Channel ID: "1429..."
[2025-11-22T00:38:22.923Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_9a42d40a Innovation (i3) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-22T00:38:24.424Z] [BOT] 📝 Marking as posted: JID_f3a4d234
  🔍 DEBUG: Set size before add: 5000
[2025-11-22T00:38:24.424Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T00:38:24.425Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_208d8e66
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T00:38:24.426Z] [BOT] 🔍 DEBUG: Temp file written (327177 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T00:38:24.427Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T00:38:24.427Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327177 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T00:38:27.427Z] [BOT] 📌 Posting 2 jobs to #🩺・healthcare-jobs
[2025-11-22T00:38:27.427Z] [BOT] 📍 [ROUTING] "Game Analyst - NBA 2K" @ ORG_ba303321 Concepts
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-22T00:38:27.754Z] [BOT] ✅ Created forum post: 🏢 Game Analyst - NBA 2K @ ORG_ba303321 Concepts in #🩺・healthcare-jobs
  ✅ Industry: Game Analyst - NBA 2K @ ORG_ba303321 Concepts
[2025-11-22T00:38:29.254Z] [BOT] 🔍 DEBUG: Job "Game Analyst - NBA 2K" | City: "Novato" | State: "CA" | Location Channel ID: "1429..."
[2025-11-22T00:38:29.471Z] [BOT] ✅ Created forum post: 🏢 Game Analyst - NBA 2K @ ORG_ba303321 Concepts in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-22T00:38:30.972Z] [BOT] 📝 Marking as posted: JID_c329c4a4-...
  🔍 DEBUG: Set size before add: 5000
[2025-11-22T00:38:30.972Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T00:38:30.973Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_0473d3ac
[2025-11-22T00:38:30.973Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T00:38:30.974Z] [BOT] 🔍 DEBUG: Temp file written (327141 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T00:38:30.974Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T00:38:30.975Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327141 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T00:38:30.975Z] [BOT] 📍 [ROUTING] "Systems Engineer - Operations/Systems Analyst" @ ORG_b344d80e Boeing Company
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-22T00:38:31.181Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer - Operations/Systems Analyst @ ORG_b344d80e Boeing Company in #🩺・healthcare-jobs
  ✅ Industry: Systems Engineer - Operations/Systems Analyst @ ORG_b344d80e Boeing Company
[2025-11-22T00:38:32.682Z] [BOT] 🔍 DEBUG: Job "Systems Engineer - Operations/Systems Analyst" | City: "Arlington" | State: "VA" | Location Channel ID: "1429..."
[2025-11-22T00:38:32.910Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer - Operations/Systems Analyst @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-22T00:38:34.412Z] [BOT] 📝 Marking as posted: JID_a573c606-external_ca...
  🔍 DEBUG: Set size before add: 5000
[2025-11-22T00:38:34.412Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T00:38:34.413Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_0cb321eb
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T00:38:34.414Z] [BOT] 🔍 DEBUG: Temp file written (327247 bytes)
[2025-11-22T00:38:34.414Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T00:38:34.415Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T00:38:34.415Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327247 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T00:38:37.416Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-11-22T00:38:37.416Z] [BOT] 📍 [ROUTING] "Applications Analyst 1" @ ORG_10a0c5f8 General Brigham
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-11-22T00:38:37.641Z] [BOT] ✅ Created forum post: 🏢 Applications Analyst 1 @ ORG_10a0c5f8 General Brigham in #📣・marketing-jobs
  ✅ Industry: Applications Analyst 1 @ ORG_10a0c5f8 General Brigham
[2025-11-22T00:38:39.143Z] [BOT] 🔍 DEBUG: Job "Applications Analyst 1" | City: "Boston" | State: "MA" | Location Channel ID: "1429..."
[2025-11-22T00:38:39.336Z] [BOT] ✅ Created forum post: 🏢 Applications Analyst 1 @ ORG_10a0c5f8 General Brigham in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-22T00:38:40.837Z] [BOT] 📝 Marking as posted: JID_052d497a...
  🔍 DEBUG: Set size before add: 5000
[2025-11-22T00:38:40.837Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T00:38:40.837Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_d0d4c0f9
[2025-11-22T00:38:40.837Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T00:38:40.839Z] [BOT] 🔍 DEBUG: Temp file written (327293 bytes)
[2025-11-22T00:38:40.839Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T00:38:40.839Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T00:38:40.839Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327293 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T00:38:43.840Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-11-22T00:38:43.841Z] [BOT] 📍 [ROUTING] "Research Professional" @ ORG_541af1c5 Friedman Institute for Economics
   Category: HR (matched: "benefits")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-22T00:38:44.282Z] [BOT] ✅ Created forum post: 🏢 Research Professional @ ORG_541af1c5 Friedman Institute for Economics in #📁・JID_e938df7b
  ✅ Industry: Research Professional @ ORG_541af1c5 Friedman Institute for Economics
[2025-11-22T00:38:45.784Z] [BOT] 🔍 DEBUG: Job "Research Professional" | City: "Chicago" | State: "IL" | Location Channel ID: "1429..."
[2025-11-22T00:38:45.968Z] [BOT] ✅ Created forum post: 🏢 Research Professional @ ORG_541af1c5 Friedman Institute for Economics in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-22T00:38:47.470Z] [BOT] 📝 Marking as posted: JID_b1b18e0b...
  🔍 DEBUG: Set size before add: 5000
[2025-11-22T00:38:47.470Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T00:38:47.471Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_ac5b6bf8
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T00:38:47.472Z] [BOT] 🔍 DEBUG: Temp file written (327285 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T00:38:47.472Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T00:38:47.472Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327285 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T00:38:50.473Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-22T00:38:50.511Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 7
   Timestamp: 2025-11-22T00:38:50.511Z
[2025-11-22T00:38:52.521Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2554) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*