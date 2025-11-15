# Discord Bot Execution Audit
**Timestamp:** 2025-11-15T00:04:19.135Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 19
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-15T00:02:47.937Z] ========================================
[2025-11-15T00:02:47.938Z] Discord Bot Execution Log
[2025-11-15T00:02:47.938Z] Environment: GitHub Actions
[2025-11-15T00:02:47.938Z] Node Version: v20.19.5
[2025-11-15T00:02:47.938Z] ========================================
[2025-11-15T00:02:47.938Z] Environment Variables Check:
[2025-11-15T00:02:47.938Z] DISCORD_TOKEN: ✅ Set
[2025-11-15T00:02:47.938Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-15T00:02:47.938Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-15T00:02:47.938Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-15T00:02:47.938Z] 
Multi-Channel Configuration:
[2025-11-15T00:02:47.938Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-15T00:02:47.939Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-15T00:02:47.939Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-15T00:02:47.939Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-15T00:02:47.939Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-15T00:02:47.939Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-15T00:02:47.939Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-15T00:02:47.939Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-15T00:02:47.939Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-15T00:02:47.939Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-15T00:02:47.939Z] 
Data Files Check:
[2025-11-15T00:02:47.940Z] .github/data/new_jobs.json: ✅ Exists (21 items, 124431 bytes)
[2025-11-15T00:02:47.942Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 321493 bytes)
[2025-11-15T00:02:47.942Z] 
========================================
[2025-11-15T00:02:47.942Z] Starting Enhanced Discord Bot...
[2025-11-15T00:02:47.942Z] ========================================
[2025-11-15T00:02:48.223Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-15T00:02:48.223Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-15T00:02:49.044Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-15T00:02:49.046Z] [BOT] ⏭️ Skipping already posted (legacy ID): Entry Level - C Software Developer at mthree
[2025-11-15T00:02:49.046Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
📬 Found 19 new jobs (2 already posted)...
[2025-11-15T00:02:49.046Z] [BOT] 📤 Posting 19 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-15T00:02:49.049Z] [BOT] 📌 Posting 5 jobs to #📣・marketing-jobs
[2025-11-15T00:02:49.053Z] [BOT ERROR] (node:2884) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-15T00:02:49.250Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bbacffd9 in #📣・marketing-jobs
  ✅ Industry: Software Engineer 1 @ ORG_bbacffd9
