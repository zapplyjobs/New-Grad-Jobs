# Discord Bot Execution Audit
**Timestamp:** 2025-11-20T22:34:02.441Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-20T22:33:44.641Z] ========================================
[2025-11-20T22:33:44.642Z] Discord Bot Execution Log
[2025-11-20T22:33:44.642Z] Environment: GitHub Actions
[2025-11-20T22:33:44.642Z] Node Version: v20.19.5
[2025-11-20T22:33:44.642Z] ========================================
[2025-11-20T22:33:44.642Z] Environment Variables Check:
[2025-11-20T22:33:44.643Z] DISCORD_TOKEN: ✅ Set
[2025-11-20T22:33:44.643Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-20T22:33:44.643Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-20T22:33:44.643Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-20T22:33:44.643Z] 
Multi-Channel Configuration:
[2025-11-20T22:33:44.643Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-20T22:33:44.643Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-20T22:33:44.643Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-20T22:33:44.643Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-20T22:33:44.643Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-20T22:33:44.643Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-20T22:33:44.643Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-20T22:33:44.643Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-20T22:33:44.643Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-20T22:33:44.643Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-20T22:33:44.643Z] 
Data Files Check:
[2025-11-20T22:33:44.644Z] .github/data/new_jobs.json: ✅ Exists (6 items, 25931 bytes)
[2025-11-20T22:33:44.646Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 324700 bytes)
[2025-11-20T22:33:44.646Z] 
========================================
[2025-11-20T22:33:44.646Z] Starting Enhanced Discord Bot...
[2025-11-20T22:33:44.646Z] ========================================
[2025-11-20T22:33:44.929Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-20T22:33:44.930Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-20T22:33:45.782Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-20T22:33:45.783Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-20T22:33:45.783Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-20T22:33:45.784Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 3 new jobs (3 already posted)...
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-20T22:33:45.784Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-20T22:33:45.785Z] [BOT] 📍 [ROUTING] "Software Engineer 2 - Full Stack and Application Development" @ ORG_aa669b28
[2025-11-20T22:33:45.785Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T22:33:45.789Z] [BOT ERROR] (node:2223) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-20T22:33:46.026Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Full Stack and Application Development @ ORG_aa669b28 in #💻・tech-jobs
[2025-11-20T22:33:46.026Z] [BOT] ✅ Industry: Software Engineer 2 - Full Stack and Application Development @ ORG_aa669b28
[2025-11-20T22:33:47.528Z] [BOT] 🔍 DEBUG: Job "Software Engineer 2 - Full Stack and Application Development" | City: "San Jose" | State: "CA" | Location Channel ID: "1429..."
[2025-11-20T22:33:47.855Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Full Stack and Application Development @ ORG_aa669b28 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-20T22:33:49.355Z] [BOT] 📝 Marking as posted: JID_0a63ff19
  🔍 DEBUG: Set size before add: 5000
[2025-11-20T22:33:49.356Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T22:33:49.356Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-20T22:33:49.356Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_1265af8a
[2025-11-20T22:33:49.356Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T22:33:49.358Z] [BOT] 🔍 DEBUG: Temp file written (324682 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T22:33:49.358Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T22:33:49.358Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324682 bytes
[2025-11-20T22:33:49.358Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Analyst – Distribution Insights & Analytics" @ ORG_3db6634d
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T22:33:49.568Z] [BOT] ✅ Created forum post: 🏢 Analyst – Distribution Insights & Analytics @ ORG_3db6634d in #💻・tech-jobs
  ✅ Industry: Analyst – Distribution Insights & Analytics @ ORG_3db6634d
[2025-11-20T22:33:51.069Z] [BOT] 🔍 DEBUG: Job "Analyst – Distribution Insights & Analytics" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-20T22:33:51.321Z] [BOT] ✅ Created forum post: 🏢 Analyst – Distribution Insights & Analytics @ ORG_3db6634d in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-20T22:33:52.822Z] [BOT] 📝 Marking as posted: JID_be852503...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-20T22:33:52.822Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T22:33:52.822Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_67ddae6c
[2025-11-20T22:33:52.822Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T22:33:52.823Z] [BOT] 🔍 DEBUG: Temp file written (324682 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T22:33:52.824Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T22:33:52.824Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324682 bytes
💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Game Developer" @ ORG_d75f5e50
[2025-11-20T22:33:52.824Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T22:33:53.051Z] [BOT] ✅ Created forum post: 🏢 Game Developer @ ORG_d75f5e50 in #💻・tech-jobs
  ✅ Industry: Game Developer @ ORG_d75f5e50
[2025-11-20T22:33:54.554Z] [BOT] 🔍 DEBUG: Job "Game Developer" | City: "Huntsville" | State: "AL" | Location Channel ID: "1429..."
[2025-11-20T22:33:54.764Z] [BOT] ✅ Created forum post: 🏢 Game Developer @ ORG_d75f5e50 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-20T22:33:56.265Z] [BOT] 📝 Marking as posted: JID_1cddb216
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-20T22:33:56.265Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T22:33:56.265Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_86d1f6a3
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T22:33:56.267Z] [BOT] 🔍 DEBUG: Temp file written (324658 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T22:33:56.268Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T22:33:56.268Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324658 bytes
[2025-11-20T22:33:56.268Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-20T22:33:59.268Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-11-20T22:33:59.268Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-20T22:33:59.307Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 3
   Timestamp: 2025-11-20T22:33:59.307Z
[2025-11-20T22:34:01.318Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2223) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*