# Discord Bot Execution Audit
**Timestamp:** 2025-11-21T09:36:29.327Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-21T09:35:43.428Z] ========================================
[2025-11-21T09:35:43.430Z] Discord Bot Execution Log
[2025-11-21T09:35:43.430Z] Environment: GitHub Actions
[2025-11-21T09:35:43.430Z] Node Version: v20.19.5
[2025-11-21T09:35:43.430Z] ========================================
[2025-11-21T09:35:43.430Z] Environment Variables Check:
[2025-11-21T09:35:43.430Z] DISCORD_TOKEN: ✅ Set
[2025-11-21T09:35:43.430Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-21T09:35:43.430Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-21T09:35:43.430Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-21T09:35:43.430Z] 
Multi-Channel Configuration:
[2025-11-21T09:35:43.430Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-21T09:35:43.430Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-21T09:35:43.430Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-21T09:35:43.430Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-21T09:35:43.430Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-21T09:35:43.430Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-21T09:35:43.430Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-21T09:35:43.430Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-21T09:35:43.430Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-21T09:35:43.430Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-21T09:35:43.431Z] 
Data Files Check:
[2025-11-21T09:35:43.431Z] .github/data/new_jobs.json: ✅ Exists (13 items, 81757 bytes)
[2025-11-21T09:35:43.433Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 326852 bytes)
[2025-11-21T09:35:43.433Z] 
========================================
[2025-11-21T09:35:43.433Z] Starting Enhanced Discord Bot...
[2025-11-21T09:35:43.433Z] ========================================
[2025-11-21T09:35:43.705Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-21T09:35:43.705Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-21T09:35:44.582Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-21T09:35:44.584Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-21T09:35:44.584Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-21T09:35:44.584Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 10 new jobs (3 already posted)...
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-21T09:35:44.586Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2025-11-21T09:35:44.587Z] [BOT] 📍 [ROUTING] "Data Engineer 1 - Infra Data & Analytics" @ ORG_0baaf6f2 Express
[2025-11-21T09:35:44.587Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T09:35:44.591Z] [BOT ERROR] (node:2867) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-21T09:35:44.836Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 - Infra Data & Analytics @ ORG_0baaf6f2 Express in #💻・tech-jobs
  ✅ Industry: Data Engineer 1 - Infra Data & Analytics @ ORG_0baaf6f2 Express
[2025-11-21T09:35:46.337Z] [BOT] 🔍 DEBUG: Job "Data Engineer 1 - Infra Data & Analytics" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T09:35:46.655Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 - Infra Data & Analytics @ ORG_0baaf6f2 Express in #🗽・new-york
[2025-11-21T09:35:46.655Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-21T09:35:48.155Z] [BOT] 📝 Marking as posted: JID_8600c303
[2025-11-21T09:35:48.156Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T09:35:48.156Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T09:35:48.156Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_5b7d7446
[2025-11-21T09:35:48.157Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T09:35:48.158Z] [BOT] 🔍 DEBUG: Temp file written (326835 bytes)
[2025-11-21T09:35:48.158Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T09:35:48.158Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T09:35:48.159Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326835 bytes
[2025-11-21T09:35:48.159Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "E01 Full Stack Developer 1" @ ORG_37d6fb94
   Category: TECH (matched: "software")
[2025-11-21T09:35:48.159Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T09:35:48.405Z] [BOT] ✅ Created forum post: 🏢 E01 Full Stack Developer 1 @ ORG_37d6fb94 in #💻・tech-jobs
[2025-11-21T09:35:48.405Z] [BOT] ✅ Industry: E01 Full Stack Developer 1 @ ORG_37d6fb94
[2025-11-21T09:35:49.907Z] [BOT] 🔍 DEBUG: Job "E01 Full Stack Developer 1" | City: "Remote in USA" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T09:35:50.337Z] [BOT] ✅ Created forum post: 🏢 E01 Full Stack Developer 1 @ ORG_37d6fb94 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T09:35:51.838Z] [BOT] 📝 Marking as posted: JID_c2441074...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T09:35:51.839Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T09:35:51.839Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T09:35:51.839Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_30974f3d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T09:35:51.840Z] [BOT] 🔍 DEBUG: Temp file written (326844 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T09:35:51.840Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T09:35:51.840Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326844 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T09:35:51.840Z] [BOT] 📍 [ROUTING] "Analyst - Enterprise Analytics" @ ORG_a35c6c02
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T09:35:52.115Z] [BOT] ✅ Created forum post: 🏢 Analyst - Enterprise Analytics @ ORG_a35c6c02 in #💻・tech-jobs
  ✅ Industry: Analyst - Enterprise Analytics @ ORG_a35c6c02
