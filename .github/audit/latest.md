# Discord Bot Execution Audit
**Timestamp:** 2025-11-19T08:38:51.036Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-19T08:38:40.747Z] ========================================
[2025-11-19T08:38:40.748Z] Discord Bot Execution Log
[2025-11-19T08:38:40.748Z] Environment: GitHub Actions
[2025-11-19T08:38:40.748Z] Node Version: v20.19.5
[2025-11-19T08:38:40.748Z] ========================================
[2025-11-19T08:38:40.748Z] Environment Variables Check:
[2025-11-19T08:38:40.748Z] DISCORD_TOKEN: ✅ Set
[2025-11-19T08:38:40.748Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-19T08:38:40.748Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-19T08:38:40.748Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-19T08:38:40.748Z] 
Multi-Channel Configuration:
[2025-11-19T08:38:40.748Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-19T08:38:40.748Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-19T08:38:40.748Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-19T08:38:40.749Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-19T08:38:40.749Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-19T08:38:40.749Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-19T08:38:40.749Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-19T08:38:40.749Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-19T08:38:40.749Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-19T08:38:40.749Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-19T08:38:40.749Z] 
Data Files Check:
[2025-11-19T08:38:40.749Z] .github/data/new_jobs.json: ✅ Exists (2 items, 13761 bytes)
[2025-11-19T08:38:40.751Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323869 bytes)
[2025-11-19T08:38:40.751Z] 
========================================
[2025-11-19T08:38:40.751Z] Starting Enhanced Discord Bot...
[2025-11-19T08:38:40.751Z] ========================================
[2025-11-19T08:38:41.027Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-19T08:38:41.027Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-19T08:38:41.709Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-19T08:38:41.710Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-19T08:38:41.711Z] [BOT] 📬 Found 1 new jobs (1 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-19T08:38:41.711Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-19T08:38:41.711Z] [BOT] 📍 [ROUTING] "Analyst - Credit Risk - Data Science & Modeling" @ T-Mobile
[2025-11-19T08:38:41.711Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T08:38:41.716Z] [BOT ERROR] (node:2263) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-19T08:38:41.923Z] [BOT] ✅ Created forum post: 🏢 Analyst - Credit Risk - Data Science & Modeling @ T-Mobile in #💻・tech-jobs
[2025-11-19T08:38:41.923Z] [BOT] ✅ Industry: Analyst - Credit Risk - Data Science & Modeling @ T-Mobile
[2025-11-19T08:38:43.425Z] [BOT] 🔍 DEBUG: Job "Analyst - Credit Risk - Data Science & Modeling" | City: "Frisco" | State: "TX" | Location Channel ID: "1429..."
[2025-11-19T08:38:43.624Z] [BOT] ✅ Created forum post: 🏢 Analyst - Credit Risk - Data Science & Modeling @ T-Mobile in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-19T08:38:45.124Z] [BOT] 📝 Marking as posted: JID_ffa4b8c2...
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T08:38:45.124Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-19T08:38:45.125Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T08:38:45.125Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e9826967
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T08:38:45.126Z] [BOT] 🔍 DEBUG: Temp file written (323927 bytes)
[2025-11-19T08:38:45.127Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T08:38:45.127Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T08:38:45.127Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323927 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T08:38:48.127Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-19T08:38:48.166Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 1
   Timestamp: 2025-11-19T08:38:48.166Z
[2025-11-19T08:38:50.174Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2263) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*