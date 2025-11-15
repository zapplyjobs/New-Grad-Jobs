# Discord Bot Execution Audit
**Timestamp:** 2025-11-15T01:08:24.476Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-15T01:08:00.500Z] ========================================
[2025-11-15T01:08:00.501Z] Discord Bot Execution Log
[2025-11-15T01:08:00.501Z] Environment: GitHub Actions
[2025-11-15T01:08:00.501Z] Node Version: v20.19.5
[2025-11-15T01:08:00.501Z] ========================================
[2025-11-15T01:08:00.501Z] Environment Variables Check:
[2025-11-15T01:08:00.502Z] DISCORD_TOKEN: ✅ Set
[2025-11-15T01:08:00.502Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-15T01:08:00.502Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-15T01:08:00.502Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-15T01:08:00.502Z] 
Multi-Channel Configuration:
[2025-11-15T01:08:00.502Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-15T01:08:00.502Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-15T01:08:00.502Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-15T01:08:00.502Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-15T01:08:00.502Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-15T01:08:00.502Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-15T01:08:00.502Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-15T01:08:00.502Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-15T01:08:00.502Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-15T01:08:00.502Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-15T01:08:00.502Z] 
Data Files Check:
[2025-11-15T01:08:00.503Z] .github/data/new_jobs.json: ✅ Exists (7 items, 33030 bytes)
[2025-11-15T01:08:00.504Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322152 bytes)
[2025-11-15T01:08:00.504Z] 
========================================
[2025-11-15T01:08:00.504Z] Starting Enhanced Discord Bot...
[2025-11-15T01:08:00.504Z] ========================================
[2025-11-15T01:08:00.740Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-15T01:08:00.741Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-15T01:08:01.335Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-15T01:08:01.336Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-15T01:08:01.336Z] [BOT] ⏭️ Skipping already posted (legacy ID): Entry Level - C Software Developer at mthree
[2025-11-15T01:08:01.336Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
📬 Found 4 new jobs (3 already posted)...
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-15T01:08:01.337Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-15T01:08:01.341Z] [BOT ERROR] (node:2290) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-15T01:08:01.727Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Associate @ ORG_569ec613 Morgan Chase in #💻・tech-jobs
  ✅ Industry: Data Engineer Associate @ ORG_569ec613 Morgan Chase
[2025-11-15T01:08:03.229Z] [BOT] 🔍 DEBUG: Job "Data Engineer Associate" | City: "Plano" | State: "TX" | Location Channel ID: "1429..."
[2025-11-15T01:08:03.633Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Associate @ ORG_569ec613 Morgan Chase in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-15T01:08:05.134Z] [BOT] 📝 Marking as posted: JID_2896735f...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T01:08:05.135Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T01:08:05.135Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_610e812d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T01:08:05.136Z] [BOT] 🔍 DEBUG: Temp file written (322134 bytes)
[2025-11-15T01:08:05.136Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T01:08:05.136Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T01:08:05.136Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322134 bytes
[2025-11-15T01:08:05.136Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-15T01:08:08.137Z] [BOT] 📌 Posting 3 jobs to #📣・marketing-jobs
[2025-11-15T01:08:08.451Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Aws/Node @ ORG_b344d80e Travelers Companies in #📣・marketing-jobs
  ✅ Industry: Software Engineer 1 - Aws/Node @ ORG_b344d80e Travelers Companies
[2025-11-15T01:08:09.953Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1 - Aws/Node" | City: "Atlanta" | State: "GA" | Location Channel ID: "1429..."
[2025-11-15T01:08:10.173Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Aws/Node @ ORG_b344d80e Travelers Companies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-15T01:08:11.673Z] [BOT] 📝 Marking as posted: JID_77f74e98...
  🔍 DEBUG: Set size before add: 5000
[2025-11-15T01:08:11.673Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T01:08:11.673Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T01:08:11.674Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_ffa33cca
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T01:08:11.675Z] [BOT] 🔍 DEBUG: Temp file written (322152 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T01:08:11.675Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T01:08:11.675Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322152 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T01:08:11.868Z] [BOT] ✅ Created forum post: 🏢 Leadership Program - Data Engineer/AI @ ORG_ac67699e in #📣・marketing-jobs
  ✅ Industry: Leadership Program - Data Engineer/AI @ ORG_ac67699e
[2025-11-15T01:08:13.369Z] [BOT] 🔍 DEBUG: Job "Leadership Program - Data Engineer/AI" | City: "Atlanta" | State: "GA" | Location Channel ID: "1429..."
[2025-11-15T01:08:13.575Z] [BOT] ✅ Created forum post: 🏢 Leadership Program - Data Engineer/AI @ ORG_ac67699e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-15T01:08:15.077Z] [BOT] 📝 Marking as posted: JID_9714a2c1...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T01:08:15.077Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T01:08:15.077Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_5048a026
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T01:08:15.078Z] [BOT] 🔍 DEBUG: Temp file written (322170 bytes)
[2025-11-15T01:08:15.078Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T01:08:15.078Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T01:08:15.078Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322170 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T01:08:15.248Z] [BOT] ✅ Created forum post: 🏢 Associate AI Software Engineer Job ID 2025 @ ORG_57e8a431 Brands in #📣・marketing-jobs
  ✅ Industry: Associate AI Software Engineer Job ID 2025 @ ORG_57e8a431 Brands
[2025-11-15T01:08:16.749Z] [BOT] 🔍 DEBUG: Job "Associate AI Software Engineer Job ID 2025" | City: "El Segundo" | State: "CA" | Location Channel ID: "1429..."
[2025-11-15T01:08:17.209Z] [BOT] ✅ Created forum post: 🏢 Associate AI Software Engineer Job ID 2025 @ ORG_57e8a431 Brands in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-15T01:08:18.711Z] [BOT] 📝 Marking as posted: JID_16049384...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T01:08:18.711Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T01:08:18.711Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_14fe028f
[2025-11-15T01:08:18.711Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T01:08:18.712Z] [BOT] 🔍 DEBUG: Temp file written (322165 bytes)
[2025-11-15T01:08:18.712Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T01:08:18.713Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T01:08:18.713Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322165 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-15T01:08:21.713Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-15T01:08:23.720Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2290) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*