# Discord Bot Execution Audit
**Timestamp:** 2025-11-21T00:03:29.171Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-21T00:02:41.349Z] ========================================
[2025-11-21T00:02:41.350Z] Discord Bot Execution Log
[2025-11-21T00:02:41.350Z] Environment: GitHub Actions
[2025-11-21T00:02:41.350Z] Node Version: v20.19.5
[2025-11-21T00:02:41.350Z] ========================================
[2025-11-21T00:02:41.350Z] Environment Variables Check:
[2025-11-21T00:02:41.350Z] DISCORD_TOKEN: ✅ Set
[2025-11-21T00:02:41.350Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-21T00:02:41.350Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-21T00:02:41.350Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-21T00:02:41.350Z] 
Multi-Channel Configuration:
[2025-11-21T00:02:41.350Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-21T00:02:41.350Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-21T00:02:41.350Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-21T00:02:41.350Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-21T00:02:41.350Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-21T00:02:41.350Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-21T00:02:41.350Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-21T00:02:41.351Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-21T00:02:41.351Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-21T00:02:41.351Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-21T00:02:41.351Z] 
Data Files Check:
[2025-11-21T00:02:41.351Z] .github/data/new_jobs.json: ✅ Exists (11 items, 52843 bytes)
[2025-11-21T00:02:41.353Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 325244 bytes)
[2025-11-21T00:02:41.353Z] 
========================================
[2025-11-21T00:02:41.353Z] Starting Enhanced Discord Bot...
[2025-11-21T00:02:41.353Z] ========================================
[2025-11-21T00:02:41.585Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-21T00:02:41.585Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-21T00:02:42.428Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-21T00:02:42.430Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-21T00:02:42.430Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 9 new jobs (2 already posted)...
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-21T00:02:42.434Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-11-21T00:02:42.434Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Backend - New Grad" @ ORG_c2a520b8
[2025-11-21T00:02:42.434Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T00:02:42.438Z] [BOT ERROR] (node:2899) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-21T00:02:42.780Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Backend - New Grad @ ORG_c2a520b8 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Backend - New Grad @ ORG_c2a520b8
[2025-11-21T00:02:44.281Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1 - Backend - New Grad" | City: "Remote in USA" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T00:02:44.751Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Backend - New Grad @ ORG_c2a520b8 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-21T00:02:46.251Z] [BOT] 📝 Marking as posted: JID_1c3b8e4a...
[2025-11-21T00:02:46.251Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T00:02:46.251Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T00:02:46.252Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_97a11bb0
[2025-11-21T00:02:46.252Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T00:02:46.253Z] [BOT] 🔍 DEBUG: Temp file written (325233 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T00:02:46.254Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T00:02:46.254Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325233 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T00:02:46.254Z] [BOT] 📍 [ROUTING] "Data Center Network Modeling Technician 3" @ ORG_8d0003a5
   Category: TECH (matched: "data")
[2025-11-21T00:02:46.254Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T00:02:46.478Z] [BOT] ✅ Created forum post: 🏢 Data Center Network Modeling Technician 3 @ ORG_8d0003a5 in #💻・tech-jobs
[2025-11-21T00:02:46.478Z] [BOT] ✅ Industry: Data Center Network Modeling Technician 3 @ ORG_8d0003a5
[2025-11-21T00:02:47.979Z] [BOT] 🔍 DEBUG: Job "Data Center Network Modeling Technician 3" | City: "Boulder" | State: "CO" | Location Channel ID: "1429..."
[2025-11-21T00:02:48.179Z] [BOT] ✅ Created forum post: 🏢 Data Center Network Modeling Technician 3 @ ORG_8d0003a5 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T00:02:49.680Z] [BOT] 📝 Marking as posted: JID_32e11206...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T00:02:49.680Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T00:02:49.680Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_82978e16
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T00:02:49.681Z] [BOT] 🔍 DEBUG: Temp file written (325310 bytes)
[2025-11-21T00:02:49.681Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T00:02:49.681Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T00:02:49.681Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325310 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T00:02:49.681Z] [BOT] 📍 [ROUTING] "Associate Software Implementation Analyst" @ ORG_98e7f245
   Category: TECH (matched: "software")
[2025-11-21T00:02:49.682Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T00:02:50.235Z] [BOT] ✅ Created forum post: 🏢 Associate Software Implementation Analyst @ ORG_98e7f245 in #💻・tech-jobs
  ✅ Industry: Associate Software Implementation Analyst @ ORG_98e7f245
[2025-11-21T00:02:51.736Z] [BOT] 🔍 DEBUG: Job "Associate Software Implementation Analyst" | City: "Kingwood" | State: "Houston" | Location Channel ID: null
[2025-11-21T00:02:51.737Z] [BOT] 📝 Marking as posted: JID_238509e8...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T00:02:51.737Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T00:02:51.737Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_541c9527
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T00:02:51.738Z] [BOT] 🔍 DEBUG: Temp file written (325376 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T00:02:51.738Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T00:02:51.738Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325376 bytes
[2025-11-21T00:02:51.738Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-21T00:02:51.739Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Nosql - Javascript','Python','Aws" @ ORG_b344d80e Travelers Companies
[2025-11-21T00:02:51.739Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T00:02:52.064Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Nosql - Javascript','Python','Aws @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Nosql - Javascript','Python','Aws @ ORG_b344d80e Travelers Companies
[2025-11-21T00:02:53.565Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1 - Nosql - Javascript','Python','Aws" | City: "Sparks" | State: "MD" | Location Channel ID: "1429..."
[2025-11-21T00:02:53.764Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Nosql - Javascript','Python','Aws @ ORG_b344d80e Travelers Companies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T00:02:55.266Z] [BOT] 📝 Marking as posted: JID_77f74e98...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T00:02:55.266Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T00:02:55.266Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T00:02:55.266Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_9e112ef9
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T00:02:55.268Z] [BOT] 🔍 DEBUG: Temp file written (325440 bytes)
[2025-11-21T00:02:55.268Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T00:02:55.268Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T00:02:55.268Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325440 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T00:02:58.270Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
📍 [ROUTING] "Application Engineer - Drilling Solutions" @ ORG_dd730736
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2025-11-21T00:02:59.025Z] [BOT] ✅ Created forum post: 🏢 Application Engineer - Drilling Solutions @ ORG_dd730736 in #💲・sales-jobs
  ✅ Industry: Application Engineer - Drilling Solutions @ ORG_dd730736
[2025-11-21T00:03:00.525Z] [BOT] 🔍 DEBUG: Job "Application Engineer - Drilling Solutions" | City: "Casper" | State: "WY" | Location Channel ID: "1429..."
[2025-11-21T00:03:00.728Z] [BOT] ✅ Created forum post: 🏢 Application Engineer - Drilling Solutions @ ORG_dd730736 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T00:03:02.229Z] [BOT] 📝 Marking as posted: JID_c1feddfa...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T00:03:02.229Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T00:03:02.229Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_c1720066
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T00:03:02.230Z] [BOT] 🔍 DEBUG: Temp file written (325469 bytes)
[2025-11-21T00:03:02.231Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T00:03:02.231Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T00:03:02.231Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325469 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T00:03:05.232Z] [BOT] 📌 Posting 3 jobs to #🩺・healthcare-jobs
[2025-11-21T00:03:05.232Z] [BOT] 📍 [ROUTING] "Health Informatist Associate" @ ORG_a52ace42ina Health
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-21T00:03:05.487Z] [BOT] ✅ Created forum post: 🏢 Health Informatist Associate @ ORG_a52ace42ina Health in #🩺・healthcare-jobs
  ✅ Industry: Health Informatist Associate @ ORG_a52ace42ina Health
