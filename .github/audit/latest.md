# Discord Bot Execution Audit
**Timestamp:** 2025-11-22T01:08:55.233Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-22T01:08:10.047Z] ========================================
[2025-11-22T01:08:10.048Z] Discord Bot Execution Log
[2025-11-22T01:08:10.048Z] Environment: GitHub Actions
[2025-11-22T01:08:10.048Z] Node Version: v20.19.5
[2025-11-22T01:08:10.048Z] ========================================
[2025-11-22T01:08:10.048Z] Environment Variables Check:
[2025-11-22T01:08:10.048Z] DISCORD_TOKEN: ✅ Set
[2025-11-22T01:08:10.048Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-22T01:08:10.048Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-22T01:08:10.049Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-22T01:08:10.049Z] 
Multi-Channel Configuration:
[2025-11-22T01:08:10.049Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-22T01:08:10.049Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-22T01:08:10.049Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-22T01:08:10.049Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-22T01:08:10.049Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-22T01:08:10.049Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-22T01:08:10.049Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-22T01:08:10.049Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-22T01:08:10.049Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-22T01:08:10.049Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-22T01:08:10.049Z] 
Data Files Check:
[2025-11-22T01:08:10.050Z] .github/data/new_jobs.json: ✅ Exists (10 items, 52832 bytes)
[2025-11-22T01:08:10.052Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327285 bytes)
[2025-11-22T01:08:10.052Z] 
========================================
[2025-11-22T01:08:10.052Z] Starting Enhanced Discord Bot...
[2025-11-22T01:08:10.052Z] ========================================
[2025-11-22T01:08:10.329Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-22T01:08:10.330Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-22T01:08:11.251Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-22T01:08:11.252Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-22T01:08:11.252Z] [BOT] 📬 Found 9 new jobs (1 already posted)...
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-22T01:08:11.256Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2025-11-22T01:08:11.256Z] [BOT] 📍 [ROUTING] "Consultant Graduate Developer" @ ORG_52a2e2f0
[2025-11-22T01:08:11.257Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-22T01:08:11.261Z] [BOT ERROR] (node:2685) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-22T01:08:11.723Z] [BOT] ✅ Created forum post: 🏢 Consultant Graduate Developer @ ORG_52a2e2f0 in #💻・tech-jobs
  ✅ Industry: Consultant Graduate Developer @ ORG_52a2e2f0