[2025-11-15T00:02:50.752Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "Atlanta" | State: "GA" | Location Channel ID: "1429..."
[2025-11-15T00:02:51.055Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bbacffd9 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-15T00:02:52.555Z] [BOT] 📝 Marking as posted: JID_b69ed3c9-cox_external_c...
[2025-11-15T00:02:52.556Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:02:52.556Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_56ab580e
[2025-11-15T00:02:52.556Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:02:52.557Z] [BOT] 🔍 DEBUG: Temp file written (321547 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:02:52.558Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:02:52.558Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321547 bytes
[2025-11-15T00:02:52.558Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-15T00:02:52.868Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 @ ORG_bbacffd9 in #📣・marketing-jobs
  ✅ Industry: Data Engineer 1 @ ORG_bbacffd9
[2025-11-15T00:02:54.369Z] [BOT] 🔍 DEBUG: Job "Data Engineer 1" | City: "Austin" | State: "TX" | Location Channel ID: "1429..."
[2025-11-15T00:02:54.692Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 @ ORG_bbacffd9 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-15T00:02:56.192Z] [BOT] 📝 Marking as posted: JID_b69ed3c9-cox_external_c...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-15T00:02:56.192Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:02:56.193Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_599122ad
[2025-11-15T00:02:56.193Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:02:56.194Z] [BOT] 🔍 DEBUG: Temp file written (321579 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:02:56.194Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:02:56.194Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321579 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:02:57.045Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #📣・marketing-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-11-15T00:02:58.546Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "San Diego" | State: "CA" | Location Channel ID: "1429..."
[2025-11-15T00:02:58.913Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-15T00:03:00.415Z] [BOT] 📝 Marking as posted: JID_4d47c749...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:03:00.415Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:03:00.415Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_183f1d8c
[2025-11-15T00:03:00.415Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:03:00.417Z] [BOT] 🔍 DEBUG: Temp file written (321587 bytes)
[2025-11-15T00:03:00.417Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:03:00.417Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:03:00.417Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321587 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:03:00.654Z] [BOT] ✅ Created forum post: 🏢 Data Collection Operator 1 @ ORG_9ad28ad4 Technology in #📣・marketing-jobs
[2025-11-15T00:03:00.654Z] [BOT] ✅ Industry: Data Collection Operator 1 @ ORG_9ad28ad4 Technology
[2025-11-15T00:03:02.155Z] [BOT] 🔍 DEBUG: Job "Data Collection Operator 1" | City: "SF" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-15T00:03:02.341Z] [BOT] ✅ Created forum post: 🏢 Data Collection Operator 1 @ ORG_9ad28ad4 Technology in #🌉・san-francisco
[2025-11-15T00:03:02.341Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-15T00:03:03.841Z] [BOT] 📝 Marking as posted: JID_b465b69d...
[2025-11-15T00:03:03.842Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:03:03.842Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T00:03:03.842Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_28aebc3e
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:03:03.843Z] [BOT] 🔍 DEBUG: Temp file written (321578 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:03:03.844Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:03:03.844Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321578 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:03:04.075Z] [BOT] ✅ Created forum post: 🏢 Data Collection Operator 2 @ ORG_9ad28ad4 Technology in #📣・marketing-jobs
[2025-11-15T00:03:04.075Z] [BOT] ✅ Industry: Data Collection Operator 2 @ ORG_9ad28ad4 Technology
[2025-11-15T00:03:05.576Z] [BOT] 🔍 DEBUG: Job "Data Collection Operator 2" | City: "SF" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-15T00:03:05.764Z] [BOT] ✅ Created forum post: 🏢 Data Collection Operator 2 @ ORG_9ad28ad4 Technology in #🌉・san-francisco
[2025-11-15T00:03:05.764Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-15T00:03:07.266Z] [BOT] 📝 Marking as posted: JID_b465b69d...
[2025-11-15T00:03:07.266Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:03:07.266Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T00:03:07.266Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_23839742
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:03:07.267Z] [BOT] 🔍 DEBUG: Temp file written (321578 bytes)
[2025-11-15T00:03:07.267Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:03:07.268Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:03:07.268Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321578 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:03:10.269Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-15T00:03:10.490Z] [BOT] ✅ Created forum post: 🔵 Optical Scientist – PhD Grad - Computational Optics @ ORG_4f749de7 in #💻・tech-jobs
  ✅ Industry: Optical Scientist – PhD Grad - Computational Optics @ ORG_4f749de7
[2025-11-15T00:03:11.991Z] [BOT] 🔍 DEBUG: Job "Optical Scientist – PhD Grad - Computational Optics" | City: "Redmond" | State: "WA" | Location Channel ID: "1429..."
[2025-11-15T00:03:12.218Z] [BOT] ✅ Created forum post: 🔵 Optical Scientist – PhD Grad - Computational Optics @ ORG_4f749de7 in #🖥️・redmond
  ✅ Location: 🖥️・redmond
[2025-11-15T00:03:13.718Z] [BOT] 📝 Marking as posted: JID_a740726c...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:03:13.718Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:03:13.719Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_51bc10d5
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:03:13.721Z] [BOT] 🔍 DEBUG: Temp file written (321564 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:03:13.721Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:03:13.721Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321564 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:03:14.020Z] [BOT] ✅ Created forum post: 🔵 AI Specialist - Product and Applied Research @ ORG_4f749de7 in #💻・tech-jobs
  ✅ Industry: AI Specialist - Product and Applied Research @ ORG_4f749de7
[2025-11-15T00:03:15.521Z] [BOT] 🔍 DEBUG: Job "AI Specialist - Product and Applied Research" | City: "Menlo Park" | State: "CA" | Location Channel ID: "1429..."
[2025-11-15T00:03:15.697Z] [BOT] ✅ Created forum post: 🔵 AI Specialist - Product and Applied Research @ ORG_4f749de7 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-15T00:03:17.198Z] [BOT] 📝 Marking as posted: JID_7596d3eb
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:03:17.198Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:03:17.199Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T00:03:17.199Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_f45735b1
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:03:17.200Z] [BOT] 🔍 DEBUG: Temp file written (321546 bytes)
[2025-11-15T00:03:17.200Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:03:17.200Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:03:17.200Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321546 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:03:17.575Z] [BOT] ✅ Created forum post: 🏢 Consultant Graduate Developer @ ORG_52a2e2f0 in #💻・tech-jobs
  ✅ Industry: Consultant Graduate Developer @ ORG_52a2e2f0
