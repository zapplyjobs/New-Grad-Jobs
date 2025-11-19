# Discord Bot Execution Audit
**Timestamp:** 2025-11-19T01:15:35.926Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 23
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-19T01:13:58.652Z] ========================================
[2025-11-19T01:13:58.653Z] Discord Bot Execution Log
[2025-11-19T01:13:58.653Z] Environment: GitHub Actions
[2025-11-19T01:13:58.653Z] Node Version: v20.19.5
[2025-11-19T01:13:58.653Z] ========================================
[2025-11-19T01:13:58.653Z] Environment Variables Check:
[2025-11-19T01:13:58.653Z] DISCORD_TOKEN: ✅ Set
[2025-11-19T01:13:58.653Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-19T01:13:58.653Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-19T01:13:58.653Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-19T01:13:58.653Z] 
Multi-Channel Configuration:
[2025-11-19T01:13:58.653Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-19T01:13:58.653Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-19T01:13:58.653Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-19T01:13:58.654Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-19T01:13:58.654Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-19T01:13:58.654Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-19T01:13:58.654Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-19T01:13:58.654Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-19T01:13:58.654Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-19T01:13:58.654Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-19T01:13:58.654Z] 
Data Files Check:
[2025-11-19T01:13:58.654Z] .github/data/new_jobs.json: ✅ Exists (24 items, 51802 bytes)
[2025-11-19T01:13:58.656Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323817 bytes)
[2025-11-19T01:13:58.656Z] 
========================================
[2025-11-19T01:13:58.656Z] Starting Enhanced Discord Bot...
[2025-11-19T01:13:58.656Z] ========================================
[2025-11-19T01:13:58.921Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-19T01:13:58.921Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-19T01:13:59.509Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-19T01:13:59.511Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-19T01:13:59.511Z] [BOT] 📬 Found 23 new jobs (1 already posted)...
[2025-11-19T01:13:59.511Z] [BOT] 📤 Posting 23 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-19T01:13:59.516Z] [BOT] 📌 Posting 20 jobs to #💻・tech-jobs
[2025-11-19T01:13:59.516Z] [BOT] 📍 [ROUTING] "AIML Resident - Responsible AI & Human Evaluation" @ ORG_f223faa9
[2025-11-19T01:13:59.517Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:13:59.521Z] [BOT ERROR] (node:2997) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-19T01:13:59.865Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Responsible AI & Human Evaluation @ ORG_f223faa9 in #💻・tech-jobs
[2025-11-19T01:13:59.866Z] [BOT] ✅ Industry: AIML Resident - Responsible AI & Human Evaluation @ ORG_f223faa9
[2025-11-19T01:14:01.367Z] [BOT] 🔍 DEBUG: Job "AIML Resident - Responsible AI & Human Evaluation" | City: "Lafayette" | State: "KS" | Location Channel ID: "1429..."
[2025-11-19T01:14:01.732Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Responsible AI & Human Evaluation @ ORG_f223faa9 in #💻・remote-usa
[2025-11-19T01:14:01.732Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-19T01:14:03.233Z] [BOT] 📝 Marking as posted: JID_d3880704
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T01:14:03.233Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:14:03.233Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T01:14:03.233Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_ec683a9a
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:14:03.235Z] [BOT] 🔍 DEBUG: Temp file written (323805 bytes)
[2025-11-19T01:14:03.235Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:14:03.235Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:14:03.235Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323805 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:14:03.235Z] [BOT] 📍 [ROUTING] "AIML Resident - Machine Learning Platform Technologies - Mlpt" @ ORG_f223faa9
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:14:03.603Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Machine Learning Platform Technologies - Mlpt @ ORG_f223faa9 in #💻・tech-jobs
[2025-11-19T01:14:03.603Z] [BOT] ✅ Industry: AIML Resident - Machine Learning Platform Technologies - Mlpt @ ORG_f223faa9
[2025-11-19T01:14:05.103Z] [BOT] 🔍 DEBUG: Job "AIML Resident - Machine Learning Platform Technologies - Mlpt" | City: "Santa Clara" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:14:05.361Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Machine Learning Platform Technologies - Mlpt @ ORG_f223faa9 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-19T01:14:06.861Z] [BOT] 📝 Marking as posted: JID_84522f5f
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T01:14:06.861Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:14:06.862Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_6f62f980
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:14:06.863Z] [BOT] 🔍 DEBUG: Temp file written (323773 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:14:06.863Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:14:06.863Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323773 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:14:06.863Z] [BOT] 📍 [ROUTING] "IOS Engineer - Photography Editing & Creativity Tools" @ ORG_f223faa9
   Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:14:07.066Z] [BOT] ✅ Created forum post: 🍎 IOS Engineer - Photography Editing & Creativity Tools @ ORG_f223faa9 in #💻・tech-jobs
  ✅ Industry: IOS Engineer - Photography Editing & Creativity Tools @ ORG_f223faa9