[2025-11-22T01:08:13.223Z] [BOT] 🔍 DEBUG: Job "Consultant Graduate Developer" | City: "Chicago" | State: "IL" | Location Channel ID: "1429..."
[2025-11-22T01:08:13.449Z] [BOT] ✅ Created forum post: 🏢 Consultant Graduate Developer @ ORG_52a2e2f0 in #🌆・chicago
[2025-11-22T01:08:13.450Z] [BOT] ✅ Location: 🌆・chicago
[2025-11-22T01:08:14.950Z] [BOT] 📝 Marking as posted: JID_02706bc1...
[2025-11-22T01:08:14.950Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-22T01:08:14.950Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T01:08:14.951Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T01:08:14.951Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_1784786d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T01:08:14.952Z] [BOT] 🔍 DEBUG: Temp file written (327269 bytes)
[2025-11-22T01:08:14.952Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T01:08:14.952Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T01:08:14.953Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327269 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T01:08:14.953Z] [BOT] 📍 [ROUTING] "Associate Engineer" @ T-Mobile
   Category: TECH (matched: "engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-22T01:08:15.308Z] [BOT] ✅ Created forum post: 🏢 Associate Engineer @ T-Mobile in #💻・tech-jobs
[2025-11-22T01:08:15.308Z] [BOT] ✅ Industry: Associate Engineer @ T-Mobile
[2025-11-22T01:08:16.810Z] [BOT] 🔍 DEBUG: Job "Associate Engineer" | City: "Frisco" | State: "TX" | Location Channel ID: "1429..."
[2025-11-22T01:08:17.119Z] [BOT] ✅ Created forum post: 🏢 Associate Engineer @ T-Mobile in #🤠・austin
[2025-11-22T01:08:17.119Z] [BOT] ✅ Location: 🤠・austin
[2025-11-22T01:08:18.619Z] [BOT] 📝 Marking as posted: JID_ffa4b8c2...
[2025-11-22T01:08:18.619Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T01:08:18.620Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T01:08:18.620Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_74b0a0bd
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T01:08:18.621Z] [BOT] 🔍 DEBUG: Temp file written (327299 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T01:08:18.621Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T01:08:18.621Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327299 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T01:08:18.621Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_7b717950
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-22T01:08:18.956Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_7b717950
[2025-11-22T01:08:20.456Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "Palo Alto" | State: "CA" | Location Channel ID: "1429..."
[2025-11-22T01:08:20.676Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-22T01:08:22.177Z] [BOT] 📝 Marking as posted: JID_f5bd1147-...
  🔍 DEBUG: Set size before add: 5000
[2025-11-22T01:08:22.177Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T01:08:22.178Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_77bc89c3
[2025-11-22T01:08:22.178Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T01:08:22.180Z] [BOT] 🔍 DEBUG: Temp file written (327316 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T01:08:22.180Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T01:08:22.180Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327316 bytes
[2025-11-22T01:08:22.180Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-22T01:08:22.180Z] [BOT] 📍 [ROUTING] "NASCAR Track Support Engineer-Entry Level" @ ORG_cdb83ff1
   Category: TECH (matched: "engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-22T01:08:22.554Z] [BOT] ✅ Created forum post: 🏢 NASCAR Track Support Engineer-Entry Level @ ORG_cdb83ff1 in #💻・tech-jobs
[2025-11-22T01:08:22.554Z] [BOT] ✅ Industry: NASCAR Track Support Engineer-Entry Level @ ORG_cdb83ff1
[2025-11-22T01:08:24.054Z] [BOT] 🔍 DEBUG: Job "NASCAR Track Support Engineer-Entry Level" | City: "Huntersville" | State: "NC" | Location Channel ID: "1429..."
[2025-11-22T01:08:24.384Z] [BOT] ✅ Created forum post: 🏢 NASCAR Track Support Engineer-Entry Level @ ORG_cdb83ff1 in #💻・remote-usa
[2025-11-22T01:08:24.384Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-22T01:08:25.884Z] [BOT] 📝 Marking as posted: JID_f75fe39e...
  🔍 DEBUG: Set size before add: 5000
[2025-11-22T01:08:25.884Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T01:08:25.885Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T01:08:25.885Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_7e932048
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T01:08:25.886Z] [BOT] 🔍 DEBUG: Temp file written (327399 bytes)
[2025-11-22T01:08:25.886Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T01:08:25.886Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T01:08:25.886Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327399 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T01:08:25.887Z] [BOT] 📍 [ROUTING] "Data Analyst 1 - Finance" @ ORG_2175a59f Federal Credit Union
[2025-11-22T01:08:25.887Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-22T01:08:26.066Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 - Finance @ ORG_2175a59f Federal Credit Union in #💻・tech-jobs
[2025-11-22T01:08:26.066Z] [BOT] ✅ Industry: Data Analyst 1 - Finance @ ORG_2175a59f Federal Credit Union
[2025-11-22T01:08:27.566Z] [BOT] 🔍 DEBUG: Job "Data Analyst 1 - Finance" | City: "Huntsville" | State: "AL" | Location Channel ID: "1429..."
[2025-11-22T01:08:27.824Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 - Finance @ ORG_2175a59f Federal Credit Union in #💻・remote-usa
[2025-11-22T01:08:27.824Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-22T01:08:29.325Z] [BOT] 📝 Marking as posted: JID_58459e2f...
[2025-11-22T01:08:29.325Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T01:08:29.326Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T01:08:29.326Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_abcbe9e7
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T01:08:29.327Z] [BOT] 🔍 DEBUG: Temp file written (327401 bytes)
[2025-11-22T01:08:29.328Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T01:08:29.328Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T01:08:29.328Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327401 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T01:08:29.328Z] [BOT] 📍 [ROUTING] "Software Engineering Resident - AI" @ ORG_1ff63154
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-22T01:08:29.650Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Resident - AI @ ORG_1ff63154 in #💻・tech-jobs
  ✅ Industry: Software Engineering Resident - AI @ ORG_1ff63154
[2025-11-22T01:08:31.151Z] [BOT] 🔍 DEBUG: Job "Software Engineering Resident - AI" | City: "Remote in USA" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-22T01:08:31.327Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Resident - AI @ ORG_1ff63154 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-22T01:08:32.828Z] [BOT] 📝 Marking as posted: JID_46ec87c5
  🔍 DEBUG: Set size before add: 5000
[2025-11-22T01:08:32.828Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T01:08:32.829Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T01:08:32.829Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_81397db3
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T01:08:32.830Z] [BOT] 🔍 DEBUG: Temp file written (327371 bytes)
[2025-11-22T01:08:32.830Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T01:08:32.830Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T01:08:32.830Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327371 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T01:08:32.831Z] [BOT] 📍 [ROUTING] "Data Analytics Student" @ ORG_6ae04125
[2025-11-22T01:08:32.831Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-22T01:08:33.051Z] [BOT] ✅ Created forum post: 🏢 Data Analytics Student @ ORG_6ae04125 in #💻・tech-jobs
[2025-11-22T01:08:33.051Z] [BOT] ✅ Industry: Data Analytics Student @ ORG_6ae04125
[2025-11-22T01:08:34.551Z] [BOT] 🔍 DEBUG: Job "Data Analytics Student" | City: "Austin" | State: "TX" | Location Channel ID: "1429..."
[2025-11-22T01:08:34.793Z] [BOT] ✅ Created forum post: 🏢 Data Analytics Student @ ORG_6ae04125 in #🤠・austin
[2025-11-22T01:08:34.793Z] [BOT] ✅ Location: 🤠・austin
[2025-11-22T01:08:36.293Z] [BOT] 📝 Marking as posted: JID_94e39b00
[2025-11-22T01:08:36.293Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T01:08:36.294Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T01:08:36.294Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e5f53205
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T01:08:36.295Z] [BOT] 🔍 DEBUG: Temp file written (327327 bytes)
[2025-11-22T01:08:36.295Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T01:08:36.295Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T01:08:36.295Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327327 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T01:08:39.295Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-11-22T01:08:39.296Z] [BOT] 📍 [ROUTING] "Post-Doc Research" @ ORG_13e36faa Lab
   Category: HR (matched: "compensation")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-22T01:08:39.555Z] [BOT] ✅ Created forum post: 🏢 Post-Doc Research @ ORG_13e36faa Lab in #📁・JID_e938df7b
[2025-11-22T01:08:39.555Z] [BOT] ✅ Industry: Post-Doc Research @ ORG_13e36faa Lab
[2025-11-22T01:08:41.056Z] [BOT] 🔍 DEBUG: Job "Post-Doc Research" | City: "Shirley" | State: "NY" | Location Channel ID: "1429..."
[2025-11-22T01:08:41.275Z] [BOT] ✅ Created forum post: 🏢 Post-Doc Research @ ORG_13e36faa Lab in #🗽・new-york
[2025-11-22T01:08:41.275Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-22T01:08:42.775Z] [BOT] 📝 Marking as posted: JID_60e5b5d6...
[2025-11-22T01:08:42.775Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T01:08:42.776Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T01:08:42.776Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e24363e1
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T01:08:42.777Z] [BOT] 🔍 DEBUG: Temp file written (327325 bytes)
[2025-11-22T01:08:42.777Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T01:08:42.777Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T01:08:42.777Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327325 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T01:08:45.778Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-22T01:08:45.779Z] [BOT] 📍 [ROUTING] "Human-Machine Interface Digital Analyst" @ ORG_85937e82 Inc.
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-22T01:08:46.060Z] [BOT] ✅ Created forum post: 🏢 Human-Machine Interface Digital Analyst @ ORG_85937e82 Inc. in #🩺・healthcare-jobs
  ✅ Industry: Human-Machine Interface Digital Analyst @ ORG_85937e82 Inc.
[2025-11-22T01:08:47.562Z] [BOT] 🔍 DEBUG: Job "Human-Machine Interface Digital Analyst" | City: "Alpharetta" | State: "GA" | Location Channel ID: "1429..."
[2025-11-22T01:08:47.769Z] [BOT] ✅ Created forum post: 🏢 Human-Machine Interface Digital Analyst @ ORG_85937e82 Inc. in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-22T01:08:49.270Z] [BOT] 📝 Marking as posted: JID_2cd0913f...
[2025-11-22T01:08:49.271Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T01:08:49.271Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T01:08:49.271Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_7f315138
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T01:08:49.273Z] [BOT] 🔍 DEBUG: Temp file written (327379 bytes)
[2025-11-22T01:08:49.273Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T01:08:49.273Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T01:08:49.273Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327379 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T01:08:52.274Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-11-22T01:08:52.275Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-22T01:08:52.313Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 9
[2025-11-22T01:08:52.313Z] [BOT] Timestamp: 2025-11-22T01:08:52.313Z
[2025-11-22T01:08:54.323Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2685) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*