# Discord Bot Execution Audit
**Timestamp:** 2025-11-20T19:46:12.467Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-20T19:46:01.663Z] ========================================
[2025-11-20T19:46:01.665Z] Discord Bot Execution Log
[2025-11-20T19:46:01.665Z] Environment: GitHub Actions
[2025-11-20T19:46:01.665Z] Node Version: v20.19.5
[2025-11-20T19:46:01.665Z] ========================================
[2025-11-20T19:46:01.665Z] Environment Variables Check:
[2025-11-20T19:46:01.665Z] DISCORD_TOKEN: ✅ Set
[2025-11-20T19:46:01.665Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-20T19:46:01.665Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-20T19:46:01.665Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-20T19:46:01.665Z] 
Multi-Channel Configuration:
[2025-11-20T19:46:01.665Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-20T19:46:01.665Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-20T19:46:01.665Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-20T19:46:01.665Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-20T19:46:01.665Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-20T19:46:01.665Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-20T19:46:01.665Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-20T19:46:01.665Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-20T19:46:01.665Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-20T19:46:01.665Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-20T19:46:01.665Z] 
Data Files Check:
[2025-11-20T19:46:01.666Z] .github/data/new_jobs.json: ✅ Exists (4 items, 7943 bytes)
[2025-11-20T19:46:01.667Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 324328 bytes)
[2025-11-20T19:46:01.667Z] 
========================================
[2025-11-20T19:46:01.667Z] Starting Enhanced Discord Bot...
[2025-11-20T19:46:01.668Z] ========================================
[2025-11-20T19:46:01.950Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-20T19:46:01.951Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-20T19:46:02.864Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-20T19:46:02.865Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-20T19:46:02.865Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-20T19:46:02.865Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 1 new jobs (3 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-20T19:46:02.866Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-20T19:46:02.866Z] [BOT] 📍 [ROUTING] "Senior Analytics Engineer" @ ORG_f4c7bd59
[2025-11-20T19:46:02.866Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T19:46:02.871Z] [BOT ERROR] (node:2191) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-20T19:46:03.045Z] [BOT] ✅ Created forum post: 🏢 Senior Analytics Engineer @ ORG_f4c7bd59 in #💻・tech-jobs
[2025-11-20T19:46:03.046Z] [BOT] ✅ Industry: Senior Analytics Engineer @ ORG_f4c7bd59
[2025-11-20T19:46:04.547Z] [BOT] 🔍 DEBUG: Job "Senior Analytics Engineer" | City: "SF" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-20T19:46:04.868Z] [BOT] ✅ Created forum post: 🏢 Senior Analytics Engineer @ ORG_f4c7bd59 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-20T19:46:06.368Z] [BOT] 📝 Marking as posted: JID_b3a76bc6...
  🔍 DEBUG: Set size before add: 5000
[2025-11-20T19:46:06.368Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T19:46:06.369Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_731faddb
[2025-11-20T19:46:06.369Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T19:46:06.370Z] [BOT] 🔍 DEBUG: Temp file written (324325 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T19:46:06.371Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T19:46:06.371Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324325 bytes
[2025-11-20T19:46:06.371Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-20T19:46:09.372Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-20T19:46:09.411Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 1
   Timestamp: 2025-11-20T19:46:09.411Z
[2025-11-20T19:46:11.420Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2191) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*