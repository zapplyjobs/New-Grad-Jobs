# Discord Bot Execution Audit
**Timestamp:** 2025-11-14T23:34:51.422Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 50
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-14T23:28:02.310Z] ========================================
[2025-11-14T23:28:02.311Z] Discord Bot Execution Log
[2025-11-14T23:28:02.311Z] Environment: GitHub Actions
[2025-11-14T23:28:02.311Z] Node Version: v20.19.5
[2025-11-14T23:28:02.311Z] ========================================
[2025-11-14T23:28:02.311Z] Environment Variables Check:
[2025-11-14T23:28:02.311Z] DISCORD_TOKEN: ✅ Set
[2025-11-14T23:28:02.311Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-14T23:28:02.311Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-14T23:28:02.311Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-14T23:28:02.311Z] 
Multi-Channel Configuration:
[2025-11-14T23:28:02.312Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-14T23:28:02.312Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-14T23:28:02.312Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-14T23:28:02.312Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-14T23:28:02.312Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-14T23:28:02.312Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-14T23:28:02.312Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-14T23:28:02.312Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-14T23:28:02.312Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-14T23:28:02.312Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-14T23:28:02.312Z] 
Data Files Check:
[2025-11-14T23:28:02.317Z] .github/data/new_jobs.json: ✅ Exists (129 items, 706701 bytes)
[2025-11-14T23:28:02.318Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 318032 bytes)
[2025-11-14T23:28:02.318Z] 
========================================
[2025-11-14T23:28:02.318Z] Starting Enhanced Discord Bot...
[2025-11-14T23:28:02.318Z] ========================================
[2025-11-14T23:28:02.585Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-14T23:28:02.586Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-14T23:28:03.279Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-14T23:28:03.283Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-14T23:28:03.284Z] [BOT] 📬 Found 128 new jobs (1 already posted)...
[2025-11-14T23:28:03.284Z] [BOT] ⏸️ Limiting to 50 jobs this run, 78 deferred for next run
📤 Posting 50 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-14T23:28:03.287Z] [BOT] 📌 Posting 7 jobs to #📁・JID_e938df7b
[2025-11-14T23:28:03.292Z] [BOT ERROR] (node:10127) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-14T23:28:03.546Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_07467eb4 BlueShield of Tennessee in #📁・JID_e938df7b
[2025-11-14T23:28:03.546Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_07467eb4 BlueShield of Tennessee
[2025-11-14T23:28:05.048Z] [BOT] 🔍 DEBUG: Job "Associate Software Engineer" | City: "Chattanooga" | State: "TN" | Location Channel ID: "1429..."
[2025-11-14T23:28:05.223Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_07467eb4 BlueShield of Tennessee in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:28:06.725Z] [BOT] 📝 Marking as posted: JID_ff418660...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:28:06.725Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:28:06.725Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_acae9fa4
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:28:06.726Z] [BOT] 🔍 DEBUG: Temp file written (318084 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:28:06.727Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:28:06.727Z] [BOT] 🔍 DEBUG: Verified file exists, size: 318084 bytes
[2025-11-14T23:28:06.727Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-14T23:28:06.895Z] [BOT] ✅ Created forum post: 🏢 Application Engineer - I - Gifs @ ORG_ce1edfea in #📁・JID_e938df7b
  ✅ Industry: Application Engineer - I - Gifs @ ORG_ce1edfea
[2025-11-14T23:28:08.396Z] [BOT] 🔍 DEBUG: Job "Application Engineer - I - Gifs" | City: "Malvern" | State: "PA" | Location Channel ID: "1429..."
[2025-11-14T23:28:08.572Z] [BOT] ✅ Created forum post: 🏢 Application Engineer - I - Gifs @ ORG_ce1edfea in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:28:10.073Z] [BOT] 📝 Marking as posted: JID_978ad86c...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:28:10.073Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:28:10.073Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_a0c865ff
[2025-11-14T23:28:10.073Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:28:10.074Z] [BOT] 🔍 DEBUG: Temp file written (318152 bytes)
[2025-11-14T23:28:10.074Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:28:10.074Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:28:10.075Z] [BOT] 🔍 DEBUG: Verified file exists, size: 318152 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:28:10.353Z] [BOT] ✅ Created forum post: 🏢 Architecture Energy Modeling Engineer @ ORG_0890f456 in #📁・JID_e938df7b
  ✅ Industry: Architecture Energy Modeling Engineer @ ORG_0890f456
