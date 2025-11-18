# Discord Bot Execution Audit
**Timestamp:** 2025-11-18T01:51:08.541Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-18T01:50:57.842Z] ========================================
[2025-11-18T01:50:57.844Z] Discord Bot Execution Log
[2025-11-18T01:50:57.844Z] Environment: GitHub Actions
[2025-11-18T01:50:57.844Z] Node Version: v20.19.5
[2025-11-18T01:50:57.844Z] ========================================
[2025-11-18T01:50:57.844Z] Environment Variables Check:
[2025-11-18T01:50:57.844Z] DISCORD_TOKEN: ✅ Set
[2025-11-18T01:50:57.844Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-18T01:50:57.844Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-18T01:50:57.844Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-18T01:50:57.844Z] 
Multi-Channel Configuration:
[2025-11-18T01:50:57.844Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-18T01:50:57.844Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-18T01:50:57.844Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-18T01:50:57.844Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-18T01:50:57.844Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-18T01:50:57.844Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-18T01:50:57.845Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-18T01:50:57.845Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-18T01:50:57.845Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-18T01:50:57.845Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-18T01:50:57.845Z] 
Data Files Check:
[2025-11-18T01:50:57.845Z] .github/data/new_jobs.json: ✅ Exists (2 items, 13530 bytes)
[2025-11-18T01:50:57.847Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323515 bytes)
[2025-11-18T01:50:57.847Z] 
========================================
[2025-11-18T01:50:57.847Z] Starting Enhanced Discord Bot...
[2025-11-18T01:50:57.847Z] ========================================
[2025-11-18T01:50:58.136Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-18T01:50:58.137Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-18T01:50:59.079Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-18T01:50:59.080Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-18T01:50:59.080Z] [BOT] 📬 Found 1 new jobs (1 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-18T01:50:59.081Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-18T01:50:59.082Z] [BOT] 📍 [ROUTING] "Senior Analyst - Advanced Analytics" @ ORG_3eab285c
[2025-11-18T01:50:59.082Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T01:50:59.087Z] [BOT ERROR] (node:2267) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-18T01:50:59.550Z] [BOT] ✅ Created forum post: 🏢 Senior Analyst - Advanced Analytics @ ORG_3eab285c in #💻・tech-jobs
[2025-11-18T01:50:59.551Z] [BOT] ✅ Industry: Senior Analyst - Advanced Analytics @ ORG_3eab285c
[2025-11-18T01:51:01.052Z] [BOT] 🔍 DEBUG: Job "Senior Analyst - Advanced Analytics" | City: "Union City" | State: "NJ" | Location Channel ID: "1429..."
[2025-11-18T01:51:01.252Z] [BOT] ✅ Created forum post: 🏢 Senior Analyst - Advanced Analytics @ ORG_3eab285c in #🗽・new-york
[2025-11-18T01:51:01.253Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-18T01:51:02.752Z] [BOT] 📝 Marking as posted: JID_f6e5019b...
[2025-11-18T01:51:02.753Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T01:51:02.753Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-18T01:51:02.753Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_62e661fc
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T01:51:02.755Z] [BOT] 🔍 DEBUG: Temp file written (323579 bytes)
[2025-11-18T01:51:02.755Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T01:51:02.755Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T01:51:02.756Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323579 bytes
[2025-11-18T01:51:02.756Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-18T01:51:05.756Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-18T01:51:05.756Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-18T01:51:05.797Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 1
   Timestamp: 2025-11-18T01:51:05.796Z
[2025-11-18T01:51:07.806Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2267) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*