[2025-11-19T01:14:08.568Z] [BOT] 🔍 DEBUG: Job "IOS Engineer - Photography Editing & Creativity Tools" | City: "Cupertino" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:14:08.770Z] [BOT] ✅ Created forum post: 🍎 IOS Engineer - Photography Editing & Creativity Tools @ ORG_f223faa9 in #🌉・san-francisco
[2025-11-19T01:14:08.771Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-19T01:14:10.272Z] [BOT] 📝 Marking as posted: JID_b1f22de8
[2025-11-19T01:14:10.272Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:14:10.273Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T01:14:10.273Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_3b79ddd9
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:14:10.274Z] [BOT] 🔍 DEBUG: Temp file written (323767 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:14:10.274Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:14:10.274Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323767 bytes
[2025-11-19T01:14:10.275Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "AIML Resident - Siri Agent Modeling" @ ORG_f223faa9
[2025-11-19T01:14:10.275Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:14:10.511Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Siri Agent Modeling @ ORG_f223faa9 in #💻・tech-jobs
[2025-11-19T01:14:10.511Z] [BOT] ✅ Industry: AIML Resident - Siri Agent Modeling @ ORG_f223faa9
[2025-11-19T01:14:12.013Z] [BOT] 🔍 DEBUG: Job "AIML Resident - Siri Agent Modeling" | City: "Cupertino" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:14:12.259Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Siri Agent Modeling @ ORG_f223faa9 in #🌉・san-francisco
[2025-11-19T01:14:12.259Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-19T01:14:13.759Z] [BOT] 📝 Marking as posted: JID_8ce19b3e
[2025-11-19T01:14:13.759Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:14:13.760Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T01:14:13.760Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_7e839f10
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:14:13.761Z] [BOT] 🔍 DEBUG: Temp file written (323748 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:14:13.762Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:14:13.762Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323748 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:14:13.762Z] [BOT] 📍 [ROUTING] "AIML Resident - Robot Learning" @ ORG_f223faa9
   Category: TECH (default)
[2025-11-19T01:14:13.762Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:14:14.040Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Robot Learning @ ORG_f223faa9 in #💻・tech-jobs
[2025-11-19T01:14:14.040Z] [BOT] ✅ Industry: AIML Resident - Robot Learning @ ORG_f223faa9
[2025-11-19T01:14:15.540Z] [BOT] 🔍 DEBUG: Job "AIML Resident - Robot Learning" | City: "Santa Clara" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:14:15.852Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Robot Learning @ ORG_f223faa9 in #🌉・san-francisco
[2025-11-19T01:14:15.852Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-19T01:14:17.353Z] [BOT] 📝 Marking as posted: JID_4120269f
[2025-11-19T01:14:17.354Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:14:17.354Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T01:14:17.354Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_f4cc840c
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:14:17.356Z] [BOT] 🔍 DEBUG: Temp file written (323736 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:14:17.356Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:14:17.356Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323736 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:14:17.356Z] [BOT] 📍 [ROUTING] "AIML Resident" @ ORG_f223faa9
   Category: TECH (default)
[2025-11-19T01:14:17.356Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:14:17.542Z] [BOT] ✅ Created forum post: 🍎 AIML Resident @ ORG_f223faa9 in #💻・tech-jobs
[2025-11-19T01:14:17.542Z] [BOT] ✅ Industry: AIML Resident @ ORG_f223faa9
[2025-11-19T01:14:19.042Z] [BOT] 🔍 DEBUG: Job "AIML Resident" | City: "Cupertino" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:14:19.282Z] [BOT] ✅ Created forum post: 🍎 AIML Resident @ ORG_f223faa9 in #🌉・san-francisco
[2025-11-19T01:14:19.282Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-19T01:14:20.783Z] [BOT] 📝 Marking as posted: JID_d0b77178
[2025-11-19T01:14:20.783Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:14:20.783Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T01:14:20.783Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_c363a67f
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:14:20.785Z] [BOT] 🔍 DEBUG: Temp file written (323732 bytes)
[2025-11-19T01:14:20.785Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:14:20.786Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:14:20.786Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323732 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:14:20.786Z] [BOT] 📍 [ROUTING] "AIML Resident - Search & Answer Quality EPM" @ ORG_f223faa9
[2025-11-19T01:14:20.786Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:14:20.994Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Search & Answer Quality EPM @ ORG_f223faa9 in #💻・tech-jobs
[2025-11-19T01:14:20.995Z] [BOT] ✅ Industry: AIML Resident - Search & Answer Quality EPM @ ORG_f223faa9
[2025-11-19T01:14:22.495Z] [BOT] 🔍 DEBUG: Job "AIML Resident - Search & Answer Quality EPM" | City: "Cupertino" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:14:22.709Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Search & Answer Quality EPM @ ORG_f223faa9 in #🌉・san-francisco
[2025-11-19T01:14:22.709Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-19T01:14:24.209Z] [BOT] 📝 Marking as posted: JID_600186d5
[2025-11-19T01:14:24.210Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:14:24.210Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T01:14:24.210Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_a6f8d303
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:14:24.212Z] [BOT] 🔍 DEBUG: Temp file written (323711 bytes)
[2025-11-19T01:14:24.212Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:14:24.212Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:14:24.212Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323711 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:14:24.212Z] [BOT] 📍 [ROUTING] "AIML Resident - Knowledge Answer Quality & Richness" @ ORG_f223faa9
   Category: TECH (default)
[2025-11-19T01:14:24.212Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:14:24.495Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Knowledge Answer Quality & Richness @ ORG_f223faa9 in #💻・tech-jobs
[2025-11-19T01:14:24.495Z] [BOT] ✅ Industry: AIML Resident - Knowledge Answer Quality & Richness @ ORG_f223faa9
[2025-11-19T01:14:25.995Z] [BOT] 🔍 DEBUG: Job "AIML Resident - Knowledge Answer Quality & Richness" | City: "Santa Clara" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:14:26.210Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Knowledge Answer Quality & Richness @ ORG_f223faa9 in #🌉・san-francisco
[2025-11-19T01:14:26.210Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-19T01:14:27.711Z] [BOT] 📝 Marking as posted: JID_436629c5
[2025-11-19T01:14:27.712Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:14:27.712Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_6a1af072
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:14:27.713Z] [BOT] 🔍 DEBUG: Temp file written (323671 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:14:27.713Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:14:27.713Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323671 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:14:27.713Z] [BOT] 📍 [ROUTING] "AIML Resident - Privacy-Preserving Machine Learning - Priml" @ ORG_f223faa9
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:14:27.924Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Privacy-Preserving Machine Learning - Priml @ ORG_f223faa9 in #💻・tech-jobs
  ✅ Industry: AIML Resident - Privacy-Preserving Machine Learning - Priml @ ORG_f223faa9
[2025-11-19T01:14:29.425Z] [BOT] 🔍 DEBUG: Job "AIML Resident - Privacy-Preserving Machine Learning - Priml" | City: "Cupertino" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:14:29.710Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Privacy-Preserving Machine Learning - Priml @ ORG_f223faa9 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-19T01:14:31.212Z] [BOT] 📝 Marking as posted: JID_aaf8e6e5
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T01:14:31.212Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:14:31.212Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_3f930b56
[2025-11-19T01:14:31.212Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:14:31.214Z] [BOT] 🔍 DEBUG: Temp file written (323638 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:14:31.214Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:14:31.214Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323638 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:14:31.214Z] [BOT] 📍 [ROUTING] "AIML Resident - Machine Learning Research - Speech" @ ORG_f223faa9
[2025-11-19T01:14:31.214Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:14:31.488Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Machine Learning Research - Speech @ ORG_f223faa9 in #💻・tech-jobs
  ✅ Industry: AIML Resident - Machine Learning Research - Speech @ ORG_f223faa9
[2025-11-19T01:14:32.989Z] [BOT] 🔍 DEBUG: Job "AIML Resident - Machine Learning Research - Speech" | City: "Cupertino" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:14:33.305Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Machine Learning Research - Speech @ ORG_f223faa9 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-19T01:14:34.805Z] [BOT] 📝 Marking as posted: JID_ae422ca2
[2025-11-19T01:14:34.805Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:14:34.806Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_5359b921
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:14:34.807Z] [BOT] 🔍 DEBUG: Temp file written (323619 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:14:34.807Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:14:34.807Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323619 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:14:34.808Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_66279f04 Investments
[2025-11-19T01:14:34.808Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:14:35.140Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_66279f04 Investments in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_66279f04 Investments
[2025-11-19T01:14:36.640Z] [BOT] 🔍 DEBUG: Job "Software Engineer" | City: "Westlake" | State: "TX" | Location Channel ID: "1429..."
[2025-11-19T01:14:36.839Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_66279f04 Investments in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-19T01:14:38.340Z] [BOT] 📝 Marking as posted: JID_37bfa70e...
[2025-11-19T01:14:38.340Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:14:38.341Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_b87a5c37
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:14:38.343Z] [BOT] 🔍 DEBUG: Temp file written (323658 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:14:38.343Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:14:38.343Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323658 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:14:38.343Z] [BOT] 📍 [ROUTING] "AIML Triage Engineer - Machine Learning Platform and Technologies" @ ORG_f223faa9
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:14:38.635Z] [BOT] ✅ Created forum post: 🍎 AIML Triage Engineer - Machine Learning Platform and Technologies @ ORG_f223faa9 in #💻・tech-jobs
  ✅ Industry: AIML Triage Engineer - Machine Learning Platform and Technologies @ ORG_f223faa9
[2025-11-19T01:14:40.137Z] [BOT] 🔍 DEBUG: Job "AIML Triage Engineer - Machine Learning Platform and Technologies" | City: "Santa Clara" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:14:40.322Z] [BOT] ✅ Created forum post: 🍎 AIML Triage Engineer - Machine Learning Platform and Technologies @ ORG_f223faa9 in #🌉・san-francisco
[2025-11-19T01:14:40.322Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-19T01:14:41.823Z] [BOT] 📝 Marking as posted: JID_77702840
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T01:14:41.823Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:14:41.824Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_bd1f6dca
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:14:41.825Z] [BOT] 🔍 DEBUG: Temp file written (323632 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:14:41.825Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:14:41.826Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323632 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:14:41.826Z] [BOT] 📍 [ROUTING] "AIML Resident - Machine Intelligence Neural Design - Mind" @ ORG_f223faa9
   Category: TECH (default)
[2025-11-19T01:14:41.826Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:14:42.028Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Machine Intelligence Neural Design - Mind @ ORG_f223faa9 in #💻・tech-jobs
  ✅ Industry: AIML Resident - Machine Intelligence Neural Design - Mind @ ORG_f223faa9
[2025-11-19T01:14:43.529Z] [BOT] 🔍 DEBUG: Job "AIML Resident - Machine Intelligence Neural Design - Mind" | City: "Pittsburgh" | State: "PA" | Location Channel ID: "1429..."
[2025-11-19T01:14:43.772Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Machine Intelligence Neural Design - Mind @ ORG_f223faa9 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-19T01:14:45.274Z] [BOT] 📝 Marking as posted: JID_06ce94e6
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T01:14:45.274Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:14:45.274Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_d3f095cf
[2025-11-19T01:14:45.274Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:14:45.275Z] [BOT] 🔍 DEBUG: Temp file written (323601 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:14:45.276Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:14:45.276Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323601 bytes
💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Software Engineer – IS&T Early Career" @ ORG_f223faa9
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:14:45.483Z] [BOT] ✅ Created forum post: 🍎 Software Engineer – IS&T Early Career @ ORG_f223faa9 in #💻・tech-jobs
  ✅ Industry: Software Engineer – IS&T Early Career @ ORG_f223faa9
[2025-11-19T01:14:46.984Z] [BOT] 🔍 DEBUG: Job "Software Engineer – IS&T Early Career" | City: "Sunnyvale" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T01:14:47.224Z] [BOT] ✅ Created forum post: 🍎 Software Engineer – IS&T Early Career @ ORG_f223faa9 in #☀️・sunnyvale
[2025-11-19T01:14:47.224Z] [BOT] ✅ Location: ☀️・sunnyvale
[2025-11-19T01:14:48.724Z] [BOT] 📝 Marking as posted: JID_824342e8
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T01:14:48.724Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:14:48.725Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_2f34b16e
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:14:48.726Z] [BOT] 🔍 DEBUG: Temp file written (323578 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:14:48.726Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:14:48.726Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323578 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:14:48.726Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - Visual Intelligence" @ ORG_f223faa9
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:14:48.972Z] [BOT] ✅ Created forum post: 🍎 Machine Learning Engineer - Visual Intelligence @ ORG_f223faa9 in #💻・tech-jobs
[2025-11-19T01:14:48.972Z] [BOT] ✅ Industry: Machine Learning Engineer - Visual Intelligence @ ORG_f223faa9
[2025-11-19T01:14:50.472Z] [BOT] 🔍 DEBUG: Job "Machine Learning Engineer - Visual Intelligence" | City: "Seattle" | State: "WA" | Location Channel ID: "1429..."
[2025-11-19T01:14:50.707Z] [BOT] ✅ Created forum post: 🍎 Machine Learning Engineer - Visual Intelligence @ ORG_f223faa9 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-11-19T01:14:52.207Z] [BOT] 📝 Marking as posted: JID_dbbc6f11
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T01:14:52.207Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:14:52.208Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_66358230
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:14:52.209Z] [BOT] 🔍 DEBUG: Temp file written (323568 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:14:52.209Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:14:52.209Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323568 bytes
💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Junior Mobile Application Developer" @ ORG_d51736fa
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:14:52.416Z] [BOT] ✅ Created forum post: 🏢 Junior Mobile Application Developer @ ORG_d51736fa in #💻・tech-jobs
  ✅ Industry: Junior Mobile Application Developer @ ORG_d51736fa
