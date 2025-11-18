# Discord Bot Execution Audit
**Timestamp:** 2025-11-18T10:21:49.368Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-18T10:21:37.596Z] ========================================
[2025-11-18T10:21:37.597Z] Discord Bot Execution Log
[2025-11-18T10:21:37.597Z] Environment: GitHub Actions
[2025-11-18T10:21:37.597Z] Node Version: v20.19.5
[2025-11-18T10:21:37.597Z] ========================================
[2025-11-18T10:21:37.597Z] Environment Variables Check:
[2025-11-18T10:21:37.597Z] DISCORD_TOKEN: ✅ Set
[2025-11-18T10:21:37.597Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-18T10:21:37.598Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-18T10:21:37.598Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-18T10:21:37.598Z] 
Multi-Channel Configuration:
[2025-11-18T10:21:37.598Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-18T10:21:37.598Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-18T10:21:37.598Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-18T10:21:37.598Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-18T10:21:37.598Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-18T10:21:37.598Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-18T10:21:37.598Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-18T10:21:37.598Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-18T10:21:37.598Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-18T10:21:37.598Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-18T10:21:37.598Z] 
Data Files Check:
[2025-11-18T10:21:37.598Z] .github/data/new_jobs.json: ✅ Exists (2 items, 10131 bytes)
[2025-11-18T10:21:37.600Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323578 bytes)
[2025-11-18T10:21:37.600Z] 
========================================
[2025-11-18T10:21:37.600Z] Starting Enhanced Discord Bot...
[2025-11-18T10:21:37.600Z] ========================================
[2025-11-18T10:21:37.852Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-18T10:21:37.853Z] [BOT] 🔍 DEBUG: Location channel configuration:
  - remote-usa: "1429...9802"
  - new-york: "1429...9032"
  - austin: "1429...5915"
  - chicago: "1429...5179"
  - seattle: "1429...6267"
  - redmond: "1429...1724"
  - mountain-view: "1429...8265"
  - san-francisco: "1429...9088"
  - sunnyvale: "1429...4859"
[2025-11-18T10:21:37.853Z] [BOT] - san-bruno: "1429...9086"
[2025-11-18T10:21:40.031Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-18T10:21:40.032Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-18T10:21:40.032Z] [BOT] 📬 Found 1 new jobs (1 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-18T10:21:40.034Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-11-18T10:21:40.035Z] [BOT] 📍 [ROUTING] "Industry Analyst" @ ORG_29dbc09f
[2025-11-18T10:21:40.035Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-11-18T10:21:40.039Z] [BOT ERROR] (node:2180) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-18T10:21:40.260Z] [BOT] ✅ Created forum post: 🏢 Industry Analyst @ ORG_29dbc09f in #📣・marketing-jobs
  ✅ Industry: Industry Analyst @ ORG_29dbc09f
[2025-11-18T10:21:41.762Z] [BOT] 🔍 DEBUG: Job "Industry Analyst" | City: "Omaha" | State: "NE" | Location Channel ID: "1429..."
[2025-11-18T10:21:41.965Z] [BOT] ✅ Created forum post: 🏢 Industry Analyst @ ORG_29dbc09f in #💻・remote-usa
[2025-11-18T10:21:41.966Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-18T10:21:43.467Z] [BOT] 📝 Marking as posted: JID_566440c7...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-18T10:21:43.467Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T10:21:43.467Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-18T10:21:43.468Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_7a14d43b
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T10:21:43.469Z] [BOT] 🔍 DEBUG: Temp file written (323585 bytes)
[2025-11-18T10:21:43.469Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T10:21:43.469Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T10:21:43.469Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323585 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T10:21:46.471Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-18T10:21:46.511Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 1
   Timestamp: 2025-11-18T10:21:46.510Z
[2025-11-18T10:21:48.519Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2180) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*