[2025-11-21T00:03:06.989Z] [BOT] 🔍 DEBUG: Job "Health Informatist Associate" | City: "Minneapolis" | State: "MN" | Location Channel ID: "1429..."
[2025-11-21T00:03:07.628Z] [BOT] ✅ Created forum post: 🏢 Health Informatist Associate @ ORG_a52ace42ina Health in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-21T00:03:09.130Z] [BOT] 📝 Marking as posted: JID_2821f123...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T00:03:09.130Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T00:03:09.130Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T00:03:09.130Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_40e2d118
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T00:03:09.132Z] [BOT] 🔍 DEBUG: Temp file written (325509 bytes)
[2025-11-21T00:03:09.132Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T00:03:09.132Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T00:03:09.132Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325509 bytes
[2025-11-21T00:03:09.132Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-21T00:03:09.132Z] [BOT] 📍 [ROUTING] "Research Analyst" @ ORG_9d38443e of Chicago
[2025-11-21T00:03:09.132Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-21T00:03:09.709Z] [BOT] ✅ Created forum post: 🏢 Research Analyst @ ORG_9d38443e of Chicago in #🩺・healthcare-jobs
  ✅ Industry: Research Analyst @ ORG_9d38443e of Chicago
[2025-11-21T00:03:11.211Z] [BOT] 🔍 DEBUG: Job "Research Analyst" | City: "Chicago" | State: "IL" | Location Channel ID: "1429..."
[2025-11-21T00:03:11.490Z] [BOT] ✅ Created forum post: 🏢 Research Analyst @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-21T00:03:12.992Z] [BOT] 📝 Marking as posted: JID_96a99c4b-...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T00:03:12.992Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T00:03:12.992Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T00:03:12.992Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_7bbf2017
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T00:03:12.993Z] [BOT] 🔍 DEBUG: Temp file written (325539 bytes)
[2025-11-21T00:03:12.994Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T00:03:12.994Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T00:03:12.994Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325539 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T00:03:12.994Z] [BOT] 📍 [ROUTING] "Graduate Assistant" @ ORG_9d38443e of Maryland - College Park
[2025-11-21T00:03:12.994Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-21T00:03:13.179Z] [BOT] ✅ Created forum post: 🏢 Graduate Assistant @ ORG_9d38443e of Maryland - College Park in #🩺・healthcare-jobs
  ✅ Industry: Graduate Assistant @ ORG_9d38443e of Maryland - College Park
