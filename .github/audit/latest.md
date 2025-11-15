# Discord Bot Execution Audit
**Timestamp:** 2025-11-15T00:39:19.731Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-15T00:38:28.878Z] ========================================
[2025-11-15T00:38:28.880Z] Discord Bot Execution Log
[2025-11-15T00:38:28.880Z] Environment: GitHub Actions
[2025-11-15T00:38:28.880Z] Node Version: v20.19.5
[2025-11-15T00:38:28.880Z] ========================================
[2025-11-15T00:38:28.880Z] Environment Variables Check:
[2025-11-15T00:38:28.880Z] DISCORD_TOKEN: ✅ Set
[2025-11-15T00:38:28.880Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-15T00:38:28.880Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-15T00:38:28.880Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-15T00:38:28.880Z] 
Multi-Channel Configuration:
[2025-11-15T00:38:28.880Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-15T00:38:28.880Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-15T00:38:28.880Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-15T00:38:28.880Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-15T00:38:28.880Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-15T00:38:28.880Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-15T00:38:28.880Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-15T00:38:28.880Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-15T00:38:28.881Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-15T00:38:28.881Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-15T00:38:28.881Z] 
Data Files Check:
[2025-11-15T00:38:28.881Z] .github/data/new_jobs.json: ✅ Exists (12 items, 58923 bytes)
[2025-11-15T00:38:28.883Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 321748 bytes)
[2025-11-15T00:38:28.883Z] 
========================================
[2025-11-15T00:38:28.883Z] Starting Enhanced Discord Bot...
[2025-11-15T00:38:28.883Z] ========================================
[2025-11-15T00:38:29.159Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-15T00:38:29.160Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-15T00:38:29.955Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-15T00:38:29.956Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-15T00:38:29.956Z] [BOT] ⏭️ Skipping already posted (legacy ID): Entry Level - C Software Developer at mthree
[2025-11-15T00:38:29.957Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
📬 Found 9 new jobs (3 already posted)...
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-15T00:38:29.958Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2025-11-15T00:38:29.962Z] [BOT ERROR] (node:2768) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-15T00:38:30.300Z] [BOT] ✅ Created forum post: 🏢 System Software Engineer – New College Grad 2026 - Robotics Simulation @ ORG_0890f456 in #🏗️・JID_b7c6683f
  ✅ Industry: System Software Engineer – New College Grad 2026 - Robotics Simulation @ ORG_0890f456
