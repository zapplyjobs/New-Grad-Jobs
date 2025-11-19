# Discord Bot Execution Audit
**Timestamp:** 2025-11-19T01:52:03.371Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-19T01:51:27.478Z] ========================================
[2025-11-19T01:51:27.479Z] Discord Bot Execution Log
[2025-11-19T01:51:27.479Z] Environment: GitHub Actions
[2025-11-19T01:51:27.479Z] Node Version: v20.19.5
[2025-11-19T01:51:27.479Z] ========================================
[2025-11-19T01:51:27.479Z] Environment Variables Check:
[2025-11-19T01:51:27.480Z] DISCORD_TOKEN: ✅ Set
[2025-11-19T01:51:27.480Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-19T01:51:27.480Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-19T01:51:27.480Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-19T01:51:27.480Z] 
Multi-Channel Configuration:
[2025-11-19T01:51:27.480Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-19T01:51:27.480Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-19T01:51:27.480Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-19T01:51:27.480Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-19T01:51:27.480Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-19T01:51:27.480Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-19T01:51:27.480Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-19T01:51:27.480Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-19T01:51:27.480Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-19T01:51:27.480Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-19T01:51:27.480Z] 
Data Files Check:
[2025-11-19T01:51:27.481Z] .github/data/new_jobs.json: ✅ Exists (9 items, 13816 bytes)
[2025-11-19T01:51:27.483Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323880 bytes)
[2025-11-19T01:51:27.483Z] 
========================================
[2025-11-19T01:51:27.483Z] Starting Enhanced Discord Bot...
[2025-11-19T01:51:27.483Z] ========================================
[2025-11-19T01:51:27.765Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-19T01:51:27.766Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-19T01:51:28.509Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-19T01:51:28.510Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-19T01:51:28.510Z] [BOT] 📬 Found 8 new jobs (1 already posted)...
[2025-11-19T01:51:28.511Z] [BOT] 📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-19T01:51:28.512Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2025-11-19T01:51:28.512Z] [BOT] 📍 [ROUTING] "Xcode Internals Engineer" @ ORG_f223faa9
[2025-11-19T01:51:28.513Z] [BOT] Category: TECH (matched: "engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:51:28.517Z] [BOT ERROR] (node:2279) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-19T01:51:29.003Z] [BOT] ✅ Created forum post: 🍎 Xcode Internals Engineer @ ORG_f223faa9 in #💻・tech-jobs
[2025-11-19T01:51:29.003Z] [BOT] ✅ Industry: Xcode Internals Engineer @ ORG_f223faa9
[2025-11-19T01:51:30.503Z] [BOT] 🔍 DEBUG: Job "Xcode Internals Engineer" | City: "Cupertino" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:51:30.736Z] [BOT] ✅ Created forum post: 🍎 Xcode Internals Engineer @ ORG_f223faa9 in #🌉・san-francisco
[2025-11-19T01:51:30.736Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-19T01:51:32.236Z] [BOT] 📝 Marking as posted: JID_76dcb772
[2025-11-19T01:51:32.236Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:51:32.237Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T01:51:32.237Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_4fdae3d0
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:51:32.238Z] [BOT] 🔍 DEBUG: Temp file written (323876 bytes)
[2025-11-19T01:51:32.238Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:51:32.238Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:51:32.239Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323876 bytes
[2025-11-19T01:51:32.239Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Virtual Memory Kernel Engineer" @ ORG_f223faa9
   Category: TECH (matched: "engineer")
[2025-11-19T01:51:32.239Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:51:32.643Z] [BOT] ✅ Created forum post: 🍎 Virtual Memory Kernel Engineer @ ORG_f223faa9 in #💻・tech-jobs
  ✅ Industry: Virtual Memory Kernel Engineer @ ORG_f223faa9
[2025-11-19T01:51:34.144Z] [BOT] 🔍 DEBUG: Job "Virtual Memory Kernel Engineer" | City: "Cupertino" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:51:34.343Z] [BOT] ✅ Created forum post: 🍎 Virtual Memory Kernel Engineer @ ORG_f223faa9 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-19T01:51:35.843Z] [BOT] 📝 Marking as posted: JID_14bb821c
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-19T01:51:35.843Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:51:35.844Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T01:51:35.844Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_912321e2
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:51:35.845Z] [BOT] 🔍 DEBUG: Temp file written (323871 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:51:35.845Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:51:35.845Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323871 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:51:35.845Z] [BOT] 📍 [ROUTING] "Applied ML Engineer AI/ML Evaluation & Simulation" @ ORG_f223faa9
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:51:36.052Z] [BOT] ✅ Created forum post: 🍎 Applied ML Engineer AI/ML Evaluation & Simulation @ ORG_f223faa9 in #💻・tech-jobs
  ✅ Industry: Applied ML Engineer AI/ML Evaluation & Simulation @ ORG_f223faa9
[2025-11-19T01:51:37.554Z] [BOT] 🔍 DEBUG: Job "Applied ML Engineer AI/ML Evaluation & Simulation" | City: "Cupertino" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:51:37.818Z] [BOT] ✅ Created forum post: 🍎 Applied ML Engineer AI/ML Evaluation & Simulation @ ORG_f223faa9 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-19T01:51:39.319Z] [BOT] 📝 Marking as posted: JID_dd917650
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T01:51:39.319Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:51:39.319Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_f4433fe9
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:51:39.320Z] [BOT] 🔍 DEBUG: Temp file written (323846 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:51:39.321Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:51:39.321Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323846 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:51:39.321Z] [BOT] 📍 [ROUTING] "Physical Design Engineer - Machine Learning" @ ORG_f223faa9
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:51:39.524Z] [BOT] ✅ Created forum post: 🍎 Physical Design Engineer - Machine Learning @ ORG_f223faa9 in #💻・tech-jobs
  ✅ Industry: Physical Design Engineer - Machine Learning @ ORG_f223faa9
