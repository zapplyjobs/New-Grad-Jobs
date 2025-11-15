# Discord Bot Execution Audit
**Timestamp:** 2025-11-15T11:46:28.481Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-15T11:46:10.858Z] ========================================
[2025-11-15T11:46:10.859Z] Discord Bot Execution Log
[2025-11-15T11:46:10.859Z] Environment: GitHub Actions
[2025-11-15T11:46:10.859Z] Node Version: v20.19.5
[2025-11-15T11:46:10.859Z] ========================================
[2025-11-15T11:46:10.859Z] Environment Variables Check:
[2025-11-15T11:46:10.859Z] DISCORD_TOKEN: ✅ Set
[2025-11-15T11:46:10.859Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-15T11:46:10.860Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-15T11:46:10.860Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-15T11:46:10.860Z] 
Multi-Channel Configuration:
[2025-11-15T11:46:10.860Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-15T11:46:10.860Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-15T11:46:10.860Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-15T11:46:10.860Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-15T11:46:10.860Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-15T11:46:10.860Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-15T11:46:10.860Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-15T11:46:10.860Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-15T11:46:10.860Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-15T11:46:10.860Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-15T11:46:10.860Z] 
Data Files Check:
[2025-11-15T11:46:10.861Z] .github/data/new_jobs.json: ✅ Exists (5 items, 14005 bytes)
[2025-11-15T11:46:10.862Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322103 bytes)
[2025-11-15T11:46:10.862Z] 
========================================
[2025-11-15T11:46:10.863Z] Starting Enhanced Discord Bot...
[2025-11-15T11:46:10.863Z] ========================================
[2025-11-15T11:46:11.136Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-15T11:46:11.137Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-15T11:46:12.305Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-15T11:46:12.306Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-15T11:46:12.306Z] [BOT] ⏭️ Skipping already posted (legacy ID): Entry Level - C Software Developer at mthree
[2025-11-15T11:46:12.307Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
📬 Found 2 new jobs (3 already posted)...
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-15T11:46:12.308Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-11-15T11:46:12.312Z] [BOT ERROR] (node:2180) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-15T11:46:12.562Z] [BOT] ✅ Created forum post: 🔵 Data Scientist - Product Analytics @ ORG_4f749de7 in #💲・sales-jobs
[2025-11-15T11:46:12.562Z] [BOT] ✅ Industry: Data Scientist - Product Analytics @ ORG_4f749de7
[2025-11-15T11:46:14.064Z] [BOT] 🔍 DEBUG: Job "Data Scientist - Product Analytics" | City: "Seattle" | State: "WA" | Location Channel ID: "1429..."
[2025-11-15T11:46:14.279Z] [BOT] ✅ Created forum post: 🔵 Data Scientist - Product Analytics @ ORG_4f749de7 in #🌧️・seattle
[2025-11-15T11:46:14.279Z] [BOT] ✅ Location: 🌧️・seattle
[2025-11-15T11:46:15.780Z] [BOT] 📝 Marking as posted: JID_2cb74d35...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T11:46:15.780Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T11:46:15.780Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_f792a191
[2025-11-15T11:46:15.781Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T11:46:15.782Z] [BOT] 🔍 DEBUG: Temp file written (322068 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T11:46:15.782Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T11:46:15.782Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322068 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T11:46:18.784Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-15T11:46:19.139Z] [BOT] ✅ Created forum post: 🔵 Data Developer @ ORG_4f749de7 in #💻・tech-jobs
[2025-11-15T11:46:19.139Z] [BOT] ✅ Industry: Data Developer @ ORG_4f749de7
[2025-11-15T11:46:20.640Z] [BOT] 🔍 DEBUG: Job "Data Developer" | City: "Austin" | State: "TX" | Location Channel ID: "1429..."
[2025-11-15T11:46:20.953Z] [BOT] ✅ Created forum post: 🔵 Data Developer @ ORG_4f749de7 in #🤠・austin
[2025-11-15T11:46:20.953Z] [BOT] ✅ Location: 🤠・austin
[2025-11-15T11:46:22.454Z] [BOT] 📝 Marking as posted: JID_5b84eedd...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T11:46:22.454Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T11:46:22.454Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_2bc181b9
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T11:46:22.455Z] [BOT] 🔍 DEBUG: Temp file written (322008 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T11:46:22.456Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T11:46:22.456Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322008 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T11:46:25.457Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-15T11:46:27.467Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2180) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*