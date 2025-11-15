# Discord Bot Execution Audit
**Timestamp:** 2025-11-15T09:02:00.851Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-15T09:01:39.729Z] ========================================
[2025-11-15T09:01:39.730Z] Discord Bot Execution Log
[2025-11-15T09:01:39.730Z] Environment: GitHub Actions
[2025-11-15T09:01:39.730Z] Node Version: v20.19.5
[2025-11-15T09:01:39.730Z] ========================================
[2025-11-15T09:01:39.731Z] Environment Variables Check:
[2025-11-15T09:01:39.731Z] DISCORD_TOKEN: ✅ Set
[2025-11-15T09:01:39.731Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-15T09:01:39.731Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-15T09:01:39.731Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-15T09:01:39.731Z] 
Multi-Channel Configuration:
[2025-11-15T09:01:39.731Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-15T09:01:39.731Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-15T09:01:39.731Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-15T09:01:39.731Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-15T09:01:39.731Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-15T09:01:39.731Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-15T09:01:39.731Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-15T09:01:39.731Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-15T09:01:39.731Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-15T09:01:39.731Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-15T09:01:39.731Z] 
Data Files Check:
[2025-11-15T09:01:39.732Z] .github/data/new_jobs.json: ✅ Exists (6 items, 17878 bytes)
[2025-11-15T09:01:39.734Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322127 bytes)
[2025-11-15T09:01:39.734Z] 
========================================
[2025-11-15T09:01:39.734Z] Starting Enhanced Discord Bot...
[2025-11-15T09:01:39.734Z] ========================================
[2025-11-15T09:01:40.013Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-15T09:01:40.013Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-15T09:01:41.226Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-15T09:01:41.227Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-15T09:01:41.227Z] [BOT] ⏭️ Skipping already posted (legacy ID): Entry Level - C Software Developer at mthree
[2025-11-15T09:01:41.227Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
📬 Found 3 new jobs (3 already posted)...
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-15T09:01:41.229Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-15T09:01:41.233Z] [BOT ERROR] (node:2176) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-15T09:01:41.530Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - Networking - Teleoperation @ ORG_4d802438 in #💻・tech-jobs
[2025-11-15T09:01:41.530Z] [BOT] ✅ Industry: Senior Software Engineer - Networking - Teleoperation @ ORG_4d802438
[2025-11-15T09:01:43.032Z] [BOT] 🔍 DEBUG: Job "Senior Software Engineer - Networking - Teleoperation" | City: "Mountain View" | State: "CA" | Location Channel ID: "1429..."
[2025-11-15T09:01:43.409Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - Networking - Teleoperation @ ORG_4d802438 in #🌄・mountain-view
[2025-11-15T09:01:43.409Z] [BOT] ✅ Location: 🌄・mountain-view
[2025-11-15T09:01:44.909Z] [BOT] 📝 Marking as posted: JID_015654aa
[2025-11-15T09:01:44.909Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-15T09:01:44.909Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T09:01:44.910Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T09:01:44.910Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_ea215799
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T09:01:44.911Z] [BOT] 🔍 DEBUG: Temp file written (322095 bytes)
[2025-11-15T09:01:44.911Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T09:01:44.912Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T09:01:44.912Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322095 bytes
[2025-11-15T09:01:44.912Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-15T09:01:45.524Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ skillz in #💻・tech-jobs
[2025-11-15T09:01:45.524Z] [BOT] ✅ Industry: Associate Software Engineer @ skillz
[2025-11-15T09:01:47.026Z] [BOT] 🔍 DEBUG: Job "Associate Software Engineer" | City: "Las Vegas" | State: "NV" | Location Channel ID: "1429..."
[2025-11-15T09:01:47.183Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ skillz in #💻・remote-usa
[2025-11-15T09:01:47.183Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-15T09:01:48.684Z] [BOT] 📝 Marking as posted: JID_52428cad
[2025-11-15T09:01:48.685Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T09:01:48.685Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T09:01:48.685Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_d40b9211
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T09:01:48.686Z] [BOT] 🔍 DEBUG: Temp file written (322071 bytes)
[2025-11-15T09:01:48.687Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T09:01:48.687Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T09:01:48.687Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322071 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T09:01:51.688Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-15T09:01:51.966Z] [BOT] ✅ Created forum post: 🏢 Order Processing Technician 1 @ ORG_1550f0e6 ABLOY in #🩺・healthcare-jobs
[2025-11-15T09:01:51.966Z] [BOT] ✅ Industry: Order Processing Technician 1 @ ORG_1550f0e6 ABLOY
[2025-11-15T09:01:53.468Z] [BOT] 🔍 DEBUG: Job "Order Processing Technician 1" | City: "Mason City" | State: "IA" | Location Channel ID: "1429..."
[2025-11-15T09:01:53.734Z] [BOT] ✅ Created forum post: 🏢 Order Processing Technician 1 @ ORG_1550f0e6 ABLOY in #💻・remote-usa
[2025-11-15T09:01:53.734Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-15T09:01:55.235Z] [BOT] 📝 Marking as posted: JID_749bb154...
[2025-11-15T09:01:55.235Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T09:01:55.235Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T09:01:55.236Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e91a3dcc
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T09:01:55.237Z] [BOT] 🔍 DEBUG: Temp file written (322103 bytes)
[2025-11-15T09:01:55.237Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T09:01:55.237Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T09:01:55.237Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322103 bytes
[2025-11-15T09:01:55.237Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-15T09:01:58.238Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-11-15T09:01:58.238Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-15T09:02:00.246Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2176) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*