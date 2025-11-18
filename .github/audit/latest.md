# Discord Bot Execution Audit
**Timestamp:** 2025-11-18T09:36:09.238Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-18T09:35:49.373Z] ========================================
[2025-11-18T09:35:49.374Z] Discord Bot Execution Log
[2025-11-18T09:35:49.374Z] Environment: GitHub Actions
[2025-11-18T09:35:49.374Z] Node Version: v20.19.5
[2025-11-18T09:35:49.374Z] ========================================
[2025-11-18T09:35:49.374Z] Environment Variables Check:
[2025-11-18T09:35:49.374Z] DISCORD_TOKEN: ✅ Set
[2025-11-18T09:35:49.374Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-18T09:35:49.374Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-18T09:35:49.374Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-18T09:35:49.374Z] 
Multi-Channel Configuration:
[2025-11-18T09:35:49.374Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-18T09:35:49.375Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-18T09:35:49.375Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-18T09:35:49.375Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-18T09:35:49.375Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-18T09:35:49.375Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-18T09:35:49.375Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-18T09:35:49.375Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-18T09:35:49.375Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-18T09:35:49.375Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-18T09:35:49.375Z] 
Data Files Check:
[2025-11-18T09:35:49.375Z] .github/data/new_jobs.json: ✅ Exists (4 items, 16655 bytes)
[2025-11-18T09:35:49.377Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323577 bytes)
[2025-11-18T09:35:49.377Z] 
========================================
[2025-11-18T09:35:49.377Z] Starting Enhanced Discord Bot...
[2025-11-18T09:35:49.377Z] ========================================
[2025-11-18T09:35:49.654Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-18T09:35:49.655Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-18T09:35:50.281Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-18T09:35:50.282Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-18T09:35:50.283Z] [BOT] 📬 Found 3 new jobs (1 already posted)...
📤 Posting 3 jobs...
[2025-11-18T09:35:50.283Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-18T09:35:50.286Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-18T09:35:50.286Z] [BOT] 📍 [ROUTING] "Video & Technology Associate" @ ORG_2bc58fcc League Baseball
[2025-11-18T09:35:50.286Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-18T09:35:50.291Z] [BOT ERROR] (node:2191) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-18T09:35:50.421Z] [BOT] ✅ Created forum post: 🏢 Video & Technology Associate @ ORG_2bc58fcc League Baseball in #🩺・healthcare-jobs
[2025-11-18T09:35:50.421Z] [BOT] ✅ Industry: Video & Technology Associate @ ORG_2bc58fcc League Baseball
[2025-11-18T09:35:51.922Z] [BOT] 🔍 DEBUG: Job "Video & Technology Associate" | City: "Reading" | State: "PA" | Location Channel ID: "1429..."
[2025-11-18T09:35:52.091Z] [BOT] ✅ Created forum post: 🏢 Video & Technology Associate @ ORG_2bc58fcc League Baseball in #💻・remote-usa
[2025-11-18T09:35:52.091Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-18T09:35:53.592Z] [BOT] 📝 Marking as posted: JID_10b80c8d...
[2025-11-18T09:35:53.592Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T09:35:53.593Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-18T09:35:53.593Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_15d72f77
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T09:35:53.594Z] [BOT] 🔍 DEBUG: Temp file written (323587 bytes)
[2025-11-18T09:35:53.594Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T09:35:53.594Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T09:35:53.595Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323587 bytes
[2025-11-18T09:35:53.595Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-18T09:35:56.596Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-18T09:35:56.596Z] [BOT] 📍 [ROUTING] "Major League Video and Technology Associate" @ ORG_2bc58fcc League Baseball
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T09:35:56.848Z] [BOT] ✅ Created forum post: 🏢 Major League Video and Technology Associate @ ORG_2bc58fcc League Baseball in #💻・tech-jobs
[2025-11-18T09:35:56.848Z] [BOT] ✅ Industry: Major League Video and Technology Associate @ ORG_2bc58fcc League Baseball
[2025-11-18T09:35:58.350Z] [BOT] 🔍 DEBUG: Job "Major League Video and Technology Associate" | City: "Philadelphia" | State: "PA" | Location Channel ID: "1429..."
[2025-11-18T09:35:58.525Z] [BOT] ✅ Created forum post: 🏢 Major League Video and Technology Associate @ ORG_2bc58fcc League Baseball in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-18T09:36:00.025Z] [BOT] 📝 Marking as posted: JID_10b80c8d...
  🔍 DEBUG: Set size before add: 5000
[2025-11-18T09:36:00.025Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T09:36:00.026Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_3dc26993
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T09:36:00.027Z] [BOT] 🔍 DEBUG: Temp file written (323589 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T09:36:00.027Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T09:36:00.027Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323589 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T09:36:00.027Z] [BOT] 📍 [ROUTING] "Associate Software Engineer - Data Engineering" @ ORG_2bc58fcc League Baseball
[2025-11-18T09:36:00.027Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T09:36:00.285Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Data Engineering @ ORG_2bc58fcc League Baseball in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer - Data Engineering @ ORG_2bc58fcc League Baseball
[2025-11-18T09:36:01.785Z] [BOT] 🔍 DEBUG: Job "Associate Software Engineer - Data Engineering" | City: "Philadelphia" | State: "PA" | Location Channel ID: "1429..."
[2025-11-18T09:36:02.073Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Data Engineering @ ORG_2bc58fcc League Baseball in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-18T09:36:03.573Z] [BOT] 📝 Marking as posted: JID_10b80c8d...
  🔍 DEBUG: Set size before add: 5000
[2025-11-18T09:36:03.573Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T09:36:03.573Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_52726713
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T09:36:03.575Z] [BOT] 🔍 DEBUG: Temp file written (323578 bytes)
[2025-11-18T09:36:03.575Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T09:36:03.575Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T09:36:03.575Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323578 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T09:36:06.576Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-18T09:36:06.648Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 3
[2025-11-18T09:36:06.648Z] [BOT] Timestamp: 2025-11-18T09:36:06.615Z
[2025-11-18T09:36:08.655Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2191) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*