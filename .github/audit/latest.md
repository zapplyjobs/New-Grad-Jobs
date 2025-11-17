# Discord Bot Execution Audit
**Timestamp:** 2025-11-17T17:35:45.457Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-17T17:35:23.906Z] ========================================
[2025-11-17T17:35:23.907Z] Discord Bot Execution Log
[2025-11-17T17:35:23.907Z] Environment: GitHub Actions
[2025-11-17T17:35:23.907Z] Node Version: v20.19.5
[2025-11-17T17:35:23.907Z] ========================================
[2025-11-17T17:35:23.907Z] Environment Variables Check:
[2025-11-17T17:35:23.907Z] DISCORD_TOKEN: ✅ Set
[2025-11-17T17:35:23.907Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-17T17:35:23.907Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-17T17:35:23.908Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-17T17:35:23.908Z] 
Multi-Channel Configuration:
[2025-11-17T17:35:23.908Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-17T17:35:23.908Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-17T17:35:23.908Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-17T17:35:23.908Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-17T17:35:23.908Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-17T17:35:23.908Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-17T17:35:23.908Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-17T17:35:23.908Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-17T17:35:23.908Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-17T17:35:23.908Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-17T17:35:23.908Z] 
Data Files Check:
[2025-11-17T17:35:23.908Z] .github/data/new_jobs.json: ✅ Exists (4 items, 20130 bytes)
[2025-11-17T17:35:23.910Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 322560 bytes)
[2025-11-17T17:35:23.910Z] 
========================================
[2025-11-17T17:35:23.910Z] Starting Enhanced Discord Bot...
[2025-11-17T17:35:23.910Z] ========================================
[2025-11-17T17:35:24.194Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-17T17:35:24.195Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-17T17:35:24.905Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-17T17:35:24.906Z] [BOT] 📬 Found 4 new jobs (0 already posted)...
[2025-11-17T17:35:24.906Z] [BOT] 📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-17T17:35:24.909Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-17T17:35:24.909Z] [BOT] 📍 [ROUTING] "Senior Analyst - Application Development and Maintenance" @ ORG_be3702e3inal Health
[2025-11-17T17:35:24.910Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-17T17:35:24.914Z] [BOT ERROR] (node:2488) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-17T17:35:25.061Z] [BOT] ✅ Created forum post: 🏢 Senior Analyst - Application Development and Maintenance @ ORG_be3702e3inal Health in #🩺・healthcare-jobs
[2025-11-17T17:35:25.061Z] [BOT] ✅ Industry: Senior Analyst - Application Development and Maintenance @ ORG_be3702e3inal Health
[2025-11-17T17:35:26.563Z] [BOT] 🔍 DEBUG: Job "Senior Analyst - Application Development and Maintenance" | City: "Indiana" | State: "Locations" | Location Channel ID: null
[2025-11-17T17:35:26.563Z] [BOT] 📝 Marking as posted: JID_817db28e...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-17T17:35:26.563Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-17T17:35:26.564Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-17T17:35:26.564Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_82e01ac2
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-17T17:35:26.565Z] [BOT] 🔍 DEBUG: Temp file written (322626 bytes)
[2025-11-17T17:35:26.565Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-17T17:35:26.566Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-17T17:35:26.566Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322626 bytes
[2025-11-17T17:35:26.566Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-17T17:35:29.567Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-17T17:35:29.568Z] [BOT] 📍 [ROUTING] "Data Scientist 1 - Media Mix Modeling" @ ORG_dc008d0e Bros.
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-17T17:35:29.807Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 - Media Mix Modeling @ ORG_dc008d0e Bros. in #💻・tech-jobs
  ✅ Industry: Data Scientist 1 - Media Mix Modeling @ ORG_dc008d0e Bros.
[2025-11-17T17:35:31.307Z] [BOT] 🔍 DEBUG: Job "Data Scientist 1 - Media Mix Modeling" | City: "Atlanta" | State: "GA" | Location Channel ID: "1429..."
[2025-11-17T17:35:31.470Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 - Media Mix Modeling @ ORG_dc008d0e Bros. in #💻・remote-usa
[2025-11-17T17:35:31.470Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-17T17:35:32.970Z] [BOT] 📝 Marking as posted: JID_0975c4ee-...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-17T17:35:32.971Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_7d359a44
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-17T17:35:32.972Z] [BOT] 🔍 DEBUG: Temp file written (322705 bytes)
[2025-11-17T17:35:32.972Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-17T17:35:32.973Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-17T17:35:32.973Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322705 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-17T17:35:32.973Z] [BOT] 📍 [ROUTING] "2026 Future Technical Leaders - Ftl - Engineering and Sciences','E&S','Engineer" @ ORG_f3f2248d Grumman
[2025-11-17T17:35:32.973Z] [BOT] Category: TECH (matched: "engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-17T17:35:33.276Z] [BOT] ✅ Created forum post: 🏢 2026 Future Technical Leaders - Ftl - Engineering and Sciences','E&S','Engineer @ ORG_f3f2248d Grumma in #💻・tech-jobs
[2025-11-17T17:35:33.277Z] [BOT] ✅ Industry: 2026 Future Technical Leaders - Ftl - Engineering and Sciences','E&S','Engineer @ ORG_f3f2248d Grumman
[2025-11-17T17:35:34.778Z] [BOT] 🔍 DEBUG: Job "2026 Future Technical Leaders - Ftl - Engineering and Sciences','E&S','Engineer" | City: "Halethorpe" | State: "MD" | Location Channel ID: "1429..."
[2025-11-17T17:35:34.972Z] [BOT] ✅ Created forum post: 🏢 2026 Future Technical Leaders - Ftl - Engineering and Sciences','E&S','Engineer @ ORG_f3f2248d Grumma in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-17T17:35:36.473Z] [BOT] 📝 Marking as posted: JID_e3128470-northrop_grumm...
[2025-11-17T17:35:36.473Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-17T17:35:36.474Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_edfe0568
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-17T17:35:36.475Z] [BOT] 🔍 DEBUG: Temp file written (322831 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-17T17:35:36.476Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-17T17:35:36.476Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322831 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-17T17:35:36.476Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer" @ ORG_cff1e0b2
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-17T17:35:36.620Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer @ ORG_cff1e0b2 in #💻・tech-jobs
  ✅ Industry: Graduate Software Engineer @ ORG_cff1e0b2
[2025-11-17T17:35:38.120Z] [BOT] 🔍 DEBUG: Job "Graduate Software Engineer" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-17T17:35:38.296Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer @ ORG_cff1e0b2 in #🗽・new-york
[2025-11-17T17:35:38.296Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-17T17:35:39.797Z] [BOT] 📝 Marking as posted: JID_de8d10fa...
[2025-11-17T17:35:39.798Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-17T17:35:39.798Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-17T17:35:39.798Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_47036e45
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-17T17:35:39.800Z] [BOT] 🔍 DEBUG: Temp file written (322839 bytes)
[2025-11-17T17:35:39.800Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-17T17:35:39.800Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-17T17:35:39.800Z] [BOT] 🔍 DEBUG: Verified file exists, size: 322839 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-17T17:35:42.801Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2025-11-17T17:35:42.801Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-17T17:35:42.841Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 4
   Timestamp: 2025-11-17T17:35:42.840Z
[2025-11-17T17:35:44.851Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2488) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*