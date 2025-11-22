# Discord Bot Execution Audit
**Timestamp:** 2025-11-22T00:02:37.896Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-22T00:02:11.079Z] ========================================
[2025-11-22T00:02:11.080Z] Discord Bot Execution Log
[2025-11-22T00:02:11.080Z] Environment: GitHub Actions
[2025-11-22T00:02:11.080Z] Node Version: v20.19.5
[2025-11-22T00:02:11.080Z] ========================================
[2025-11-22T00:02:11.080Z] Environment Variables Check:
[2025-11-22T00:02:11.080Z] DISCORD_TOKEN: ✅ Set
[2025-11-22T00:02:11.080Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-22T00:02:11.080Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-22T00:02:11.080Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-22T00:02:11.080Z] 
Multi-Channel Configuration:
[2025-11-22T00:02:11.080Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-22T00:02:11.081Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-22T00:02:11.081Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-22T00:02:11.081Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-22T00:02:11.081Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-22T00:02:11.081Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-22T00:02:11.081Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-22T00:02:11.081Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-22T00:02:11.081Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-22T00:02:11.081Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-22T00:02:11.081Z] 
Data Files Check:
[2025-11-22T00:02:11.081Z] .github/data/new_jobs.json: ✅ Exists (6 items, 22631 bytes)
[2025-11-22T00:02:11.083Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327127 bytes)
[2025-11-22T00:02:11.083Z] 
========================================
[2025-11-22T00:02:11.083Z] Starting Enhanced Discord Bot...
[2025-11-22T00:02:11.083Z] ========================================
[2025-11-22T00:02:11.360Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-22T00:02:11.361Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-22T00:02:11.866Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-22T00:02:11.867Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-22T00:02:11.868Z] [BOT] 📬 Found 5 new jobs (1 already posted)...
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-22T00:02:11.871Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-11-22T00:02:11.872Z] [BOT] 📍 [ROUTING] "Mandarin Language Specialist (USA-based)" @ ORG_0f2833f9
[2025-11-22T00:02:11.872Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-22T00:02:11.876Z] [BOT ERROR] (node:2306) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-22T00:02:12.056Z] [BOT] ✅ Created forum post: 🏢 Mandarin Language Specialist (USA-based) @ ORG_0f2833f9 in #💻・tech-jobs
  ✅ Industry: Mandarin Language Specialist (USA-based) @ ORG_0f2833f9
[2025-11-22T00:02:13.557Z] [BOT] 🔍 DEBUG: Job "Mandarin Language Specialist (USA-based)" | City: "Remote in USA" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-22T00:02:13.833Z] [BOT] ✅ Created forum post: 🏢 Mandarin Language Specialist (USA-based) @ ORG_0f2833f9 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-22T00:02:15.334Z] [BOT] 📝 Marking as posted: JID_0bca55f1...
  🔍 DEBUG: Set size before add: 5000
[2025-11-22T00:02:15.334Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T00:02:15.334Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T00:02:15.334Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_84df8bf4
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T00:02:15.335Z] [BOT] 🔍 DEBUG: Temp file written (327139 bytes)
[2025-11-22T00:02:15.336Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T00:02:15.336Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T00:02:15.336Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327139 bytes
[2025-11-22T00:02:15.336Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Farsi Language Specialist" @ ORG_0f2833f9
[2025-11-22T00:02:15.336Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-22T00:02:15.527Z] [BOT] ✅ Created forum post: 🏢 Farsi Language Specialist @ ORG_0f2833f9 in #💻・tech-jobs
  ✅ Industry: Farsi Language Specialist @ ORG_0f2833f9
[2025-11-22T00:02:17.028Z] [BOT] 🔍 DEBUG: Job "Farsi Language Specialist" | City: "Remote in USA" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-22T00:02:17.218Z] [BOT] ✅ Created forum post: 🏢 Farsi Language Specialist @ ORG_0f2833f9 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-22T00:02:18.718Z] [BOT] 📝 Marking as posted: JID_475c1d43...
  🔍 DEBUG: Set size before add: 5000
