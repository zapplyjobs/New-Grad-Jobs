# Discord Bot Execution Audit
**Timestamp:** 2025-11-19T16:22:41.984Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-19T16:22:30.587Z] ========================================
[2025-11-19T16:22:30.588Z] Discord Bot Execution Log
[2025-11-19T16:22:30.588Z] Environment: GitHub Actions
[2025-11-19T16:22:30.588Z] Node Version: v20.19.5
[2025-11-19T16:22:30.588Z] ========================================
[2025-11-19T16:22:30.588Z] Environment Variables Check:
[2025-11-19T16:22:30.589Z] DISCORD_TOKEN: ✅ Set
[2025-11-19T16:22:30.589Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-19T16:22:30.589Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-19T16:22:30.589Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-19T16:22:30.589Z] 
Multi-Channel Configuration:
[2025-11-19T16:22:30.589Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-19T16:22:30.589Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-19T16:22:30.589Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-19T16:22:30.589Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-19T16:22:30.589Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-19T16:22:30.589Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-19T16:22:30.589Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-19T16:22:30.589Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-19T16:22:30.589Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-19T16:22:30.589Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-19T16:22:30.589Z] 
Data Files Check:
[2025-11-19T16:22:30.590Z] .github/data/new_jobs.json: ✅ Exists (3 items, 23618 bytes)
[2025-11-19T16:22:30.592Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 324046 bytes)
[2025-11-19T16:22:30.592Z] 
========================================
[2025-11-19T16:22:30.592Z] Starting Enhanced Discord Bot...
[2025-11-19T16:22:30.592Z] ========================================
[2025-11-19T16:22:30.864Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-19T16:22:30.865Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-19T16:22:31.967Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-19T16:22:31.968Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-19T16:22:31.968Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-19T16:22:31.968Z] [BOT] 📬 Found 1 new jobs (2 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-19T16:22:31.969Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-19T16:22:31.969Z] [BOT] 📍 [ROUTING] "Entry-Level Software Engineer" @ ORG_20eac5aa Dynamics Laboratory
[2025-11-19T16:22:31.969Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T16:22:31.974Z] [BOT ERROR] (node:2224) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-19T16:22:32.462Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Engineer @ ORG_20eac5aa Dynamics Laboratory in #💻・tech-jobs
[2025-11-19T16:22:32.462Z] [BOT] ✅ Industry: Entry-Level Software Engineer @ ORG_20eac5aa Dynamics Laboratory
[2025-11-19T16:22:33.963Z] [BOT] 🔍 DEBUG: Job "Entry-Level Software Engineer" | City: "North Logan" | State: "UT" | Location Channel ID: "1429..."
[2025-11-19T16:22:34.189Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Engineer @ ORG_20eac5aa Dynamics Laboratory in #💻・remote-usa
[2025-11-19T16:22:34.189Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-19T16:22:35.689Z] [BOT] 📝 Marking as posted: JID_d68ea6d5...
[2025-11-19T16:22:35.690Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T16:22:35.690Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_235c6330
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T16:22:35.691Z] [BOT] 🔍 DEBUG: Temp file written (324063 bytes)
[2025-11-19T16:22:35.691Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T16:22:35.692Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T16:22:35.692Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324063 bytes
[2025-11-19T16:22:35.692Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-19T16:22:38.693Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-19T16:22:38.733Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 1
   Timestamp: 2025-11-19T16:22:38.733Z
[2025-11-19T16:22:40.743Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2224) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*