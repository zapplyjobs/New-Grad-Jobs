# Discord Bot Execution Audit
**Timestamp:** 2025-11-14T15:01:37.136Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-14T15:01:26.899Z] ========================================
[2025-11-14T15:01:26.901Z] Discord Bot Execution Log
[2025-11-14T15:01:26.901Z] Environment: GitHub Actions
[2025-11-14T15:01:26.901Z] Node Version: v20.19.5
[2025-11-14T15:01:26.901Z] ========================================
[2025-11-14T15:01:26.901Z] Environment Variables Check:
[2025-11-14T15:01:26.901Z] DISCORD_TOKEN: ✅ Set
[2025-11-14T15:01:26.901Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-14T15:01:26.901Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-14T15:01:26.901Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-14T15:01:26.901Z] 
Multi-Channel Configuration:
[2025-11-14T15:01:26.901Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-14T15:01:26.901Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-14T15:01:26.901Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-14T15:01:26.901Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-14T15:01:26.901Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-14T15:01:26.901Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-14T15:01:26.901Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-14T15:01:26.901Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-14T15:01:26.901Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-14T15:01:26.901Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-14T15:01:26.901Z] 
Data Files Check:
[2025-11-14T15:01:26.902Z] .github/data/new_jobs.json: ✅ Exists (3 items, 13655 bytes)
[2025-11-14T15:01:26.904Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 317861 bytes)
[2025-11-14T15:01:26.904Z] 
========================================
[2025-11-14T15:01:26.904Z] Starting Enhanced Discord Bot...
[2025-11-14T15:01:26.904Z] ========================================
[2025-11-14T15:01:27.184Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-14T15:01:27.185Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-14T15:01:27.818Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-14T15:01:27.819Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-14T15:01:27.819Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 1 new jobs (2 already posted)...
📤 Posting 1 jobs...
[2025-11-14T15:01:27.819Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-14T15:01:27.820Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-11-14T15:01:27.824Z] [BOT ERROR] (node:2259) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-14T15:01:28.156Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer 1 @ ORG_07467eb4 BlueShield of Tennessee in #📁・JID_e938df7b
[2025-11-14T15:01:28.156Z] [BOT] ✅ Industry: Associate Software Engineer 1 @ ORG_07467eb4 BlueShield of Tennessee
[2025-11-14T15:01:29.657Z] [BOT] 🔍 DEBUG: Job "Associate Software Engineer 1" | City: "Chattanooga" | State: "TN" | Location Channel ID: "1429..."
[2025-11-14T15:01:29.956Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer 1 @ ORG_07467eb4 BlueShield of Tennessee in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T15:01:31.456Z] [BOT] 📝 Marking as posted: JID_ff418660...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T15:01:31.456Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T15:01:31.457Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_951b79d7
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T15:01:31.458Z] [BOT] 🔍 DEBUG: Temp file written (317912 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T15:01:31.458Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T15:01:31.459Z] [BOT] 🔍 DEBUG: Verified file exists, size: 317912 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T15:01:34.460Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-14T15:01:36.468Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2259) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*