[2025-11-21T00:03:14.680Z] [BOT] 🔍 DEBUG: Job "Graduate Assistant" | City: "Hyattsville" | State: "MD" | Location Channel ID: "1429..."
[2025-11-21T00:03:14.873Z] [BOT] ✅ Created forum post: 🏢 Graduate Assistant @ ORG_9d38443e of Maryland - College Park in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T00:03:16.375Z] [BOT] 📝 Marking as posted: JID_dc633da9...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T00:03:16.375Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T00:03:16.375Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_9529d768
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T00:03:16.377Z] [BOT] 🔍 DEBUG: Temp file written (325589 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T00:03:16.377Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T00:03:16.377Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325589 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T00:03:19.377Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
📍 [ROUTING] "Leadership Program - Business Systems Analyst" @ ORG_ac67699e
   Category: MARKETING (matched: "growth")
[2025-11-21T00:03:19.378Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2025-11-21T00:03:19.643Z] [BOT] ✅ Created forum post: 🏢 Leadership Program - Business Systems Analyst @ ORG_ac67699e in #📣・marketing-jobs
  ✅ Industry: Leadership Program - Business Systems Analyst @ ORG_ac67699e
[2025-11-21T00:03:21.144Z] [BOT] 🔍 DEBUG: Job "Leadership Program - Business Systems Analyst" | City: "Atlanta" | State: "GA" | Location Channel ID: "1429..."
[2025-11-21T00:03:21.491Z] [BOT] ✅ Created forum post: 🏢 Leadership Program - Business Systems Analyst @ ORG_ac67699e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T00:03:22.993Z] [BOT] 📝 Marking as posted: JID_9714a2c1...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T00:03:22.993Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T00:03:22.993Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_635f5cb2
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T00:03:22.995Z] [BOT] 🔍 DEBUG: Temp file written (325642 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T00:03:22.995Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T00:03:22.995Z] [BOT] 🔍 DEBUG: Verified file exists, size: 325642 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T00:03:25.996Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-21T00:03:26.036Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 9
   Timestamp: 2025-11-21T00:03:26.036Z
[2025-11-21T00:03:28.042Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2899) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*