[2025-11-14T23:28:11.853Z] [BOT] 🔍 DEBUG: Job "Architecture Energy Modeling Engineer" | City: "Austin" | State: "TX" | Location Channel ID: "1429..."
[2025-11-14T23:28:12.008Z] [BOT] ✅ Created forum post: 🏢 Architecture Energy Modeling Engineer @ ORG_0890f456 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-14T23:28:13.509Z] [BOT] 📝 Marking as posted: JID_a73a5f53...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:28:13.509Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:28:13.510Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_fbc70dfe
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:28:13.511Z] [BOT] 🔍 DEBUG: Temp file written (318235 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:28:13.511Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:28:13.512Z] [BOT] 🔍 DEBUG: Verified file exists, size: 318235 bytes
[2025-11-14T23:28:13.512Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-14T23:28:13.733Z] [BOT] ✅ Created forum post: 🏢 Graduate Developer Programme @ ORG_966cc52a Securities in #📁・JID_e938df7b
[2025-11-14T23:28:13.734Z] [BOT] ✅ Industry: Graduate Developer Programme @ ORG_966cc52a Securities
[2025-11-14T23:28:15.235Z] [BOT] 🔍 DEBUG: Job "Graduate Developer Programme" | City: "Chicago" | State: "IL" | Location Channel ID: "1429..."
[2025-11-14T23:28:15.446Z] [BOT] ✅ Created forum post: 🏢 Graduate Developer Programme @ ORG_966cc52a Securities in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-14T23:28:16.947Z] [BOT] 📝 Marking as posted: JID_b8a3f2d8-...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:28:16.947Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:28:16.948Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:28:16.948Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_25262199
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:28:16.949Z] [BOT] 🔍 DEBUG: Temp file written (318219 bytes)
[2025-11-14T23:28:16.949Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:28:16.949Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:28:16.949Z] [BOT] 🔍 DEBUG: Verified file exists, size: 318219 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:28:17.140Z] [BOT] ✅ Created forum post: 🏢 Application Developer 1 - Osf @ ORG_a151ceb1 Financial Bank in #📁・JID_e938df7b
[2025-11-14T23:28:17.140Z] [BOT] ✅ Industry: Application Developer 1 - Osf @ ORG_a151ceb1 Financial Bank
[2025-11-14T23:28:18.640Z] [BOT] 🔍 DEBUG: Job "Application Developer 1 - Osf" | City: "Indianapolis" | State: "IN" | Location Channel ID: "1429..."
[2025-11-14T23:28:18.795Z] [BOT] ✅ Created forum post: 🏢 Application Developer 1 - Osf @ ORG_a151ceb1 Financial Bank in #💻・remote-usa
[2025-11-14T23:28:18.795Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-14T23:28:20.296Z] [BOT] 📝 Marking as posted: JID_5019e951...
[2025-11-14T23:28:20.297Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:28:20.297Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:28:20.297Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_7ec04363
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:28:20.299Z] [BOT] 🔍 DEBUG: Temp file written (318276 bytes)
[2025-11-14T23:28:20.299Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:28:20.299Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:28:20.299Z] [BOT] 🔍 DEBUG: Verified file exists, size: 318276 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:28:20.491Z] [BOT] ✅ Created forum post: 🏢 Accelerate - Business Insights Analyst - Post Graduation Opportunity @ ORG_3e7ef1c2 Budget Group in #📁・JID_e938df7b
[2025-11-14T23:28:20.491Z] [BOT] ✅ Industry: Accelerate - Business Insights Analyst - Post Graduation Opportunity @ ORG_3e7ef1c2 Budget Group
[2025-11-14T23:28:21.991Z] [BOT] 🔍 DEBUG: Job "Accelerate - Business Insights Analyst - Post Graduation Opportunity" | City: "Parsippany-Troy Hills" | State: "NJ" | Location Channel ID: "1429..."
[2025-11-14T23:28:22.348Z] [BOT] ✅ Created forum post: 🏢 Accelerate - Business Insights Analyst - Post Graduation Opportunity @ ORG_3e7ef1c2 Budget Group in #💻・remote-usa
[2025-11-14T23:28:22.348Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-14T23:28:23.848Z] [BOT] 📝 Marking as posted: JID_8572e64b-abg_car...
[2025-11-14T23:28:23.848Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:28:23.849Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:28:23.849Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_a2eb6e43
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:28:23.850Z] [BOT] 🔍 DEBUG: Temp file written (318392 bytes)
[2025-11-14T23:28:23.850Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:28:23.850Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:28:23.850Z] [BOT] 🔍 DEBUG: Verified file exists, size: 318392 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:28:24.116Z] [BOT] ✅ Created forum post: 🏢 Cyber Defense Operator @ ORG_4e203235 USA in #📁・JID_e938df7b
  ✅ Industry: Cyber Defense Operator @ ORG_4e203235 USA
[2025-11-14T23:28:25.617Z] [BOT] 🔍 DEBUG: Job "Cyber Defense Operator" | City: "Plano" | State: "TX" | Location Channel ID: "1429..."
[2025-11-14T23:28:25.792Z] [BOT] ✅ Created forum post: 🏢 Cyber Defense Operator @ ORG_4e203235 USA in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-14T23:28:27.293Z] [BOT] 📝 Marking as posted: JID_5c31a508...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:28:27.293Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:28:27.293Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_360261af
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:28:27.295Z] [BOT] 🔍 DEBUG: Temp file written (318429 bytes)
[2025-11-14T23:28:27.295Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:28:27.295Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:28:27.296Z] [BOT] 🔍 DEBUG: Verified file exists, size: 318429 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:28:30.297Z] [BOT] 📌 Posting 20 jobs to #🩺・healthcare-jobs
[2025-11-14T23:28:30.540Z] [BOT] ✅ Created forum post: 🏢 Associate Field Engineer @ ORG_c5bad166 in #🩺・healthcare-jobs
  ✅ Industry: Associate Field Engineer @ ORG_c5bad166
[2025-11-14T23:28:32.042Z] [BOT] 🔍 DEBUG: Job "Associate Field Engineer" | City: "Hartford" | State: "CT" | Location Channel ID: "1429..."
[2025-11-14T23:28:32.393Z] [BOT] ✅ Created forum post: 🏢 Associate Field Engineer @ ORG_c5bad166 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:28:33.895Z] [BOT] 📝 Marking as posted: JID_e81c7612...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:28:33.895Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:28:33.895Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_c7695aed
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:28:33.896Z] [BOT] 🔍 DEBUG: Temp file written (318519 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:28:33.897Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:28:33.897Z] [BOT] 🔍 DEBUG: Verified file exists, size: 318519 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:28:34.228Z] [BOT] ✅ Created forum post: 🏢 Helpdesk Analyst @ ORG_1744b964ing For Future (NFF) in #🩺・healthcare-jobs
  ✅ Industry: Helpdesk Analyst @ ORG_1744b964ing For Future (NFF)
[2025-11-14T23:28:35.730Z] [BOT] 🔍 DEBUG: Job "Helpdesk Analyst" | City: "Washington" | State: "DC" | Location Channel ID: "1429..."
[2025-11-14T23:28:35.936Z] [BOT] ✅ Created forum post: 🏢 Helpdesk Analyst @ ORG_1744b964ing For Future (NFF) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:28:37.437Z] [BOT] 📝 Marking as posted: JID_9460fa2f
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:28:37.438Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:28:37.438Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:28:37.438Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_28083c53
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:28:37.440Z] [BOT] 🔍 DEBUG: Temp file written (318514 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:28:37.440Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:28:37.440Z] [BOT] 🔍 DEBUG: Verified file exists, size: 318514 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:28:37.615Z] [BOT] ✅ Created forum post: 🏢 Service Desk Analyst 1 @ ORG_79a90406 Health in #🩺・healthcare-jobs
  ✅ Industry: Service Desk Analyst 1 @ ORG_79a90406 Health
