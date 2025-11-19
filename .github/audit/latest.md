# Discord Bot Execution Audit
**Timestamp:** 2025-11-19T13:50:49.669Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-19T13:50:38.631Z] ========================================
[2025-11-19T13:50:38.632Z] Discord Bot Execution Log
[2025-11-19T13:50:38.632Z] Environment: GitHub Actions
[2025-11-19T13:50:38.632Z] Node Version: v20.19.5
[2025-11-19T13:50:38.633Z] ========================================
[2025-11-19T13:50:38.633Z] Environment Variables Check:
[2025-11-19T13:50:38.633Z] DISCORD_TOKEN: ✅ Set
[2025-11-19T13:50:38.633Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-19T13:50:38.633Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-19T13:50:38.633Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-19T13:50:38.633Z] 
Multi-Channel Configuration:
[2025-11-19T13:50:38.633Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-19T13:50:38.633Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-19T13:50:38.633Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-19T13:50:38.633Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-19T13:50:38.633Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-19T13:50:38.633Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-19T13:50:38.633Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-19T13:50:38.633Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-19T13:50:38.633Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-19T13:50:38.633Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-19T13:50:38.633Z] 
Data Files Check:
[2025-11-19T13:50:38.634Z] .github/data/new_jobs.json: ✅ Exists (2 items, 6790 bytes)
[2025-11-19T13:50:38.635Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 324046 bytes)
[2025-11-19T13:50:38.635Z] 
========================================
[2025-11-19T13:50:38.635Z] Starting Enhanced Discord Bot...
[2025-11-19T13:50:38.635Z] ========================================
[2025-11-19T13:50:38.913Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-19T13:50:38.913Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-19T13:50:39.904Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-19T13:50:39.905Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-19T13:50:39.905Z] [BOT] 📬 Found 1 new jobs (1 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-19T13:50:39.905Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-19T13:50:39.906Z] [BOT] 📍 [ROUTING] "Full-Stack Software Engineer" @ ORG_b71fcec8
[2025-11-19T13:50:39.906Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T13:50:39.910Z] [BOT ERROR] (node:2171) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-19T13:50:40.139Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Software Engineer @ ORG_b71fcec8 in #💻・tech-jobs
[2025-11-19T13:50:40.139Z] [BOT] ✅ Industry: Full-Stack Software Engineer @ ORG_b71fcec8
[2025-11-19T13:50:41.640Z] [BOT] 🔍 DEBUG: Job "Full-Stack Software Engineer" | City: "San Francisco" | State: "CA" | Location Channel ID: "1429..."
[2025-11-19T13:50:41.840Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Software Engineer @ ORG_b71fcec8 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-19T13:50:43.341Z] [BOT] 📝 Marking as posted: JID_44b24e32...
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T13:50:43.341Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T13:50:43.342Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_8a645a47
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T13:50:43.343Z] [BOT] 🔍 DEBUG: Temp file written (324046 bytes)
[2025-11-19T13:50:43.343Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T13:50:43.343Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T13:50:43.343Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324046 bytes
[2025-11-19T13:50:43.343Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-19T13:50:46.344Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-19T13:50:46.383Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 1
   Timestamp: 2025-11-19T13:50:46.383Z
[2025-11-19T13:50:48.391Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2171) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*