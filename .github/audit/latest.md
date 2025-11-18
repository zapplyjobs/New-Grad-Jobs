# Discord Bot Execution Audit
**Timestamp:** 2025-11-18T00:02:38.283Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-18T00:02:13.574Z] ========================================
[2025-11-18T00:02:13.576Z] Discord Bot Execution Log
[2025-11-18T00:02:13.576Z] Environment: GitHub Actions
[2025-11-18T00:02:13.576Z] Node Version: v20.19.5
[2025-11-18T00:02:13.576Z] ========================================
[2025-11-18T00:02:13.576Z] Environment Variables Check:
[2025-11-18T00:02:13.576Z] DISCORD_TOKEN: ✅ Set
[2025-11-18T00:02:13.576Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-18T00:02:13.576Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-18T00:02:13.576Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-18T00:02:13.576Z] 
Multi-Channel Configuration:
[2025-11-18T00:02:13.576Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-18T00:02:13.576Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-18T00:02:13.576Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-18T00:02:13.576Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-18T00:02:13.576Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-18T00:02:13.576Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-18T00:02:13.576Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-18T00:02:13.576Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-18T00:02:13.576Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-18T00:02:13.576Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-18T00:02:13.577Z] 
Data Files Check:
[2025-11-18T00:02:13.577Z] .github/data/new_jobs.json: ✅ Exists (5 items, 26767 bytes)
[2025-11-18T00:02:13.579Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323042 bytes)
[2025-11-18T00:02:13.579Z] 
========================================
[2025-11-18T00:02:13.579Z] Starting Enhanced Discord Bot...
[2025-11-18T00:02:13.579Z] ========================================
[2025-11-18T00:02:13.850Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-18T00:02:13.850Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-18T00:02:15.073Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-18T00:02:15.073Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-18T00:02:15.074Z] [BOT] 📬 Found 4 new jobs (1 already posted)...
[2025-11-18T00:02:15.074Z] [BOT] 📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-18T00:02:15.076Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-11-18T00:02:15.076Z] [BOT] 📍 [ROUTING] "Associate – Amateur Scouting" @ ORG_2bc58fcc League Baseball
[2025-11-18T00:02:15.076Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-11-18T00:02:15.081Z] [BOT ERROR] (node:2587) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-18T00:02:15.281Z] [BOT] ✅ Created forum post: 🏢 Associate – Amateur Scouting @ ORG_2bc58fcc League Baseball in #📣・marketing-jobs
  ✅ Industry: Associate – Amateur Scouting @ ORG_2bc58fcc League Baseball
[2025-11-18T00:02:16.783Z] [BOT] 🔍 DEBUG: Job "Associate – Amateur Scouting" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-18T00:02:17.021Z] [BOT] ✅ Created forum post: 🏢 Associate – Amateur Scouting @ ORG_2bc58fcc League Baseball in #🗽・new-york
[2025-11-18T00:02:17.021Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-18T00:02:18.521Z] [BOT] 📝 Marking as posted: JID_80a965d5-...
[2025-11-18T00:02:18.522Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T00:02:18.522Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-18T00:02:18.522Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_b585afdb
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T00:02:18.523Z] [BOT] 🔍 DEBUG: Temp file written (323070 bytes)
[2025-11-18T00:02:18.523Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T00:02:18.524Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T00:02:18.524Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323070 bytes
[2025-11-18T00:02:18.524Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-18T00:02:21.525Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-18T00:02:21.525Z] [BOT] 📍 [ROUTING] "Java Developer" @ ORG_cb1ad211 Club Alliance
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T00:02:21.769Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ ORG_cb1ad211 Club Alliance in #💻・tech-jobs
  ✅ Industry: Java Developer @ ORG_cb1ad211 Club Alliance
[2025-11-18T00:02:23.270Z] [BOT] 🔍 DEBUG: Job "Java Developer" | City: "Coppell" | State: "TX" | Location Channel ID: "1429..."
[2025-11-18T00:02:23.568Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ ORG_cb1ad211 Club Alliance in #🤠・austin
[2025-11-18T00:02:23.569Z] [BOT] ✅ Location: 🤠・austin
[2025-11-18T00:02:25.070Z] [BOT] 📝 Marking as posted: JID_cc1cc4a2...
[2025-11-18T00:02:25.070Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T00:02:25.070Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-18T00:02:25.070Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_1cc8e6b0
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T00:02:25.072Z] [BOT] 🔍 DEBUG: Temp file written (323110 bytes)
[2025-11-18T00:02:25.072Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T00:02:25.072Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T00:02:25.072Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323110 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T00:02:25.072Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_75f04b84
[2025-11-18T00:02:25.072Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T00:02:25.312Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_75f04b84 in #💻・tech-jobs
[2025-11-18T00:02:25.313Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_75f04b84
[2025-11-18T00:02:26.814Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "Aurora" | State: "CO" | Location Channel ID: "1429..."
[2025-11-18T00:02:27.031Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_75f04b84 in #🌆・chicago
[2025-11-18T00:02:27.031Z] [BOT] ✅ Location: 🌆・chicago
[2025-11-18T00:02:28.531Z] [BOT] 📝 Marking as posted: JID_6957dde4-rec_rtx_e...
[2025-11-18T00:02:28.531Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T00:02:28.532Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-18T00:02:28.532Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_56971a4c
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T00:02:28.533Z] [BOT] 🔍 DEBUG: Temp file written (323213 bytes)
[2025-11-18T00:02:28.533Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T00:02:28.533Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T00:02:28.534Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323213 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T00:02:28.534Z] [BOT] 📍 [ROUTING] "IT Software Engineer – Entry Level" @ ORG_8c28bf8a
[2025-11-18T00:02:28.534Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T00:02:28.768Z] [BOT] ✅ Created forum post: 🏢 IT Software Engineer – Entry Level @ ORG_8c28bf8a in #💻・tech-jobs
[2025-11-18T00:02:28.768Z] [BOT] ✅ Industry: IT Software Engineer – Entry Level @ ORG_8c28bf8a
[2025-11-18T00:02:30.269Z] [BOT] 🔍 DEBUG: Job "IT Software Engineer – Entry Level" | City: "Madison" | State: "WI" | Location Channel ID: "1429..."
[2025-11-18T00:02:30.484Z] [BOT] ✅ Created forum post: 🏢 IT Software Engineer – Entry Level @ ORG_8c28bf8a in #💻・remote-usa
[2025-11-18T00:02:30.484Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-18T00:02:31.985Z] [BOT] 📝 Marking as posted: JID_4d2125e0...
[2025-11-18T00:02:31.986Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T00:02:31.986Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-18T00:02:31.986Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_22e759eb
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T00:02:31.988Z] [BOT] 🔍 DEBUG: Temp file written (323234 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T00:02:31.988Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T00:02:31.988Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323234 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T00:02:34.989Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2025-11-18T00:02:34.989Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-18T00:02:35.029Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 4
   Timestamp: 2025-11-18T00:02:35.028Z
[2025-11-18T00:02:37.039Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2587) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*