[2025-11-14T23:28:39.115Z] [BOT] 🔍 DEBUG: Job "Service Desk Analyst 1" | City: "Oklahoma City" | State: "OK" | Location Channel ID: "1429..."
[2025-11-14T23:28:39.314Z] [BOT] ✅ Created forum post: 🏢 Service Desk Analyst 1 @ ORG_79a90406 Health in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:28:40.815Z] [BOT] 📝 Marking as posted: JID_ce527a50...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:28:40.816Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:28:40.816Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_245ade0e
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:28:40.817Z] [BOT] 🔍 DEBUG: Temp file written (318646 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:28:40.817Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:28:40.817Z] [BOT] 🔍 DEBUG: Verified file exists, size: 318646 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:28:41.094Z] [BOT] ✅ Created forum post: 🏢 Analyst for DSS Refresh Team @ ORG_6bda74c9 Health in #🩺・healthcare-jobs
[2025-11-14T23:28:41.094Z] [BOT] ✅ Industry: Analyst for DSS Refresh Team @ ORG_6bda74c9 Health
[2025-11-14T23:28:42.594Z] [BOT] 🔍 DEBUG: Job "Analyst for DSS Refresh Team" | City: "Hartford" | State: "CT" | Location Channel ID: "1429..."
[2025-11-14T23:28:42.883Z] [BOT] ✅ Created forum post: 🏢 Analyst for DSS Refresh Team @ ORG_6bda74c9 Health in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:28:44.383Z] [BOT] 📝 Marking as posted: JID_26efe88c-cvs_heal...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:28:44.383Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:28:44.384Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_a08bea5d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:28:44.385Z] [BOT] 🔍 DEBUG: Temp file written (318715 bytes)
[2025-11-14T23:28:44.386Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:28:44.386Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:28:44.386Z] [BOT] 🔍 DEBUG: Verified file exists, size: 318715 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:28:44.610Z] [BOT] ✅ Created forum post: 🏢 Analyst for DSS Refresh Team @ ORG_6bda74c9 Health in #🩺・healthcare-jobs
  ✅ Industry: Analyst for DSS Refresh Team @ ORG_6bda74c9 Health
[2025-11-14T23:28:46.110Z] [BOT] 🔍 DEBUG: Job "Analyst for DSS Refresh Team" | City: "Phoenix" | State: "AZ" | Location Channel ID: "1429..."
[2025-11-14T23:28:46.530Z] [BOT] ✅ Created forum post: 🏢 Analyst for DSS Refresh Team @ ORG_6bda74c9 Health in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:28:48.031Z] [BOT] 📝 Marking as posted: JID_26efe88c-cvs_heal...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:28:48.031Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:28:48.031Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_24132846
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:28:48.033Z] [BOT] 🔍 DEBUG: Temp file written (318798 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:28:48.033Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:28:48.033Z] [BOT] 🔍 DEBUG: Verified file exists, size: 318798 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:28:48.239Z] [BOT] ✅ Created forum post: 🏢 Systems Administrator @ ORG_d51736fa in #🩺・healthcare-jobs
  ✅ Industry: Systems Administrator @ ORG_d51736fa
[2025-11-14T23:28:49.741Z] [BOT] 🔍 DEBUG: Job "Systems Administrator" | City: "Lawton" | State: "OK" | Location Channel ID: "1429..."
[2025-11-14T23:28:50.068Z] [BOT] ✅ Created forum post: 🏢 Systems Administrator @ ORG_d51736fa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:28:51.569Z] [BOT] 📝 Marking as posted: JID_f35747b5...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:28:51.570Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:28:51.570Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_16aa532b
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:28:51.572Z] [BOT] 🔍 DEBUG: Temp file written (318853 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:28:51.572Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:28:51.572Z] [BOT] 🔍 DEBUG: Verified file exists, size: 318853 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:28:51.767Z] [BOT] ✅ Created forum post: 🏢 Environmental Sustainability Analyst - Project Hire @ ORG_b344d80e Walt Disney Company in #🩺・healthcare-jobs
  ✅ Industry: Environmental Sustainability Analyst - Project Hire @ ORG_b344d80e Walt Disney Company
[2025-11-14T23:28:53.269Z] [BOT] 🔍 DEBUG: Job "Environmental Sustainability Analyst - Project Hire" | City: "Burbank" | State: "CA" | Location Channel ID: "1429..."
[2025-11-14T23:28:53.477Z] [BOT] ✅ Created forum post: 🏢 Environmental Sustainability Analyst - Project Hire @ ORG_b344d80e Walt Disney Company in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-14T23:28:54.978Z] [BOT] 📝 Marking as posted: JID_a56f93b9...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:28:54.978Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:28:54.979Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_47782724
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:28:54.980Z] [BOT] 🔍 DEBUG: Temp file written (318943 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:28:54.980Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:28:54.980Z] [BOT] 🔍 DEBUG: Verified file exists, size: 318943 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:28:55.162Z] [BOT] ✅ Created forum post: 🏢 Capstone IT Rotational Academic Worker @ ORG_c63fa9c8 in #🩺・healthcare-jobs
  ✅ Industry: Capstone IT Rotational Academic Worker @ ORG_c63fa9c8
[2025-11-14T23:28:56.664Z] [BOT] 🔍 DEBUG: Job "Capstone IT Rotational Academic Worker" | City: "Indianapolis" | State: "IN" | Location Channel ID: "1429..."
[2025-11-14T23:28:56.842Z] [BOT] ✅ Created forum post: 🏢 Capstone IT Rotational Academic Worker @ ORG_c63fa9c8 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:28:58.342Z] [BOT] 📝 Marking as posted: JID_f58398e8...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:28:58.342Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:28:58.343Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_f0cf68cf
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:28:58.344Z] [BOT] 🔍 DEBUG: Temp file written (319034 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:28:58.345Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:28:58.345Z] [BOT] 🔍 DEBUG: Verified file exists, size: 319034 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:28:58.619Z] [BOT] ✅ Created forum post: 🏢 Installation Technician @ ORG_d1aff162 in #🩺・healthcare-jobs
  ✅ Industry: Installation Technician @ ORG_d1aff162
[2025-11-14T23:29:00.119Z] [BOT] 🔍 DEBUG: Job "Installation Technician" | City: "Raleigh" | State: "NC" | Location Channel ID: "1429..."
[2025-11-14T23:29:00.303Z] [BOT] ✅ Created forum post: 🏢 Installation Technician @ ORG_d1aff162 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:29:01.804Z] [BOT] 📝 Marking as posted: JID_82c27bdc...
[2025-11-14T23:29:01.805Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:29:01.805Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:29:01.805Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_34cdfcc4
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:29:01.806Z] [BOT] 🔍 DEBUG: Temp file written (319096 bytes)
[2025-11-14T23:29:01.806Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:29:01.806Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:29:01.806Z] [BOT] 🔍 DEBUG: Verified file exists, size: 319096 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:29:02.012Z] [BOT] ✅ Created forum post: 🏢 Installation Technician @ ORG_d1aff162 in #🩺・healthcare-jobs
  ✅ Industry: Installation Technician @ ORG_d1aff162
