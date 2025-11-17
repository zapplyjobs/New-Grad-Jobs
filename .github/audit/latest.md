# Discord Bot Execution Audit
**Timestamp:** 2025-11-17T02:30:43.038Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-17T02:30:32.809Z] ========================================
[2025-11-17T02:30:32.810Z] Discord Bot Execution Log
[2025-11-17T02:30:32.810Z] Environment: GitHub Actions
[2025-11-17T02:30:32.810Z] Node Version: v20.19.5
[2025-11-17T02:30:32.810Z] ========================================
[2025-11-17T02:30:32.810Z] Environment Variables Check:
[2025-11-17T02:30:32.810Z] DISCORD_TOKEN: ✅ Set
[2025-11-17T02:30:32.810Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-17T02:30:32.810Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-17T02:30:32.810Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-17T02:30:32.810Z] 
Multi-Channel Configuration:
[2025-11-17T02:30:32.810Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-17T02:30:32.811Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-17T02:30:32.811Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-17T02:30:32.811Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-17T02:30:32.811Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-17T02:30:32.811Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-17T02:30:32.811Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-17T02:30:32.811Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-17T02:30:32.811Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-17T02:30:32.811Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-17T02:30:32.811Z] 
Data Files Check:
[2025-11-17T02:30:32.811Z] .github/data/new_jobs.json: ✅ Exists (1 items, 11958 bytes)
[2025-11-17T02:30:32.813Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322192 bytes)
[2025-11-17T02:30:32.813Z] 
========================================
[2025-11-17T02:30:32.813Z] Starting Enhanced Discord Bot...
[2025-11-17T02:30:32.813Z] ========================================
[2025-11-17T02:30:33.111Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-17T02:30:33.111Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-17T02:30:33.707Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-17T02:30:33.708Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-17T02:30:33.708Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-17T02:30:33.708Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-11-17T02:30:33.709Z] [BOT] 📍 [ROUTING] "Technology, Production Support, Full-Time Analyst" @ ORG_37dbbb7c
[2025-11-17T02:30:33.709Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-11-17T02:30:33.714Z] [BOT ERROR] (node:2179) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-17T02:30:33.903Z] [BOT] ✅ Created forum post: 🏢 Technology, Production Support, Full-Time Analyst @ ORG_37dbbb7c in #📣・marketing-jobs
[2025-11-17T02:30:33.903Z] [BOT] ✅ Industry: Technology, Production Support, Full-Time Analyst @ ORG_37dbbb7c
[2025-11-17T02:30:35.404Z] [BOT] 🔍 DEBUG: Job "Technology, Production Support, Full-Time Analyst" | City: "New York" | State: "NY" | Location Channel ID: "1429..."
[2025-11-17T02:30:35.604Z] [BOT] ✅ Created forum post: 🏢 Technology, Production Support, Full-Time Analyst @ ORG_37dbbb7c in #🗽・new-york
[2025-11-17T02:30:35.604Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-17T02:30:37.106Z] [BOT] 📝 Marking as posted: JID_9f769a57...
[2025-11-17T02:30:37.106Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-17T02:30:37.107Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-17T02:30:37.107Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_b1379f22
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-17T02:30:37.108Z] [BOT] 🔍 DEBUG: Temp file written (322251 bytes)
[2025-11-17T02:30:37.108Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-17T02:30:37.109Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-17T02:30:37.109Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322251 bytes
[2025-11-17T02:30:37.109Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-17T02:30:40.111Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-17T02:30:40.111Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-17T02:30:40.152Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 1
   Timestamp: 2025-11-17T02:30:40.151Z
[2025-11-17T02:30:42.161Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2179) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*