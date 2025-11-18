# Discord Bot Execution Audit
**Timestamp:** 2025-11-18T01:08:50.518Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-18T01:08:14.899Z] ========================================
[2025-11-18T01:08:14.900Z] Discord Bot Execution Log
[2025-11-18T01:08:14.900Z] Environment: GitHub Actions
[2025-11-18T01:08:14.900Z] Node Version: v20.19.5
[2025-11-18T01:08:14.900Z] ========================================
[2025-11-18T01:08:14.900Z] Environment Variables Check:
[2025-11-18T01:08:14.900Z] DISCORD_TOKEN: ✅ Set
[2025-11-18T01:08:14.900Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-18T01:08:14.900Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-18T01:08:14.900Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-18T01:08:14.900Z] 
Multi-Channel Configuration:
[2025-11-18T01:08:14.900Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-18T01:08:14.901Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-18T01:08:14.901Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-18T01:08:14.901Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-18T01:08:14.901Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-18T01:08:14.901Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-18T01:08:14.901Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-18T01:08:14.901Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-18T01:08:14.901Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-18T01:08:14.901Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-18T01:08:14.901Z] 
Data Files Check:
[2025-11-18T01:08:14.901Z] .github/data/new_jobs.json: ✅ Exists (8 items, 27809 bytes)
[2025-11-18T01:08:14.903Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323448 bytes)
[2025-11-18T01:08:14.903Z] 
========================================
[2025-11-18T01:08:14.903Z] Starting Enhanced Discord Bot...
[2025-11-18T01:08:14.903Z] ========================================
[2025-11-18T01:08:15.175Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-18T01:08:15.176Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-18T01:08:15.764Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-18T01:08:15.765Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-18T01:08:15.765Z] [BOT] 📬 Found 7 new jobs (1 already posted)...
📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-18T01:08:15.768Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-11-18T01:08:15.768Z] [BOT] 📍 [ROUTING] "Emerging Talent Software Engineers" @ ORG_569ec613 Morgan Chase
[2025-11-18T01:08:15.768Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T01:08:15.772Z] [BOT ERROR] (node:2167) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-18T01:08:16.098Z] [BOT] ✅ Created forum post: 🏢 Emerging Talent Software Engineers @ ORG_569ec613 Morgan Chase in #💻・tech-jobs
  ✅ Industry: Emerging Talent Software Engineers @ ORG_569ec613 Morgan Chase
[2025-11-18T01:08:17.600Z] [BOT] 🔍 DEBUG: Job "Emerging Talent Software Engineers" | City: "Tampa" | State: "FL" | Location Channel ID: "1429..."
[2025-11-18T01:08:17.864Z] [BOT] ✅ Created forum post: 🏢 Emerging Talent Software Engineers @ ORG_569ec613 Morgan Chase in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-18T01:08:19.364Z] [BOT] 📝 Marking as posted: JID_2896735f...
  🔍 DEBUG: Set size before add: 5000