[2025-11-19T01:14:53.917Z] [BOT] 🔍 DEBUG: Job "Junior Mobile Application Developer" | City: "Ashburn" | State: "VA" | Location Channel ID: "1429..."
[2025-11-19T01:14:54.154Z] [BOT] ✅ Created forum post: 🏢 Junior Mobile Application Developer @ ORG_d51736fa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-19T01:14:55.654Z] [BOT] 📝 Marking as posted: JID_f35747b5...
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T01:14:55.655Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:14:55.655Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_53985ff5
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:14:55.657Z] [BOT] 🔍 DEBUG: Temp file written (323600 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:14:55.657Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:14:55.657Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323600 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:14:55.657Z] [BOT] 📍 [ROUTING] "Mobile Application Developer" @ ORG_d51736fa
[2025-11-19T01:14:55.657Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:14:56.965Z] [BOT] ✅ Created forum post: 🏢 Mobile Application Developer @ ORG_d51736fa in #💻・tech-jobs
  ✅ Industry: Mobile Application Developer @ ORG_d51736fa
[2025-11-19T01:14:58.465Z] [BOT] 🔍 DEBUG: Job "Mobile Application Developer" | City: "Ashburn" | State: "VA" | Location Channel ID: "1429..."
[2025-11-19T01:14:58.690Z] [BOT] ✅ Created forum post: 🏢 Mobile Application Developer @ ORG_d51736fa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-19T01:15:00.191Z] [BOT] 📝 Marking as posted: JID_f35747b5...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-19T01:15:00.191Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:15:00.191Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_73bc9dd3
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:15:00.193Z] [BOT] 🔍 DEBUG: Temp file written (323628 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:15:00.193Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:15:00.193Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323628 bytes
💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Associate Enterprise Analytics Analyst" @ ORG_6a3a90f9
   Category: TECH (matched: "analytics")
[2025-11-19T01:15:00.193Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:15:00.470Z] [BOT] ✅ Created forum post: 🏢 Associate Enterprise Analytics Analyst @ ORG_6a3a90f9 in #💻・tech-jobs
  ✅ Industry: Associate Enterprise Analytics Analyst @ ORG_6a3a90f9
[2025-11-19T01:15:01.971Z] [BOT] 🔍 DEBUG: Job "Associate Enterprise Analytics Analyst" | City: "Ambler" | State: "PA" | Location Channel ID: "1429..."
[2025-11-19T01:15:02.210Z] [BOT] ✅ Created forum post: 🏢 Associate Enterprise Analytics Analyst @ ORG_6a3a90f9 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-19T01:15:03.710Z] [BOT] 📝 Marking as posted: JID_044ab968-...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-19T01:15:03.711Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:15:03.711Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_eb68f407
[2025-11-19T01:15:03.711Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:15:03.713Z] [BOT] 🔍 DEBUG: Temp file written (323680 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:15:03.713Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:15:03.713Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323680 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:15:03.713Z] [BOT] 📍 [ROUTING] "Associate Tech - Data Analytics - Cyber" @ ORG_b344d80e Hartford 
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:15:03.952Z] [BOT] ✅ Created forum post: 🏢 Associate Tech - Data Analytics - Cyber @ ORG_b344d80e Hartford  in #💻・tech-jobs
  ✅ Industry: Associate Tech - Data Analytics - Cyber @ ORG_b344d80e Hartford