[2025-11-14T23:29:03.512Z] [BOT] 🔍 DEBUG: Job "Installation Technician" | City: "Leesville" | State: "LA" | Location Channel ID: "1429..."
[2025-11-14T23:29:03.723Z] [BOT] ✅ Created forum post: 🏢 Installation Technician @ ORG_d1aff162 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:29:05.224Z] [BOT] 📝 Marking as posted: JID_82c27bdc...
[2025-11-14T23:29:05.224Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:29:05.225Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_fc96cfbe
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:29:05.226Z] [BOT] 🔍 DEBUG: Temp file written (319159 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:29:05.227Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:29:05.227Z] [BOT] 🔍 DEBUG: Verified file exists, size: 319159 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:29:05.511Z] [BOT] ✅ Created forum post: 🏢 Installation Technician @ ORG_d1aff162 in #🩺・healthcare-jobs
  ✅ Industry: Installation Technician @ ORG_d1aff162
[2025-11-14T23:29:07.013Z] [BOT] 🔍 DEBUG: Job "Installation Technician" | City: "Murfreesboro" | State: "TN" | Location Channel ID: "1429..."
[2025-11-14T23:29:07.214Z] [BOT] ✅ Created forum post: 🏢 Installation Technician @ ORG_d1aff162 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:29:08.714Z] [BOT] 📝 Marking as posted: JID_82c27bdc...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:29:08.714Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:29:08.714Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_c739e09a
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:29:08.716Z] [BOT] 🔍 DEBUG: Temp file written (319223 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:29:08.716Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:29:08.716Z] [BOT] 🔍 DEBUG: Verified file exists, size: 319223 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:29:08.937Z] [BOT] ✅ Created forum post: 🏢 Installation Technician @ ORG_d1aff162 in #🩺・healthcare-jobs
  ✅ Industry: Installation Technician @ ORG_d1aff162
[2025-11-14T23:29:10.437Z] [BOT] 🔍 DEBUG: Job "Installation Technician" | City: "Spartanburg" | State: "SC" | Location Channel ID: "1429..."
[2025-11-14T23:29:10.633Z] [BOT] ✅ Created forum post: 🏢 Installation Technician @ ORG_d1aff162 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:29:12.134Z] [BOT] 📝 Marking as posted: JID_82c27bdc...
[2025-11-14T23:29:12.134Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:29:12.135Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_044ccabb
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:29:12.136Z] [BOT] 🔍 DEBUG: Temp file written (319271 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:29:12.137Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:29:12.137Z] [BOT] 🔍 DEBUG: Verified file exists, size: 319271 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:29:12.384Z] [BOT] ✅ Created forum post: 🏢 Installation Technician @ ORG_d1aff162 in #🩺・healthcare-jobs
  ✅ Industry: Installation Technician @ ORG_d1aff162
[2025-11-14T23:29:13.886Z] [BOT] 🔍 DEBUG: Job "Installation Technician" | City: "Columbia" | State: "SC" | Location Channel ID: "1429..."
[2025-11-14T23:29:14.251Z] [BOT] ✅ Created forum post: 🏢 Installation Technician @ ORG_d1aff162 in #💻・remote-usa
[2025-11-14T23:29:14.252Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-14T23:29:15.753Z] [BOT] 📝 Marking as posted: JID_82c27bdc...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:29:15.753Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:29:15.753Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_8cf1f6b7
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:29:15.754Z] [BOT] 🔍 DEBUG: Temp file written (319306 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:29:15.755Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:29:15.755Z] [BOT] 🔍 DEBUG: Verified file exists, size: 319306 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:29:16.030Z] [BOT] ✅ Created forum post: 🏢 Installation Technician @ ORG_d1aff162 in #🩺・healthcare-jobs
  ✅ Industry: Installation Technician @ ORG_d1aff162
[2025-11-14T23:29:17.531Z] [BOT] 🔍 DEBUG: Job "Installation Technician" | City: "Austin" | State: "TX" | Location Channel ID: "1429..."
[2025-11-14T23:29:17.787Z] [BOT] ✅ Created forum post: 🏢 Installation Technician @ ORG_d1aff162 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-14T23:29:19.287Z] [BOT] 📝 Marking as posted: JID_82c27bdc...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:29:19.287Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:29:19.288Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_9f7fe770
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:29:19.289Z] [BOT] 🔍 DEBUG: Temp file written (319319 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:29:19.289Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:29:19.289Z] [BOT] 🔍 DEBUG: Verified file exists, size: 319319 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:29:19.515Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Level 2 @ ORG_f3f2248d Grumman in #🩺・healthcare-jobs
  ✅ Industry: Software Engineer - Level 2 @ ORG_f3f2248d Grumman
[2025-11-14T23:29:21.017Z] [BOT] 🔍 DEBUG: Job "Software Engineer - Level 2" | City: "Halethorpe" | State: "MD" | Location Channel ID: "1429..."
[2025-11-14T23:29:21.212Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Level 2 @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:29:22.713Z] [BOT] 📝 Marking as posted: JID_e3128470-northrop_grumm...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:29:22.714Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:29:22.714Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_915b2915
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:29:22.715Z] [BOT] 🔍 DEBUG: Temp file written (319409 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:29:22.716Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:29:22.716Z] [BOT] 🔍 DEBUG: Verified file exists, size: 319409 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:29:22.892Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer/Software Engineer @ ORG_f3f2248d Grumman in #🩺・healthcare-jobs
  ✅ Industry: Associate Software Engineer/Software Engineer @ ORG_f3f2248d Grumman
