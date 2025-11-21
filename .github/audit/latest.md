# Discord Bot Execution Audit
**Timestamp:** 2025-11-21T09:02:22.693Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-21T09:01:55.763Z] ========================================
[2025-11-21T09:01:55.765Z] Discord Bot Execution Log
[2025-11-21T09:01:55.765Z] Environment: GitHub Actions
[2025-11-21T09:01:55.765Z] Node Version: v20.19.5
[2025-11-21T09:01:55.765Z] ========================================
[2025-11-21T09:01:55.765Z] Environment Variables Check:
[2025-11-21T09:01:55.765Z] DISCORD_TOKEN: ✅ Set
[2025-11-21T09:01:55.765Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-21T09:01:55.765Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-21T09:01:55.765Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-21T09:01:55.765Z] 
Multi-Channel Configuration:
[2025-11-21T09:01:55.765Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-21T09:01:55.765Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-21T09:01:55.765Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-21T09:01:55.765Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-21T09:01:55.766Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-21T09:01:55.766Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-21T09:01:55.766Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-21T09:01:55.766Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-21T09:01:55.766Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-21T09:01:55.766Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-21T09:01:55.766Z] 
Data Files Check:
[2025-11-21T09:01:55.766Z] .github/data/new_jobs.json: ✅ Exists (8 items, 48885 bytes)
[2025-11-21T09:01:55.768Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 326848 bytes)
[2025-11-21T09:01:55.768Z] 
========================================
[2025-11-21T09:01:55.768Z] Starting Enhanced Discord Bot...
[2025-11-21T09:01:55.768Z] ========================================
[2025-11-21T09:01:56.055Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-21T09:01:56.056Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-21T09:01:56.540Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-21T09:01:56.541Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-21T09:01:56.541Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-21T09:01:56.542Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 5 new jobs (3 already posted)...
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-21T09:01:56.544Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-11-21T09:01:56.545Z] [BOT] 📍 [ROUTING] "Software Analyst" @ Kimley-Horn
[2025-11-21T09:01:56.545Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T09:01:56.550Z] [BOT ERROR] (node:2628) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-21T09:01:56.811Z] [BOT] ✅ Created forum post: 🏢 Software Analyst @ Kimley-Horn in #💻・tech-jobs
[2025-11-21T09:01:56.812Z] [BOT] ✅ Industry: Software Analyst @ Kimley-Horn
[2025-11-21T09:01:58.313Z] [BOT] 🔍 DEBUG: Job "Software Analyst" | City: "Norcross" | State: "GA" | Location Channel ID: "1429..."
[2025-11-21T09:01:58.513Z] [BOT] ✅ Created forum post: 🏢 Software Analyst @ Kimley-Horn in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T09:02:00.014Z] [BOT] 📝 Marking as posted: JID_82a379c3...
[2025-11-21T09:02:00.014Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T09:02:00.014Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T09:02:00.015Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_19c8f267
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T09:02:00.016Z] [BOT] 🔍 DEBUG: Temp file written (326799 bytes)
[2025-11-21T09:02:00.016Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T09:02:00.016Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T09:02:00.017Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326799 bytes
[2025-11-21T09:02:00.017Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Data Analyst" @ ORG_b344d80e Voleon Group
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T09:02:00.175Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_b344d80e Voleon Group in #💻・tech-jobs
  ✅ Industry: Data Analyst @ ORG_b344d80e Voleon Group
[2025-11-21T09:02:01.676Z] [BOT] 🔍 DEBUG: Job "Data Analyst" | City: "Berkeley" | State: "CA" | Location Channel ID: "1429..."
[2025-11-21T09:02:01.899Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_b344d80e Voleon Group in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-21T09:02:03.399Z] [BOT] 📝 Marking as posted: JID_0de9ebf7-...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T09:02:03.400Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T09:02:03.400Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_cd163e60
[2025-11-21T09:02:03.400Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T09:02:03.401Z] [BOT] 🔍 DEBUG: Temp file written (326799 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T09:02:03.401Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T09:02:03.401Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326799 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T09:02:03.401Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Hebrew" @ ORG_f3ae3598
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T09:02:03.564Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Hebrew @ ORG_f3ae3598 in #💻・tech-jobs
  ✅ Industry: AI Data Specialist - Hebrew @ ORG_f3ae3598
[2025-11-21T09:02:05.065Z] [BOT] 🔍 DEBUG: Job "AI Data Specialist - Hebrew" | City: "Arizona" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-21T09:02:05.307Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Hebrew @ ORG_f3ae3598 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-21T09:02:06.809Z] [BOT] 📝 Marking as posted: JID_ccc89e7c...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T09:02:06.809Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T09:02:06.810Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_39da9d13
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T09:02:06.811Z] [BOT] 🔍 DEBUG: Temp file written (326800 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T09:02:06.811Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T09:02:06.811Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326800 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T09:02:06.812Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_39417f32 Allen
   Category: TECH (matched: "data")
[2025-11-21T09:02:06.812Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T09:02:07.050Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_39417f32 Allen in #💻・tech-jobs
[2025-11-21T09:02:07.051Z] [BOT] ✅ Industry: Data Scientist @ ORG_39417f32 Allen
[2025-11-21T09:02:08.552Z] [BOT] 🔍 DEBUG: Job "Data Scientist" | City: "San Diego" | State: "CA" | Location Channel ID: "1429..."
[2025-11-21T09:02:08.826Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_39417f32 Allen in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-21T09:02:10.328Z] [BOT] 📝 Marking as posted: JID_6312b0b9-bah_jobs-job-s...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T09:02:10.328Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T09:02:10.329Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_c52a5cf2
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T09:02:10.331Z] [BOT] 🔍 DEBUG: Temp file written (326801 bytes)
[2025-11-21T09:02:10.331Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T09:02:10.331Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T09:02:10.331Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326801 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T09:02:13.331Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-21T09:02:13.331Z] [BOT] 📍 [ROUTING] "Technical Services Intern" @ ORG_f231c4f6insRéalis
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-21T09:02:13.513Z] [BOT] ✅ Created forum post: 🏢 Technical Services Intern @ ORG_f231c4f6insRéalis in #🩺・healthcare-jobs
  ✅ Industry: Technical Services Intern @ ORG_f231c4f6insRéalis
[2025-11-21T09:02:15.014Z] [BOT] 🔍 DEBUG: Job "Technical Services Intern" | City: "Richmond" | State: "BC" | Location Channel ID: "1429..."
[2025-11-21T09:02:15.385Z] [BOT] ✅ Created forum post: 🏢 Technical Services Intern @ ORG_f231c4f6insRéalis in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-21T09:02:16.886Z] [BOT] 📝 Marking as posted: JID_e44d9808...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T09:02:16.886Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T09:02:16.887Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_7eabc837
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T09:02:16.888Z] [BOT] 🔍 DEBUG: Temp file written (326852 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T09:02:16.888Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T09:02:16.888Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326852 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T09:02:19.889Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-21T09:02:19.930Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 5
   Timestamp: 2025-11-21T09:02:19.929Z
[2025-11-21T09:02:21.939Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2628) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*