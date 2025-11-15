# Discord Bot Execution Audit
**Timestamp:** 2025-11-15T08:01:49.236Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-15T08:01:38.586Z] ========================================
[2025-11-15T08:01:38.587Z] Discord Bot Execution Log
[2025-11-15T08:01:38.587Z] Environment: GitHub Actions
[2025-11-15T08:01:38.587Z] Node Version: v20.19.5
[2025-11-15T08:01:38.587Z] ========================================
[2025-11-15T08:01:38.587Z] Environment Variables Check:
[2025-11-15T08:01:38.587Z] DISCORD_TOKEN: ✅ Set
[2025-11-15T08:01:38.587Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-15T08:01:38.587Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-15T08:01:38.587Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-15T08:01:38.587Z] 
Multi-Channel Configuration:
[2025-11-15T08:01:38.588Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-15T08:01:38.588Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-15T08:01:38.588Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-15T08:01:38.588Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-15T08:01:38.588Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-15T08:01:38.588Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-15T08:01:38.588Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-15T08:01:38.588Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-15T08:01:38.588Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-15T08:01:38.588Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-15T08:01:38.588Z] 
Data Files Check:
[2025-11-15T08:01:38.588Z] .github/data/new_jobs.json: ✅ Exists (4 items, 11299 bytes)
[2025-11-15T08:01:38.590Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322119 bytes)
[2025-11-15T08:01:38.590Z] 
========================================
[2025-11-15T08:01:38.590Z] Starting Enhanced Discord Bot...
[2025-11-15T08:01:38.590Z] ========================================
[2025-11-15T08:01:38.859Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-15T08:01:38.860Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-15T08:01:39.691Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-15T08:01:39.692Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-15T08:01:39.692Z] [BOT] ⏭️ Skipping already posted (legacy ID): Entry Level - C Software Developer at mthree
[2025-11-15T08:01:39.692Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
📬 Found 1 new jobs (3 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-15T08:01:39.693Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-15T08:01:39.697Z] [BOT ERROR] (node:2166) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-15T08:01:39.900Z] [BOT] ✅ Created forum post: 🏢 Associate Product Engineer @ ORG_1550f0e6 ABLOY in #💻・tech-jobs
[2025-11-15T08:01:39.900Z] [BOT] ✅ Industry: Associate Product Engineer @ ORG_1550f0e6 ABLOY
[2025-11-15T08:01:41.401Z] [BOT] 🔍 DEBUG: Job "Associate Product Engineer" | City: "Mason City" | State: "IA" | Location Channel ID: "1429..."
[2025-11-15T08:01:41.686Z] [BOT] ✅ Created forum post: 🏢 Associate Product Engineer @ ORG_1550f0e6 ABLOY in #💻・remote-usa
[2025-11-15T08:01:41.686Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-15T08:01:43.186Z] [BOT] 📝 Marking as posted: JID_d0277267...
[2025-11-15T08:01:43.186Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-15T08:01:43.187Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-15T08:01:43.187Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-15T08:01:43.187Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_a608a44e
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-15T08:01:43.189Z] [BOT] 🔍 DEBUG: Temp file written (322127 bytes)
[2025-11-15T08:01:43.189Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-15T08:01:43.189Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-15T08:01:43.189Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322127 bytes
[2025-11-15T08:01:43.190Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-15T08:01:46.190Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-15T08:01:46.190Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-15T08:01:48.198Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2166) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*