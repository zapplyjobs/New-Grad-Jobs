# Discord Bot Execution Audit
**Timestamp:** 2025-11-19T16:39:44.812Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-19T16:39:34.307Z] ========================================
[2025-11-19T16:39:34.308Z] Discord Bot Execution Log
[2025-11-19T16:39:34.308Z] Environment: GitHub Actions
[2025-11-19T16:39:34.308Z] Node Version: v20.19.5
[2025-11-19T16:39:34.308Z] ========================================
[2025-11-19T16:39:34.308Z] Environment Variables Check:
[2025-11-19T16:39:34.308Z] DISCORD_TOKEN: ✅ Set
[2025-11-19T16:39:34.308Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-19T16:39:34.309Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-19T16:39:34.309Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-19T16:39:34.309Z] 
Multi-Channel Configuration:
[2025-11-19T16:39:34.309Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-19T16:39:34.309Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-19T16:39:34.309Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-19T16:39:34.309Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-19T16:39:34.309Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-19T16:39:34.309Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-19T16:39:34.309Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-19T16:39:34.309Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-19T16:39:34.309Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-19T16:39:34.309Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-19T16:39:34.309Z] 
Data Files Check:
[2025-11-19T16:39:34.310Z] .github/data/new_jobs.json: ✅ Exists (3 items, 16813 bytes)
[2025-11-19T16:39:34.311Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 324063 bytes)
[2025-11-19T16:39:34.311Z] 
========================================
[2025-11-19T16:39:34.312Z] Starting Enhanced Discord Bot...
[2025-11-19T16:39:34.312Z] ========================================
[2025-11-19T16:39:34.583Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-19T16:39:34.583Z] [BOT] 🔍 DEBUG: Location channel configuration:
  - remote-usa: "1429...9802"
  - new-york: "1429...9032"
  - austin: "1429...5915"
  - chicago: "1429...5179"
[2025-11-19T16:39:34.583Z] [BOT] - seattle: "1429...6267"
  - redmond: "1429...1724"
  - mountain-view: "1429...8265"
  - san-francisco: "1429...9088"
  - sunnyvale: "1429...4859"
[2025-11-19T16:39:34.584Z] [BOT] - san-bruno: "1429...9086"
[2025-11-19T16:39:35.483Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-19T16:39:35.484Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-19T16:39:35.484Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 1 new jobs (2 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-19T16:39:35.485Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-19T16:39:35.485Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer" @ ORG_0728f366 Panalytical
[2025-11-19T16:39:35.485Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T16:39:35.489Z] [BOT ERROR] (node:2354) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-19T16:39:35.684Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer @ ORG_0728f366 Panalytical in #💻・tech-jobs
[2025-11-19T16:39:35.684Z] [BOT] ✅ Industry: Graduate Software Engineer @ ORG_0728f366 Panalytical
[2025-11-19T16:39:37.186Z] [BOT] 🔍 DEBUG: Job "Graduate Software Engineer" | City: "Northampton" | State: "MA" | Location Channel ID: "1429..."
[2025-11-19T16:39:37.496Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer @ ORG_0728f366 Panalytical in #💻・remote-usa
[2025-11-19T16:39:37.496Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-19T16:39:38.996Z] [BOT] 📝 Marking as posted: JID_6816c3af...
[2025-11-19T16:39:38.996Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-19T16:39:38.997Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T16:39:38.997Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T16:39:38.997Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_ccd25bd8
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T16:39:38.999Z] [BOT] 🔍 DEBUG: Temp file written (324118 bytes)
[2025-11-19T16:39:38.999Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T16:39:38.999Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T16:39:38.999Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324118 bytes
[2025-11-19T16:39:38.999Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-19T16:39:42.000Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-19T16:39:42.001Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-19T16:39:42.037Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 1
[2025-11-19T16:39:42.037Z] [BOT] Timestamp: 2025-11-19T16:39:42.037Z
[2025-11-19T16:39:44.046Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2354) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*