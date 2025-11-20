# Discord Bot Execution Audit
**Timestamp:** 2025-11-20T03:01:39.045Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-20T03:01:25.059Z] ========================================
[2025-11-20T03:01:25.060Z] Discord Bot Execution Log
[2025-11-20T03:01:25.060Z] Environment: GitHub Actions
[2025-11-20T03:01:25.060Z] Node Version: v20.19.5
[2025-11-20T03:01:25.060Z] ========================================
[2025-11-20T03:01:25.060Z] Environment Variables Check:
[2025-11-20T03:01:25.060Z] DISCORD_TOKEN: ✅ Set
[2025-11-20T03:01:25.060Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-20T03:01:25.060Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-20T03:01:25.060Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-20T03:01:25.061Z] 
Multi-Channel Configuration:
[2025-11-20T03:01:25.061Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-20T03:01:25.061Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-20T03:01:25.061Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-20T03:01:25.061Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-20T03:01:25.061Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-20T03:01:25.061Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-20T03:01:25.061Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-20T03:01:25.061Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-20T03:01:25.061Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-20T03:01:25.061Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-20T03:01:25.061Z] 
Data Files Check:
[2025-11-20T03:01:25.061Z] .github/data/new_jobs.json: ✅ Exists (4 items, 15359 bytes)
[2025-11-20T03:01:25.063Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 324118 bytes)
[2025-11-20T03:01:25.063Z] 
========================================
[2025-11-20T03:01:25.063Z] Starting Enhanced Discord Bot...
[2025-11-20T03:01:25.063Z] ========================================
[2025-11-20T03:01:25.336Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-20T03:01:25.337Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-20T03:01:25.980Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-20T03:01:25.981Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-20T03:01:25.981Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-20T03:01:25.981Z] [BOT] 📬 Found 2 new jobs (2 already posted)...
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-20T03:01:25.982Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-20T03:01:25.982Z] [BOT] 📍 [ROUTING] "MES Programmer" @ ORG_1c8abade
[2025-11-20T03:01:25.982Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T03:01:25.987Z] [BOT ERROR] (node:2295) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-20T03:01:26.203Z] [BOT] ✅ Created forum post: 🏢 MES Programmer @ ORG_1c8abade in #💻・tech-jobs
  ✅ Industry: MES Programmer @ ORG_1c8abade
[2025-11-20T03:01:27.705Z] [BOT] 🔍 DEBUG: Job "MES Programmer" | City: "Cambridge" | State: "MA" | Location Channel ID: "1429..."
[2025-11-20T03:01:27.884Z] [BOT] ✅ Created forum post: 🏢 MES Programmer @ ORG_1c8abade in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-20T03:01:29.386Z] [BOT] 📝 Marking as posted: JID_6353ad35-draper_care...
  🔍 DEBUG: Set size before add: 5000
[2025-11-20T03:01:29.386Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T03:01:29.387Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_bd6e6118
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T03:01:29.388Z] [BOT] 🔍 DEBUG: Temp file written (324160 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T03:01:29.388Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T03:01:29.389Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324160 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-20T03:01:29.389Z] [BOT] 📍 [ROUTING] "Full Stack Software Engineer - Constellation Tools - Starlink" @ ORG_afd623b1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T03:01:29.695Z] [BOT] ✅ Created forum post: 🚀 Full Stack Software Engineer - Constellation Tools - Starlink @ ORG_afd623b1 in #💻・tech-jobs
[2025-11-20T03:01:29.695Z] [BOT] ✅ Industry: Full Stack Software Engineer - Constellation Tools - Starlink @ ORG_afd623b1
[2025-11-20T03:01:31.195Z] [BOT] 🔍 DEBUG: Job "Full Stack Software Engineer - Constellation Tools - Starlink" | City: "Redmond" | State: "WA" | Location Channel ID: "1429..."
[2025-11-20T03:01:31.852Z] [BOT] ✅ Created forum post: 🚀 Full Stack Software Engineer - Constellation Tools - Starlink @ ORG_afd623b1 in #🖥️・redmond
  ✅ Location: 🖥️・redmond
[2025-11-20T03:01:33.352Z] [BOT] 📝 Marking as posted: JID_12e5cea1...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-20T03:01:33.353Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T03:01:33.353Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-20T03:01:33.353Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_880aa2c3
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T03:01:33.354Z] [BOT] 🔍 DEBUG: Temp file written (324165 bytes)
[2025-11-20T03:01:33.354Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T03:01:33.354Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T03:01:33.354Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324165 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-20T03:01:36.356Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-20T03:01:36.395Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 2
   Timestamp: 2025-11-20T03:01:36.394Z
[2025-11-20T03:01:38.404Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2295) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*