[2025-11-15T00:03:19.075Z] [BOT] 🔍 DEBUG: Job "Consultant Graduate Developer" | City: "Chicago" | State: "IL" | Location Channel ID: "1429..."
[2025-11-15T00:03:19.545Z] [BOT] ✅ Created forum post: 🏢 Consultant Graduate Developer @ ORG_52a2e2f0 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-15T00:03:21.047Z] [BOT] 📝 Marking as posted: JID_4ef69130...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:03:21.047Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:03:21.047Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_584ed5ab
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:03:21.049Z] [BOT] 🔍 DEBUG: Temp file written (321528 bytes)
[2025-11-15T00:03:21.049Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:03:21.049Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:03:21.049Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321528 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:03:24.050Z] [BOT] 📌 Posting 4 jobs to #🩺・healthcare-jobs
[2025-11-15T00:03:24.871Z] [BOT] ✅ Created forum post: 🏢 Data Reporting Analyst @ ORG_ae835968 NJ Health in #🩺・healthcare-jobs
  ✅ Industry: Data Reporting Analyst @ ORG_ae835968 NJ Health
[2025-11-15T00:03:26.372Z] [BOT] 🔍 DEBUG: Job "Data Reporting Analyst" | City: "Newark" | State: "NJ" | Location Channel ID: "1429..."
[2025-11-15T00:03:26.797Z] [BOT] ✅ Created forum post: 🏢 Data Reporting Analyst @ ORG_ae835968 NJ Health in #🗽・new-york
[2025-11-15T00:03:26.797Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-15T00:03:28.297Z] [BOT] 📝 Marking as posted: JID_9ce21bd7...
[2025-11-15T00:03:28.297Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:03:28.298Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T00:03:28.298Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_36f68449
[2025-11-15T00:03:28.298Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:03:28.299Z] [BOT] 🔍 DEBUG: Temp file written (321552 bytes)
[2025-11-15T00:03:28.299Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:03:28.300Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:03:28.300Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321552 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:03:28.551Z] [BOT] ✅ Created forum post: 🏢 Qlik Developer @ ORG_101c2b5a Solutions in #🩺・healthcare-jobs
  ✅ Industry: Qlik Developer @ ORG_101c2b5a Solutions
[2025-11-15T00:03:30.053Z] [BOT] 🔍 DEBUG: Job "Qlik Developer" | City: "Remote in USA" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-15T00:03:30.235Z] [BOT] ✅ Created forum post: 🏢 Qlik Developer @ ORG_101c2b5a Solutions in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-15T00:03:31.736Z] [BOT] 📝 Marking as posted: JID_ad744317...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:03:31.737Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:03:31.737Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_8e942df2
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:03:31.738Z] [BOT] 🔍 DEBUG: Temp file written (321525 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:03:31.739Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:03:31.739Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321525 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:03:32.001Z] [BOT] ✅ Created forum post: 🏢 Software Configuration Analyst Level 2 - Aht @ ORG_f3f2248d Grumman in #🩺・healthcare-jobs
  ✅ Industry: Software Configuration Analyst Level 2 - Aht @ ORG_f3f2248d Grumman
