# Discord Bot Execution Audit
**Timestamp:** 2025-11-17T23:46:10.752Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-17T23:45:50.714Z] ========================================
[2025-11-17T23:45:50.716Z] Discord Bot Execution Log
[2025-11-17T23:45:50.716Z] Environment: GitHub Actions
[2025-11-17T23:45:50.716Z] Node Version: v20.19.5
[2025-11-17T23:45:50.716Z] ========================================
[2025-11-17T23:45:50.716Z] Environment Variables Check:
[2025-11-17T23:45:50.716Z] DISCORD_TOKEN: ✅ Set
[2025-11-17T23:45:50.716Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-17T23:45:50.716Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-17T23:45:50.716Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-17T23:45:50.716Z] 
Multi-Channel Configuration:
[2025-11-17T23:45:50.716Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-17T23:45:50.716Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-17T23:45:50.716Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-17T23:45:50.716Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-17T23:45:50.716Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-17T23:45:50.716Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-17T23:45:50.717Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-17T23:45:50.717Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-17T23:45:50.717Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-17T23:45:50.717Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-17T23:45:50.717Z] 
Data Files Check:
[2025-11-17T23:45:50.717Z] .github/data/new_jobs.json: ✅ Exists (3 items, 30852 bytes)
[2025-11-17T23:45:50.719Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322839 bytes)
[2025-11-17T23:45:50.719Z] 
========================================
[2025-11-17T23:45:50.719Z] Starting Enhanced Discord Bot...
[2025-11-17T23:45:50.719Z] ========================================
[2025-11-17T23:45:50.985Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-17T23:45:50.986Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-17T23:45:51.760Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-17T23:45:51.761Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-11-17T23:45:51.762Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-17T23:45:51.765Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-17T23:45:51.765Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Aldp" @ ORG_bdf03daa Fintech Solutions
[2025-11-17T23:45:51.765Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-17T23:45:51.769Z] [BOT ERROR] (node:2267) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-17T23:45:51.964Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Aldp @ ORG_bdf03daa Fintech Solutions in #💻・tech-jobs
[2025-11-17T23:45:51.964Z] [BOT] ✅ Industry: Software Engineer 1 - Aldp @ ORG_bdf03daa Fintech Solutions
[2025-11-17T23:45:53.464Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1 - Aldp" | City: "Austin" | State: "TX" | Location Channel ID: "1429..."
[2025-11-17T23:45:53.724Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Aldp @ ORG_bdf03daa Fintech Solutions in #🤠・austin
[2025-11-17T23:45:53.724Z] [BOT] ✅ Location: 🤠・austin
[2025-11-17T23:45:55.223Z] [BOT] 📝 Marking as posted: JID_f9b7ae55...
  🔍 DEBUG: Set size before add: 5000
[2025-11-17T23:45:55.224Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-17T23:45:55.224Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_48a3b535
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-17T23:45:55.226Z] [BOT] 🔍 DEBUG: Temp file written (322901 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-17T23:45:55.226Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-17T23:45:55.226Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322901 bytes
[2025-11-17T23:45:55.226Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-17T23:45:58.226Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2025-11-17T23:45:58.227Z] [BOT] 📍 [ROUTING] "Pre-Doctoral Research Specialist" @ ORG_b344d80e Wharton School
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2025-11-17T23:45:58.481Z] [BOT] ✅ Created forum post: 🏢 Pre-Doctoral Research Specialist @ ORG_b344d80e Wharton School in #💰・finance-jobs
[2025-11-17T23:45:58.481Z] [BOT] ✅ Industry: Pre-Doctoral Research Specialist @ ORG_b344d80e Wharton School
[2025-11-17T23:45:59.982Z] [BOT] 🔍 DEBUG: Job "Pre-Doctoral Research Specialist" | City: "Philadelphia" | State: "PA" | Location Channel ID: "1429..."
[2025-11-17T23:46:00.139Z] [BOT] ✅ Created forum post: 🏢 Pre-Doctoral Research Specialist @ ORG_b344d80e Wharton School in #🌉・san-francisco
[2025-11-17T23:46:00.139Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-17T23:46:01.640Z] [BOT] 📝 Marking as posted: JID_04aad7f4...
  🔍 DEBUG: Set size before add: 5000
[2025-11-17T23:46:01.640Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-17T23:46:01.640Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_767903c4
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-17T23:46:01.642Z] [BOT] 🔍 DEBUG: Temp file written (322977 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-17T23:46:01.643Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-17T23:46:01.643Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322977 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-17T23:46:01.643Z] [BOT] 📍 [ROUTING] "Pre-Doctoral Research Specialist" @ ORG_b344d80e Wharton School
   Category: FINANCE (matched: "finance")
[2025-11-17T23:46:01.643Z] [BOT] Channel: 💰・finance-jobs (1391...2941)
[2025-11-17T23:46:01.881Z] [BOT] ✅ Created forum post: 🏢 Pre-Doctoral Research Specialist @ ORG_b344d80e Wharton School in #💰・finance-jobs
  ✅ Industry: Pre-Doctoral Research Specialist @ ORG_b344d80e Wharton School
[2025-11-17T23:46:03.382Z] [BOT] 🔍 DEBUG: Job "Pre-Doctoral Research Specialist" | City: "Philadelphia" | State: "PA" | Location Channel ID: "1429..."
[2025-11-17T23:46:03.562Z] [BOT] ✅ Created forum post: 🏢 Pre-Doctoral Research Specialist @ ORG_b344d80e Wharton School in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-17T23:46:05.062Z] [BOT] 📝 Marking as posted: JID_04aad7f4...
  🔍 DEBUG: Set size before add: 5000
[2025-11-17T23:46:05.062Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-17T23:46:05.062Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_f3ac6aa8
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-17T23:46:05.064Z] [BOT] 🔍 DEBUG: Temp file written (323042 bytes)
[2025-11-17T23:46:05.064Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-17T23:46:05.064Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-17T23:46:05.065Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323042 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-17T23:46:08.065Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-17T23:46:08.103Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 3
   Timestamp: 2025-11-17T23:46:08.103Z
[2025-11-17T23:46:10.112Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2267) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*