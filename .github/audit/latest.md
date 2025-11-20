# Discord Bot Execution Audit
**Timestamp:** 2025-11-20T16:51:42.198Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-20T16:51:27.912Z] ========================================
[2025-11-20T16:51:27.913Z] Discord Bot Execution Log
[2025-11-20T16:51:27.913Z] Environment: GitHub Actions
[2025-11-20T16:51:27.913Z] Node Version: v20.19.5
[2025-11-20T16:51:27.913Z] ========================================
[2025-11-20T16:51:27.913Z] Environment Variables Check:
[2025-11-20T16:51:27.913Z] DISCORD_TOKEN: ✅ Set
[2025-11-20T16:51:27.914Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-20T16:51:27.914Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-20T16:51:27.914Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-20T16:51:27.914Z] 
Multi-Channel Configuration:
[2025-11-20T16:51:27.914Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-20T16:51:27.914Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-20T16:51:27.914Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-20T16:51:27.914Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-20T16:51:27.914Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-20T16:51:27.914Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-20T16:51:27.914Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-20T16:51:27.914Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-20T16:51:27.914Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-20T16:51:27.914Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-20T16:51:27.914Z] 
Data Files Check:
[2025-11-20T16:51:27.915Z] .github/data/new_jobs.json: ✅ Exists (5 items, 14885 bytes)
[2025-11-20T16:51:27.916Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 324219 bytes)
[2025-11-20T16:51:27.916Z] 
========================================
[2025-11-20T16:51:27.917Z] Starting Enhanced Discord Bot...
[2025-11-20T16:51:27.917Z] ========================================
[2025-11-20T16:51:28.207Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-20T16:51:28.207Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-20T16:51:29.206Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-20T16:51:29.207Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-20T16:51:29.207Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-20T16:51:29.207Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 2 new jobs (3 already posted)...
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-20T16:51:29.208Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-20T16:51:29.208Z] [BOT] 📍 [ROUTING] "Associate Data Engineer" @ ORG_35906586
[2025-11-20T16:51:29.208Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T16:51:29.212Z] [BOT ERROR] (node:2425) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-20T16:51:29.483Z] [BOT] ✅ Created forum post: 🏢 Associate Data Engineer @ ORG_35906586 in #💻・tech-jobs
[2025-11-20T16:51:29.484Z] [BOT] ✅ Industry: Associate Data Engineer @ ORG_35906586
[2025-11-20T16:51:30.985Z] [BOT] 🔍 DEBUG: Job "Associate Data Engineer" | City: "Charlotte" | State: "NC" | Location Channel ID: "1429..."
[2025-11-20T16:51:31.177Z] [BOT] ✅ Created forum post: 🏢 Associate Data Engineer @ ORG_35906586 in #💻・remote-usa
[2025-11-20T16:51:31.177Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-20T16:51:32.676Z] [BOT] 📝 Marking as posted: JID_7b291a2d...
[2025-11-20T16:51:32.677Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T16:51:32.677Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-20T16:51:32.677Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_392d8b2c
[2025-11-20T16:51:32.678Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T16:51:32.679Z] [BOT] 🔍 DEBUG: Temp file written (324248 bytes)
[2025-11-20T16:51:32.679Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T16:51:32.679Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T16:51:32.680Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324248 bytes
[2025-11-20T16:51:32.680Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-20T16:51:32.680Z] [BOT] 📍 [ROUTING] "Associate Software Development Engineer" @ ORG_6bda74c9 Health
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T16:51:32.945Z] [BOT] ✅ Created forum post: 🏢 Associate Software Development Engineer @ ORG_6bda74c9 Health in #💻・tech-jobs
[2025-11-20T16:51:32.945Z] [BOT] ✅ Industry: Associate Software Development Engineer @ ORG_6bda74c9 Health
[2025-11-20T16:51:34.445Z] [BOT] 🔍 DEBUG: Job "Associate Software Development Engineer" | City: "Richardson" | State: "TX" | Location Channel ID: "1429..."
[2025-11-20T16:51:34.619Z] [BOT] ✅ Created forum post: 🏢 Associate Software Development Engineer @ ORG_6bda74c9 Health in #🤠・austin
[2025-11-20T16:51:34.620Z] [BOT] ✅ Location: 🤠・austin
[2025-11-20T16:51:36.120Z] [BOT] 📝 Marking as posted: JID_69cf824b...
[2025-11-20T16:51:36.120Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T16:51:36.121Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-20T16:51:36.121Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_cf7cdbf8
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T16:51:36.122Z] [BOT] 🔍 DEBUG: Temp file written (324288 bytes)
[2025-11-20T16:51:36.122Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T16:51:36.122Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T16:51:36.122Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324288 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-20T16:51:39.123Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-11-20T16:51:39.123Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-20T16:51:39.161Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 2
[2025-11-20T16:51:39.161Z] [BOT] Timestamp: 2025-11-20T16:51:39.160Z
[2025-11-20T16:51:41.170Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2425) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*