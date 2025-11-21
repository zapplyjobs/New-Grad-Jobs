# Discord Bot Execution Audit
**Timestamp:** 2025-11-21T23:48:24.195Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 16
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-21T23:47:17.850Z] ========================================
[2025-11-21T23:47:17.851Z] Discord Bot Execution Log
[2025-11-21T23:47:17.851Z] Environment: GitHub Actions
[2025-11-21T23:47:17.851Z] Node Version: v20.19.5
[2025-11-21T23:47:17.851Z] ========================================
[2025-11-21T23:47:17.851Z] Environment Variables Check:
[2025-11-21T23:47:17.851Z] DISCORD_TOKEN: ✅ Set
[2025-11-21T23:47:17.851Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-21T23:47:17.851Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-21T23:47:17.851Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-21T23:47:17.852Z] 
Multi-Channel Configuration:
[2025-11-21T23:47:17.852Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-21T23:47:17.852Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-21T23:47:17.852Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-21T23:47:17.852Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-21T23:47:17.852Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-21T23:47:17.852Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-21T23:47:17.852Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-21T23:47:17.852Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-21T23:47:17.852Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-21T23:47:17.852Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-21T23:47:17.852Z] 
Data Files Check:
[2025-11-21T23:47:17.854Z] .github/data/new_jobs.json: ✅ Exists (17 items, 299182 bytes)
[2025-11-21T23:47:17.856Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327088 bytes)
[2025-11-21T23:47:17.856Z] 
========================================
[2025-11-21T23:47:17.856Z] Starting Enhanced Discord Bot...
[2025-11-21T23:47:17.856Z] ========================================
[2025-11-21T23:47:18.130Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-21T23:47:18.131Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-21T23:47:19.011Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-21T23:47:19.014Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-21T23:47:19.014Z] [BOT] 📬 Found 16 new jobs (1 already posted)...
📤 Posting 16 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-21T23:47:19.019Z] [BOT] 📌 Posting 15 jobs to #💻・tech-jobs
[2025-11-21T23:47:19.019Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ mthree
[2025-11-21T23:47:19.019Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T23:47:19.023Z] [BOT ERROR] (node:3929) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-21T23:47:19.364Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ mthree in #💻・tech-jobs
[2025-11-21T23:47:19.365Z] [BOT] ✅ Industry: Junior Software Engineer @ mthree
[2025-11-21T23:47:20.865Z] [BOT] 🔍 DEBUG: Job "Junior Software Engineer" | City: "Newark" | State: "DE" | Location Channel ID: "1429..."
[2025-11-21T23:47:21.100Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ mthree in #🗽・new-york
[2025-11-21T23:47:21.101Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-21T23:47:22.600Z] [BOT] 📝 Marking as posted: JID_f822119f...
[2025-11-21T23:47:22.600Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T23:47:22.601Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T23:47:22.601Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_5a1c4f94
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T23:47:22.602Z] [BOT] 🔍 DEBUG: Temp file written (327095 bytes)
[2025-11-21T23:47:22.602Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T23:47:22.603Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T23:47:22.603Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327095 bytes
[2025-11-21T23:47:22.603Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Software Engineer 1" @ ORG_692aa04a
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T23:47:22.915Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_692aa04a in #💻・tech-jobs
[2025-11-21T23:47:22.916Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_692aa04a
[2025-11-21T23:47:24.416Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "Alpharetta" | State: "GA" | Location Channel ID: "1429..."
[2025-11-21T23:47:24.649Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_692aa04a in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T23:47:26.150Z] [BOT] 📝 Marking as posted: JID_45633352...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T23:47:26.150Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T23:47:26.150Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T23:47:26.150Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_d91bb650
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T23:47:26.151Z] [BOT] 🔍 DEBUG: Temp file written (327137 bytes)
[2025-11-21T23:47:26.152Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T23:47:26.152Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T23:47:26.152Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327137 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T23:47:26.152Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Ukrainian" @ ORG_f3ae3598
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T23:47:26.357Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Ukrainian @ ORG_f3ae3598 in #💻・tech-jobs
[2025-11-21T23:47:26.357Z] [BOT] ✅ Industry: AI Data Specialist - Ukrainian @ ORG_f3ae3598
[2025-11-21T23:47:27.857Z] [BOT] 🔍 DEBUG: Job "AI Data Specialist - Ukrainian" | City: "Arizona" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T23:47:28.064Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Ukrainian @ ORG_f3ae3598 in #🗽・new-york
[2025-11-21T23:47:28.064Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-21T23:47:29.565Z] [BOT] 📝 Marking as posted: JID_79f37928...
[2025-11-21T23:47:29.565Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T23:47:29.565Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T23:47:29.566Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e9872365
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T23:47:29.567Z] [BOT] 🔍 DEBUG: Temp file written (327115 bytes)
[2025-11-21T23:47:29.567Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T23:47:29.567Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T23:47:29.567Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327115 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T23:47:29.567Z] [BOT] 📍 [ROUTING] "Search Quality Rater - English" @ ORG_f3ae3598
   Category: TECH (default)
[2025-11-21T23:47:29.568Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T23:47:29.837Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater - English @ ORG_f3ae3598 in #💻・tech-jobs
[2025-11-21T23:47:29.837Z] [BOT] ✅ Industry: Search Quality Rater - English @ ORG_f3ae3598
[2025-11-21T23:47:31.338Z] [BOT] 🔍 DEBUG: Job "Search Quality Rater - English" | City: "Little Rock" | State: "AR" | Location Channel ID: "1429..."
[2025-11-21T23:47:31.497Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater - English @ ORG_f3ae3598 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-21T23:47:32.998Z] [BOT] 📝 Marking as posted: JID_4bf6b275...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T23:47:32.998Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T23:47:32.999Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T23:47:32.999Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_3211da00
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T23:47:33.000Z] [BOT] 🔍 DEBUG: Temp file written (327125 bytes)
[2025-11-21T23:47:33.000Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T23:47:33.000Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T23:47:33.000Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327125 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T23:47:33.000Z] [BOT] 📍 [ROUTING] "AI Data Specialist - North Carolina - US" @ ORG_f3ae3598
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T23:47:33.209Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - North Carolina - US @ ORG_f3ae3598 in #💻・tech-jobs
  ✅ Industry: AI Data Specialist - North Carolina - US @ ORG_f3ae3598
[2025-11-21T23:47:34.711Z] [BOT] 🔍 DEBUG: Job "AI Data Specialist - North Carolina - US" | City: "North Carolina" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T23:47:35.125Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - North Carolina - US @ ORG_f3ae3598 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-21T23:47:36.624Z] [BOT] 📝 Marking as posted: JID_4a4dd683...
[2025-11-21T23:47:36.624Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T23:47:36.625Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_b04b0bdf
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T23:47:36.626Z] [BOT] 🔍 DEBUG: Temp file written (327118 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T23:47:36.626Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T23:47:36.626Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327118 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T23:47:36.626Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Maryland - US" @ ORG_f3ae3598
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T23:47:36.850Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Maryland - US @ ORG_f3ae3598 in #💻・tech-jobs
  ✅ Industry: AI Data Specialist - Maryland - US @ ORG_f3ae3598
[2025-11-21T23:47:38.351Z] [BOT] 🔍 DEBUG: Job "AI Data Specialist - Maryland - US" | City: "Tennessee" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T23:47:38.781Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Maryland - US @ ORG_f3ae3598 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-21T23:47:40.282Z] [BOT] 📝 Marking as posted: JID_47f09ed6...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T23:47:40.282Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T23:47:40.282Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_a9a61e91
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T23:47:40.284Z] [BOT] 🔍 DEBUG: Temp file written (327122 bytes)
[2025-11-21T23:47:40.284Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T23:47:40.284Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T23:47:40.284Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327122 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T23:47:40.284Z] [BOT] 📍 [ROUTING] "AI Data Specialist" @ ORG_f3ae3598
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T23:47:40.537Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist @ ORG_f3ae3598 in #💻・tech-jobs
[2025-11-21T23:47:40.537Z] [BOT] ✅ Industry: AI Data Specialist @ ORG_f3ae3598
[2025-11-21T23:47:42.039Z] [BOT] 🔍 DEBUG: Job "AI Data Specialist" | City: "Arizona" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T23:47:42.310Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist @ ORG_f3ae3598 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-21T23:47:43.811Z] [BOT] 📝 Marking as posted: JID_5a8cc3bf...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T23:47:43.811Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T23:47:43.812Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_f9028726
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T23:47:43.813Z] [BOT] 🔍 DEBUG: Temp file written (327119 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T23:47:43.813Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T23:47:43.813Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327119 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T23:47:43.813Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Ohio - US" @ ORG_f3ae3598
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T23:47:43.983Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Ohio - US @ ORG_f3ae3598 in #💻・tech-jobs
  ✅ Industry: AI Data Specialist - Ohio - US @ ORG_f3ae3598
[2025-11-21T23:47:45.484Z] [BOT] 🔍 DEBUG: Job "AI Data Specialist - Ohio - US" | City: "Ohio" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T23:47:45.651Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Ohio - US @ ORG_f3ae3598 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-21T23:47:47.152Z] [BOT] 📝 Marking as posted: JID_eb177652...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T23:47:47.152Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T23:47:47.152Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_877ac50f
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T23:47:47.154Z] [BOT] 🔍 DEBUG: Temp file written (327108 bytes)
[2025-11-21T23:47:47.154Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T23:47:47.154Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T23:47:47.155Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327108 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T23:47:47.155Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Pennsylvania - US" @ ORG_f3ae3598
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T23:47:47.343Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Pennsylvania - US @ ORG_f3ae3598 in #💻・tech-jobs
  ✅ Industry: AI Data Specialist - Pennsylvania - US @ ORG_f3ae3598
[2025-11-21T23:47:48.844Z] [BOT] 🔍 DEBUG: Job "AI Data Specialist - Pennsylvania - US" | City: "Pennsylvania" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T23:47:49.045Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Pennsylvania - US @ ORG_f3ae3598 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-21T23:47:50.545Z] [BOT] 📝 Marking as posted: JID_0abb2741...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T23:47:50.546Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T23:47:50.546Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_c8d0e24b
[2025-11-21T23:47:50.546Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T23:47:50.547Z] [BOT] 🔍 DEBUG: Temp file written (327096 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T23:47:50.547Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T23:47:50.547Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327096 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T23:47:50.548Z] [BOT] 📍 [ROUTING] "AI Data Specialist" @ ORG_f3ae3598
[2025-11-21T23:47:50.548Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T23:47:50.807Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist @ ORG_f3ae3598 in #💻・tech-jobs
  ✅ Industry: AI Data Specialist @ ORG_f3ae3598
[2025-11-21T23:47:52.308Z] [BOT] 🔍 DEBUG: Job "AI Data Specialist" | City: "Illinois" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T23:47:52.463Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist @ ORG_f3ae3598 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-21T23:47:53.964Z] [BOT] 📝 Marking as posted: JID_3073d29a...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T23:47:53.965Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T23:47:53.965Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_5e55d0ef
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T23:47:53.967Z] [BOT] 🔍 DEBUG: Temp file written (327079 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T23:47:53.967Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T23:47:53.967Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327079 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T23:47:53.967Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Florida - US" @ ORG_f3ae3598
[2025-11-21T23:47:53.967Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T23:47:54.127Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Florida - US @ ORG_f3ae3598 in #💻・tech-jobs
  ✅ Industry: AI Data Specialist - Florida - US @ ORG_f3ae3598
[2025-11-21T23:47:55.628Z] [BOT] 🔍 DEBUG: Job "AI Data Specialist - Florida - US" | City: "Florida" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T23:47:55.845Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Florida - US @ ORG_f3ae3598 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-21T23:47:57.346Z] [BOT] 📝 Marking as posted: JID_6c92846c...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T23:47:57.346Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T23:47:57.347Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_9bb31b08
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T23:47:57.348Z] [BOT] 🔍 DEBUG: Temp file written (327074 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T23:47:57.348Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T23:47:57.348Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327074 bytes
💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "AI Data Specialist - Texas - US" @ ORG_f3ae3598
[2025-11-21T23:47:57.348Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T23:47:57.650Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Texas - US @ ORG_f3ae3598 in #💻・tech-jobs
  ✅ Industry: AI Data Specialist - Texas - US @ ORG_f3ae3598
[2025-11-21T23:47:59.152Z] [BOT] 🔍 DEBUG: Job "AI Data Specialist - Texas - US" | City: "Texas" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T23:47:59.317Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Texas - US @ ORG_f3ae3598 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-21T23:48:00.817Z] [BOT] 📝 Marking as posted: JID_c0db96c2...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T23:48:00.817Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T23:48:00.817Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_2cb3af70
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T23:48:00.819Z] [BOT] 🔍 DEBUG: Temp file written (327077 bytes)
[2025-11-21T23:48:00.819Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T23:48:00.819Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T23:48:00.819Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327077 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T23:48:00.819Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Georgia - US" @ ORG_f3ae3598
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T23:48:01.056Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Georgia - US @ ORG_f3ae3598 in #💻・tech-jobs
  ✅ Industry: AI Data Specialist - Georgia - US @ ORG_f3ae3598
[2025-11-21T23:48:02.557Z] [BOT] 🔍 DEBUG: Job "AI Data Specialist - Georgia - US" | City: "Georgia" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T23:48:02.786Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Georgia - US @ ORG_f3ae3598 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-21T23:48:04.287Z] [BOT] 📝 Marking as posted: JID_57231fe9...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T23:48:04.287Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T23:48:04.287Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_0bf80934
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T23:48:04.288Z] [BOT] 🔍 DEBUG: Temp file written (327084 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T23:48:04.289Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T23:48:04.289Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327084 bytes
💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "AI Data Specialist - AI Data Specialist Team" @ ORG_f3ae3598
   Category: TECH (matched: "data")
[2025-11-21T23:48:04.289Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T23:48:04.637Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - AI Data Specialist Team @ ORG_f3ae3598 in #💻・tech-jobs
  ✅ Industry: AI Data Specialist - AI Data Specialist Team @ ORG_f3ae3598
[2025-11-21T23:48:06.138Z] [BOT] 🔍 DEBUG: Job "AI Data Specialist - AI Data Specialist Team" | City: "Tennessee" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T23:48:06.327Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - AI Data Specialist Team @ ORG_f3ae3598 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-21T23:48:07.827Z] [BOT] 📝 Marking as posted: JID_1ed24924...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T23:48:07.827Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T23:48:07.828Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_9da537cd
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T23:48:07.829Z] [BOT] 🔍 DEBUG: Temp file written (327096 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T23:48:07.830Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T23:48:07.830Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327096 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T23:48:07.830Z] [BOT] 📍 [ROUTING] "Digital Design Engineer" @ ORG_f2de61aa
   Category: TECH (matched: "engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T23:48:08.073Z] [BOT] ✅ Created forum post: 🏢 Digital Design Engineer @ ORG_f2de61aa in #💻・tech-jobs
[2025-11-21T23:48:08.073Z] [BOT] ✅ Industry: Digital Design Engineer @ ORG_f2de61aa
[2025-11-21T23:48:09.575Z] [BOT] 🔍 DEBUG: Job "Digital Design Engineer" | City: "Westlake Village" | State: "CA" | Location Channel ID: "1429..."
[2025-11-21T23:48:09.803Z] [BOT] ✅ Created forum post: 🏢 Digital Design Engineer @ ORG_f2de61aa in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-21T23:48:11.305Z] [BOT] 📝 Marking as posted: JID_792b79ca
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T23:48:11.305Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T23:48:11.305Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_2dd3fe88
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T23:48:11.307Z] [BOT] 🔍 DEBUG: Temp file written (327078 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T23:48:11.307Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T23:48:11.307Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327078 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T23:48:14.308Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-11-21T23:48:14.308Z] [BOT] 📍 [ROUTING] "Analyst 014 Geospatial - GIS" @ ORG_0ed94d48
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-11-21T23:48:14.670Z] [BOT] ✅ Created forum post: 🏢 Analyst 014 Geospatial - GIS @ ORG_0ed94d48 in #📣・marketing-jobs
  ✅ Industry: Analyst 014 Geospatial - GIS @ ORG_0ed94d48
[2025-11-21T23:48:16.172Z] [BOT] 🔍 DEBUG: Job "Analyst 014 Geospatial - GIS" | City: "Chicago" | State: "IL" | Location Channel ID: "1429..."
[2025-11-21T23:48:16.461Z] [BOT] ✅ Created forum post: 🏢 Analyst 014 Geospatial - GIS @ ORG_0ed94d48 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-21T23:48:17.963Z] [BOT] 📝 Marking as posted: JID_6305b3ec...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T23:48:17.963Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T23:48:17.964Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_b6879ba3
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T23:48:17.965Z] [BOT] 🔍 DEBUG: Temp file written (327127 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T23:48:17.966Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T23:48:17.966Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327127 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T23:48:20.967Z] [BOT] 🎉 Posting complete! Successfully posted: 16, Failed: 0
[2025-11-21T23:48:20.967Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-21T23:48:21.006Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 16
   Timestamp: 2025-11-21T23:48:21.005Z
[2025-11-21T23:48:23.015Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:3929) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*