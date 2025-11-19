# Discord Bot Execution Audit
**Timestamp:** 2025-11-19T00:02:42.905Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-19T00:02:21.011Z] ========================================
[2025-11-19T00:02:21.013Z] Discord Bot Execution Log
[2025-11-19T00:02:21.013Z] Environment: GitHub Actions
[2025-11-19T00:02:21.013Z] Node Version: v20.19.5
[2025-11-19T00:02:21.013Z] ========================================
[2025-11-19T00:02:21.013Z] Environment Variables Check:
[2025-11-19T00:02:21.013Z] DISCORD_TOKEN: ✅ Set
[2025-11-19T00:02:21.013Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-19T00:02:21.013Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-19T00:02:21.013Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-19T00:02:21.013Z] 
Multi-Channel Configuration:
[2025-11-19T00:02:21.013Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-19T00:02:21.013Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-19T00:02:21.013Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-19T00:02:21.013Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-19T00:02:21.013Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-19T00:02:21.013Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-19T00:02:21.013Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-19T00:02:21.014Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-19T00:02:21.014Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-19T00:02:21.014Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-19T00:02:21.014Z] 
Data Files Check:
[2025-11-19T00:02:21.014Z] .github/data/new_jobs.json: ✅ Exists (5 items, 16184 bytes)
[2025-11-19T00:02:21.016Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323735 bytes)
[2025-11-19T00:02:21.016Z] 
========================================
[2025-11-19T00:02:21.016Z] Starting Enhanced Discord Bot...
[2025-11-19T00:02:21.016Z] ========================================
[2025-11-19T00:02:21.299Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-19T00:02:21.299Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-19T00:02:22.194Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-19T00:02:22.195Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-19T00:02:22.196Z] [BOT] 📬 Found 4 new jobs (1 already posted)...
[2025-11-19T00:02:22.196Z] [BOT] 📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-19T00:02:22.196Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-11-19T00:02:22.197Z] [BOT] 📍 [ROUTING] "Software Engineer 2 - Software Engineer 2" @ ORG_75f04b84
[2025-11-19T00:02:22.197Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T00:02:22.201Z] [BOT ERROR] (node:2265) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-19T00:02:22.479Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Software Engineer 2 @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: Software Engineer 2 - Software Engineer 2 @ ORG_75f04b84
[2025-11-19T00:02:23.982Z] [BOT] 🔍 DEBUG: Job "Software Engineer 2 - Software Engineer 2" | City: "Aurora" | State: "CO" | Location Channel ID: "1429..."
[2025-11-19T00:02:24.242Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Software Engineer 2 @ ORG_75f04b84 in #🌆・chicago
[2025-11-19T00:02:24.243Z] [BOT] ✅ Location: 🌆・chicago
[2025-11-19T00:02:25.743Z] [BOT] 📝 Marking as posted: JID_6957dde4-rec_rtx_e...
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T00:02:25.743Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T00:02:25.744Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e1a5159f
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T00:02:25.745Z] [BOT] 🔍 DEBUG: Temp file written (323881 bytes)
[2025-11-19T00:02:25.745Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T00:02:25.745Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T00:02:25.746Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323881 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T00:02:25.746Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_a4aa9800
   Category: TECH (matched: "software")
[2025-11-19T00:02:25.746Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T00:02:26.176Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_a4aa9800 in #💻・tech-jobs
[2025-11-19T00:02:26.176Z] [BOT] ✅ Industry: Software Engineer – New Grad @ ORG_a4aa9800
[2025-11-19T00:02:27.677Z] [BOT] 🔍 DEBUG: Job "Software Engineer – New Grad" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-19T00:02:28.022Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_a4aa9800 in #🗽・new-york
[2025-11-19T00:02:28.022Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-19T00:02:29.523Z] [BOT] 📝 Marking as posted: JID_13657d11
[2025-11-19T00:02:29.523Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T00:02:29.524Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T00:02:29.524Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_266f17c7
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T00:02:29.525Z] [BOT] 🔍 DEBUG: Temp file written (323826 bytes)
[2025-11-19T00:02:29.525Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T00:02:29.525Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T00:02:29.525Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323826 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T00:02:29.525Z] [BOT] 📍 [ROUTING] "Founding Software Engineer" @ ORG_124e3f53
[2025-11-19T00:02:29.526Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T00:02:29.717Z] [BOT] ✅ Created forum post: 🏢 Founding Software Engineer @ ORG_124e3f53 in #💻・tech-jobs
  ✅ Industry: Founding Software Engineer @ ORG_124e3f53
[2025-11-19T00:02:31.218Z] [BOT] 🔍 DEBUG: Job "Founding Software Engineer" | City: "SF" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-19T00:02:31.412Z] [BOT] ✅ Created forum post: 🏢 Founding Software Engineer @ ORG_124e3f53 in #🌉・san-francisco
[2025-11-19T00:02:31.412Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-19T00:02:32.912Z] [BOT] 📝 Marking as posted: JID_5d217321...
[2025-11-19T00:02:32.912Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T00:02:32.913Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T00:02:32.913Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e9c75f64
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T00:02:32.914Z] [BOT] 🔍 DEBUG: Temp file written (323803 bytes)
[2025-11-19T00:02:32.914Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T00:02:32.915Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T00:02:32.915Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323803 bytes
[2025-11-19T00:02:32.915Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Software Engineer – New Grads" @ ORG_124e3f53
[2025-11-19T00:02:32.915Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T00:02:33.164Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grads @ ORG_124e3f53 in #💻・tech-jobs
[2025-11-19T00:02:33.164Z] [BOT] ✅ Industry: Software Engineer – New Grads @ ORG_124e3f53
[2025-11-19T00:02:34.665Z] [BOT] 🔍 DEBUG: Job "Software Engineer – New Grads" | City: "SF" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-19T00:02:35.071Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grads @ ORG_124e3f53 in #🌉・san-francisco
[2025-11-19T00:02:35.071Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-19T00:02:36.571Z] [BOT] 📝 Marking as posted: JID_da63b38a...
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T00:02:36.572Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T00:02:36.572Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_c6f3cba4
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T00:02:36.573Z] [BOT] 🔍 DEBUG: Temp file written (323782 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T00:02:36.574Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T00:02:36.574Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323782 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T00:02:39.575Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-19T00:02:39.613Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 4
   Timestamp: 2025-11-19T00:02:39.613Z
[2025-11-19T00:02:41.623Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2265) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*