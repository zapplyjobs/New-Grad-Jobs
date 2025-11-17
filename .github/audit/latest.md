# Discord Bot Execution Audit
**Timestamp:** 2025-11-17T16:39:52.927Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-17T16:39:41.972Z] ========================================
[2025-11-17T16:39:41.973Z] Discord Bot Execution Log
[2025-11-17T16:39:41.973Z] Environment: GitHub Actions
[2025-11-17T16:39:41.973Z] Node Version: v20.19.5
[2025-11-17T16:39:41.973Z] ========================================
[2025-11-17T16:39:41.973Z] Environment Variables Check:
[2025-11-17T16:39:41.973Z] DISCORD_TOKEN: ✅ Set
[2025-11-17T16:39:41.973Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-17T16:39:41.973Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-17T16:39:41.973Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-17T16:39:41.973Z] 
Multi-Channel Configuration:
[2025-11-17T16:39:41.973Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-17T16:39:41.974Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-17T16:39:41.974Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-17T16:39:41.974Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-17T16:39:41.974Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-17T16:39:41.974Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-17T16:39:41.974Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-17T16:39:41.974Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-17T16:39:41.974Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-17T16:39:41.974Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-17T16:39:41.974Z] 
Data Files Check:
[2025-11-17T16:39:41.974Z] .github/data/new_jobs.json: ✅ Exists (1 items, 4186 bytes)
[2025-11-17T16:39:41.975Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322385 bytes)
[2025-11-17T16:39:41.975Z] 
========================================
[2025-11-17T16:39:41.975Z] Starting Enhanced Discord Bot...
[2025-11-17T16:39:41.975Z] ========================================
[2025-11-17T16:39:42.219Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-17T16:39:42.220Z] [BOT] 🔍 DEBUG: Location channel configuration:
  - remote-usa: "1429...9802"
  - new-york: "1429...9032"
  - austin: "1429...5915"
  - chicago: "1429...5179"
  - seattle: "1429...6267"
  - redmond: "1429...1724"
  - mountain-view: "1429...8265"
  - san-francisco: "1429...9088"
[2025-11-17T16:39:42.220Z] [BOT] - sunnyvale: "1429...4859"
  - san-bruno: "1429...9086"
[2025-11-17T16:39:43.212Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-17T16:39:43.213Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-17T16:39:43.213Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-17T16:39:43.214Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2025-11-17T16:39:43.214Z] [BOT] 📍 [ROUTING] "CCL Digital Humanities and Engagement SRA - Student Wage" @ ORG_9d38443e of Virginia
[2025-11-17T16:39:43.214Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project manager")
   Channel: 📊・JID_9910249a (1391...1276)
[2025-11-17T16:39:43.218Z] [BOT ERROR] (node:2341) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-17T16:39:43.410Z] [BOT] ✅ Created forum post: 🏢 CCL Digital Humanities and Engagement SRA - Student Wage @ ORG_9d38443e of Virginia in #📊・JID_9910249a
[2025-11-17T16:39:43.410Z] [BOT] ✅ Industry: CCL Digital Humanities and Engagement SRA - Student Wage @ ORG_9d38443e of Virginia
[2025-11-17T16:39:44.912Z] [BOT] 🔍 DEBUG: Job "CCL Digital Humanities and Engagement SRA - Student Wage" | City: "Charlottesville" | State: "VA" | Location Channel ID: "1429..."
[2025-11-17T16:39:45.136Z] [BOT] ✅ Created forum post: 🏢 CCL Digital Humanities and Engagement SRA - Student Wage @ ORG_9d38443e of Virginia in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-17T16:39:46.637Z] [BOT] 📝 Marking as posted: JID_a89e2209...
[2025-11-17T16:39:46.637Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-17T16:39:46.638Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-17T16:39:46.638Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_4c38e9e4
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-17T16:39:46.639Z] [BOT] 🔍 DEBUG: Temp file written (322456 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-17T16:39:46.639Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-17T16:39:46.640Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322456 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-17T16:39:49.640Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-17T16:39:49.640Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-17T16:39:49.680Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 1
   Timestamp: 2025-11-17T16:39:49.679Z
[2025-11-17T16:39:51.686Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2341) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*