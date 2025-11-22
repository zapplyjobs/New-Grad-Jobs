# Discord Bot Execution Audit
**Timestamp:** 2025-11-22T01:51:15.790Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-22T01:50:48.386Z] ========================================
[2025-11-22T01:50:48.387Z] Discord Bot Execution Log
[2025-11-22T01:50:48.388Z] Environment: GitHub Actions
[2025-11-22T01:50:48.388Z] Node Version: v20.19.5
[2025-11-22T01:50:48.388Z] ========================================
[2025-11-22T01:50:48.388Z] Environment Variables Check:
[2025-11-22T01:50:48.388Z] DISCORD_TOKEN: ✅ Set
[2025-11-22T01:50:48.388Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-22T01:50:48.388Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-22T01:50:48.388Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-22T01:50:48.388Z] 
Multi-Channel Configuration:
[2025-11-22T01:50:48.388Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-22T01:50:48.388Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-22T01:50:48.388Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-22T01:50:48.388Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-22T01:50:48.388Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-22T01:50:48.388Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-22T01:50:48.388Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-22T01:50:48.388Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-22T01:50:48.388Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-22T01:50:48.388Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-22T01:50:48.388Z] 
Data Files Check:
[2025-11-22T01:50:48.389Z] .github/data/new_jobs.json: ✅ Exists (7 items, 37813 bytes)
[2025-11-22T01:50:48.391Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327379 bytes)
[2025-11-22T01:50:48.391Z] 
========================================
[2025-11-22T01:50:48.391Z] Starting Enhanced Discord Bot...
[2025-11-22T01:50:48.391Z] ========================================
[2025-11-22T01:50:48.673Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-22T01:50:48.674Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-22T01:50:49.238Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-22T01:50:49.239Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6389278a at Amentum
[2025-11-22T01:50:49.239Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6389278a at Amentum
[2025-11-22T01:50:49.239Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-22T01:50:49.240Z] [BOT] 📬 Found 4 new jobs (3 already posted)...
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-22T01:50:49.243Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-22T01:50:49.243Z] [BOT] 📍 [ROUTING] "Associate Data Scientist - Marketing Analytics Capabilities" @ ORG_67c29814
[2025-11-22T01:50:49.243Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-22T01:50:49.248Z] [BOT ERROR] (node:2772) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-22T01:50:49.485Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist - Marketing Analytics Capabilities @ ORG_67c29814 in #💻・tech-jobs
[2025-11-22T01:50:49.486Z] [BOT] ✅ Industry: Associate Data Scientist - Marketing Analytics Capabilities @ ORG_67c29814
[2025-11-22T01:50:50.988Z] [BOT] 🔍 DEBUG: Job "Associate Data Scientist - Marketing Analytics Capabilities" | City: "Boston" | State: "MA" | Location Channel ID: "1429..."
[2025-11-22T01:50:51.145Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist - Marketing Analytics Capabilities @ ORG_67c29814 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-22T01:50:52.646Z] [BOT] 📝 Marking as posted: JID_a998c19c-humana_exte...
[2025-11-22T01:50:52.646Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T01:50:52.646Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T01:50:52.646Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e52a52a2
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T01:50:52.648Z] [BOT] 🔍 DEBUG: Temp file written (327429 bytes)
[2025-11-22T01:50:52.648Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T01:50:52.675Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T01:50:52.675Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327429 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T01:50:52.675Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_fee50aac
   Category: TECH (matched: "software")
[2025-11-22T01:50:52.675Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-22T01:50:52.815Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_fee50aac in #💻・tech-jobs
[2025-11-22T01:50:52.816Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_fee50aac
[2025-11-22T01:50:54.316Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "Colorado Springs" | State: "CO" | Location Channel ID: "1429..."
[2025-11-22T01:50:54.646Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_fee50aac in #💻・remote-usa
[2025-11-22T01:50:54.646Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-22T01:50:56.147Z] [BOT] 📝 Marking as posted: JID_3b6de877-kbr_careers-jo...
[2025-11-22T01:50:56.147Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T01:50:56.147Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T01:50:56.148Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_a454416e
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T01:50:56.149Z] [BOT] 🔍 DEBUG: Temp file written (327444 bytes)
[2025-11-22T01:50:56.149Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T01:50:56.149Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T01:50:56.149Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327444 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T01:50:59.150Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-11-22T01:50:59.150Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Cosmology - Spherex Galaxy Clusters" @ ORG_a867f63f National Laboratory
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-22T01:50:59.353Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Cosmology - Spherex Galaxy Clusters @ ORG_a867f63f National Laboratory in #📁・JID_e938df7b
[2025-11-22T01:50:59.353Z] [BOT] ✅ Industry: Postdoctoral Appointee - Cosmology - Spherex Galaxy Clusters @ ORG_a867f63f National Laboratory
[2025-11-22T01:51:00.854Z] [BOT] 🔍 DEBUG: Job "Postdoctoral Appointee - Cosmology - Spherex Galaxy Clusters" | City: "Woodridge" | State: "IL" | Location Channel ID: "1429..."
[2025-11-22T01:51:01.106Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Cosmology - Spherex Galaxy Clusters @ ORG_a867f63f National Laboratory in #🌆・chicago
[2025-11-22T01:51:01.106Z] [BOT] ✅ Location: 🌆・chicago
[2025-11-22T01:51:02.606Z] [BOT] 📝 Marking as posted: JID_ce2c0c1d-argonne_ca...
[2025-11-22T01:51:02.607Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T01:51:02.607Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T01:51:02.607Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_882ff974
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T01:51:02.609Z] [BOT] 🔍 DEBUG: Temp file written (327502 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T01:51:02.609Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T01:51:02.609Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327502 bytes
[2025-11-22T01:51:02.609Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-22T01:51:05.610Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-22T01:51:05.610Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate - Radiology" @ ORG_f5f75c9b U
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-22T01:51:06.847Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Radiology @ ORG_f5f75c9b U in #🩺・healthcare-jobs
[2025-11-22T01:51:06.847Z] [BOT] ✅ Industry: Postdoctoral Research Associate - Radiology @ ORG_f5f75c9b U
[2025-11-22T01:51:08.348Z] [BOT] 🔍 DEBUG: Job "Postdoctoral Research Associate - Radiology" | City: "St. Louis" | State: "MO" | Location Channel ID: "1429..."
[2025-11-22T01:51:08.541Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Radiology @ ORG_f5f75c9b U in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-22T01:51:10.042Z] [BOT] 📝 Marking as posted: JID_f4ebbc02...
[2025-11-22T01:51:10.042Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-22T01:51:10.043Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-22T01:51:10.043Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_a0e7515f
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-22T01:51:10.045Z] [BOT] 🔍 DEBUG: Temp file written (327572 bytes)
[2025-11-22T01:51:10.045Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-22T01:51:10.045Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-22T01:51:10.045Z] [BOT] 🔍 DEBUG: Verified file exists, size: 327572 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-22T01:51:13.045Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2025-11-22T01:51:13.046Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-22T01:51:13.086Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 4
[2025-11-22T01:51:13.087Z] [BOT] Timestamp: 2025-11-22T01:51:13.086Z
[2025-11-22T01:51:15.095Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2772) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*