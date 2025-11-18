# Discord Bot Execution Audit
**Timestamp:** 2025-11-18T16:22:50.257Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-18T16:22:32.999Z] ========================================
[2025-11-18T16:22:33.000Z] Discord Bot Execution Log
[2025-11-18T16:22:33.000Z] Environment: GitHub Actions
[2025-11-18T16:22:33.000Z] Node Version: v20.19.5
[2025-11-18T16:22:33.000Z] ========================================
[2025-11-18T16:22:33.000Z] Environment Variables Check:
[2025-11-18T16:22:33.000Z] DISCORD_TOKEN: ✅ Set
[2025-11-18T16:22:33.000Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-18T16:22:33.000Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-18T16:22:33.000Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-18T16:22:33.000Z] 
Multi-Channel Configuration:
[2025-11-18T16:22:33.001Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-18T16:22:33.001Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-18T16:22:33.001Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-18T16:22:33.001Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-18T16:22:33.001Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-18T16:22:33.001Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-18T16:22:33.001Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-18T16:22:33.001Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-18T16:22:33.001Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-18T16:22:33.001Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-18T16:22:33.001Z] 
Data Files Check:
[2025-11-18T16:22:33.001Z] .github/data/new_jobs.json: ✅ Exists (4 items, 17861 bytes)
[2025-11-18T16:22:33.003Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323585 bytes)
[2025-11-18T16:22:33.003Z] 
========================================
[2025-11-18T16:22:33.003Z] Starting Enhanced Discord Bot...
[2025-11-18T16:22:33.003Z] ========================================
[2025-11-18T16:22:33.283Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-18T16:22:33.283Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-18T16:22:34.055Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-18T16:22:34.056Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-18T16:22:34.056Z] [BOT] 📬 Found 3 new jobs (1 already posted)...
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-18T16:22:34.056Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-18T16:22:34.057Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_3b23e93b
[2025-11-18T16:22:34.057Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T16:22:34.061Z] [BOT ERROR] (node:2358) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-18T16:22:34.263Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_3b23e93b in #💻・tech-jobs
[2025-11-18T16:22:34.263Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_3b23e93b
[2025-11-18T16:22:35.765Z] [BOT] 🔍 DEBUG: Job "Junior Software Engineer" | City: "Remote in USA" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-18T16:22:35.979Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_3b23e93b in #💻・remote-usa
[2025-11-18T16:22:35.979Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-18T16:22:37.480Z] [BOT] 📝 Marking as posted: JID_de7da69c...
  🔍 DEBUG: Set size before add: 5000
[2025-11-18T16:22:37.481Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T16:22:37.481Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-18T16:22:37.481Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e4d7c16d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T16:22:37.483Z] [BOT] 🔍 DEBUG: Temp file written (323642 bytes)
[2025-11-18T16:22:37.483Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T16:22:37.483Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T16:22:37.483Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323642 bytes
[2025-11-18T16:22:37.484Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Software Engineer, IS&T Early Career" @ ORG_f223faa9
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T16:22:37.744Z] [BOT] ✅ Created forum post: 🍎 Software Engineer, IS&T Early Career @ ORG_f223faa9 in #💻・tech-jobs
[2025-11-18T16:22:37.744Z] [BOT] ✅ Industry: Software Engineer, IS&T Early Career @ ORG_f223faa9
[2025-11-18T16:22:39.243Z] [BOT] 🔍 DEBUG: Job "Software Engineer, IS&T Early Career" | City: "Sunnyvale" | State: "CA" | Location Channel ID: "1429..."
[2025-11-18T16:22:39.433Z] [BOT] ✅ Created forum post: 🍎 Software Engineer, IS&T Early Career @ ORG_f223faa9 in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2025-11-18T16:22:40.932Z] [BOT] 📝 Marking as posted: JID_153e06db...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-18T16:22:40.932Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T16:22:40.933Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_3992971c
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T16:22:40.934Z] [BOT] 🔍 DEBUG: Temp file written (323666 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T16:22:40.934Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T16:22:40.934Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323666 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T16:22:40.934Z] [BOT] 📍 [ROUTING] "Software Development" @ ORG_509c517e
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T16:22:41.194Z] [BOT] ✅ Created forum post: 📹 Software Development @ ORG_509c517e in #💻・tech-jobs
  ✅ Industry: Software Development @ ORG_509c517e
[2025-11-18T16:22:42.694Z] [BOT] 🔍 DEBUG: Job "Software Development" | City: "Remote in USA" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-18T16:22:42.869Z] [BOT] ✅ Created forum post: 📹 Software Development @ ORG_509c517e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-18T16:22:44.369Z] [BOT] 📝 Marking as posted: JID_1f52586d...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-18T16:22:44.369Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T16:22:44.370Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e09419ca
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T16:22:44.371Z] [BOT] 🔍 DEBUG: Temp file written (323706 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T16:22:44.372Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T16:22:44.372Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323706 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T16:22:47.373Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-18T16:22:47.414Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 3
   Timestamp: 2025-11-18T16:22:47.413Z
[2025-11-18T16:22:49.424Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2358) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*