[2025-11-18T01:08:19.364Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T01:08:19.365Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_eb29f631
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T01:08:19.366Z] [BOT] 🔍 DEBUG: Temp file written (323481 bytes)
[2025-11-18T01:08:19.366Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T01:08:19.366Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T01:08:19.367Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323481 bytes
[2025-11-18T01:08:19.367Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Software Engineer 1 - Full-stack" @ ORG_569ec613 Morgan Chase
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T01:08:19.633Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Full-stack @ ORG_569ec613 Morgan Chase in #💻・tech-jobs
[2025-11-18T01:08:19.633Z] [BOT] ✅ Industry: Software Engineer 1 - Full-stack @ ORG_569ec613 Morgan Chase
[2025-11-18T01:08:21.134Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1 - Full-stack" | City: "Seattle" | State: "WA" | Location Channel ID: "1429..."
[2025-11-18T01:08:21.377Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Full-stack @ ORG_569ec613 Morgan Chase in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-11-18T01:08:22.877Z] [BOT] 📝 Marking as posted: JID_2896735f...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-18T01:08:22.877Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T01:08:22.878Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_a5a1b40f
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T01:08:22.879Z] [BOT] 🔍 DEBUG: Temp file written (323518 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T01:08:22.879Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T01:08:22.879Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323518 bytes
💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Data Engineer - Digital Workplace" @ ORG_0baaf6f2 Express
   Category: TECH (matched: "data")
[2025-11-18T01:08:22.879Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T01:08:23.212Z] [BOT] ✅ Created forum post: 🏢 Data Engineer - Digital Workplace @ ORG_0baaf6f2 Express in #💻・tech-jobs
  ✅ Industry: Data Engineer - Digital Workplace @ ORG_0baaf6f2 Express
[2025-11-18T01:08:24.714Z] [BOT] 🔍 DEBUG: Job "Data Engineer - Digital Workplace" | City: "Phoenix" | State: "AZ" | Location Channel ID: "1429..."
[2025-11-18T01:08:24.971Z] [BOT] ✅ Created forum post: 🏢 Data Engineer - Digital Workplace @ ORG_0baaf6f2 Express in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-18T01:08:26.472Z] [BOT] 📝 Marking as posted: JID_92ab954e
  🔍 DEBUG: Set size before add: 5000
[2025-11-18T01:08:26.473Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T01:08:26.473Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_55352f14
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T01:08:26.474Z] [BOT] 🔍 DEBUG: Temp file written (323510 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T01:08:26.475Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T01:08:26.475Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323510 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T01:08:26.475Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_a06522bc Consulting Group
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T01:08:26.840Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_a06522bc Consulting Group in #💻・tech-jobs
  ✅ Industry: Data Scientist @ ORG_a06522bc Consulting Group
[2025-11-18T01:08:28.342Z] [BOT] 🔍 DEBUG: Job "Data Scientist" | City: "Boston" | State: "MA" | Location Channel ID: "1429..."
[2025-11-18T01:08:28.558Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_a06522bc Consulting Group in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-18T01:08:30.058Z] [BOT] 📝 Marking as posted: JID_c7da7294
  🔍 DEBUG: Set size before add: 5000
[2025-11-18T01:08:30.058Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T01:08:30.059Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_3ba3f683
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T01:08:30.060Z] [BOT] 🔍 DEBUG: Temp file written (323495 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T01:08:30.060Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T01:08:30.060Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323495 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T01:08:30.061Z] [BOT] 📍 [ROUTING] "Visiting Researcher - AI Mentorship Program - PhD" @ ORG_4f749de7
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T01:08:31.458Z] [BOT] ✅ Created forum post: 🔵 Visiting Researcher - AI Mentorship Program - PhD @ ORG_4f749de7 in #💻・tech-jobs
  ✅ Industry: Visiting Researcher - AI Mentorship Program - PhD @ ORG_4f749de7
[2025-11-18T01:08:32.959Z] [BOT] 🔍 DEBUG: Job "Visiting Researcher - AI Mentorship Program - PhD" | City: "Seattle" | State: "WA" | Location Channel ID: "1429..."
[2025-11-18T01:08:33.156Z] [BOT] ✅ Created forum post: 🔵 Visiting Researcher - AI Mentorship Program - PhD @ ORG_4f749de7 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-11-18T01:08:34.657Z] [BOT] 📝 Marking as posted: JID_be2b6b86...
  🔍 DEBUG: Set size before add: 5000
[2025-11-18T01:08:34.657Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T01:08:34.657Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-18T01:08:34.657Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_29bbc4d4
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T01:08:34.658Z] [BOT] 🔍 DEBUG: Temp file written (323494 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T01:08:34.658Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T01:08:34.659Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323494 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T01:08:34.659Z] [BOT] 📍 [ROUTING] "Software Engineering Development Program - Sedp" @ ORG_05d2f9ea Electric
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T01:08:34.861Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Development Program - Sedp @ ORG_05d2f9ea Electric in #💻・tech-jobs
  ✅ Industry: Software Engineering Development Program - Sedp @ ORG_05d2f9ea Electric
[2025-11-18T01:08:36.362Z] [BOT] 🔍 DEBUG: Job "Software Engineering Development Program - Sedp" | City: "Elyria" | State: "OH" | Location Channel ID: "1429..."
[2025-11-18T01:08:36.749Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Development Program - Sedp @ ORG_05d2f9ea Electric in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-18T01:08:38.250Z] [BOT] 📝 Marking as posted: JID_45c085f2...
  🔍 DEBUG: Set size before add: 5000
[2025-11-18T01:08:38.251Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T01:08:38.251Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_2b70d2b5
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T01:08:38.252Z] [BOT] 🔍 DEBUG: Temp file written (323524 bytes)
[2025-11-18T01:08:38.252Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T01:08:38.252Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T01:08:38.253Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323524 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T01:08:41.254Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-11-18T01:08:41.254Z] [BOT] 📍 [ROUTING] "Impact Analyst" @ ORG_886b5052
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-11-18T01:08:41.448Z] [BOT] ✅ Created forum post: 🏢 Impact Analyst @ ORG_886b5052 in #📣・marketing-jobs
  ✅ Industry: Impact Analyst @ ORG_886b5052
[2025-11-18T01:08:42.949Z] [BOT] 🔍 DEBUG: Job "Impact Analyst" | City: "Remote in USA" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-18T01:08:43.186Z] [BOT] ✅ Created forum post: 🏢 Impact Analyst @ ORG_886b5052 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-18T01:08:44.687Z] [BOT] 📝 Marking as posted: JID_e3931a2b...
[2025-11-18T01:08:44.687Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T01:08:44.688Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_866bf7c8
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T01:08:44.689Z] [BOT] 🔍 DEBUG: Temp file written (323515 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T01:08:44.689Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T01:08:44.689Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323515 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T01:08:47.690Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-18T01:08:47.729Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 7
   Timestamp: 2025-11-18T01:08:47.729Z
[2025-11-18T01:08:49.738Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2167) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*