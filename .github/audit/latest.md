# Discord Bot Execution Audit
**Timestamp:** 2025-11-21T08:02:30.450Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-21T08:01:56.682Z] ========================================
[2025-11-21T08:01:56.683Z] Discord Bot Execution Log
[2025-11-21T08:01:56.683Z] Environment: GitHub Actions
[2025-11-21T08:01:56.683Z] Node Version: v20.19.5
[2025-11-21T08:01:56.684Z] ========================================
[2025-11-21T08:01:56.684Z] Environment Variables Check:
[2025-11-21T08:01:56.684Z] DISCORD_TOKEN: ✅ Set
[2025-11-21T08:01:56.684Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-21T08:01:56.684Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-21T08:01:56.684Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-21T08:01:56.684Z] 
Multi-Channel Configuration:
[2025-11-21T08:01:56.684Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-21T08:01:56.684Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-21T08:01:56.684Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-21T08:01:56.684Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-21T08:01:56.684Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-21T08:01:56.684Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-21T08:01:56.684Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-21T08:01:56.684Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-21T08:01:56.684Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-21T08:01:56.684Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-21T08:01:56.684Z] 
Data Files Check:
[2025-11-21T08:01:56.685Z] .github/data/new_jobs.json: ✅ Exists (7 items, 26500 bytes)
[2025-11-21T08:01:56.687Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 326366 bytes)
[2025-11-21T08:01:56.687Z] 
========================================
[2025-11-21T08:01:56.687Z] Starting Enhanced Discord Bot...
[2025-11-21T08:01:56.687Z] ========================================
[2025-11-21T08:01:56.969Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-21T08:01:56.970Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-21T08:01:57.431Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-21T08:01:57.432Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-21T08:01:57.432Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-21T08:01:57.432Z] [BOT] 📬 Found 5 new jobs (2 already posted)...
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-21T08:01:57.435Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-11-21T08:01:57.436Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher" @ ORG_0aa5052d State University (LSU)
[2025-11-21T08:01:57.436Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1391...2941)
[2025-11-21T08:01:57.440Z] [BOT ERROR] (node:2586) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-21T08:01:57.689Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) in #💰・finance-jobs
[2025-11-21T08:01:57.689Z] [BOT] ✅ Industry: Postdoctoral Researcher @ ORG_0aa5052d State University (LSU)
[2025-11-21T08:01:59.190Z] [BOT] 🔍 DEBUG: Job "Postdoctoral Researcher" | City: "Baton Rouge" | State: "LA" | Location Channel ID: "1429..."
[2025-11-21T08:01:59.343Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
[2025-11-21T08:01:59.344Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-21T08:02:00.844Z] [BOT] 📝 Marking as posted: JID_bbdfa41b...
[2025-11-21T08:02:00.844Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T08:02:00.845Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T08:02:00.845Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_b774aa14
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T08:02:00.846Z] [BOT] 🔍 DEBUG: Temp file written (326405 bytes)
[2025-11-21T08:02:00.846Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T08:02:00.847Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T08:02:00.847Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326405 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T08:02:03.848Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-21T08:02:03.848Z] [BOT] 📍 [ROUTING] "Software Engineer - Associate" @ ORG_b146ae2a Mac
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T08:02:04.187Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Associate @ ORG_b146ae2a Mac in #💻・tech-jobs
[2025-11-21T08:02:04.187Z] [BOT] ✅ Industry: Software Engineer - Associate @ ORG_b146ae2a Mac
[2025-11-21T08:02:05.688Z] [BOT] 🔍 DEBUG: Job "Software Engineer - Associate" | City: "McLean" | State: "VA" | Location Channel ID: "1429..."
[2025-11-21T08:02:05.839Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Associate @ ORG_b146ae2a Mac in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T08:02:07.341Z] [BOT] 📝 Marking as posted: JID_84ecdfc2...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T08:02:07.341Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T08:02:07.341Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_902a2b34
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T08:02:07.342Z] [BOT] 🔍 DEBUG: Temp file written (326447 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T08:02:07.343Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T08:02:07.343Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326447 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T08:02:07.343Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_877b2190
   Category: TECH (matched: "software")
[2025-11-21T08:02:07.343Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T08:02:08.808Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_877b2190 in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_877b2190
[2025-11-21T08:02:10.309Z] [BOT] 🔍 DEBUG: Job "Associate Software Engineer" | City: "Austin" | State: "TX" | Location Channel ID: "1429..."
[2025-11-21T08:02:10.469Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_877b2190 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-21T08:02:11.970Z] [BOT] 📝 Marking as posted: JID_e696f85b
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T08:02:11.971Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T08:02:11.971Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_ad1f7b94
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T08:02:11.972Z] [BOT] 🔍 DEBUG: Temp file written (326420 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T08:02:11.973Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T08:02:11.973Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326420 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T08:02:14.973Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-11-21T08:02:14.973Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate - Ames National Laboratory" @ ORG_722b29f2 State University
   Category: MARKETING (matched: "sem")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-11-21T08:02:15.186Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Ames National Laboratory @ ORG_722b29f2 State University in #📣・marketing-jobs
  ✅ Industry: Postdoctoral Research Associate - Ames National Laboratory @ ORG_722b29f2 State University
[2025-11-21T08:02:16.687Z] [BOT] 🔍 DEBUG: Job "Postdoctoral Research Associate - Ames National Laboratory" | City: "Ames" | State: "IA" | Location Channel ID: "1429..."
[2025-11-21T08:02:16.869Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Ames National Laboratory @ ORG_722b29f2 State University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T08:02:18.371Z] [BOT] 📝 Marking as posted: JID_3121493b-...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T08:02:18.371Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T08:02:18.371Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T08:02:18.371Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_609bc880
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T08:02:18.372Z] [BOT] 🔍 DEBUG: Temp file written (326481 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T08:02:18.373Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T08:02:18.373Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326481 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T08:02:21.373Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-21T08:02:21.373Z] [BOT] 📍 [ROUTING] "Research Scientist 1" @ ORG_722b29f2 State University
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-21T08:02:21.502Z] [BOT] ✅ Created forum post: 🏢 Research Scientist 1 @ ORG_722b29f2 State University in #🩺・healthcare-jobs
  ✅ Industry: Research Scientist 1 @ ORG_722b29f2 State University
[2025-11-21T08:02:23.002Z] [BOT] 🔍 DEBUG: Job "Research Scientist 1" | City: "Ames" | State: "IA" | Location Channel ID: "1429..."
[2025-11-21T08:02:23.298Z] [BOT] ✅ Created forum post: 🏢 Research Scientist 1 @ ORG_722b29f2 State University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T08:02:24.799Z] [BOT] 📝 Marking as posted: JID_3121493b-...
[2025-11-21T08:02:24.799Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T08:02:24.800Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T08:02:24.800Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_84d67e94
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T08:02:24.801Z] [BOT] 🔍 DEBUG: Temp file written (326502 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T08:02:24.802Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T08:02:24.802Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326502 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T08:02:27.802Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-11-21T08:02:27.802Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-21T08:02:27.841Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 5
[2025-11-21T08:02:27.841Z] [BOT] Timestamp: 2025-11-21T08:02:27.840Z
[2025-11-21T08:02:29.851Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2586) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*