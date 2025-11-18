# Discord Bot Execution Audit
**Timestamp:** 2025-11-18T09:01:39.782Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-18T09:01:29.708Z] ========================================
[2025-11-18T09:01:29.709Z] Discord Bot Execution Log
[2025-11-18T09:01:29.709Z] Environment: GitHub Actions
[2025-11-18T09:01:29.709Z] Node Version: v20.19.5
[2025-11-18T09:01:29.709Z] ========================================
[2025-11-18T09:01:29.710Z] Environment Variables Check:
[2025-11-18T09:01:29.710Z] DISCORD_TOKEN: ✅ Set
[2025-11-18T09:01:29.710Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-18T09:01:29.710Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-18T09:01:29.710Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-18T09:01:29.710Z] 
Multi-Channel Configuration:
[2025-11-18T09:01:29.710Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-18T09:01:29.710Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-18T09:01:29.710Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-18T09:01:29.710Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-18T09:01:29.710Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-18T09:01:29.710Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-18T09:01:29.710Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-18T09:01:29.710Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-18T09:01:29.710Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-18T09:01:29.710Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-18T09:01:29.710Z] 
Data Files Check:
[2025-11-18T09:01:29.711Z] .github/data/new_jobs.json: ✅ Exists (2 items, 10443 bytes)
[2025-11-18T09:01:29.713Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323598 bytes)
[2025-11-18T09:01:29.713Z] 
========================================
[2025-11-18T09:01:29.713Z] Starting Enhanced Discord Bot...
[2025-11-18T09:01:29.713Z] ========================================
[2025-11-18T09:01:29.988Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-18T09:01:29.989Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-18T09:01:30.530Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-18T09:01:30.531Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-18T09:01:30.531Z] [BOT] 📬 Found 1 new jobs (1 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-18T09:01:30.532Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-18T09:01:30.532Z] [BOT] 📍 [ROUTING] "Associate Software Engineer - Full-Stack Development" @ ORG_2bc58fcc League Baseball
[2025-11-18T09:01:30.532Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T09:01:30.537Z] [BOT ERROR] (node:2165) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-18T09:01:31.002Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Full-Stack Development @ ORG_2bc58fcc League Baseball in #💻・tech-jobs
[2025-11-18T09:01:31.003Z] [BOT] ✅ Industry: Associate Software Engineer - Full-Stack Development @ ORG_2bc58fcc League Baseball
[2025-11-18T09:01:32.505Z] [BOT] 🔍 DEBUG: Job "Associate Software Engineer - Full-Stack Development" | City: "Philadelphia" | State: "PA" | Location Channel ID: "1429..."
[2025-11-18T09:01:32.641Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Full-Stack Development @ ORG_2bc58fcc League Baseball in #💻・remote-usa
[2025-11-18T09:01:32.641Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-18T09:01:34.142Z] [BOT] 📝 Marking as posted: JID_10b80c8d...
[2025-11-18T09:01:34.142Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T09:01:34.143Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-18T09:01:34.143Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_71064b8f
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T09:01:34.144Z] [BOT] 🔍 DEBUG: Temp file written (323577 bytes)
[2025-11-18T09:01:34.144Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T09:01:34.145Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T09:01:34.145Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323577 bytes
[2025-11-18T09:01:34.145Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-18T09:01:37.145Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-18T09:01:37.145Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-18T09:01:37.184Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 1
[2025-11-18T09:01:37.184Z] [BOT] Timestamp: 2025-11-18T09:01:37.184Z
[2025-11-18T09:01:39.192Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2165) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*