[2025-11-14T23:29:24.394Z] [BOT] 🔍 DEBUG: Job "Associate Software Engineer/Software Engineer" | City: "El Segundo" | State: "CA" | Location Channel ID: "1429..."
[2025-11-14T23:29:24.580Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer/Software Engineer @ ORG_f3f2248d Grumman in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-14T23:29:26.081Z] [BOT] 📝 Marking as posted: JID_e3128470-northrop_grumm...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:29:26.081Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:29:26.081Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_fc563f70
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:29:26.083Z] [BOT] 🔍 DEBUG: Temp file written (319508 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:29:26.083Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:29:26.083Z] [BOT] 🔍 DEBUG: Verified file exists, size: 319508 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:29:26.389Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer/Software Engineer - Space Systems @ ORG_f3f2248d Grumman in #🩺・healthcare-jobs
[2025-11-14T23:29:26.389Z] [BOT] ✅ Industry: Associate Software Engineer/Software Engineer - Space Systems @ ORG_f3f2248d Grumman
[2025-11-14T23:29:27.891Z] [BOT] 🔍 DEBUG: Job "Associate Software Engineer/Software Engineer - Space Systems" | City: "El Segundo" | State: "CA" | Location Channel ID: "1429..."
[2025-11-14T23:29:28.163Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer/Software Engineer - Space Systems @ ORG_f3f2248d Grumman in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-14T23:29:29.664Z] [BOT] 📝 Marking as posted: JID_e3128470-northrop_grumm...
[2025-11-14T23:29:29.664Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:29:29.665Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_b1b4d95e
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:29:29.666Z] [BOT] 🔍 DEBUG: Temp file written (319624 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:29:29.666Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:29:29.666Z] [BOT] 🔍 DEBUG: Verified file exists, size: 319624 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:29:29.874Z] [BOT] ✅ Created forum post: 🏢 Network Monitoring Technician @ ORG_f3f2248d Grumman in #🩺・healthcare-jobs
  ✅ Industry: Network Monitoring Technician @ ORG_f3f2248d Grumman
[2025-11-14T23:29:31.374Z] [BOT] 🔍 DEBUG: Job "Network Monitoring Technician" | City: "Fort Greely" | State: "AK" | Location Channel ID: "1429..."
[2025-11-14T23:29:31.768Z] [BOT] ✅ Created forum post: 🏢 Network Monitoring Technician @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:29:33.269Z] [BOT] 📝 Marking as posted: JID_e3128470-northrop_grumm...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:29:33.270Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:29:33.270Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_5b4a5e89
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:29:33.272Z] [BOT] 🔍 DEBUG: Temp file written (319726 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:29:33.272Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:29:33.272Z] [BOT] 🔍 DEBUG: Verified file exists, size: 319726 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:33:03.806Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - C#/.NET and Azure @ ORG_5132f94c in #🩺・healthcare-jobs
  ✅ Industry: Software Engineer - C#/.NET and Azure @ ORG_5132f94c
[2025-11-14T23:33:05.308Z] [BOT] 🔍 DEBUG: Job "Software Engineer - C#/.NET and Azure" | City: "West Valley City" | State: "UT" | Location Channel ID: "1429..."
[2025-11-14T23:33:05.538Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - C#/.NET and Azure @ ORG_5132f94c in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:33:07.040Z] [BOT] 📝 Marking as posted: JID_858e24b9-...
[2025-11-14T23:33:07.040Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:33:07.040Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_ffff4de0
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:33:07.042Z] [BOT] 🔍 DEBUG: Temp file written (319803 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:33:07.042Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:33:07.042Z] [BOT] 🔍 DEBUG: Verified file exists, size: 319803 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:33:07.230Z] [BOT] ✅ Created forum post: 🏢 Associate Enterprise Architect @ ORG_720b1367 Medical Systems in #🩺・healthcare-jobs
[2025-11-14T23:33:07.230Z] [BOT] ✅ Industry: Associate Enterprise Architect @ ORG_720b1367 Medical Systems
[2025-11-14T23:33:08.732Z] [BOT] 🔍 DEBUG: Job "Associate Enterprise Architect" | City: "Minneapolis" | State: "MN" | Location Channel ID: "1429..."
[2025-11-14T23:33:09.007Z] [BOT] ✅ Created forum post: 🏢 Associate Enterprise Architect @ ORG_720b1367 Medical Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:33:10.508Z] [BOT] 📝 Marking as posted: JID_2b7f45f2...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:33:10.508Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:33:10.508Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e08ec64b
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:33:10.510Z] [BOT] 🔍 DEBUG: Temp file written (319830 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:33:10.510Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:33:10.510Z] [BOT] 🔍 DEBUG: Verified file exists, size: 319830 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:33:13.511Z] [BOT] 📌 Posting 8 jobs to #📣・marketing-jobs
[2025-11-14T23:33:13.892Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Systems Analysis Engineer/Scientist Support @ ORG_1954b120 in #📣・marketing-jobs
  ✅ Industry: Data Analyst - Systems Analysis Engineer/Scientist Support @ ORG_1954b120
[2025-11-14T23:33:15.393Z] [BOT] 🔍 DEBUG: Job "Data Analyst - Systems Analysis Engineer/Scientist Support" | City: "Norco" | State: "CA" | Location Channel ID: "1429..."
[2025-11-14T23:33:16.027Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Systems Analysis Engineer/Scientist Support @ ORG_1954b120 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-14T23:33:17.528Z] [BOT] 📝 Marking as posted: JID_f88fd0c9-...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:33:17.529Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:33:17.529Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_29dc1546
[2025-11-14T23:33:17.529Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:33:17.531Z] [BOT] 🔍 DEBUG: Temp file written (319909 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:33:17.531Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:33:17.531Z] [BOT] 🔍 DEBUG: Verified file exists, size: 319909 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:33:17.775Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer @ Auto-Owners Insurance in #📣・marketing-jobs
[2025-11-14T23:33:17.775Z] [BOT] ✅ Industry: Business Intelligence Developer @ Auto-Owners Insurance
[2025-11-14T23:33:19.277Z] [BOT] 🔍 DEBUG: Job "Business Intelligence Developer" | City: "East Lansing" | State: "MI" | Location Channel ID: "1429..."
[2025-11-14T23:33:19.594Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer @ Auto-Owners Insurance in #💻・remote-usa
[2025-11-14T23:33:19.594Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-14T23:33:21.095Z] [BOT] 📝 Marking as posted: JID_a036a739...
[2025-11-14T23:33:21.095Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:33:21.096Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:33:21.096Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_29f4e9be
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:33:21.097Z] [BOT] 🔍 DEBUG: Temp file written (319967 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:33:21.097Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:33:21.098Z] [BOT] 🔍 DEBUG: Verified file exists, size: 319967 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:33:21.339Z] [BOT] ✅ Created forum post: 🏢 UiPath Robotic Process Automation Developer Associate @ ORG_c910d474 Dynamics Information Technology in #📣・marketing-jobs
[2025-11-14T23:33:21.340Z] [BOT] ✅ Industry: UiPath Robotic Process Automation Developer Associate @ ORG_c910d474 Dynamics Information Technology
[2025-11-14T23:33:22.841Z] [BOT] 🔍 DEBUG: Job "UiPath Robotic Process Automation Developer Associate" | City: "Louisiana" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-14T23:33:23.049Z] [BOT] ✅ Created forum post: 🏢 UiPath Robotic Process Automation Developer Associate @ ORG_c910d474 Dynamics Information Technology in #💻・remote-usa
[2025-11-14T23:33:23.049Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-14T23:33:24.550Z] [BOT] 📝 Marking as posted: JID_4e873d38-external_care...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:33:24.550Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:33:24.551Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_36a4bf6e
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:33:24.552Z] [BOT] 🔍 DEBUG: Temp file written (320071 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:33:24.553Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:33:24.553Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320071 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:33:25.085Z] [BOT] ✅ Created forum post: 🏢 Senior Lidar Specialist @ ORG_6ae04125 in #📣・marketing-jobs
[2025-11-14T23:33:25.085Z] [BOT] ✅ Industry: Senior Lidar Specialist @ ORG_6ae04125
[2025-11-14T23:33:26.587Z] [BOT] 🔍 DEBUG: Job "Senior Lidar Specialist" | City: "Norman" | State: "OK" | Location Channel ID: "1429..."
[2025-11-14T23:33:26.804Z] [BOT] ✅ Created forum post: 🏢 Senior Lidar Specialist @ ORG_6ae04125 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:33:28.306Z] [BOT] 📝 Marking as posted: JID_28fe4b57
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:33:28.306Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:33:28.306Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_92a19a6a
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:33:28.307Z] [BOT] 🔍 DEBUG: Temp file written (320068 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:33:28.308Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:33:28.308Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320068 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:33:28.614Z] [BOT] ✅ Created forum post: 🏢 Data Center Technician @ ORG_fe16a941 Lang LaSalle (JLL) in #📣・marketing-jobs
  ✅ Industry: Data Center Technician @ ORG_fe16a941 Lang LaSalle (JLL)
