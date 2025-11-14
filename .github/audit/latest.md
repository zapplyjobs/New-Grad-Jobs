# Discord Bot Execution Audit
**Timestamp:** 2025-11-14T16:39:49.156Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-14T16:39:14.309Z] ========================================
[2025-11-14T16:39:14.310Z] Discord Bot Execution Log
[2025-11-14T16:39:14.310Z] Environment: GitHub Actions
[2025-11-14T16:39:14.310Z] Node Version: v20.19.5
[2025-11-14T16:39:14.310Z] ========================================
[2025-11-14T16:39:14.310Z] Environment Variables Check:
[2025-11-14T16:39:14.310Z] DISCORD_TOKEN: ✅ Set
[2025-11-14T16:39:14.310Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-14T16:39:14.310Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-14T16:39:14.310Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-14T16:39:14.310Z] 
Multi-Channel Configuration:
[2025-11-14T16:39:14.310Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-14T16:39:14.311Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-14T16:39:14.311Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-14T16:39:14.311Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-14T16:39:14.311Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-14T16:39:14.311Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-14T16:39:14.311Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-14T16:39:14.311Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-14T16:39:14.311Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-14T16:39:14.311Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-14T16:39:14.311Z] 
Data Files Check:
[2025-11-14T16:39:14.311Z] .github/data/new_jobs.json: ✅ Exists (7 items, 39790 bytes)
[2025-11-14T16:39:14.313Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 317912 bytes)
[2025-11-14T16:39:14.313Z] 
========================================
[2025-11-14T16:39:14.313Z] Starting Enhanced Discord Bot...
[2025-11-14T16:39:14.313Z] ========================================
[2025-11-14T16:39:14.592Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-14T16:39:14.593Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-14T16:39:15.566Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-14T16:39:15.567Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-14T16:39:15.567Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 5 new jobs (2 already posted)...
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-14T16:39:15.568Z] [BOT] 📌 Posting 2 jobs to #🩺・healthcare-jobs
[2025-11-14T16:39:15.572Z] [BOT ERROR] (node:2617) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-14T16:39:15.765Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_fee50aac in #🩺・healthcare-jobs
  ✅ Industry: Junior Software Engineer @ ORG_fee50aac
[2025-11-14T16:39:17.266Z] [BOT] 🔍 DEBUG: Job "Junior Software Engineer" | City: "Huntsville" | State: "AL" | Location Channel ID: "1429..."
[2025-11-14T16:39:17.425Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_fee50aac in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T16:39:18.926Z] [BOT] 📝 Marking as posted: JID_3a7bd095-kbr_care...
[2025-11-14T16:39:18.926Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T16:39:18.927Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T16:39:18.927Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_b4098865
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T16:39:18.928Z] [BOT] 🔍 DEBUG: Temp file written (317933 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T16:39:18.928Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T16:39:18.929Z] [BOT] 🔍 DEBUG: Verified file exists, size: 317933 bytes
[2025-11-14T16:39:18.929Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-14T16:39:20.708Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_b344d80e Walt Disney Company in #🩺・healthcare-jobs
  ✅ Industry: Software Engineer I @ ORG_b344d80e Walt Disney Company
[2025-11-14T16:39:22.208Z] [BOT] 🔍 DEBUG: Job "Software Engineer I" | City: "Glendale" | State: "CA" | Location Channel ID: "1429..."
[2025-11-14T16:39:22.399Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_b344d80e Walt Disney Company in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-14T16:39:23.900Z] [BOT] 📝 Marking as posted: JID_106a7e57...
[2025-11-14T16:39:23.901Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T16:39:23.901Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T16:39:23.901Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_dc9f3dfe
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T16:39:23.902Z] [BOT] 🔍 DEBUG: Temp file written (317961 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T16:39:23.975Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T16:39:23.975Z] [BOT] 🔍 DEBUG: Verified file exists, size: 317961 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T16:39:26.977Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-14T16:39:27.380Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer - DST @ ORG_3aea8160 in #💻・tech-jobs
[2025-11-14T16:39:27.380Z] [BOT] ✅ Industry: Junior Software Engineer - DST @ ORG_3aea8160
[2025-11-14T16:39:28.881Z] [BOT] 🔍 DEBUG: Job "Junior Software Engineer - DST" | City: "Houston" | State: "TX" | Location Channel ID: "1429..."
[2025-11-14T16:39:29.096Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer - DST @ ORG_3aea8160 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-14T16:39:30.597Z] [BOT] 📝 Marking as posted: JID_1a95186f...
[2025-11-14T16:39:30.597Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T16:39:30.598Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T16:39:30.598Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_cc820b92
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T16:39:30.600Z] [BOT] 🔍 DEBUG: Temp file written (317942 bytes)
[2025-11-14T16:39:30.600Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T16:39:30.600Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T16:39:30.600Z] [BOT] 🔍 DEBUG: Verified file exists, size: 317942 bytes
[2025-11-14T16:39:30.600Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-14T16:39:33.601Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-11-14T16:39:33.798Z] [BOT] ✅ Created forum post: 🏢 Engineer I-Software @ ORG_230fe79b Technology in #💲・sales-jobs
[2025-11-14T16:39:33.798Z] [BOT] ✅ Industry: Engineer I-Software @ ORG_230fe79b Technology
[2025-11-14T16:39:35.299Z] [BOT] 🔍 DEBUG: Job "Engineer I-Software" | City: "Chandler" | State: "AZ" | Location Channel ID: "1429..."
[2025-11-14T16:39:35.605Z] [BOT] ✅ Created forum post: 🏢 Engineer I-Software @ ORG_230fe79b Technology in #💻・remote-usa
[2025-11-14T16:39:35.605Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-14T16:39:37.106Z] [BOT] 📝 Marking as posted: JID_bc35cfac-...
[2025-11-14T16:39:37.106Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T16:39:37.107Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T16:39:37.107Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_0dfaa9e3
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T16:39:37.108Z] [BOT] 🔍 DEBUG: Temp file written (317958 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T16:39:37.108Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T16:39:37.108Z] [BOT] 🔍 DEBUG: Verified file exists, size: 317958 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T16:39:40.109Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-11-14T16:39:40.295Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer , Retirement Strategies @ ORG_fb72c674 Financial in #💰・finance-jobs
[2025-11-14T16:39:40.296Z] [BOT] ✅ Industry: Associate Software Engineer , Retirement Strategies @ ORG_fb72c674 Financial
[2025-11-14T16:39:41.797Z] [BOT] 🔍 DEBUG: Job "Associate Software Engineer , Retirement Strategies" | City: "Newark" | State: "NJ" | Location Channel ID: "1429..."
[2025-11-14T16:39:41.953Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer , Retirement Strategies @ ORG_fb72c674 Financial in #🗽・new-york
[2025-11-14T16:39:41.953Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-14T16:39:43.453Z] [BOT] 📝 Marking as posted: JID_83590da1-...
[2025-11-14T16:39:43.453Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T16:39:43.454Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T16:39:43.454Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_d2d04716
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T16:39:43.456Z] [BOT] 🔍 DEBUG: Temp file written (318032 bytes)
[2025-11-14T16:39:43.456Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T16:39:43.456Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T16:39:43.456Z] [BOT] 🔍 DEBUG: Verified file exists, size: 318032 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T16:39:46.457Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-11-14T16:39:46.457Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-14T16:39:48.468Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2617) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*