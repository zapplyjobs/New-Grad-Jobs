# Discord Bot Execution Audit
**Timestamp:** 2025-11-21T00:39:24.191Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-21T00:38:58.174Z] ========================================
[2025-11-21T00:38:58.175Z] Discord Bot Execution Log
[2025-11-21T00:38:58.175Z] Environment: GitHub Actions
[2025-11-21T00:38:58.175Z] Node Version: v20.19.5
[2025-11-21T00:38:58.175Z] ========================================
[2025-11-21T00:38:58.175Z] Environment Variables Check:
[2025-11-21T00:38:58.175Z] DISCORD_TOKEN: ✅ Set
[2025-11-21T00:38:58.175Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-21T00:38:58.175Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-21T00:38:58.175Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-21T00:38:58.175Z] 
Multi-Channel Configuration:
[2025-11-21T00:38:58.176Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-21T00:38:58.176Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-21T00:38:58.176Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-21T00:38:58.176Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-21T00:38:58.176Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-21T00:38:58.176Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-21T00:38:58.176Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-21T00:38:58.176Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-21T00:38:58.176Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-21T00:38:58.176Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-21T00:38:58.176Z] 
Data Files Check:
[2025-11-21T00:38:58.176Z] .github/data/new_jobs.json: ✅ Exists (7 items, 20215 bytes)
[2025-11-21T00:38:58.178Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 325642 bytes)
[2025-11-21T00:38:58.178Z] 
========================================
[2025-11-21T00:38:58.178Z] Starting Enhanced Discord Bot...
[2025-11-21T00:38:58.178Z] ========================================
[2025-11-21T00:38:58.454Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-21T00:38:58.454Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-21T00:39:00.123Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-21T00:39:00.124Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-21T00:39:00.124Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-21T00:39:00.124Z] [BOT] 📬 Found 5 new jobs (2 already posted)...
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-21T00:39:00.125Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-11-21T00:39:00.125Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Scm" @ ORG_864269d2 Health System
[2025-11-21T00:39:00.125Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T00:39:00.130Z] [BOT ERROR] (node:2516) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-21T00:39:00.338Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Scm @ ORG_864269d2 Health System in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Scm @ ORG_864269d2 Health System
[2025-11-21T00:39:01.840Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1 - Scm" | City: "Tacoma" | State: "WA" | Location Channel ID: "1429..."
[2025-11-21T00:39:02.457Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Scm @ ORG_864269d2 Health System in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-11-21T00:39:03.959Z] [BOT] 📝 Marking as posted: JID_97474184...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T00:39:03.959Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T00:39:03.959Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_4e6ecb4f
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T00:39:03.961Z] [BOT] 🔍 DEBUG: Temp file written (325685 bytes)
[2025-11-21T00:39:03.961Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T00:39:03.961Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T00:39:03.961Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325685 bytes
[2025-11-21T00:39:03.961Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-21T00:39:03.962Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_676c471b of America
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T00:39:04.203Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_676c471b of America in #💻・tech-jobs
[2025-11-21T00:39:04.203Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_676c471b of America
[2025-11-21T00:39:05.704Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T00:39:05.855Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_676c471b of America in #🗽・new-york
[2025-11-21T00:39:05.855Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-21T00:39:07.355Z] [BOT] 📝 Marking as posted: JID_8cc63837-...
[2025-11-21T00:39:07.355Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T00:39:07.356Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T00:39:07.356Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_1a4df6e1
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T00:39:07.357Z] [BOT] 🔍 DEBUG: Temp file written (325722 bytes)
[2025-11-21T00:39:07.357Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T00:39:07.357Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T00:39:07.357Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325722 bytes
[2025-11-21T00:39:07.358Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Entry Level Engineer" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "engineer")
[2025-11-21T00:39:07.358Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T00:39:07.541Z] [BOT] ✅ Created forum post: 🏢 Entry Level Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
[2025-11-21T00:39:07.541Z] [BOT] ✅ Industry: Entry Level Engineer @ ORG_c910d474 Dynamics Mission Systems
[2025-11-21T00:39:09.042Z] [BOT] 🔍 DEBUG: Job "Entry Level Engineer" | City: "Scottsdale" | State: "AZ" | Location Channel ID: "1429..."
[2025-11-21T00:39:09.324Z] [BOT] ✅ Created forum post: 🏢 Entry Level Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・remote-usa
[2025-11-21T00:39:09.324Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-21T00:39:10.826Z] [BOT] 📝 Marking as posted: JID_0c520133
[2025-11-21T00:39:10.826Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T00:39:10.827Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T00:39:10.827Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_3a9e34d0
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T00:39:10.828Z] [BOT] 🔍 DEBUG: Temp file written (325707 bytes)
[2025-11-21T00:39:10.828Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T00:39:10.828Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T00:39:10.828Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325707 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T00:39:10.829Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_6276c45c
[2025-11-21T00:39:10.829Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T00:39:11.097Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_6276c45c in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_6276c45c
[2025-11-21T00:39:12.597Z] [BOT] 🔍 DEBUG: Job "Associate Software Engineer" | City: "Remote in USA" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T00:39:13.091Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_6276c45c in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T00:39:14.592Z] [BOT] 📝 Marking as posted: JID_129f884a...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T00:39:14.593Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T00:39:14.593Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_1bd6861a
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T00:39:14.595Z] [BOT] 🔍 DEBUG: Temp file written (325711 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T00:39:14.596Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T00:39:14.596Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325711 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T00:39:14.596Z] [BOT] 📍 [ROUTING] "Applications Programmer 1" @ ORG_9d38443e of Central Florida
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T00:39:14.853Z] [BOT] ✅ Created forum post: 🏢 Applications Programmer 1 @ ORG_9d38443e of Central Florida in #💻・tech-jobs
  ✅ Industry: Applications Programmer 1 @ ORG_9d38443e of Central Florida
[2025-11-21T00:39:16.354Z] [BOT] 🔍 DEBUG: Job "Applications Programmer 1" | City: "Orlando" | State: "FL" | Location Channel ID: "1429..."
[2025-11-21T00:39:16.781Z] [BOT] ✅ Created forum post: 🏢 Applications Programmer 1 @ ORG_9d38443e of Central Florida in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T00:39:18.282Z] [BOT] 📝 Marking as posted: JID_d9f8435c...
[2025-11-21T00:39:18.283Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T00:39:18.283Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T00:39:18.283Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_7a37b6e6
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T00:39:18.284Z] [BOT] 🔍 DEBUG: Temp file written (325762 bytes)
[2025-11-21T00:39:18.285Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T00:39:18.285Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T00:39:18.285Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325762 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T00:39:21.285Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-11-21T00:39:21.285Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-21T00:39:21.325Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 5
   Timestamp: 2025-11-21T00:39:21.324Z
[2025-11-21T00:39:23.334Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2516) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*