[2025-11-21T09:35:53.617Z] [BOT] 🔍 DEBUG: Job "Analyst - Enterprise Analytics" | City: "Philadelphia" | State: "PA" | Location Channel ID: "1429..."
[2025-11-21T09:35:53.815Z] [BOT] ✅ Created forum post: 🏢 Analyst - Enterprise Analytics @ ORG_a35c6c02 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T09:35:55.315Z] [BOT] 📝 Marking as posted: JID_e573726c-comcast_ca...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T09:35:55.315Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T09:35:55.316Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_0d79e553
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T09:35:55.317Z] [BOT] 🔍 DEBUG: Temp file written (326916 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T09:35:55.318Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T09:35:55.318Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326916 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T09:35:55.318Z] [BOT] 📍 [ROUTING] "Data Analyst 1" @ ORG_97849464
[2025-11-21T09:35:55.318Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T09:35:55.521Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_97849464 in #💻・tech-jobs
  ✅ Industry: Data Analyst 1 @ ORG_97849464
[2025-11-21T09:35:57.023Z] [BOT] 🔍 DEBUG: Job "Data Analyst 1" | City: "United States" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T09:35:57.277Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_97849464 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-21T09:35:58.778Z] [BOT] 📝 Marking as posted: JID_864995cc...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T09:35:58.778Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T09:35:58.778Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_38651c8e
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T09:35:58.780Z] [BOT] 🔍 DEBUG: Temp file written (326910 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T09:35:58.780Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T09:35:58.780Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326910 bytes
💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "AI Innovation Fellow" @ ORG_547ec866 Global
[2025-11-21T09:35:58.780Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T09:35:59.097Z] [BOT] ✅ Created forum post: 🏢 AI Innovation Fellow @ ORG_547ec866 Global in #💻・tech-jobs
  ✅ Industry: AI Innovation Fellow @ ORG_547ec866 Global
[2025-11-21T09:36:00.597Z] [BOT] 🔍 DEBUG: Job "AI Innovation Fellow" | City: "Remote in USA" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T09:36:01.179Z] [BOT] ✅ Created forum post: 🏢 AI Innovation Fellow @ ORG_547ec866 Global in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T09:36:02.680Z] [BOT] 📝 Marking as posted: JID_127694bd...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T09:36:02.681Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T09:36:02.681Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_0aa3fd6f
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T09:36:02.683Z] [BOT] 🔍 DEBUG: Temp file written (326918 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T09:36:02.683Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T09:36:02.683Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326918 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T09:36:02.683Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ T-Rex Solutions
   Category: TECH (matched: "software")
[2025-11-21T09:36:02.683Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T09:36:02.856Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ T-Rex Solutions in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ T-Rex Solutions
[2025-11-21T09:36:04.357Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "Odenton" | State: "MD" | Location Channel ID: "1429..."
[2025-11-21T09:36:04.734Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ T-Rex Solutions in #💻・remote-usa
[2025-11-21T09:36:04.734Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-21T09:36:06.236Z] [BOT] 📝 Marking as posted: JID_f7626697...
[2025-11-21T09:36:06.236Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T09:36:06.237Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_33306766
[2025-11-21T09:36:06.237Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T09:36:06.238Z] [BOT] 🔍 DEBUG: Temp file written (326910 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T09:36:06.238Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T09:36:06.238Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326910 bytes
💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Software Engineer - Java - Contract" @ ORG_c7abfa48 Warning
   Category: TECH (matched: "software")
[2025-11-21T09:36:06.239Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T09:36:06.464Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Java - Contract @ ORG_c7abfa48 Warning in #💻・tech-jobs
  ✅ Industry: Software Engineer - Java - Contract @ ORG_c7abfa48 Warning
[2025-11-21T09:36:07.964Z] [BOT] 🔍 DEBUG: Job "Software Engineer - Java - Contract" | City: "SF" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T09:36:08.151Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Java - Contract @ ORG_c7abfa48 Warning in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-21T09:36:09.652Z] [BOT] 📝 Marking as posted: JID_fc9f851e...
[2025-11-21T09:36:09.652Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T09:36:09.652Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_57f53df8
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T09:36:09.654Z] [BOT] 🔍 DEBUG: Temp file written (326942 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T09:36:09.654Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T09:36:09.654Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326942 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T09:36:09.654Z] [BOT] 📍 [ROUTING] "Senior Data Scientist" @ ORG_cdfeb1f5
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T09:36:09.836Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist @ ORG_cdfeb1f5 in #💻・tech-jobs
  ✅ Industry: Senior Data Scientist @ ORG_cdfeb1f5
[2025-11-21T09:36:11.336Z] [BOT] 🔍 DEBUG: Job "Senior Data Scientist" | City: "Cambridge" | State: "MA" | Location Channel ID: "1429..."
[2025-11-21T09:36:11.527Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist @ ORG_cdfeb1f5 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T09:36:13.028Z] [BOT] 📝 Marking as posted: JID_6bdfb1ad-...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T09:36:13.029Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T09:36:13.029Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_afdd799a
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T09:36:13.031Z] [BOT] 🔍 DEBUG: Temp file written (326988 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T09:36:13.031Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T09:36:13.031Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326988 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T09:36:13.031Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Virtual Expert Platform - Vep','Intuit" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T09:36:13.268Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Virtual Expert Platform - Vep','Intuit @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Virtual Expert Platform - Vep','Intuit @ ORG_0bbe3cb1
[2025-11-21T09:36:14.769Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1 - Virtual Expert Platform - Vep','Intuit" | City: "Mountain View" | State: "CA" | Location Channel ID: "1429..."
[2025-11-21T09:36:15.011Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Virtual Expert Platform - Vep','Intuit @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-11-21T09:36:16.512Z] [BOT] 📝 Marking as posted: JID_9472b700...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T09:36:16.512Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T09:36:16.513Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_3a472992
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T09:36:16.514Z] [BOT] 🔍 DEBUG: Temp file written (327034 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T09:36:16.514Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T09:36:16.514Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327034 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T09:36:19.515Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-11-21T09:36:19.515Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher" @ ORG_0aa5052d State University (LSU)
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1391...2941)
[2025-11-21T09:36:19.759Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) in #💰・finance-jobs
  ✅ Industry: Postdoctoral Researcher @ ORG_0aa5052d State University (LSU)
[2025-11-21T09:36:21.261Z] [BOT] 🔍 DEBUG: Job "Postdoctoral Researcher" | City: "Baton Rouge" | State: "LA" | Location Channel ID: "1429..."
[2025-11-21T09:36:21.544Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T09:36:23.044Z] [BOT] 📝 Marking as posted: JID_67a2afed...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T09:36:23.044Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T09:36:23.045Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_46f7859f
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T09:36:23.046Z] [BOT] 🔍 DEBUG: Temp file written (327070 bytes)
[2025-11-21T09:36:23.046Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T09:36:23.047Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T09:36:23.047Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327070 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T09:36:26.047Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-21T09:36:26.087Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 10
   Timestamp: 2025-11-21T09:36:26.086Z
[2025-11-21T09:36:28.095Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2867) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*