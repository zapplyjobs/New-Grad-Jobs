# Discord Bot Execution Audit
**Timestamp:** 2025-11-21T15:21:36.706Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-21T15:21:25.808Z] ========================================
[2025-11-21T15:21:25.809Z] Discord Bot Execution Log
[2025-11-21T15:21:25.809Z] Environment: GitHub Actions
[2025-11-21T15:21:25.809Z] Node Version: v20.19.5
[2025-11-21T15:21:25.809Z] ========================================
[2025-11-21T15:21:25.809Z] Environment Variables Check:
[2025-11-21T15:21:25.809Z] DISCORD_TOKEN: ✅ Set
[2025-11-21T15:21:25.809Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-21T15:21:25.810Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-21T15:21:25.810Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-21T15:21:25.810Z] 
Multi-Channel Configuration:
[2025-11-21T15:21:25.810Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-21T15:21:25.810Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-21T15:21:25.810Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-21T15:21:25.810Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-21T15:21:25.810Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-21T15:21:25.810Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-21T15:21:25.810Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-21T15:21:25.810Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-21T15:21:25.810Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-21T15:21:25.810Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-21T15:21:25.810Z] 
Data Files Check:
[2025-11-21T15:21:25.811Z] .github/data/new_jobs.json: ✅ Exists (3 items, 7315 bytes)
[2025-11-21T15:21:25.812Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327120 bytes)
[2025-11-21T15:21:25.812Z] 
========================================
[2025-11-21T15:21:25.812Z] Starting Enhanced Discord Bot...
[2025-11-21T15:21:25.812Z] ========================================
[2025-11-21T15:21:26.092Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-21T15:21:26.093Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-21T15:21:26.866Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-21T15:21:26.867Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-21T15:21:26.867Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-21T15:21:26.867Z] [BOT] 📬 Found 1 new jobs (2 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-21T15:21:26.869Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-21T15:21:26.869Z] [BOT] 📍 [ROUTING] "AIML Resident - Health" @ ORG_f223faa9
[2025-11-21T15:21:26.869Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-21T15:21:26.874Z] [BOT ERROR] (node:2203) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-21T15:21:27.111Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Health @ ORG_f223faa9 in #🩺・healthcare-jobs
  ✅ Industry: AIML Resident - Health @ ORG_f223faa9
[2025-11-21T15:21:28.612Z] [BOT] 🔍 DEBUG: Job "AIML Resident - Health" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T15:21:28.893Z] [BOT] ✅ Created forum post: 🍎 AIML Resident - Health @ ORG_f223faa9 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-21T15:21:30.394Z] [BOT] 📝 Marking as posted: JID_c2ecd071
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T15:21:30.394Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T15:21:30.394Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_bbfe5636
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T15:21:30.396Z] [BOT] 🔍 DEBUG: Temp file written (327112 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T15:21:30.396Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T15:21:30.396Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327112 bytes
[2025-11-21T15:21:30.397Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-21T15:21:33.398Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-21T15:21:33.436Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 1
   Timestamp: 2025-11-21T15:21:33.436Z
[2025-11-21T15:21:35.445Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2203) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*