[2025-11-15T00:38:31.801Z] [BOT] 🔍 DEBUG: Job "System Software Engineer – New College Grad 2026 - Robotics Simulation" | City: "Santa Clara" | State: "CA" | Location Channel ID: "1429..."
[2025-11-15T00:38:32.010Z] [BOT] ✅ Created forum post: 🏢 System Software Engineer – New College Grad 2026 - Robotics Simulation @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-15T00:38:33.512Z] [BOT] 📝 Marking as posted: JID_a73a5f53...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:38:33.512Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:38:33.513Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_cfb70ffb
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:38:33.514Z] [BOT] 🔍 DEBUG: Temp file written (321853 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:38:33.515Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:38:33.515Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321853 bytes
[2025-11-15T00:38:33.515Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-15T00:38:36.516Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2025-11-15T00:38:36.924Z] [BOT] ✅ Created forum post: 🏢 Technology - Application Development @ ORG_04ace811 in #📣・marketing-jobs
  ✅ Industry: Technology - Application Development @ ORG_04ace811
[2025-11-15T00:38:38.425Z] [BOT] 🔍 DEBUG: Job "Technology - Application Development" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-15T00:38:38.645Z] [BOT] ✅ Created forum post: 🏢 Technology - Application Development @ ORG_04ace811 in #🗽・new-york
[2025-11-15T00:38:38.645Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-15T00:38:40.146Z] [BOT] 📝 Marking as posted: JID_bee1c79a...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:38:40.147Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:38:40.147Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T00:38:40.147Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_ab7c2220
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:38:40.149Z] [BOT] 🔍 DEBUG: Temp file written (321964 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:38:40.150Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:38:40.150Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321964 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:38:40.399Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #📣・marketing-jobs
  ✅ Industry: Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory
[2025-11-15T00:38:41.901Z] [BOT] 🔍 DEBUG: Job "Postdoctoral Researcher" | City: "Golden" | State: "CO" | Location Channel ID: "1429..."
[2025-11-15T00:38:42.100Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-15T00:38:43.600Z] [BOT] 📝 Marking as posted: JID_9aadea94...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:38:43.601Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:38:43.601Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T00:38:43.601Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_aaa118ed
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:38:43.603Z] [BOT] 🔍 DEBUG: Temp file written (322060 bytes)
[2025-11-15T00:38:43.603Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:38:43.603Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:38:43.603Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322060 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:38:46.604Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2025-11-15T00:38:46.933Z] [BOT] ✅ Created forum post: 🎨 University Graduate @ ORG_72fd3ae0 in #💲・sales-jobs
[2025-11-15T00:38:46.934Z] [BOT] ✅ Industry: University Graduate @ ORG_72fd3ae0
[2025-11-15T00:38:48.435Z] [BOT] 🔍 DEBUG: Job "University Graduate" | City: "Seattle" | State: "WA" | Location Channel ID: "1429..."
[2025-11-15T00:38:48.636Z] [BOT] ✅ Created forum post: 🎨 University Graduate @ ORG_72fd3ae0 in #🌧️・seattle
[2025-11-15T00:38:48.636Z] [BOT] ✅ Location: 🌧️・seattle
[2025-11-15T00:38:50.137Z] [BOT] 📝 Marking as posted: JID_70c4903f-external_exp...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:38:50.137Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:38:50.138Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T00:38:50.138Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_82c3ea3b
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:38:50.140Z] [BOT] 🔍 DEBUG: Temp file written (322126 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:38:50.140Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:38:50.140Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322126 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:38:50.430Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #💲・sales-jobs
[2025-11-15T00:38:50.430Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_7b717950
[2025-11-15T00:38:51.932Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "Palo Alto" | State: "CA" | Location Channel ID: "1429..."
[2025-11-15T00:38:52.236Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #🌉・san-francisco
[2025-11-15T00:38:52.236Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-15T00:38:53.737Z] [BOT] 📝 Marking as posted: JID_c4e7b3fc-...
[2025-11-15T00:38:53.737Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:38:53.738Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T00:38:53.738Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_449ef3d7
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:38:53.740Z] [BOT] 🔍 DEBUG: Temp file written (322125 bytes)
[2025-11-15T00:38:53.740Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:38:53.740Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:38:53.740Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322125 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:38:53.949Z] [BOT] ✅ Created forum post: 🏢 AI Software Engineer-New Graduate @ ORG_70c9b406 in #💲・sales-jobs
[2025-11-15T00:38:53.949Z] [BOT] ✅ Industry: AI Software Engineer-New Graduate @ ORG_70c9b406
[2025-11-15T00:38:55.451Z] [BOT] 🔍 DEBUG: Job "AI Software Engineer-New Graduate" | City: "Santa Clara" | State: "CA" | Location Channel ID: "1429..."
[2025-11-15T00:38:55.727Z] [BOT] ✅ Created forum post: 🏢 AI Software Engineer-New Graduate @ ORG_70c9b406 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-15T00:38:57.230Z] [BOT] 📝 Marking as posted: JID_7db23538-cohesity_...
[2025-11-15T00:38:57.230Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:38:57.230Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T00:38:57.230Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_f33f65f5
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:38:57.232Z] [BOT] 🔍 DEBUG: Temp file written (322167 bytes)
[2025-11-15T00:38:57.232Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:38:57.232Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:38:57.232Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322167 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:39:00.233Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-15T00:39:00.440Z] [BOT] ✅ Created forum post: 🔵 Software Engineer @ ORG_4f749de7 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_4f749de7
[2025-11-15T00:39:01.942Z] [BOT] 🔍 DEBUG: Job "Software Engineer" | City: "Washington" | State: "DC" | Location Channel ID: "1429..."
[2025-11-15T00:39:02.120Z] [BOT] ✅ Created forum post: 🔵 Software Engineer @ ORG_4f749de7 in #💻・remote-usa
[2025-11-15T00:39:02.121Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-15T00:39:03.622Z] [BOT] 📝 Marking as posted: JID_de222a7f...
[2025-11-15T00:39:03.622Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:39:03.623Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T00:39:03.623Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_0537c4bb
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:39:03.625Z] [BOT] 🔍 DEBUG: Temp file written (322125 bytes)
[2025-11-15T00:39:03.625Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:39:03.625Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:39:03.625Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322125 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:39:04.071Z] [BOT] ✅ Created forum post: 🏢 Database Conversion - ETL @ ORG_865b30e2 Information Solutions Cooperative (NISC) in #💻・tech-jobs
[2025-11-15T00:39:04.071Z] [BOT] ✅ Industry: Database Conversion - ETL @ ORG_865b30e2 Information Solutions Cooperative (NISC)
[2025-11-15T00:39:05.572Z] [BOT] 🔍 DEBUG: Job "Database Conversion - ETL" | City: "Bismarck" | State: "ND" | Location Channel ID: "1429..."
[2025-11-15T00:39:05.977Z] [BOT] ✅ Created forum post: 🏢 Database Conversion - ETL @ ORG_865b30e2 Information Solutions Cooperative (NISC) in #💻・remote-usa
[2025-11-15T00:39:05.977Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-15T00:39:07.478Z] [BOT] 📝 Marking as posted: JID_91f527b8...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T00:39:07.479Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:39:07.479Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T00:39:07.479Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_b5acae01
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:39:07.481Z] [BOT] 🔍 DEBUG: Temp file written (322114 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:39:07.481Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:39:07.481Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322114 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:39:10.481Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-15T00:39:10.740Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - WFM Product Development @ ORG_ec7d56a0 Yonder in #🩺・healthcare-jobs
  ✅ Industry: Software Engineer - WFM Product Development @ ORG_ec7d56a0 Yonder
[2025-11-15T00:39:12.241Z] [BOT] 🔍 DEBUG: Job "Software Engineer - WFM Product Development" | City: "Atlanta" | State: "GA" | Location Channel ID: "1429..."
[2025-11-15T00:39:12.440Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - WFM Product Development @ ORG_ec7d56a0 Yonder in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-15T00:39:13.941Z] [BOT] 📝 Marking as posted: JID_71a9cb07-jda_care...
[2025-11-15T00:39:13.941Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T00:39:13.941Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T00:39:13.941Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_d2b45ef6
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T00:39:13.943Z] [BOT] 🔍 DEBUG: Temp file written (322152 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T00:39:13.943Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T00:39:13.943Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322152 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T00:39:16.944Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-15T00:39:18.954Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2768) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*