[2025-11-19T01:15:05.454Z] [BOT] 🔍 DEBUG: Job "Associate Tech - Data Analytics - Cyber" | City: "Charlotte" | State: "NC" | Location Channel ID: "1429..."
[2025-11-19T01:15:05.709Z] [BOT] ✅ Created forum post: 🏢 Associate Tech - Data Analytics - Cyber @ ORG_b344d80e Hartford  in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-19T01:15:07.208Z] [BOT] 📝 Marking as posted: JID_c24c40c4...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-19T01:15:07.208Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:15:07.209Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_57774354
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:15:07.210Z] [BOT] 🔍 DEBUG: Temp file written (323806 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:15:07.210Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:15:07.210Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323806 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:15:07.210Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_124e3f53
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T01:15:07.709Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_124e3f53 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_124e3f53
[2025-11-19T01:15:09.209Z] [BOT] 🔍 DEBUG: Job "Software Engineer" | City: "SF" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-19T01:15:09.424Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_124e3f53 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-19T01:15:10.925Z] [BOT] 📝 Marking as posted: JID_c3b11ca0...
[2025-11-19T01:15:10.925Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:15:10.926Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T01:15:10.926Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_d40c3625
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:15:10.927Z] [BOT] 🔍 DEBUG: Temp file written (323779 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:15:10.927Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:15:10.927Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323779 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:15:13.928Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-19T01:15:13.928Z] [BOT] 📍 [ROUTING] "Information Analyst" @ ORG_b7f4d98f Health
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-19T01:15:14.330Z] [BOT] ✅ Created forum post: 🏢 Information Analyst @ ORG_b7f4d98f Health in #🩺・healthcare-jobs
[2025-11-19T01:15:14.330Z] [BOT] ✅ Industry: Information Analyst @ ORG_b7f4d98f Health
[2025-11-19T01:15:15.831Z] [BOT] 🔍 DEBUG: Job "Information Analyst" | City: "Phoenix" | State: "AZ" | Location Channel ID: "1429..."
[2025-11-19T01:15:16.173Z] [BOT] ✅ Created forum post: 🏢 Information Analyst @ ORG_b7f4d98f Health in #💻・remote-usa
[2025-11-19T01:15:16.173Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-19T01:15:17.674Z] [BOT] 📝 Marking as posted: JID_811d9d95...
[2025-11-19T01:15:17.674Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:15:17.674Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T01:15:17.674Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_da4a6bc8
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:15:17.676Z] [BOT] 🔍 DEBUG: Temp file written (323834 bytes)
[2025-11-19T01:15:17.676Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:15:17.676Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:15:17.676Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323834 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:15:20.676Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2025-11-19T01:15:20.676Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Cosmological Physics & Advanced Computing - CPAC" @ ORG_a867f63f National Laboratory
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-19T01:15:23.414Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Cosmological Physics & Advanced Computing - CPAC @ ORG_a867f63f National Labo in #📁・JID_e938df7b
  ✅ Industry: Postdoctoral Appointee - Cosmological Physics & Advanced Computing - CPAC @ ORG_a867f63f National Laboratory
[2025-11-19T01:15:24.915Z] [BOT] 🔍 DEBUG: Job "Postdoctoral Appointee - Cosmological Physics & Advanced Computing - CPAC" | City: "Woodridge" | State: "IL" | Location Channel ID: "1429..."
[2025-11-19T01:15:25.076Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Cosmological Physics & Advanced Computing - CPAC @ ORG_a867f63f National Labo in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-19T01:15:26.577Z] [BOT] 📝 Marking as posted: JID_ce2c0c1d-argonne_ca...
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T01:15:26.578Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:15:26.578Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_a95eb54f
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:15:26.580Z] [BOT] 🔍 DEBUG: Temp file written (323902 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:15:26.580Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:15:26.580Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323902 bytes
💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Sports Production & Operations Trainee Program - Spot - NBC Sports" @ ORG_3db6634d
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-19T01:15:26.928Z] [BOT] ✅ Created forum post: 🏢 Sports Production & Operations Trainee Program - Spot - NBC Sports @ ORG_3db6634d in #📁・JID_e938df7b
  ✅ Industry: Sports Production & Operations Trainee Program - Spot - NBC Sports @ ORG_3db6634d
[2025-11-19T01:15:28.428Z] [BOT] 🔍 DEBUG: Job "Sports Production & Operations Trainee Program - Spot - NBC Sports" | City: "Stamford" | State: "CT" | Location Channel ID: "1429..."
[2025-11-19T01:15:28.626Z] [BOT] ✅ Created forum post: 🏢 Sports Production & Operations Trainee Program - Spot - NBC Sports @ ORG_3db6634d in #💻・remote-usa
[2025-11-19T01:15:28.626Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-19T01:15:30.127Z] [BOT] 📝 Marking as posted: JID_be852503...
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T01:15:30.128Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T01:15:30.128Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_d851edf0
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T01:15:30.129Z] [BOT] 🔍 DEBUG: Temp file written (323880 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T01:15:30.130Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T01:15:30.130Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323880 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T01:15:33.131Z] [BOT] 🎉 Posting complete! Successfully posted: 23, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-19T01:15:33.169Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 23
   Timestamp: 2025-11-19T01:15:33.169Z
[2025-11-19T01:15:35.179Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2997) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*