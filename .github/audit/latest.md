# Discord Bot Execution Audit
**Timestamp:** 2025-11-15T19:46:28.152Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-15T19:46:18.029Z] ========================================
[2025-11-15T19:46:18.030Z] Discord Bot Execution Log
[2025-11-15T19:46:18.030Z] Environment: GitHub Actions
[2025-11-15T19:46:18.030Z] Node Version: v20.19.5
[2025-11-15T19:46:18.030Z] ========================================
[2025-11-15T19:46:18.030Z] Environment Variables Check:
[2025-11-15T19:46:18.030Z] DISCORD_TOKEN: ✅ Set
[2025-11-15T19:46:18.030Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-15T19:46:18.030Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-15T19:46:18.030Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-15T19:46:18.030Z] 
Multi-Channel Configuration:
[2025-11-15T19:46:18.030Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-15T19:46:18.030Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-15T19:46:18.030Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-15T19:46:18.030Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-15T19:46:18.031Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-15T19:46:18.031Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-15T19:46:18.031Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-15T19:46:18.031Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-15T19:46:18.031Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-15T19:46:18.031Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-15T19:46:18.031Z] 
Data Files Check:
[2025-11-15T19:46:18.031Z] .github/data/new_jobs.json: ✅ Exists (4 items, 17950 bytes)
[2025-11-15T19:46:18.033Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322008 bytes)
[2025-11-15T19:46:18.033Z] 
========================================
[2025-11-15T19:46:18.033Z] Starting Enhanced Discord Bot...
[2025-11-15T19:46:18.033Z] ========================================
[2025-11-15T19:46:18.317Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-15T19:46:18.317Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-15T19:46:19.044Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-15T19:46:19.045Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-15T19:46:19.045Z] [BOT] ⏭️ Skipping already posted (legacy ID): Entry Level - C Software Developer at mthree
[2025-11-15T19:46:19.045Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
📬 Found 1 new jobs (3 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-15T19:46:19.046Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-15T19:46:19.050Z] [BOT ERROR] (node:2263) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-15T19:46:19.306Z] [BOT] ✅ Created forum post: 🏢 Early Career Configuration Management Engineer @ ORG_b344d80e Boeing Company in #🩺・healthcare-jobs
[2025-11-15T19:46:19.306Z] [BOT] ✅ Industry: Early Career Configuration Management Engineer @ ORG_b344d80e Boeing Company
[2025-11-15T19:46:20.808Z] [BOT] 🔍 DEBUG: Job "Early Career Configuration Management Engineer" | City: "Hazelwood" | State: "MO" | Location Channel ID: "1429..."
[2025-11-15T19:46:21.080Z] [BOT] ✅ Created forum post: 🏢 Early Career Configuration Management Engineer @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-15T19:46:22.579Z] [BOT] 📝 Marking as posted: JID_a573c606-external_ca...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-15T19:46:22.579Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T19:46:22.580Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_8947102a
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T19:46:22.581Z] [BOT] 🔍 DEBUG: Temp file written (322050 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T19:46:22.581Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T19:46:22.582Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322050 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T19:46:25.582Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-15T19:46:27.591Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2263) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*