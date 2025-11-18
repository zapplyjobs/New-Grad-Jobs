# Discord Bot Execution Audit
**Timestamp:** 2025-11-18T23:32:12.308Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-18T23:31:54.804Z] ========================================
[2025-11-18T23:31:54.805Z] Discord Bot Execution Log
[2025-11-18T23:31:54.805Z] Environment: GitHub Actions
[2025-11-18T23:31:54.805Z] Node Version: v20.19.5
[2025-11-18T23:31:54.805Z] ========================================
[2025-11-18T23:31:54.805Z] Environment Variables Check:
[2025-11-18T23:31:54.805Z] DISCORD_TOKEN: ✅ Set
[2025-11-18T23:31:54.805Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-18T23:31:54.806Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-18T23:31:54.806Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-18T23:31:54.806Z] 
Multi-Channel Configuration:
[2025-11-18T23:31:54.806Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-18T23:31:54.806Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-18T23:31:54.806Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-18T23:31:54.806Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-18T23:31:54.806Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-18T23:31:54.806Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-18T23:31:54.806Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-18T23:31:54.806Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-18T23:31:54.806Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-18T23:31:54.806Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-18T23:31:54.806Z] 
Data Files Check:
[2025-11-18T23:31:54.806Z] .github/data/new_jobs.json: ✅ Exists (2 items, 7577 bytes)
[2025-11-18T23:31:54.807Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323706 bytes)
[2025-11-18T23:31:54.807Z] 
========================================
[2025-11-18T23:31:54.807Z] Starting Enhanced Discord Bot...
[2025-11-18T23:31:54.808Z] ========================================
[2025-11-18T23:31:55.038Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-18T23:31:55.038Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-18T23:31:55.714Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-18T23:31:55.715Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-11-18T23:31:55.715Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-18T23:31:55.718Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-18T23:31:55.718Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ mthree
[2025-11-18T23:31:55.718Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T23:31:55.722Z] [BOT ERROR] (node:2300) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-18T23:31:55.968Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ mthree in #💻・tech-jobs
[2025-11-18T23:31:55.968Z] [BOT] ✅ Industry: Junior Software Engineer @ mthree
[2025-11-18T23:31:57.470Z] [BOT] 🔍 DEBUG: Job "Junior Software Engineer" | City: "Wilmington" | State: "DE" | Location Channel ID: "1429..."
[2025-11-18T23:31:57.744Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ mthree in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-18T23:31:59.245Z] [BOT] 📝 Marking as posted: JID_f822119f...
[2025-11-18T23:31:59.245Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-18T23:31:59.245Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T23:31:59.246Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-18T23:31:59.246Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_f63cb207
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T23:31:59.247Z] [BOT] 🔍 DEBUG: Temp file written (323683 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T23:31:59.248Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T23:31:59.248Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323683 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T23:32:02.249Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-11-18T23:32:02.249Z] [BOT] 📍 [ROUTING] "Research Assistant" @ ORG_478e100e University
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-18T23:32:02.510Z] [BOT] ✅ Created forum post: 🏢 Research Assistant @ ORG_478e100e University in #📁・JID_e938df7b
[2025-11-18T23:32:02.510Z] [BOT] ✅ Industry: Research Assistant @ ORG_478e100e University
[2025-11-18T23:32:04.011Z] [BOT] 🔍 DEBUG: Job "Research Assistant" | City: "State College" | State: "PA" | Location Channel ID: "1429..."
[2025-11-18T23:32:04.567Z] [BOT] ✅ Created forum post: 🏢 Research Assistant @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-18T23:32:06.068Z] [BOT] 📝 Marking as posted: JID_28954219-psu_staff-job-...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-18T23:32:06.068Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T23:32:06.069Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-18T23:32:06.069Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_bad4e5cf
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T23:32:06.070Z] [BOT] 🔍 DEBUG: Temp file written (323735 bytes)
[2025-11-18T23:32:06.070Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T23:32:06.070Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T23:32:06.070Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323735 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T23:32:09.072Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-18T23:32:09.111Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 2
   Timestamp: 2025-11-18T23:32:09.111Z
[2025-11-18T23:32:11.117Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2300) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*