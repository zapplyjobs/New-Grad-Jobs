# Discord Bot Execution Audit
**Timestamp:** 2025-11-19T13:24:32.122Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-19T13:24:14.327Z] ========================================
[2025-11-19T13:24:14.328Z] Discord Bot Execution Log
[2025-11-19T13:24:14.328Z] Environment: GitHub Actions
[2025-11-19T13:24:14.328Z] Node Version: v20.19.5
[2025-11-19T13:24:14.328Z] ========================================
[2025-11-19T13:24:14.328Z] Environment Variables Check:
[2025-11-19T13:24:14.328Z] DISCORD_TOKEN: ✅ Set
[2025-11-19T13:24:14.328Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-19T13:24:14.328Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-19T13:24:14.328Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-19T13:24:14.328Z] 
Multi-Channel Configuration:
[2025-11-19T13:24:14.328Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-19T13:24:14.328Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-19T13:24:14.329Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-19T13:24:14.329Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-19T13:24:14.329Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-19T13:24:14.329Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-19T13:24:14.329Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-19T13:24:14.329Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-19T13:24:14.329Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-19T13:24:14.329Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-19T13:24:14.329Z] 
Data Files Check:
[2025-11-19T13:24:14.329Z] .github/data/new_jobs.json: ✅ Exists (4 items, 26003 bytes)
[2025-11-19T13:24:14.331Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323927 bytes)
[2025-11-19T13:24:14.331Z] 
========================================
[2025-11-19T13:24:14.331Z] Starting Enhanced Discord Bot...
[2025-11-19T13:24:14.331Z] ========================================
[2025-11-19T13:24:14.611Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-19T13:24:14.612Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-19T13:24:15.312Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-19T13:24:15.313Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-19T13:24:15.313Z] [BOT] 📬 Found 3 new jobs (1 already posted)...
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-19T13:24:15.314Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-19T13:24:15.315Z] [BOT] 📍 [ROUTING] "Software Engineer, Early Career" @ ORG_9505081b
[2025-11-19T13:24:15.315Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T13:24:15.319Z] [BOT ERROR] (node:2163) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-19T13:24:15.587Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Early Career @ ORG_9505081b in #💻・tech-jobs
[2025-11-19T13:24:15.587Z] [BOT] ✅ Industry: Software Engineer, Early Career @ ORG_9505081b
[2025-11-19T13:24:17.089Z] [BOT] 🔍 DEBUG: Job "Software Engineer, Early Career" | City: "Chicago" | State: "IL" | Location Channel ID: "1429..."
[2025-11-19T13:24:17.304Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Early Career @ ORG_9505081b in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-19T13:24:18.805Z] [BOT] 📝 Marking as posted: JID_a7ab022b...
[2025-11-19T13:24:18.805Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-19T13:24:18.805Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T13:24:18.806Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T13:24:18.806Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_5c1443c8
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T13:24:18.807Z] [BOT] 🔍 DEBUG: Temp file written (323923 bytes)
[2025-11-19T13:24:18.807Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T13:24:18.808Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T13:24:18.808Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323923 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T13:24:18.808Z] [BOT] 📍 [ROUTING] "Backend Engineer, New Grad" @ ORG_9f566c74in
   Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T13:24:19.011Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer, New Grad @ ORG_9f566c74in in #💻・tech-jobs
[2025-11-19T13:24:19.011Z] [BOT] ✅ Industry: Backend Engineer, New Grad @ ORG_9f566c74in
[2025-11-19T13:24:20.512Z] [BOT] 🔍 DEBUG: Job "Backend Engineer, New Grad" | City: "Palo Alto" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T13:24:20.744Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer, New Grad @ ORG_9f566c74in in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-19T13:24:22.245Z] [BOT] 📝 Marking as posted: JID_5a8e2a0f...
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T13:24:22.245Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T13:24:22.246Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T13:24:22.246Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_9753295c
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T13:24:22.247Z] [BOT] 🔍 DEBUG: Temp file written (323928 bytes)
[2025-11-19T13:24:22.247Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T13:24:22.248Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T13:24:22.248Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323928 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T13:24:22.248Z] [BOT] 📍 [ROUTING] "Software Engineer Data/AI/Intelligent Systems I (Full Time)" @ ORG_aa669b28
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T13:24:22.469Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Data/AI/Intelligent Systems I (Full Time) @ ORG_aa669b28 in #💻・tech-jobs
  ✅ Industry: Software Engineer Data/AI/Intelligent Systems I (Full Time) @ ORG_aa669b28
[2025-11-19T13:24:23.971Z] [BOT] 🔍 DEBUG: Job "Software Engineer Data/AI/Intelligent Systems I (Full Time)" | City: "Austin" | State: "TX" | Location Channel ID: "1429..."
[2025-11-19T13:24:24.231Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Data/AI/Intelligent Systems I (Full Time) @ ORG_aa669b28 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-19T13:24:25.732Z] [BOT] 📝 Marking as posted: JID_33df5a48-...
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T13:24:25.732Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T13:24:25.733Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e42d2cbc
[2025-11-19T13:24:25.733Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T13:24:25.734Z] [BOT] 🔍 DEBUG: Temp file written (324004 bytes)
[2025-11-19T13:24:25.734Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T13:24:25.735Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T13:24:25.735Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324004 bytes
[2025-11-19T13:24:25.735Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-19T13:24:28.735Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-19T13:24:28.775Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 3
   Timestamp: 2025-11-19T13:24:28.775Z
[2025-11-19T13:24:30.786Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2163) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*