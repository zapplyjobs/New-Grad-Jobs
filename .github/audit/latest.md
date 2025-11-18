# Discord Bot Execution Audit
**Timestamp:** 2025-11-18T05:35:13.678Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-18T05:34:59.417Z] ========================================
[2025-11-18T05:34:59.419Z] Discord Bot Execution Log
[2025-11-18T05:34:59.419Z] Environment: GitHub Actions
[2025-11-18T05:34:59.419Z] Node Version: v20.19.5
[2025-11-18T05:34:59.419Z] ========================================
[2025-11-18T05:34:59.419Z] Environment Variables Check:
[2025-11-18T05:34:59.419Z] DISCORD_TOKEN: ✅ Set
[2025-11-18T05:34:59.419Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-18T05:34:59.419Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-18T05:34:59.419Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-18T05:34:59.419Z] 
Multi-Channel Configuration:
[2025-11-18T05:34:59.419Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-18T05:34:59.419Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-18T05:34:59.419Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-18T05:34:59.420Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-18T05:34:59.420Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-18T05:34:59.420Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-18T05:34:59.420Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-18T05:34:59.420Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-18T05:34:59.420Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-18T05:34:59.420Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-18T05:34:59.420Z] 
Data Files Check:
[2025-11-18T05:34:59.420Z] .github/data/new_jobs.json: ✅ Exists (3 items, 9297 bytes)
[2025-11-18T05:34:59.422Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323581 bytes)
[2025-11-18T05:34:59.422Z] 
========================================
[2025-11-18T05:34:59.422Z] Starting Enhanced Discord Bot...
[2025-11-18T05:34:59.422Z] ========================================
[2025-11-18T05:34:59.714Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-18T05:34:59.714Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-18T05:35:00.401Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-18T05:35:00.402Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-18T05:35:00.403Z] [BOT] 📬 Found 2 new jobs (1 already posted)...
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-18T05:35:00.403Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-18T05:35:00.404Z] [BOT] 📍 [ROUTING] "Software Engineer (New Grads)" @ ORG_124e3f53
[2025-11-18T05:35:00.404Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T05:35:00.408Z] [BOT ERROR] (node:2161) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-18T05:35:00.829Z] [BOT] ✅ Created forum post: 🏢 Software Engineer (New Grads) @ ORG_124e3f53 in #💻・tech-jobs
[2025-11-18T05:35:00.830Z] [BOT] ✅ Industry: Software Engineer (New Grads) @ ORG_124e3f53
[2025-11-18T05:35:02.331Z] [BOT] 🔍 DEBUG: Job "Software Engineer (New Grads)" | City: "San Francisco" | State: "CA" | Location Channel ID: "1429..."
[2025-11-18T05:35:02.828Z] [BOT] ✅ Created forum post: 🏢 Software Engineer (New Grads) @ ORG_124e3f53 in #🌉・san-francisco
[2025-11-18T05:35:02.829Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-18T05:35:04.329Z] [BOT] 📝 Marking as posted: JID_577eeb15
[2025-11-18T05:35:04.329Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T05:35:04.330Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-18T05:35:04.330Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_bf8ac0f2
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T05:35:04.332Z] [BOT] 🔍 DEBUG: Temp file written (323570 bytes)
[2025-11-18T05:35:04.332Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T05:35:04.332Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T05:35:04.332Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323570 bytes
[2025-11-18T05:35:04.333Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Data Labeler" @ ORG_1f5be668
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T05:35:04.693Z] [BOT] ✅ Created forum post: 🏢 Data Labeler @ ORG_1f5be668 in #💻・tech-jobs
[2025-11-18T05:35:04.694Z] [BOT] ✅ Industry: Data Labeler @ ORG_1f5be668
[2025-11-18T05:35:06.195Z] [BOT] 🔍 DEBUG: Job "Data Labeler" | City: "San Jose" | State: "CA" | Location Channel ID: "1429..."
[2025-11-18T05:35:06.359Z] [BOT] ✅ Created forum post: 🏢 Data Labeler @ ORG_1f5be668 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-18T05:35:07.859Z] [BOT] 📝 Marking as posted: JID_f3265b69...
[2025-11-18T05:35:07.859Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T05:35:07.860Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-18T05:35:07.860Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_cd8c3189
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T05:35:07.861Z] [BOT] 🔍 DEBUG: Temp file written (323560 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T05:35:07.861Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T05:35:07.862Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323560 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T05:35:10.863Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-11-18T05:35:10.864Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-18T05:35:10.904Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 2
   Timestamp: 2025-11-18T05:35:10.904Z
[2025-11-18T05:35:12.914Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2161) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*