[2025-11-15T00:03:33.501Z] [BOT] 🔍 DEBUG: Job "Software Configuration Analyst Level 2 - Aht" | City: "Northridge" | State: "LA" | Location Channel ID: "1429..."
[2025-11-15T00:03:33.691Z] [BOT] ✅ Created forum post: 🏢 Software Configuration Analyst Level 2 - Aht @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-15T00:03:35.192Z] [BOT] 📝 Marking as posted: JID_e3128470-northrop_grumm...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-15T00:03:35.192Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:03:35.193Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_162ea292
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:03:35.194Z] [BOT] 🔍 DEBUG: Temp file written (321607 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:03:35.195Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:03:35.195Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321607 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:03:35.483Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_9d38443e of Chicago in #🩺・healthcare-jobs
  ✅ Industry: Data Analyst @ ORG_9d38443e of Chicago
[2025-11-15T00:03:36.983Z] [BOT] 🔍 DEBUG: Job "Data Analyst" | City: "Chicago" | State: "IL" | Location Channel ID: "1429..."
[2025-11-15T00:03:37.251Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-15T00:03:38.752Z] [BOT] 📝 Marking as posted: JID_96a99c4b-...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:03:38.752Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:03:38.752Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T00:03:38.752Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_2120146f
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:03:38.753Z] [BOT] 🔍 DEBUG: Temp file written (321626 bytes)
[2025-11-15T00:03:38.753Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:03:38.754Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:03:38.754Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321626 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:03:41.754Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2025-11-15T00:03:42.076Z] [BOT] ✅ Created forum post: 🏢 Software Engineering - Associate @ ORG_d6d2009d in #📁・JID_e938df7b
  ✅ Industry: Software Engineering - Associate @ ORG_d6d2009d
[2025-11-15T00:03:43.576Z] [BOT] 🔍 DEBUG: Job "Software Engineering - Associate" | City: "Reston" | State: "VA" | Location Channel ID: "1429..."
[2025-11-15T00:03:43.879Z] [BOT] ✅ Created forum post: 🏢 Software Engineering - Associate @ ORG_d6d2009d in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-15T00:03:45.380Z] [BOT] 📝 Marking as posted: JID_c239dd63...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:03:45.380Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:03:45.381Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T00:03:45.381Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_6fb8144d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:03:45.382Z] [BOT] 🔍 DEBUG: Temp file written (321601 bytes)
[2025-11-15T00:03:45.383Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:03:45.383Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:03:45.383Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321601 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:03:45.659Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer 1 @ ORG_0bbe3cb1 in #📁・JID_e938df7b
  ✅ Industry: Machine Learning Engineer 1 @ ORG_0bbe3cb1
[2025-11-15T00:03:47.161Z] [BOT] 🔍 DEBUG: Job "Machine Learning Engineer 1" | City: "Mountain View" | State: "CA" | Location Channel ID: "1429..."
[2025-11-15T00:03:47.373Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-11-15T00:03:48.873Z] [BOT] 📝 Marking as posted: JID_0511c909...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:03:48.873Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:03:48.874Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_85998de9
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:03:48.875Z] [BOT] 🔍 DEBUG: Temp file written (321620 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:03:48.875Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:03:48.876Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321620 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:03:51.877Z] [BOT] 📌 Posting 3 jobs to #💰・finance-jobs
[2025-11-15T00:03:52.220Z] [BOT] ✅ Created forum post: 🏢 Enterprise Systems - Technology & Engineer Fellow @ ORG_8edcbe2c Transportation Authority in #💰・finance-jobs
  ✅ Industry: Enterprise Systems - Technology & Engineer Fellow @ ORG_8edcbe2c Transportation Authority
[2025-11-15T00:03:53.721Z] [BOT] 🔍 DEBUG: Job "Enterprise Systems - Technology & Engineer Fellow" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-15T00:03:54.006Z] [BOT] ✅ Created forum post: 🏢 Enterprise Systems - Technology & Engineer Fellow @ ORG_8edcbe2c Transportation Authority in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-15T00:03:55.507Z] [BOT] 📝 Marking as posted: JID_e0a2dd37...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:03:55.507Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:03:55.507Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T00:03:55.507Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_b7c56f59
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:03:55.508Z] [BOT] 🔍 DEBUG: Temp file written (321635 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:03:55.509Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:03:55.509Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321635 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:03:55.748Z] [BOT] ✅ Created forum post: 🏢 Linux/Windows Systems Administrator @ ORG_f3f2248d Grumman in #💰・finance-jobs
  ✅ Industry: Linux/Windows Systems Administrator @ ORG_f3f2248d Grumman
