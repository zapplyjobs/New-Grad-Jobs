# Discord Bot Execution Audit
**Timestamp:** 2025-11-21T19:46:42.493Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-21T19:46:30.251Z] ========================================
[2025-11-21T19:46:30.253Z] Discord Bot Execution Log
[2025-11-21T19:46:30.253Z] Environment: GitHub Actions
[2025-11-21T19:46:30.253Z] Node Version: v20.19.5
[2025-11-21T19:46:30.253Z] ========================================
[2025-11-21T19:46:30.253Z] Environment Variables Check:
[2025-11-21T19:46:30.253Z] DISCORD_TOKEN: ✅ Set
[2025-11-21T19:46:30.253Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-21T19:46:30.253Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-21T19:46:30.253Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-21T19:46:30.253Z] 
Multi-Channel Configuration:
[2025-11-21T19:46:30.253Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-21T19:46:30.253Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-21T19:46:30.253Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-21T19:46:30.253Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-21T19:46:30.253Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-21T19:46:30.253Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-21T19:46:30.253Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-21T19:46:30.254Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-21T19:46:30.254Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-21T19:46:30.254Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-21T19:46:30.254Z] 
Data Files Check:
[2025-11-21T19:46:30.254Z] .github/data/new_jobs.json: ✅ Exists (3 items, 13598 bytes)
[2025-11-21T19:46:30.256Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327106 bytes)
[2025-11-21T19:46:30.256Z] 
========================================
[2025-11-21T19:46:30.256Z] Starting Enhanced Discord Bot...
[2025-11-21T19:46:30.256Z] ========================================
[2025-11-21T19:46:30.536Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-21T19:46:30.537Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-21T19:46:32.628Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-21T19:46:32.629Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-21T19:46:32.629Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-21T19:46:32.629Z] [BOT] 📬 Found 1 new jobs (2 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-21T19:46:32.630Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-21T19:46:32.630Z] [BOT] 📍 [ROUTING] "Software Engineer New College Grad - Highlands Ranch - CO" @ ORG_a725bda1
[2025-11-21T19:46:32.630Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T19:46:32.634Z] [BOT ERROR] (node:2209) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-21T19:46:32.898Z] [BOT] ✅ Created forum post: 🏢 Software Engineer New College Grad - Highlands Ranch - CO @ ORG_a725bda1 in #💻・tech-jobs
  ✅ Industry: Software Engineer New College Grad - Highlands Ranch - CO @ ORG_a725bda1
[2025-11-21T19:46:34.400Z] [BOT] 🔍 DEBUG: Job "Software Engineer New College Grad - Highlands Ranch - CO" | City: "Highlands Ranch" | State: "CO" | Location Channel ID: "1429..."
[2025-11-21T19:46:34.705Z] [BOT] ✅ Created forum post: 🏢 Software Engineer New College Grad - Highlands Ranch - CO @ ORG_a725bda1 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-21T19:46:36.205Z] [BOT] 📝 Marking as posted: JID_d661ae6f...
[2025-11-21T19:46:36.206Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T19:46:36.206Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T19:46:36.206Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_2458d38c
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T19:46:36.207Z] [BOT] 🔍 DEBUG: Temp file written (327088 bytes)
[2025-11-21T19:46:36.207Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T19:46:36.208Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T19:46:36.208Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327088 bytes
[2025-11-21T19:46:36.208Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-21T19:46:39.209Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-21T19:46:39.209Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-21T19:46:39.249Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 1
   Timestamp: 2025-11-21T19:46:39.249Z
[2025-11-21T19:46:41.260Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2209) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*