[2025-11-19T01:51:41.024Z] [BOT] 🔍 DEBUG: Job "Physical Design Engineer - Machine Learning" | City: "Sunnyvale" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:51:41.300Z] [BOT] ✅ Created forum post: 🍎 Physical Design Engineer - Machine Learning @ ORG_f223faa9 in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2025-11-19T01:51:42.800Z] [BOT] 📝 Marking as posted: JID_20ea994e
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T01:51:42.800Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:51:42.801Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_95d79959
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:51:42.802Z] [BOT] 🔍 DEBUG: Temp file written (323832 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:51:42.802Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:51:42.803Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323832 bytes
💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Front End Engineer - Apple Data Platforms" @ ORG_f223faa9
   Category: TECH (matched: "data")
[2025-11-19T01:51:42.803Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:51:43.006Z] [BOT] ✅ Created forum post: 🍎 Front End Engineer - Apple Data Platforms @ ORG_f223faa9 in #💻・tech-jobs
  ✅ Industry: Front End Engineer - Apple Data Platforms @ ORG_f223faa9
[2025-11-19T01:51:44.506Z] [BOT] 🔍 DEBUG: Job "Front End Engineer - Apple Data Platforms" | City: "Cupertino" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:51:44.694Z] [BOT] ✅ Created forum post: 🍎 Front End Engineer - Apple Data Platforms @ ORG_f223faa9 in #🌉・san-francisco
[2025-11-19T01:51:44.694Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-19T01:51:46.195Z] [BOT] 📝 Marking as posted: JID_c5a9216d
[2025-11-19T01:51:46.195Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:51:46.195Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T01:51:46.196Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_ccb98742
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:51:46.197Z] [BOT] 🔍 DEBUG: Temp file written (323817 bytes)
[2025-11-19T01:51:46.198Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:51:46.198Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:51:46.198Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323817 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:51:46.198Z] [BOT] 📍 [ROUTING] "Entry Level Software Developer" @ ORG_f7a2cae4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:51:46.391Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Developer @ ORG_f7a2cae4 in #💻・tech-jobs
[2025-11-19T01:51:46.391Z] [BOT] ✅ Industry: Entry Level Software Developer @ ORG_f7a2cae4
[2025-11-19T01:51:47.893Z] [BOT] 🔍 DEBUG: Job "Entry Level Software Developer" | City: "Fredericksburg" | State: "VA" | Location Channel ID: "1429..."
[2025-11-19T01:51:48.211Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Developer @ ORG_f7a2cae4 in #💻・remote-usa
[2025-11-19T01:51:48.212Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-19T01:51:49.713Z] [BOT] 📝 Marking as posted: JID_8147c65c-amentum_...
[2025-11-19T01:51:49.713Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:51:49.714Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T01:51:49.714Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_a2ba6040
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:51:49.715Z] [BOT] 🔍 DEBUG: Temp file written (323881 bytes)
[2025-11-19T01:51:49.715Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:51:49.715Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:51:49.715Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323881 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:51:49.716Z] [BOT] 📍 [ROUTING] "Software Triage Engineer - Siri Attention and Invocation" @ ORG_f223faa9
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:51:50.077Z] [BOT] ✅ Created forum post: 🍎 Software Triage Engineer - Siri Attention and Invocation @ ORG_f223faa9 in #💻・tech-jobs
[2025-11-19T01:51:50.077Z] [BOT] ✅ Industry: Software Triage Engineer - Siri Attention and Invocation @ ORG_f223faa9
[2025-11-19T01:51:51.577Z] [BOT] 🔍 DEBUG: Job "Software Triage Engineer - Siri Attention and Invocation" | City: "Cupertino" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:51:51.873Z] [BOT] ✅ Created forum post: 🍎 Software Triage Engineer - Siri Attention and Invocation @ ORG_f223faa9 in #🌉・san-francisco
[2025-11-19T01:51:51.873Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-19T01:51:53.374Z] [BOT] 📝 Marking as posted: JID_4caf790e
[2025-11-19T01:51:53.374Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:51:53.375Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T01:51:53.375Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_26b531f9
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:51:53.376Z] [BOT] 🔍 DEBUG: Temp file written (323878 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:51:53.376Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:51:53.377Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323878 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:51:53.377Z] [BOT] 📍 [ROUTING] "Integration Engineer" @ ORG_f223faa9
   Category: TECH (matched: "engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:51:53.710Z] [BOT] ✅ Created forum post: 🍎 Integration Engineer @ ORG_f223faa9 in #💻・tech-jobs
[2025-11-19T01:51:53.710Z] [BOT] ✅ Industry: Integration Engineer @ ORG_f223faa9
[2025-11-19T01:51:55.211Z] [BOT] 🔍 DEBUG: Job "Integration Engineer" | City: "Santa Clara" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:51:55.538Z] [BOT] ✅ Created forum post: 🍎 Integration Engineer @ ORG_f223faa9 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-19T01:51:57.039Z] [BOT] 📝 Marking as posted: JID_ff26c509
[2025-11-19T01:51:57.039Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:51:57.040Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T01:51:57.040Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_8c534115
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:51:57.041Z] [BOT] 🔍 DEBUG: Temp file written (323869 bytes)
[2025-11-19T01:51:57.041Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:51:57.041Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:51:57.041Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323869 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:52:00.043Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2025-11-19T01:52:00.043Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-19T01:52:00.082Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 8
   Timestamp: 2025-11-19T01:52:00.081Z
[2025-11-19T01:52:02.090Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2279) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*