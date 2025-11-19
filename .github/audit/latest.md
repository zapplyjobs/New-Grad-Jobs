# Discord Bot Execution Audit
**Timestamp:** 2025-11-19T13:40:44.850Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-19T13:40:20.240Z] ========================================
[2025-11-19T13:40:20.242Z] Discord Bot Execution Log
[2025-11-19T13:40:20.242Z] Environment: GitHub Actions
[2025-11-19T13:40:20.242Z] Node Version: v20.19.5
[2025-11-19T13:40:20.242Z] ========================================
[2025-11-19T13:40:20.242Z] Environment Variables Check:
[2025-11-19T13:40:20.242Z] DISCORD_TOKEN: ✅ Set
[2025-11-19T13:40:20.242Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-19T13:40:20.242Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-19T13:40:20.242Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-19T13:40:20.242Z] 
Multi-Channel Configuration:
[2025-11-19T13:40:20.242Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-19T13:40:20.242Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-19T13:40:20.242Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-19T13:40:20.242Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-19T13:40:20.242Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-19T13:40:20.242Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-19T13:40:20.242Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-19T13:40:20.242Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-19T13:40:20.242Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-19T13:40:20.242Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-19T13:40:20.243Z] 
Data Files Check:
[2025-11-19T13:40:20.243Z] .github/data/new_jobs.json: ✅ Exists (6 items, 36182 bytes)
[2025-11-19T13:40:20.245Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 324004 bytes)
[2025-11-19T13:40:20.245Z] 
========================================
[2025-11-19T13:40:20.245Z] Starting Enhanced Discord Bot...
[2025-11-19T13:40:20.245Z] ========================================
[2025-11-19T13:40:20.525Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-19T13:40:20.525Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-19T13:40:21.221Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-19T13:40:21.222Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-19T13:40:21.222Z] [BOT] 📬 Found 5 new jobs (1 already posted)...
📤 Posting 5 jobs...
[2025-11-19T13:40:21.223Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-19T13:40:21.223Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-11-19T13:40:21.223Z] [BOT] 📍 [ROUTING] "Software Engineer" @ Q2
[2025-11-19T13:40:21.223Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T13:40:21.228Z] [BOT ERROR] (node:2260) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-19T13:40:21.697Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Q2 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ Q2
[2025-11-19T13:40:23.198Z] [BOT] 🔍 DEBUG: Job "Software Engineer" | City: "Austin" | State: "TX" | Location Channel ID: "1429..."
[2025-11-19T13:40:23.442Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Q2 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-19T13:40:24.942Z] [BOT] 📝 Marking as posted: JID_64a28ffa-...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-19T13:40:24.942Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T13:40:24.943Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_1092caa4
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T13:40:24.945Z] [BOT] 🔍 DEBUG: Temp file written (324029 bytes)
[2025-11-19T13:40:24.945Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T13:40:24.945Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T13:40:24.945Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324029 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T13:40:24.945Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_a58a6490 Health
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T13:40:25.120Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_a58a6490 Health in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_a58a6490 Health
[2025-11-19T13:40:26.620Z] [BOT] 🔍 DEBUG: Job "Associate Software Engineer" | City: "New York" | State: "NY" | Location Channel ID: "1429..."
[2025-11-19T13:40:26.875Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_a58a6490 Health in #🗽・new-york
[2025-11-19T13:40:26.875Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-19T13:40:28.376Z] [BOT] 📝 Marking as posted: JID_d4f97e09...
[2025-11-19T13:40:28.376Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T13:40:28.377Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T13:40:28.377Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_d9288a8d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T13:40:28.379Z] [BOT] 🔍 DEBUG: Temp file written (324010 bytes)
[2025-11-19T13:40:28.379Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T13:40:28.379Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T13:40:28.379Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324010 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T13:40:28.379Z] [BOT] 📍 [ROUTING] "Software Development Engineer I" @ ORG_6c43c70a
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T13:40:28.547Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer I @ ORG_6c43c70a in #💻・tech-jobs
[2025-11-19T13:40:28.547Z] [BOT] ✅ Industry: Software Development Engineer I @ ORG_6c43c70a
[2025-11-19T13:40:30.048Z] [BOT] 🔍 DEBUG: Job "Software Development Engineer I" | City: "Bethpage" | State: "NY" | Location Channel ID: "1429..."
[2025-11-19T13:40:30.310Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer I @ ORG_6c43c70a in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-19T13:40:31.811Z] [BOT] 📝 Marking as posted: JID_e3879a05...
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T13:40:31.811Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T13:40:31.812Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_f813549d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T13:40:31.814Z] [BOT] 🔍 DEBUG: Temp file written (324043 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T13:40:31.814Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T13:40:31.814Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324043 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T13:40:31.814Z] [BOT] 📍 [ROUTING] "Software Engineer I, Finance" @ ORG_dfc20ecf
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T13:40:32.104Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I, Finance @ ORG_dfc20ecf in #💻・tech-jobs
[2025-11-19T13:40:32.105Z] [BOT] ✅ Industry: Software Engineer I, Finance @ ORG_dfc20ecf
[2025-11-19T13:40:33.606Z] [BOT] 🔍 DEBUG: Job "Software Engineer I, Finance" | City: "San Francisco" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T13:40:33.829Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I, Finance @ ORG_dfc20ecf in #🌉・san-francisco
[2025-11-19T13:40:33.829Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-19T13:40:35.330Z] [BOT] 📝 Marking as posted: JID_d7693f9f...
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T13:40:35.330Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T13:40:35.330Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_81a94abf
[2025-11-19T13:40:35.330Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T13:40:35.332Z] [BOT] 🔍 DEBUG: Temp file written (324035 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T13:40:35.332Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T13:40:35.332Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324035 bytes
💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Entry Level Software Developer" @ ORG_fa9f863b
[2025-11-19T13:40:35.332Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T13:40:35.663Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Developer @ ORG_fa9f863b in #💻・tech-jobs
  ✅ Industry: Entry Level Software Developer @ ORG_fa9f863b
[2025-11-19T13:40:37.164Z] [BOT] 🔍 DEBUG: Job "Entry Level Software Developer" | City: "Plano" | State: "TX" | Location Channel ID: "1429..."
[2025-11-19T13:40:37.406Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Developer @ ORG_fa9f863b in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-19T13:40:38.906Z] [BOT] 📝 Marking as posted: JID_6e724f84-...
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T13:40:38.906Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T13:40:38.907Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_dee6dabb
[2025-11-19T13:40:38.907Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T13:40:38.909Z] [BOT] 🔍 DEBUG: Temp file written (324046 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T13:40:38.909Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T13:40:38.909Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324046 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T13:40:41.911Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-19T13:40:41.951Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 5
   Timestamp: 2025-11-19T13:40:41.951Z
[2025-11-19T13:40:43.963Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2260) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*