[2025-11-15T00:03:57.249Z] [BOT] 🔍 DEBUG: Job "Linux/Windows Systems Administrator" | City: "Palmdale" | State: "CA" | Location Channel ID: "1429..."
[2025-11-15T00:03:57.511Z] [BOT] ✅ Created forum post: 🏢 Linux/Windows Systems Administrator @ ORG_f3f2248d Grumman in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-15T00:03:59.012Z] [BOT] 📝 Marking as posted: JID_e3128470-northrop_grumm...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:03:59.012Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:03:59.013Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_d673c8a7
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:03:59.014Z] [BOT] 🔍 DEBUG: Temp file written (321727 bytes)
[2025-11-15T00:03:59.014Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:03:59.014Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:03:59.015Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321727 bytes
[2025-11-15T00:03:59.015Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-15T00:03:59.366Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) in #💰・finance-jobs
  ✅ Industry: Postdoctoral Researcher @ ORG_0aa5052d State University (LSU)
[2025-11-15T00:04:00.867Z] [BOT] 🔍 DEBUG: Job "Postdoctoral Researcher" | City: "Baton Rouge" | State: "LA" | Location Channel ID: "1429..."
[2025-11-15T00:04:01.194Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-15T00:04:02.694Z] [BOT] 📝 Marking as posted: JID_92b0d196...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:04:02.694Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:04:02.695Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_b9b73e79
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:04:02.696Z] [BOT] 🔍 DEBUG: Temp file written (321750 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:04:02.696Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:04:02.696Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321750 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:04:05.697Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2025-11-15T00:04:06.160Z] [BOT] ✅ Created forum post: 🏢 Data & Analytics Development Program 2 - 2026a - Data and Analytics (CA) @ ORG_a8cfcd74 Deere in #💲・sales-jobs
  ✅ Industry: Data & Analytics Development Program 2 - 2026a - Data and Analytics (CA) @ ORG_a8cfcd74 Deere
[2025-11-15T00:04:07.663Z] [BOT] 🔍 DEBUG: Job "Data & Analytics Development Program 2 - 2026a - Data and Analytics (CA)" | City: "Grimes" | State: "IA" | Location Channel ID: "1429..."
[2025-11-15T00:04:07.871Z] [BOT] ✅ Created forum post: 🏢 Data & Analytics Development Program 2 - 2026a - Data and Analytics (CA) @ ORG_a8cfcd74 Deere in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-15T00:04:09.372Z] [BOT] 📝 Marking as posted: JID_53e4ac2d...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:04:09.372Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:04:09.372Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T00:04:09.372Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_4a476397
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:04:09.373Z] [BOT] 🔍 DEBUG: Temp file written (321748 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:04:09.374Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:04:09.374Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321748 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:04:09.604Z] [BOT] ✅ Created forum post: 🏢 Data & Analytics Development Program 1 2026a - Data and Analytics (CA) @ ORG_a8cfcd74 Deere in #💲・sales-jobs
  ✅ Industry: Data & Analytics Development Program 1 2026a - Data and Analytics (CA) @ ORG_a8cfcd74 Deere
[2025-11-15T00:04:11.105Z] [BOT] 🔍 DEBUG: Job "Data & Analytics Development Program 1 2026a - Data and Analytics (CA)" | City: "Grimes" | State: "IA" | Location Channel ID: "1429..."
[2025-11-15T00:04:11.386Z] [BOT] ✅ Created forum post: 🏢 Data & Analytics Development Program 1 2026a - Data and Analytics (CA) @ ORG_a8cfcd74 Deere in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-15T00:04:12.886Z] [BOT] 📝 Marking as posted: JID_53e4ac2d...
[2025-11-15T00:04:12.886Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:04:12.887Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_0ad81ea4
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:04:12.889Z] [BOT] 🔍 DEBUG: Temp file written (321748 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:04:12.889Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:04:12.889Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321748 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:04:15.890Z] [BOT] 🎉 Posting complete! Successfully posted: 19, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-15T00:04:17.900Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2884) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*