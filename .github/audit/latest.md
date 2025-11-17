# Discord Bot Execution Audit
**Timestamp:** 2025-11-17T17:21:35.334Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-17T17:21:20.755Z] ========================================
[2025-11-17T17:21:20.756Z] Discord Bot Execution Log
[2025-11-17T17:21:20.756Z] Environment: GitHub Actions
[2025-11-17T17:21:20.756Z] Node Version: v20.19.5
[2025-11-17T17:21:20.756Z] ========================================
[2025-11-17T17:21:20.756Z] Environment Variables Check:
[2025-11-17T17:21:20.757Z] DISCORD_TOKEN: ✅ Set
[2025-11-17T17:21:20.757Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-17T17:21:20.757Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-17T17:21:20.757Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-17T17:21:20.757Z] 
Multi-Channel Configuration:
[2025-11-17T17:21:20.757Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-17T17:21:20.757Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-17T17:21:20.757Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-17T17:21:20.757Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-17T17:21:20.757Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-17T17:21:20.757Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-17T17:21:20.757Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-17T17:21:20.757Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-17T17:21:20.757Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-17T17:21:20.757Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-17T17:21:20.757Z] 
Data Files Check:
[2025-11-17T17:21:20.758Z] .github/data/new_jobs.json: ✅ Exists (2 items, 17002 bytes)
[2025-11-17T17:21:20.760Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322456 bytes)
[2025-11-17T17:21:20.760Z] 
========================================
[2025-11-17T17:21:20.760Z] Starting Enhanced Discord Bot...
[2025-11-17T17:21:20.760Z] ========================================
[2025-11-17T17:21:21.035Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-17T17:21:21.035Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-17T17:21:21.911Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-17T17:21:21.912Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-11-17T17:21:21.912Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-17T17:21:21.913Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-17T17:21:21.913Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_b93825c5 Bank
[2025-11-17T17:21:21.913Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-17T17:21:21.918Z] [BOT ERROR] (node:2357) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-17T17:21:22.286Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_b93825c5 Bank in #💻・tech-jobs
[2025-11-17T17:21:22.287Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_b93825c5 Bank
[2025-11-17T17:21:23.789Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "Atlanta" | State: "GA" | Location Channel ID: "1429..."
[2025-11-17T17:21:24.067Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_b93825c5 Bank in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-17T17:21:25.567Z] [BOT] 📝 Marking as posted: JID_f7c7a80b...
[2025-11-17T17:21:25.568Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-17T17:21:25.568Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-17T17:21:25.568Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-17T17:21:25.568Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_778bd153
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-17T17:21:25.570Z] [BOT] 🔍 DEBUG: Temp file written (322482 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-17T17:21:25.570Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-17T17:21:25.571Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322482 bytes
[2025-11-17T17:21:25.571Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Software Engineer 1" @ ORG_75f04b84
[2025-11-17T17:21:25.571Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-17T17:21:25.794Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_75f04b84
[2025-11-17T17:21:27.295Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "Marlborough" | State: "MA" | Location Channel ID: "1429..."
[2025-11-17T17:21:27.501Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_75f04b84 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-17T17:21:29.001Z] [BOT] 📝 Marking as posted: JID_6957dde4-rec_rtx_e...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-17T17:21:29.002Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-17T17:21:29.002Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-17T17:21:29.002Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_04c1f3af
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-17T17:21:29.003Z] [BOT] 🔍 DEBUG: Temp file written (322560 bytes)
[2025-11-17T17:21:29.003Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-17T17:21:29.003Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-17T17:21:29.003Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322560 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-17T17:21:32.004Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-17T17:21:32.043Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 2
   Timestamp: 2025-11-17T17:21:32.043Z
[2025-11-17T17:21:34.053Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2357) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*