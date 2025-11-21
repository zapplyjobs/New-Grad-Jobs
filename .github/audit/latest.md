# Discord Bot Execution Audit
**Timestamp:** 2025-11-21T01:09:23.466Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 12
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-21T01:08:28.899Z] ========================================
[2025-11-21T01:08:28.900Z] Discord Bot Execution Log
[2025-11-21T01:08:28.900Z] Environment: GitHub Actions
[2025-11-21T01:08:28.900Z] Node Version: v20.19.5
[2025-11-21T01:08:28.900Z] ========================================
[2025-11-21T01:08:28.900Z] Environment Variables Check:
[2025-11-21T01:08:28.900Z] DISCORD_TOKEN: ✅ Set
[2025-11-21T01:08:28.900Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-21T01:08:28.900Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-21T01:08:28.900Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-21T01:08:28.900Z] 
Multi-Channel Configuration:
[2025-11-21T01:08:28.900Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-21T01:08:28.900Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-21T01:08:28.900Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-21T01:08:28.900Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-21T01:08:28.900Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-21T01:08:28.900Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-21T01:08:28.901Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-21T01:08:28.901Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-21T01:08:28.901Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-21T01:08:28.901Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-21T01:08:28.901Z] 
Data Files Check:
[2025-11-21T01:08:28.901Z] .github/data/new_jobs.json: ✅ Exists (14 items, 72499 bytes)
[2025-11-21T01:08:28.903Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 325762 bytes)
[2025-11-21T01:08:28.903Z] 
========================================
[2025-11-21T01:08:28.903Z] Starting Enhanced Discord Bot...
[2025-11-21T01:08:28.903Z] ========================================
[2025-11-21T01:08:29.176Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-21T01:08:29.177Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-21T01:08:29.837Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-21T01:08:29.838Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-21T01:08:29.838Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 12 new jobs (2 already posted)...
📤 Posting 12 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-21T01:08:29.842Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-21T01:08:29.842Z] [BOT] 📍 [ROUTING] "Medical Informatics Analyst - IT" @ ORG_03419b97
[2025-11-21T01:08:29.842Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-21T01:08:29.847Z] [BOT ERROR] (node:3171) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-21T01:08:30.019Z] [BOT] ✅ Created forum post: 🏢 Medical Informatics Analyst - IT @ ORG_03419b97 in #🩺・healthcare-jobs
  ✅ Industry: Medical Informatics Analyst - IT @ ORG_03419b97
