# Discord Bot Execution Audit
**Timestamp:** 2025-11-18T00:39:19.696Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-18T00:38:51.263Z] ========================================
[2025-11-18T00:38:51.264Z] Discord Bot Execution Log
[2025-11-18T00:38:51.264Z] Environment: GitHub Actions
[2025-11-18T00:38:51.264Z] Node Version: v20.19.5
[2025-11-18T00:38:51.264Z] ========================================
[2025-11-18T00:38:51.264Z] Environment Variables Check:
[2025-11-18T00:38:51.264Z] DISCORD_TOKEN: ✅ Set
[2025-11-18T00:38:51.264Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-18T00:38:51.264Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-18T00:38:51.264Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-18T00:38:51.264Z] 
Multi-Channel Configuration:
[2025-11-18T00:38:51.264Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-18T00:38:51.264Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-18T00:38:51.264Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-18T00:38:51.265Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-18T00:38:51.265Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-18T00:38:51.265Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-18T00:38:51.265Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-18T00:38:51.265Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-18T00:38:51.265Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-18T00:38:51.265Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-18T00:38:51.265Z] 
Data Files Check:
[2025-11-18T00:38:51.265Z] .github/data/new_jobs.json: ✅ Exists (6 items, 26313 bytes)
[2025-11-18T00:38:51.267Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323234 bytes)
[2025-11-18T00:38:51.267Z] 
========================================
[2025-11-18T00:38:51.267Z] Starting Enhanced Discord Bot...
[2025-11-18T00:38:51.267Z] ========================================
[2025-11-18T00:38:51.543Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-18T00:38:51.543Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-18T00:38:52.308Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-18T00:38:52.309Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-18T00:38:52.309Z] [BOT] 📬 Found 5 new jobs (1 already posted)...
[2025-11-18T00:38:52.309Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-18T00:38:52.312Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-11-18T00:38:52.312Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_8c04d88f Health
[2025-11-18T00:38:52.312Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T00:38:52.316Z] [BOT ERROR] (node:2366) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-18T00:38:52.583Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_8c04d88f Health in #💻・tech-jobs
[2025-11-18T00:38:52.583Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_8c04d88f Health
[2025-11-18T00:38:54.085Z] [BOT] 🔍 DEBUG: Job "Associate Software Engineer" | City: "Manhasset" | State: "NY" | Location Channel ID: "1429..."
[2025-11-18T00:38:54.286Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_8c04d88f Health in #🗽・new-york
[2025-11-18T00:38:54.286Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-18T00:38:55.787Z] [BOT] 📝 Marking as posted: JID_e8ad5b3f...
[2025-11-18T00:38:55.787Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T00:38:55.788Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-18T00:38:55.788Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_bcc8c12b
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T00:38:55.789Z] [BOT] 🔍 DEBUG: Temp file written (323269 bytes)
[2025-11-18T00:38:55.789Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T00:38:55.789Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T00:38:55.790Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323269 bytes
[2025-11-18T00:38:55.790Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Software Engineer 1" @ ORG_7b717950
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T00:38:56.136Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #💻・tech-jobs
[2025-11-18T00:38:56.137Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_7b717950
[2025-11-18T00:38:57.637Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "Palo Alto" | State: "CA" | Location Channel ID: "1429..."
[2025-11-18T00:38:57.869Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-18T00:38:59.369Z] [BOT] 📝 Marking as posted: JID_83340e4d-...
  🔍 DEBUG: Set size before add: 5000
[2025-11-18T00:38:59.369Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T00:38:59.370Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_22cd871d
[2025-11-18T00:38:59.370Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T00:38:59.371Z] [BOT] 🔍 DEBUG: Temp file written (323293 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T00:38:59.371Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T00:38:59.371Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323293 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T00:38:59.371Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Innovation" @ ORG_cd5b7b9f
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T00:38:59.569Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Innovation @ ORG_cd5b7b9f in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Innovation @ ORG_cd5b7b9f
[2025-11-18T00:39:01.071Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1 - Innovation" | City: "Beaverton" | State: "OR" | Location Channel ID: "1429..."
[2025-11-18T00:39:01.290Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Innovation @ ORG_cd5b7b9f in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-18T00:39:02.790Z] [BOT] 📝 Marking as posted: JID_679a3b37...
  🔍 DEBUG: Set size before add: 5000
[2025-11-18T00:39:02.791Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T00:39:02.791Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_7f45d3c2
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T00:39:02.793Z] [BOT] 🔍 DEBUG: Temp file written (323337 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T00:39:02.793Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T00:39:02.793Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323337 bytes
[2025-11-18T00:39:02.793Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-18T00:39:02.793Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_a731a58c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T00:39:02.992Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_a731a58c in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_a731a58c
[2025-11-18T00:39:04.492Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "SF" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-18T00:39:05.105Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_a731a58c in #🌉・san-francisco
[2025-11-18T00:39:05.105Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-18T00:39:06.606Z] [BOT] 📝 Marking as posted: JID_08bd351b...
  🔍 DEBUG: Set size before add: 5000
[2025-11-18T00:39:06.606Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T00:39:06.606Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_d4bd84c3
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T00:39:06.608Z] [BOT] 🔍 DEBUG: Temp file written (323341 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T00:39:06.608Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T00:39:06.608Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323341 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T00:39:09.609Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-18T00:39:09.609Z] [BOT] 📍 [ROUTING] "Systems Engineer - Operations/Systems Analyst" @ ORG_b344d80e Boeing Company
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-18T00:39:10.070Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer - Operations/Systems Analyst @ ORG_b344d80e Boeing Company in #🩺・healthcare-jobs
  ✅ Industry: Systems Engineer - Operations/Systems Analyst @ ORG_b344d80e Boeing Company
[2025-11-18T00:39:11.571Z] [BOT] 🔍 DEBUG: Job "Systems Engineer - Operations/Systems Analyst" | City: "Arlington" | State: "VA" | Location Channel ID: "1429..."
[2025-11-18T00:39:11.888Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer - Operations/Systems Analyst @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-18T00:39:13.388Z] [BOT] 📝 Marking as posted: JID_a573c606-external_ca...
  🔍 DEBUG: Set size before add: 5000
[2025-11-18T00:39:13.388Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T00:39:13.389Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_951c39fd
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T00:39:13.391Z] [BOT] 🔍 DEBUG: Temp file written (323448 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T00:39:13.391Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T00:39:13.391Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323448 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T00:39:16.392Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-18T00:39:16.432Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 5
   Timestamp: 2025-11-18T00:39:16.431Z
[2025-11-18T00:39:18.441Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2366) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*