[2025-11-22T00:02:18.719Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T00:02:18.719Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e8a0578d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T00:02:18.720Z] [BOT] 🔍 DEBUG: Temp file written (327149 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T00:02:18.720Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T00:02:18.720Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327149 bytes
💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Software Engineer - AlloyDB Semantic Search" @ ORG_ce770667
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-22T00:02:18.881Z] [BOT] ✅ Created forum post: 🟢 Software Engineer - AlloyDB Semantic Search @ ORG_ce770667 in #💻・tech-jobs
  ✅ Industry: Software Engineer - AlloyDB Semantic Search @ ORG_ce770667
[2025-11-22T00:02:20.381Z] [BOT] 🔍 DEBUG: Job "Software Engineer - AlloyDB Semantic Search" | City: "Sunnyvale" | State: "CA" | Location Channel ID: "1429..."
[2025-11-22T00:02:20.559Z] [BOT] ✅ Created forum post: 🟢 Software Engineer - AlloyDB Semantic Search @ ORG_ce770667 in #☀️・sunnyvale
[2025-11-22T00:02:20.560Z] [BOT] ✅ Location: ☀️・sunnyvale
[2025-11-22T00:02:22.060Z] [BOT] 📝 Marking as posted: JID_ba1fb909...
[2025-11-22T00:02:22.061Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T00:02:22.061Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T00:02:22.061Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_caa1371f
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T00:02:22.063Z] [BOT] 🔍 DEBUG: Temp file written (327163 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T00:02:22.063Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T00:02:22.063Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327163 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T00:02:22.064Z] [BOT] 📍 [ROUTING] "Applied AI Engineer" @ ORG_124e3f53
[2025-11-22T00:02:22.064Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-22T00:02:22.245Z] [BOT] ✅ Created forum post: 🏢 Applied AI Engineer @ ORG_124e3f53 in #💻・tech-jobs
[2025-11-22T00:02:22.245Z] [BOT] ✅ Industry: Applied AI Engineer @ ORG_124e3f53
[2025-11-22T00:02:23.744Z] [BOT] 🔍 DEBUG: Job "Applied AI Engineer" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-22T00:02:23.908Z] [BOT] ✅ Created forum post: 🏢 Applied AI Engineer @ ORG_124e3f53 in #🗽・new-york
[2025-11-22T00:02:23.908Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-22T00:02:25.409Z] [BOT] 📝 Marking as posted: JID_38d8d72f...
  🔍 DEBUG: Set size before add: 5000
[2025-11-22T00:02:25.409Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T00:02:25.409Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T00:02:25.409Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_eea1fe54
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T00:02:25.411Z] [BOT] 🔍 DEBUG: Temp file written (327104 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T00:02:25.411Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T00:02:25.411Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327104 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T00:02:28.412Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-22T00:02:28.412Z] [BOT] 📍 [ROUTING] "Modeling Simulation & Analysis Engineer 2" @ ORG_75f04b84
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-22T00:02:28.837Z] [BOT] ✅ Created forum post: 🏢 Modeling Simulation & Analysis Engineer 2 @ ORG_75f04b84 in #🩺・healthcare-jobs
[2025-11-22T00:02:28.837Z] [BOT] ✅ Industry: Modeling Simulation & Analysis Engineer 2 @ ORG_75f04b84
[2025-11-22T00:02:30.339Z] [BOT] 🔍 DEBUG: Job "Modeling Simulation & Analysis Engineer 2" | City: "Tucson" | State: "AZ" | Location Channel ID: "1429..."
[2025-11-22T00:02:30.584Z] [BOT] ✅ Created forum post: 🏢 Modeling Simulation & Analysis Engineer 2 @ ORG_75f04b84 in #💻・remote-usa
[2025-11-22T00:02:30.584Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-22T00:02:32.084Z] [BOT] 📝 Marking as posted: JID_6957dde4-rec_rtx_e...
[2025-11-22T00:02:32.084Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T00:02:32.085Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T00:02:32.085Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_13d63a47
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T00:02:32.086Z] [BOT] 🔍 DEBUG: Temp file written (327239 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T00:02:32.087Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T00:02:32.087Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327239 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T00:02:35.088Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-11-22T00:02:35.088Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-22T00:02:35.129Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 5
[2025-11-22T00:02:35.129Z] [BOT] Timestamp: 2025-11-22T00:02:35.129Z
[2025-11-22T00:02:37.139Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2306) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*