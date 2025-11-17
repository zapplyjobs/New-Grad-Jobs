# Discord Bot Execution Audit
**Timestamp:** 2025-11-17T01:08:02.866Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-17T01:07:50.757Z] ========================================
[2025-11-17T01:07:50.758Z] Discord Bot Execution Log
[2025-11-17T01:07:50.758Z] Environment: GitHub Actions
[2025-11-17T01:07:50.758Z] Node Version: v20.19.5
[2025-11-17T01:07:50.758Z] ========================================
[2025-11-17T01:07:50.758Z] Environment Variables Check:
[2025-11-17T01:07:50.758Z] DISCORD_TOKEN: ✅ Set
[2025-11-17T01:07:50.758Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-17T01:07:50.758Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-17T01:07:50.758Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-17T01:07:50.758Z] 
Multi-Channel Configuration:
[2025-11-17T01:07:50.758Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-17T01:07:50.758Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-17T01:07:50.758Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-17T01:07:50.759Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-17T01:07:50.759Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-17T01:07:50.759Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-17T01:07:50.759Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-17T01:07:50.759Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-17T01:07:50.759Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-17T01:07:50.759Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-17T01:07:50.759Z] 
Data Files Check:
[2025-11-17T01:07:50.759Z] .github/data/new_jobs.json: ✅ Exists (1 items, 7741 bytes)
[2025-11-17T01:07:50.760Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322115 bytes)
[2025-11-17T01:07:50.760Z] 
========================================
[2025-11-17T01:07:50.760Z] Starting Enhanced Discord Bot...
[2025-11-17T01:07:50.760Z] ========================================
[2025-11-17T01:07:51.034Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-17T01:07:51.035Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-17T01:07:51.770Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-17T01:07:51.771Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-17T01:07:51.771Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-17T01:07:51.772Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-17T01:07:51.772Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher - Computer Vision - AI/ML Radiology and Oncology" @ ORG_3013b18f & Johnson
[2025-11-17T01:07:51.772Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-17T01:07:51.776Z] [BOT ERROR] (node:2267) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-17T01:07:52.015Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Computer Vision - AI/ML Radiology and Oncology @ ORG_3013b18f & Johnson in #🩺・healthcare-jobs
  ✅ Industry: Postdoctoral Researcher - Computer Vision - AI/ML Radiology and Oncology @ ORG_3013b18f & Johnson
[2025-11-17T01:07:53.517Z] [BOT] 🔍 DEBUG: Job "Postdoctoral Researcher - Computer Vision - AI/ML Radiology and Oncology" | City: "New Hope" | State: "PA" | Location Channel ID: "1429..."
[2025-11-17T01:07:55.054Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Computer Vision - AI/ML Radiology and Oncology @ ORG_3013b18f & Johnson in #💻・remote-usa
[2025-11-17T01:07:55.054Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-17T01:07:56.555Z] [BOT] 📝 Marking as posted: JID_795f45c4...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-17T01:07:56.555Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-17T01:07:56.556Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-17T01:07:56.556Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_a26a9745
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-17T01:07:56.557Z] [BOT] 🔍 DEBUG: Temp file written (322192 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-17T01:07:56.557Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-17T01:07:56.558Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322192 bytes
[2025-11-17T01:07:56.558Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-17T01:07:59.559Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-17T01:07:59.559Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-17T01:07:59.598Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 1
   Timestamp: 2025-11-17T01:07:59.598Z
[2025-11-17T01:08:01.607Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2267) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*