[2025-11-14T23:33:30.114Z] [BOT] 🔍 DEBUG: Job "Data Center Technician" | City: "Oconomowoc" | State: "WI" | Location Channel ID: "1429..."
[2025-11-14T23:33:30.424Z] [BOT] ✅ Created forum post: 🏢 Data Center Technician @ ORG_fe16a941 Lang LaSalle (JLL) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:33:31.924Z] [BOT] 📝 Marking as posted: JID_3637cf46...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:33:31.924Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:33:31.925Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_cfc015a1
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:33:31.926Z] [BOT] 🔍 DEBUG: Temp file written (320141 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:33:31.927Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:33:31.927Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320141 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:33:32.505Z] [BOT] ✅ Created forum post: 🏢 Geologist @ ORG_3c8e259b in #📣・marketing-jobs
  ✅ Industry: Geologist @ ORG_3c8e259b
[2025-11-14T23:33:34.005Z] [BOT] 🔍 DEBUG: Job "Geologist" | City: "Portland" | State: "OR" | Location Channel ID: "1429..."
[2025-11-14T23:33:34.221Z] [BOT] ✅ Created forum post: 🏢 Geologist @ ORG_3c8e259b in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:33:35.722Z] [BOT] 📝 Marking as posted: JID_f063956a...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:33:35.722Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:33:35.723Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_95f88eaf
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:33:35.724Z] [BOT] 🔍 DEBUG: Temp file written (320139 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:33:35.724Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:33:35.724Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320139 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:33:36.065Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ 84.51 Degrees in #📣・marketing-jobs
[2025-11-14T23:33:36.065Z] [BOT] ✅ Industry: Data Scientist @ 84.51 Degrees
[2025-11-14T23:33:37.566Z] [BOT] 🔍 DEBUG: Job "Data Scientist" | City: "Chicago" | State: "IL" | Location Channel ID: "1429..."
[2025-11-14T23:33:37.774Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ 84.51 Degrees in #🌆・chicago
[2025-11-14T23:33:37.775Z] [BOT] ✅ Location: 🌆・chicago
[2025-11-14T23:33:39.276Z] [BOT] 📝 Marking as posted: JID_1f43fce4...
[2025-11-14T23:33:39.276Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:33:39.276Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:33:39.277Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_2fda2bb1
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:33:39.278Z] [BOT] 🔍 DEBUG: Temp file written (320106 bytes)
[2025-11-14T23:33:39.278Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:33:39.278Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:33:39.279Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320106 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:33:39.478Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer @ ORG_ba5b3cf6 Security in #📣・marketing-jobs
[2025-11-14T23:33:39.478Z] [BOT] ✅ Industry: Senior Software Engineer @ ORG_ba5b3cf6 Security
[2025-11-14T23:33:40.979Z] [BOT] 🔍 DEBUG: Job "Senior Software Engineer" | City: "Mountain View" | State: "CA" | Location Channel ID: "1429..."
[2025-11-14T23:33:41.272Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer @ ORG_ba5b3cf6 Security in #🌄・mountain-view
[2025-11-14T23:33:41.272Z] [BOT] ✅ Location: 🌄・mountain-view
[2025-11-14T23:33:42.772Z] [BOT] 📝 Marking as posted: JID_180f8af9-...
[2025-11-14T23:33:42.772Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:33:42.773Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:33:42.773Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_ddb013f9
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:33:42.774Z] [BOT] 🔍 DEBUG: Temp file written (320135 bytes)
[2025-11-14T23:33:42.774Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:33:42.774Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:33:42.774Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320135 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:33:45.775Z] [BOT] 📌 Posting 6 jobs to #💲・sales-jobs
[2025-11-14T23:33:46.174Z] [BOT] ✅ Created forum post: 🏢 EHR Application Analyst 1 - Dean McGee Eye Institute @ ORG_79a90406 Health in #💲・sales-jobs
  ✅ Industry: EHR Application Analyst 1 - Dean McGee Eye Institute @ ORG_79a90406 Health
[2025-11-14T23:33:47.675Z] [BOT] 🔍 DEBUG: Job "EHR Application Analyst 1 - Dean McGee Eye Institute" | City: "Oklahoma City" | State: "OK" | Location Channel ID: "1429..."
[2025-11-14T23:33:47.981Z] [BOT] ✅ Created forum post: 🏢 EHR Application Analyst 1 - Dean McGee Eye Institute @ ORG_79a90406 Health in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:33:49.483Z] [BOT] 📝 Marking as posted: JID_ce527a50...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:33:49.483Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:33:49.483Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_5125ed4a
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:33:49.485Z] [BOT] 🔍 DEBUG: Temp file written (320217 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:33:49.485Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:33:49.486Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320217 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:33:49.725Z] [BOT] ✅ Created forum post: 🏢 Service Desk Analyst @ ORG_f6a2986e in #💲・sales-jobs
  ✅ Industry: Service Desk Analyst @ ORG_f6a2986e
[2025-11-14T23:33:51.227Z] [BOT] 🔍 DEBUG: Job "Service Desk Analyst" | City: "Pennsylvania" | State: "Locations" | Location Channel ID: null
  📝 Marking as posted: JID_6ed77441-computer_aid-j...
[2025-11-14T23:33:51.227Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:33:51.228Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_6e506c11
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:33:51.229Z] [BOT] 🔍 DEBUG: Temp file written (320245 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:33:51.229Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:33:51.229Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320245 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:33:51.426Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_a1558083 in #💲・sales-jobs
  ✅ Industry: Data Analyst 1 @ ORG_a1558083
[2025-11-14T23:33:52.926Z] [BOT] 🔍 DEBUG: Job "Data Analyst 1" | City: "Florida" | State: "Locations" | Location Channel ID: null
  📝 Marking as posted: JID_b5c46070...
[2025-11-14T23:33:52.926Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:33:52.927Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_96010cf8
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:33:52.928Z] [BOT] 🔍 DEBUG: Temp file written (320230 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:33:52.928Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:33:52.928Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320230 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:33:53.120Z] [BOT] ✅ Created forum post: 🏢 Telecommunications Technician @ ORG_faae7186 Technologies in #💲・sales-jobs
  ✅ Industry: Telecommunications Technician @ ORG_faae7186 Technologies
[2025-11-14T23:33:54.621Z] [BOT] 🔍 DEBUG: Job "Telecommunications Technician" | City: "Mt Dora" | State: "FL" | Location Channel ID: "1429..."
[2025-11-14T23:33:54.830Z] [BOT] ✅ Created forum post: 🏢 Telecommunications Technician @ ORG_faae7186 Technologies in #🌉・san-francisco
[2025-11-14T23:33:54.830Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-14T23:33:56.331Z] [BOT] 📝 Marking as posted: JID_8d02cd4d
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:33:56.331Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:33:56.332Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_917005ac
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:33:56.333Z] [BOT] 🔍 DEBUG: Temp file written (320171 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:33:56.334Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:33:56.334Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320171 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:33:56.654Z] [BOT] ✅ Created forum post: 🏢 Telecommunications Technician @ ORG_bfa17a71ink in #💲・sales-jobs
  ✅ Industry: Telecommunications Technician @ ORG_bfa17a71ink
[2025-11-14T23:33:58.154Z] [BOT] 🔍 DEBUG: Job "Telecommunications Technician" | City: "Mt Dora" | State: "FL" | Location Channel ID: "1429..."
[2025-11-14T23:33:58.371Z] [BOT] ✅ Created forum post: 🏢 Telecommunications Technician @ ORG_bfa17a71ink in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-14T23:33:59.873Z] [BOT] 📝 Marking as posted: JID_5b60163d...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:33:59.873Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:33:59.873Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_70d7323d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:33:59.875Z] [BOT] 🔍 DEBUG: Temp file written (320184 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:33:59.875Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:33:59.875Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320184 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:34:00.070Z] [BOT] ✅ Created forum post: 🏢 Data Analytics Analyst - Load Research @ ORG_4bd0499d Company in #💲・sales-jobs
  ✅ Industry: Data Analytics Analyst - Load Research @ ORG_4bd0499d Company