[2025-11-21T01:08:31.521Z] [BOT] 🔍 DEBUG: Job "Medical Informatics Analyst - IT" | City: "Denver" | State: "CO" | Location Channel ID: "1429..."
[2025-11-21T01:08:31.720Z] [BOT] ✅ Created forum post: 🏢 Medical Informatics Analyst - IT @ ORG_03419b97 in #💻・remote-usa
[2025-11-21T01:08:31.720Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-21T01:08:33.220Z] [BOT] 📝 Marking as posted: JID_e2bf8ab8-dkc_externa...
[2025-11-21T01:08:33.220Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T01:08:33.220Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T01:08:33.220Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e32e938c
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T01:08:33.222Z] [BOT] 🔍 DEBUG: Temp file written (325837 bytes)
[2025-11-21T01:08:33.222Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T01:08:33.222Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T01:08:33.222Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325837 bytes
[2025-11-21T01:08:33.222Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-21T01:08:36.223Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2025-11-21T01:08:36.223Z] [BOT] 📍 [ROUTING] "Graduate University Engineer - Machine Learning Engineer" @ ORG_72fd3ae0
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T01:08:36.737Z] [BOT] ✅ Created forum post: 🎨 Graduate University Engineer - Machine Learning Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2025-11-21T01:08:36.737Z] [BOT] ✅ Industry: Graduate University Engineer - Machine Learning Engineer @ ORG_72fd3ae0
[2025-11-21T01:08:38.238Z] [BOT] 🔍 DEBUG: Job "Graduate University Engineer - Machine Learning Engineer" | City: "San Jose" | State: "CA" | Location Channel ID: "1429..."
[2025-11-21T01:08:38.591Z] [BOT] ✅ Created forum post: 🎨 Graduate University Engineer - Machine Learning Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-21T01:08:40.090Z] [BOT] 📝 Marking as posted: JID_70c4903f-external_exp...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T01:08:40.091Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T01:08:40.091Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_c966037a
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T01:08:40.093Z] [BOT] 🔍 DEBUG: Temp file written (325926 bytes)
[2025-11-21T01:08:40.093Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T01:08:40.093Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T01:08:40.093Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325926 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T01:08:40.093Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_5aed45c1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T01:08:40.270Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_5aed45c1 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_5aed45c1
[2025-11-21T01:08:41.770Z] [BOT] 🔍 DEBUG: Job "Software Engineer" | City: "Columbus" | State: "OH" | Location Channel ID: "1429..."
[2025-11-21T01:08:41.910Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_5aed45c1 in #💻・remote-usa
[2025-11-21T01:08:41.910Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-21T01:08:43.411Z] [BOT] 📝 Marking as posted: JID_06ad76be...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T01:08:43.411Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T01:08:43.411Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_8e184071
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T01:08:43.412Z] [BOT] 🔍 DEBUG: Temp file written (326001 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T01:08:43.413Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T01:08:43.413Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326001 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T01:08:43.413Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ T-Mobile
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T01:08:43.646Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ T-Mobile in #💻・tech-jobs
[2025-11-21T01:08:43.646Z] [BOT] ✅ Industry: Associate Software Engineer @ T-Mobile
[2025-11-21T01:08:45.146Z] [BOT] 🔍 DEBUG: Job "Associate Software Engineer" | City: "Atlanta" | State: "GA" | Location Channel ID: "1429..."
[2025-11-21T01:08:45.291Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ T-Mobile in #💻・remote-usa
[2025-11-21T01:08:45.291Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-21T01:08:46.792Z] [BOT] 📝 Marking as posted: JID_ffa4b8c2...
[2025-11-21T01:08:46.792Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T01:08:46.793Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T01:08:46.793Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_8e7d2157
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T01:08:46.794Z] [BOT] 🔍 DEBUG: Temp file written (326038 bytes)
[2025-11-21T01:08:46.795Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T01:08:46.795Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T01:08:46.795Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326038 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T01:08:46.795Z] [BOT] 📍 [ROUTING] "Machine Learning Operations Engineer 2" @ ORG_b3910ba4 financial
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T01:08:46.957Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Operations Engineer 2 @ ORG_b3910ba4 financial in #💻・tech-jobs
[2025-11-21T01:08:46.957Z] [BOT] ✅ Industry: Machine Learning Operations Engineer 2 @ ORG_b3910ba4 financial
[2025-11-21T01:08:48.458Z] [BOT] 🔍 DEBUG: Job "Machine Learning Operations Engineer 2" | City: "Arlington" | State: "TX" | Location Channel ID: "1429..."
[2025-11-21T01:08:48.616Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Operations Engineer 2 @ ORG_b3910ba4 financial in #🤠・austin
[2025-11-21T01:08:48.616Z] [BOT] ✅ Location: 🤠・austin
[2025-11-21T01:08:50.117Z] [BOT] 📝 Marking as posted: JID_b1636b37...
[2025-11-21T01:08:50.117Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T01:08:50.118Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T01:08:50.118Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_7538b8f9
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T01:08:50.119Z] [BOT] 🔍 DEBUG: Temp file written (326076 bytes)
[2025-11-21T01:08:50.119Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T01:08:50.119Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T01:08:50.119Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326076 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T01:08:50.120Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_18fd6657
   Category: TECH (matched: "software")
[2025-11-21T01:08:50.120Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T01:08:50.285Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_18fd6657 in #💻・tech-jobs
[2025-11-21T01:08:50.285Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_18fd6657
[2025-11-21T01:08:51.785Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T01:08:52.536Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_18fd6657 in #🗽・new-york
[2025-11-21T01:08:52.536Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-21T01:08:54.037Z] [BOT] 📝 Marking as posted: JID_bfa8d968...
[2025-11-21T01:08:54.037Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T01:08:54.038Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T01:08:54.038Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_c2e4f72e
[2025-11-21T01:08:54.038Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T01:08:54.040Z] [BOT] 🔍 DEBUG: Temp file written (326097 bytes)
[2025-11-21T01:08:54.040Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T01:08:54.040Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T01:08:54.040Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326097 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T01:08:54.040Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_676c471b of America
   Category: TECH (matched: "software")
[2025-11-21T01:08:54.040Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T01:08:54.261Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_676c471b of America in #💻・tech-jobs
[2025-11-21T01:08:54.262Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_676c471b of America
[2025-11-21T01:08:55.763Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "Plano" | State: "TX" | Location Channel ID: "1429..."
[2025-11-21T01:08:56.039Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_676c471b of America in #🤠・austin
[2025-11-21T01:08:56.039Z] [BOT] ✅ Location: 🤠・austin
[2025-11-21T01:08:57.540Z] [BOT] 📝 Marking as posted: JID_8cc63837-...
[2025-11-21T01:08:57.540Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T01:08:57.541Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T01:08:57.541Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_ae0ee239
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T01:08:57.542Z] [BOT] 🔍 DEBUG: Temp file written (326129 bytes)
[2025-11-21T01:08:57.542Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T01:08:57.543Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T01:08:57.543Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326129 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T01:08:57.543Z] [BOT] 📍 [ROUTING] "Analyst  Data Management - Fixed Income Indices" @ ORG_e82c1600 Global 
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T01:08:57.714Z] [BOT] ✅ Created forum post: 🏢 Analyst  Data Management - Fixed Income Indices @ ORG_e82c1600 Global  in #💻・tech-jobs
[2025-11-21T01:08:57.714Z] [BOT] ✅ Industry: Analyst  Data Management - Fixed Income Indices @ ORG_e82c1600 Global
[2025-11-21T01:08:59.215Z] [BOT] 🔍 DEBUG: Job "Analyst  Data Management - Fixed Income Indices" | City: "Dallas" | State: "TX" | Location Channel ID: "1429..."
[2025-11-21T01:08:59.332Z] [BOT] ✅ Created forum post: 🏢 Analyst  Data Management - Fixed Income Indices @ ORG_e82c1600 Global  in #🤠・austin
[2025-11-21T01:08:59.333Z] [BOT] ✅ Location: 🤠・austin
[2025-11-21T01:09:00.834Z] [BOT] 📝 Marking as posted: JID_fa62ea1b-spgi_ca...
[2025-11-21T01:09:00.834Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T01:09:00.835Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T01:09:00.835Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_bb2fcd8d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T01:09:00.836Z] [BOT] 🔍 DEBUG: Temp file written (326178 bytes)
[2025-11-21T01:09:00.836Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T01:09:00.836Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T01:09:00.836Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326178 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T01:09:00.836Z] [BOT] 📍 [ROUTING] "Data Scientist 1" @ ORG_c7abfa48 Warning
   Category: TECH (matched: "data")
[2025-11-21T01:09:00.836Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T01:09:01.183Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_c7abfa48 Warning in #💻・tech-jobs
[2025-11-21T01:09:01.183Z] [BOT] ✅ Industry: Data Scientist 1 @ ORG_c7abfa48 Warning
[2025-11-21T01:09:02.684Z] [BOT] 🔍 DEBUG: Job "Data Scientist 1" | City: "SF" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T01:09:02.905Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_c7abfa48 Warning in #🌉・san-francisco
[2025-11-21T01:09:02.905Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-21T01:09:04.406Z] [BOT] 📝 Marking as posted: JID_fc9f851e...
[2025-11-21T01:09:04.406Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T01:09:04.407Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T01:09:04.407Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_6e008457
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T01:09:04.408Z] [BOT] 🔍 DEBUG: Temp file written (326217 bytes)
[2025-11-21T01:09:04.408Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T01:09:04.409Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T01:09:04.409Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326217 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T01:09:04.409Z] [BOT] 📍 [ROUTING] "Associate Software Support" @ DuCharme, McMillen & Associates
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T01:09:04.649Z] [BOT] ✅ Created forum post: 🏢 Associate Software Support @ DuCharme, McMillen & Associates in #💻・tech-jobs
[2025-11-21T01:09:04.650Z] [BOT] ✅ Industry: Associate Software Support @ DuCharme, McMillen & Associates
[2025-11-21T01:09:06.151Z] [BOT] 🔍 DEBUG: Job "Associate Software Support" | City: "Fort Wayne" | State: "IN" | Location Channel ID: "1429..."
[2025-11-21T01:09:06.489Z] [BOT] ✅ Created forum post: 🏢 Associate Software Support @ DuCharme, McMillen & Associates in #💻・remote-usa
[2025-11-21T01:09:06.489Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-21T01:09:07.989Z] [BOT] 📝 Marking as posted: JID_733d1781...
[2025-11-21T01:09:07.989Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T01:09:07.989Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T01:09:07.990Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T01:09:07.990Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_10292251
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T01:09:07.991Z] [BOT] 🔍 DEBUG: Temp file written (326243 bytes)
[2025-11-21T01:09:07.991Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T01:09:07.991Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T01:09:07.991Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326243 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T01:09:10.992Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2025-11-21T01:09:10.992Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Coastal-urban Flooding" @ ORG_a867f63f National Laboratory
   Category: HR (matched: "benefits")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-21T01:09:11.196Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Coastal-urban Flooding @ ORG_a867f63f National Laboratory in #📁・JID_e938df7b
[2025-11-21T01:09:11.197Z] [BOT] ✅ Industry: Postdoctoral Appointee - Coastal-urban Flooding @ ORG_a867f63f National Laboratory
[2025-11-21T01:09:12.698Z] [BOT] 🔍 DEBUG: Job "Postdoctoral Appointee - Coastal-urban Flooding" | City: "Woodridge" | State: "IL" | Location Channel ID: "1429..."
[2025-11-21T01:09:12.911Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Coastal-urban Flooding @ ORG_a867f63f National Laboratory in #🌆・chicago
[2025-11-21T01:09:12.911Z] [BOT] ✅ Location: 🌆・chicago
[2025-11-21T01:09:14.413Z] [BOT] 📝 Marking as posted: JID_ce2c0c1d-argonne_ca...
[2025-11-21T01:09:14.413Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T01:09:14.413Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T01:09:14.414Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T01:09:14.414Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_4be5397a
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T01:09:14.415Z] [BOT] 🔍 DEBUG: Temp file written (326305 bytes)
[2025-11-21T01:09:14.415Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T01:09:14.415Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T01:09:14.415Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326305 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T01:09:14.415Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - MSD Computational Materials" @ ORG_a867f63f National Laboratory
   Category: HR (matched: "hr")
[2025-11-21T01:09:14.415Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-21T01:09:14.554Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - MSD Computational Materials @ ORG_a867f63f National Laboratory in #📁・JID_e938df7b
[2025-11-21T01:09:14.555Z] [BOT] ✅ Industry: Postdoctoral Appointee - MSD Computational Materials @ ORG_a867f63f National Laboratory
[2025-11-21T01:09:16.054Z] [BOT] 🔍 DEBUG: Job "Postdoctoral Appointee - MSD Computational Materials" | City: "Woodridge" | State: "IL" | Location Channel ID: "1429..."
[2025-11-21T01:09:16.277Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - MSD Computational Materials @ ORG_a867f63f National Laboratory in #🌆・chicago
[2025-11-21T01:09:16.277Z] [BOT] ✅ Location: 🌆・chicago
[2025-11-21T01:09:17.777Z] [BOT] 📝 Marking as posted: JID_ce2c0c1d-argonne_ca...
[2025-11-21T01:09:17.777Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T01:09:17.778Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T01:09:17.778Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_bdf49b55
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T01:09:17.780Z] [BOT] 🔍 DEBUG: Temp file written (326366 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T01:09:17.780Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T01:09:17.780Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326366 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T01:09:20.781Z] [BOT] 🎉 Posting complete! Successfully posted: 12, Failed: 0
[2025-11-21T01:09:20.781Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-21T01:09:20.819Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
[2025-11-21T01:09:20.819Z] [BOT] Total entries: 12
   Timestamp: 2025-11-21T01:09:20.819Z
[2025-11-21T01:09:22.829Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:3171) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*