# Discord Bot Execution Audit
**Timestamp:** 2025-11-15T07:46:37.454Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-15T07:46:27.438Z] ========================================
[2025-11-15T07:46:27.439Z] Discord Bot Execution Log
[2025-11-15T07:46:27.439Z] Environment: GitHub Actions
[2025-11-15T07:46:27.439Z] Node Version: v20.19.5
[2025-11-15T07:46:27.439Z] ========================================
[2025-11-15T07:46:27.439Z] Environment Variables Check:
[2025-11-15T07:46:27.439Z] DISCORD_TOKEN: ✅ Set
[2025-11-15T07:46:27.439Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-15T07:46:27.439Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-15T07:46:27.440Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-15T07:46:27.440Z] 
Multi-Channel Configuration:
[2025-11-15T07:46:27.440Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-15T07:46:27.440Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-15T07:46:27.440Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-15T07:46:27.440Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-15T07:46:27.440Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-15T07:46:27.440Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-15T07:46:27.440Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-15T07:46:27.440Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-15T07:46:27.440Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-15T07:46:27.440Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-15T07:46:27.440Z] 
Data Files Check:
[2025-11-15T07:46:27.440Z] .github/data/new_jobs.json: ✅ Exists (4 items, 13105 bytes)
[2025-11-15T07:46:27.442Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322165 bytes)
[2025-11-15T07:46:27.442Z] 
========================================
[2025-11-15T07:46:27.442Z] Starting Enhanced Discord Bot...
[2025-11-15T07:46:27.442Z] ========================================
[2025-11-15T07:46:27.710Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-15T07:46:27.711Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-15T07:46:28.247Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-15T07:46:28.248Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-15T07:46:28.248Z] [BOT] ⏭️ Skipping already posted (legacy ID): Entry Level - C Software Developer at mthree
[2025-11-15T07:46:28.249Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
📬 Found 1 new jobs (3 already posted)...
[2025-11-15T07:46:28.249Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-15T07:46:28.249Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-15T07:46:28.255Z] [BOT ERROR] (node:2202) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-15T07:46:28.500Z] [BOT] ✅ Created forum post: 🏢 Imaging Analyst @ ORG_66279f04 National Financial in #💻・tech-jobs
  ✅ Industry: Imaging Analyst @ ORG_66279f04 National Financial
[2025-11-15T07:46:30.002Z] [BOT] 🔍 DEBUG: Job "Imaging Analyst" | City: "Altamonte Springs" | State: "FL" | Location Channel ID: "1429..."
[2025-11-15T07:46:30.324Z] [BOT] ✅ Created forum post: 🏢 Imaging Analyst @ ORG_66279f04 National Financial in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-15T07:46:31.825Z] [BOT] 📝 Marking as posted: JID_d39d7b94
[2025-11-15T07:46:31.825Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T07:46:31.825Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_7019c230
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T07:46:31.827Z] [BOT] 🔍 DEBUG: Temp file written (322119 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T07:46:31.827Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T07:46:31.827Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322119 bytes
[2025-11-15T07:46:31.827Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-15T07:46:34.828Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-15T07:46:36.837Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2202) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*