[2025-11-14T23:34:01.571Z] [BOT] 🔍 DEBUG: Job "Data Analytics Analyst - Load Research" | City: "Atlanta" | State: "GA" | Location Channel ID: "1429..."
[2025-11-14T23:34:01.958Z] [BOT] ✅ Created forum post: 🏢 Data Analytics Analyst - Load Research @ ORG_4bd0499d Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:34:03.459Z] [BOT] 📝 Marking as posted: JID_3557741a...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:34:03.459Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:34:03.460Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_f3a6994c
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:34:03.461Z] [BOT] 🔍 DEBUG: Temp file written (320186 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:34:03.461Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:34:03.461Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320186 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:34:06.462Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-11-14T23:34:06.898Z] [BOT] ✅ Created forum post: 🏢 Software Development Intensive Program @ ORG_6ab523c5 Rings Capital in #💻・tech-jobs
  ✅ Industry: Software Development Intensive Program @ ORG_6ab523c5 Rings Capital
[2025-11-14T23:34:08.399Z] [BOT] 🔍 DEBUG: Job "Software Development Intensive Program" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-14T23:34:08.730Z] [BOT] ✅ Created forum post: 🏢 Software Development Intensive Program @ ORG_6ab523c5 Rings Capital in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-14T23:34:10.230Z] [BOT] 📝 Marking as posted: JID_829ebc53...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:34:10.230Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:34:10.230Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_f0f01f82
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:34:10.231Z] [BOT] 🔍 DEBUG: Temp file written (320188 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:34:10.232Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:34:10.232Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320188 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:34:10.429Z] [BOT] ✅ Created forum post: 🏢 Digital Fellow @ ORG_a44616f0 Global in #💻・tech-jobs
  ✅ Industry: Digital Fellow @ ORG_a44616f0 Global
[2025-11-14T23:34:11.930Z] [BOT] 🔍 DEBUG: Job "Digital Fellow" | City: "Brooklyn" | State: "NY" | Location Channel ID: "1429..."
[2025-11-14T23:34:12.478Z] [BOT] ✅ Created forum post: 🏢 Digital Fellow @ ORG_a44616f0 Global in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-14T23:34:13.979Z] [BOT] 📝 Marking as posted: JID_50c805d4
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:34:13.979Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:34:13.980Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_32adcede
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:34:13.981Z] [BOT] 🔍 DEBUG: Temp file written (320153 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:34:13.981Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:34:13.981Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320153 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:34:14.164Z] [BOT] ✅ Created forum post: 🏢 Systems Security Administrator 1 @ ORG_3113c496 Communications in #💻・tech-jobs
  ✅ Industry: Systems Security Administrator 1 @ ORG_3113c496 Communications
