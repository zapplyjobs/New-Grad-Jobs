# Discord Bot Execution Audit
**Timestamp:** 2025-11-17T04:08:03.842Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-17T04:07:52.390Z] ========================================
[2025-11-17T04:07:52.391Z] Discord Bot Execution Log
[2025-11-17T04:07:52.391Z] Environment: GitHub Actions
[2025-11-17T04:07:52.391Z] Node Version: v20.19.5
[2025-11-17T04:07:52.391Z] ========================================
[2025-11-17T04:07:52.391Z] Environment Variables Check:
[2025-11-17T04:07:52.391Z] DISCORD_TOKEN: ✅ Set
[2025-11-17T04:07:52.391Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-17T04:07:52.391Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-17T04:07:52.391Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-17T04:07:52.391Z] 
Multi-Channel Configuration:
[2025-11-17T04:07:52.392Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-17T04:07:52.392Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-17T04:07:52.392Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-17T04:07:52.392Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-17T04:07:52.392Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-17T04:07:52.392Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-17T04:07:52.392Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-17T04:07:52.392Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-17T04:07:52.392Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-17T04:07:52.392Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-17T04:07:52.392Z] 
Data Files Check:
[2025-11-17T04:07:52.392Z] .github/data/new_jobs.json: ✅ Exists (1 items, 7559 bytes)
[2025-11-17T04:07:52.393Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322251 bytes)
[2025-11-17T04:07:52.393Z] 
========================================
[2025-11-17T04:07:52.393Z] Starting Enhanced Discord Bot...
[2025-11-17T04:07:52.393Z] ========================================
[2025-11-17T04:07:52.629Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-17T04:07:52.630Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-17T04:07:53.583Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-17T04:07:53.584Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-17T04:07:53.584Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-17T04:07:53.584Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-11-17T04:07:53.584Z] [BOT] 📍 [ROUTING] "New Grad Software Engineer - Backend 2026" @ ORG_b93d3bce
[2025-11-17T04:07:53.584Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-11-17T04:07:53.588Z] [BOT ERROR] (node:2182) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-17T04:07:54.522Z] [BOT] ✅ Created forum post: 🏢 New Grad Software Engineer - Backend 2026 @ ORG_b93d3bce in #📣・marketing-jobs
[2025-11-17T04:07:54.522Z] [BOT] ✅ Industry: New Grad Software Engineer - Backend 2026 @ ORG_b93d3bce
[2025-11-17T04:07:56.023Z] [BOT] 🔍 DEBUG: Job "New Grad Software Engineer - Backend 2026" | City: "Salt Lake City" | State: "UT" | Location Channel ID: "1429..."
[2025-11-17T04:07:56.260Z] [BOT] ✅ Created forum post: 🏢 New Grad Software Engineer - Backend 2026 @ ORG_b93d3bce in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-17T04:07:57.761Z] [BOT] 📝 Marking as posted: JID_51500e28
[2025-11-17T04:07:57.761Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-17T04:07:57.761Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-17T04:07:57.762Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-17T04:07:57.762Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_5e97f69c
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-17T04:07:57.763Z] [BOT] 🔍 DEBUG: Temp file written (322231 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-17T04:07:57.763Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-17T04:07:57.764Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322231 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-17T04:08:00.765Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-17T04:08:00.765Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-17T04:08:00.804Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 1
   Timestamp: 2025-11-17T04:08:00.804Z
[2025-11-17T04:08:02.811Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2182) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*