[2025-11-14T23:34:15.665Z] [BOT] 🔍 DEBUG: Job "Systems Security Administrator 1" | City: "Chandler" | State: "AZ" | Location Channel ID: "1429..."
[2025-11-14T23:34:16.032Z] [BOT] ✅ Created forum post: 🏢 Systems Security Administrator 1 @ ORG_3113c496 Communications in #💻・remote-usa
[2025-11-14T23:34:16.032Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-14T23:34:17.533Z] [BOT] 📝 Marking as posted: JID_70c5f2cb
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:34:17.533Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:34:17.534Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_8a38d351
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:34:17.536Z] [BOT] 🔍 DEBUG: Temp file written (320143 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:34:17.536Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:34:17.536Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320143 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:34:17.706Z] [BOT] ✅ Created forum post: 🏢 Associate Forensic Analyst @ ORG_db5f1a08 Discovery in #💻・tech-jobs
[2025-11-14T23:34:17.706Z] [BOT] ✅ Industry: Associate Forensic Analyst @ ORG_db5f1a08 Discovery
[2025-11-14T23:34:19.207Z] [BOT] 🔍 DEBUG: Job "Associate Forensic Analyst" | City: "Remote in USA" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-14T23:34:19.445Z] [BOT] ✅ Created forum post: 🏢 Associate Forensic Analyst @ ORG_db5f1a08 Discovery in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:34:20.946Z] [BOT] 📝 Marking as posted: JID_a6c2dfdc...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:34:20.946Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:34:20.947Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_de99c591
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:34:20.948Z] [BOT] 🔍 DEBUG: Temp file written (320180 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:34:20.949Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:34:20.949Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320180 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:34:23.949Z] [BOT] 📌 Posting 4 jobs to #💰・finance-jobs
[2025-11-14T23:34:24.181Z] [BOT] ✅ Created forum post: 🏢 DFC IT Business Systems Analyst @ ORG_c4c6f45c Motors in #💰・finance-jobs
  ✅ Industry: DFC IT Business Systems Analyst @ ORG_c4c6f45c Motors
[2025-11-14T23:34:25.683Z] [BOT] 🔍 DEBUG: Job "DFC IT Business Systems Analyst" | City: "Tualatin" | State: "OR" | Location Channel ID: "1429..."
[2025-11-14T23:34:25.847Z] [BOT] ✅ Created forum post: 🏢 DFC IT Business Systems Analyst @ ORG_c4c6f45c Motors in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:34:27.347Z] [BOT] 📝 Marking as posted: JID_01f3bc90...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:34:27.347Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:34:27.347Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_6644daff
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:34:27.349Z] [BOT] 🔍 DEBUG: Temp file written (320239 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:34:27.349Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:34:27.349Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320239 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:34:27.521Z] [BOT] ✅ Created forum post: 🏢 Information Technology/Assurance - Information Technology/Information Assurance - Specialist I @  in #💰・finance-jobs
  ✅ Industry: Information Technology/Assurance - Information Technology/Information Assurance - Specialist I @ ORG_c910d474 Dynamics Information Technology
[2025-11-14T23:34:29.023Z] [BOT] 🔍 DEBUG: Job "Information Technology/Assurance - Information Technology/Information Assurance - Specialist I" | City: "Colorado Springs" | State: "CO" | Location Channel ID: "1429..."
[2025-11-14T23:34:29.265Z] [BOT] ✅ Created forum post: 🏢 Information Technology/Assurance - Information Technology/Information Assurance - Specialist I @  in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:34:30.766Z] [BOT] 📝 Marking as posted: JID_4e873d38-external_care...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:34:30.766Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:34:30.767Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_18dcbe53
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:34:30.768Z] [BOT] 🔍 DEBUG: Temp file written (320310 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:34:30.768Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:34:30.768Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320310 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:34:30.955Z] [BOT] ✅ Created forum post: 🏢 Help Desk Analyst @ ORG_65bd5b80 in #💰・finance-jobs
  ✅ Industry: Help Desk Analyst @ ORG_65bd5b80
[2025-11-14T23:34:32.456Z] [BOT] 🔍 DEBUG: Job "Help Desk Analyst" | City: "Lehi" | State: "UT" | Location Channel ID: "1429..."
[2025-11-14T23:34:32.601Z] [BOT] ✅ Created forum post: 🏢 Help Desk Analyst @ ORG_65bd5b80 in #💻・remote-usa
[2025-11-14T23:34:32.601Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-14T23:34:34.101Z] [BOT] 📝 Marking as posted: JID_12ceff00...
[2025-11-14T23:34:34.101Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:34:34.102Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:34:34.102Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_50e69cfe
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:34:34.103Z] [BOT] 🔍 DEBUG: Temp file written (320285 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:34:34.104Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:34:34.104Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320285 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:34:34.273Z] [BOT] ✅ Created forum post: 🏢 Associate Cybersecurity Analyst @ ORG_f10850dc Corporation in #💰・finance-jobs
[2025-11-14T23:34:34.273Z] [BOT] ✅ Industry: Associate Cybersecurity Analyst @ ORG_f10850dc Corporation
[2025-11-14T23:34:35.774Z] [BOT] 🔍 DEBUG: Job "Associate Cybersecurity Analyst" | City: "Remote in USA" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-14T23:34:36.048Z] [BOT] ✅ Created forum post: 🏢 Associate Cybersecurity Analyst @ ORG_f10850dc Corporation in #🗽・new-york
[2025-11-14T23:34:36.048Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-14T23:34:37.549Z] [BOT] 📝 Marking as posted: JID_bdcb1136-...
[2025-11-14T23:34:37.549Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:34:37.550Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:34:37.550Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_16986f48
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:34:37.551Z] [BOT] 🔍 DEBUG: Temp file written (320224 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:34:37.551Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:34:37.551Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320224 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:34:40.552Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2025-11-14T23:34:40.765Z] [BOT] ✅ Created forum post: 🏢 Service Delivery Technician 1 @ ORG_92ad865b in #🏗️・JID_b7c6683f
  ✅ Industry: Service Delivery Technician 1 @ ORG_92ad865b
[2025-11-14T23:34:42.266Z] [BOT] 🔍 DEBUG: Job "Service Delivery Technician 1" | City: "Dulles" | State: "VA" | Location Channel ID: "1429..."
[2025-11-14T23:34:43.965Z] [BOT] ✅ Created forum post: 🏢 Service Delivery Technician 1 @ ORG_92ad865b in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:34:45.465Z] [BOT] 📝 Marking as posted: JID_fd7c5a74-...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:34:45.465Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:34:45.466Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_a2b09b1d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:34:45.467Z] [BOT] 🔍 DEBUG: Temp file written (320244 bytes)
[2025-11-14T23:34:45.467Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:34:45.468Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:34:45.468Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320244 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:34:48.469Z] [BOT] 🎉 Posting complete! Successfully posted: 50, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-14T23:34:50.478Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:10127) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*