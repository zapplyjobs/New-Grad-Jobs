# Discord Bot Execution Audit
**Timestamp:** 2025-11-21T08:40:43.150Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-21T08:40:03.450Z] ========================================
[2025-11-21T08:40:03.452Z] Discord Bot Execution Log
[2025-11-21T08:40:03.452Z] Environment: GitHub Actions
[2025-11-21T08:40:03.452Z] Node Version: v20.19.5
[2025-11-21T08:40:03.452Z] ========================================
[2025-11-21T08:40:03.452Z] Environment Variables Check:
[2025-11-21T08:40:03.452Z] DISCORD_TOKEN: ✅ Set
[2025-11-21T08:40:03.452Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-21T08:40:03.452Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-21T08:40:03.452Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-21T08:40:03.452Z] 
Multi-Channel Configuration:
[2025-11-21T08:40:03.452Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-21T08:40:03.452Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-21T08:40:03.452Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-21T08:40:03.452Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-21T08:40:03.453Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-21T08:40:03.453Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-21T08:40:03.453Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-21T08:40:03.453Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-21T08:40:03.453Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-21T08:40:03.453Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-21T08:40:03.453Z] 
Data Files Check:
[2025-11-21T08:40:03.453Z] .github/data/new_jobs.json: ✅ Exists (11 items, 52513 bytes)
[2025-11-21T08:40:03.455Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 326502 bytes)
[2025-11-21T08:40:03.455Z] 
========================================
[2025-11-21T08:40:03.455Z] Starting Enhanced Discord Bot...
[2025-11-21T08:40:03.455Z] ========================================
[2025-11-21T08:40:03.745Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-21T08:40:03.745Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-21T08:40:04.726Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-21T08:40:04.728Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-21T08:40:04.728Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-21T08:40:04.728Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 8 new jobs (3 already posted)...
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-21T08:40:04.731Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-11-21T08:40:04.732Z] [BOT] 📍 [ROUTING] "Engineer 1-Device - Semiconductor Modeling Test & Analysis" @ ORG_230fe79b Technology
[2025-11-21T08:40:04.732Z] [BOT] Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2025-11-21T08:40:04.736Z] [BOT ERROR] (node:2768) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-21T08:40:05.415Z] [BOT] ✅ Created forum post: 🏢 Engineer 1-Device - Semiconductor Modeling Test & Analysis @ ORG_230fe79b Technology in #💲・sales-jobs
  ✅ Industry: Engineer 1-Device - Semiconductor Modeling Test & Analysis @ ORG_230fe79b Technology
[2025-11-21T08:40:06.918Z] [BOT] 🔍 DEBUG: Job "Engineer 1-Device - Semiconductor Modeling Test & Analysis" | City: "Chandler" | State: "AZ" | Location Channel ID: "1429..."
[2025-11-21T08:40:07.100Z] [BOT] ✅ Created forum post: 🏢 Engineer 1-Device - Semiconductor Modeling Test & Analysis @ ORG_230fe79b Technology in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T08:40:08.601Z] [BOT] 📝 Marking as posted: JID_c9fc11bf...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T08:40:08.601Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T08:40:08.602Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_04803835
[2025-11-21T08:40:08.602Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T08:40:08.603Z] [BOT] 🔍 DEBUG: Temp file written (326571 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T08:40:08.604Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T08:40:08.604Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326571 bytes
[2025-11-21T08:40:08.604Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-21T08:40:11.604Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-11-21T08:40:11.604Z] [BOT] 📍 [ROUTING] "Software Engineer - Cloudworks - Skillbridge" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T08:40:12.011Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Cloudworks - Skillbridge @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Software Engineer - Cloudworks - Skillbridge @ ORG_f3f2248d Grumman
[2025-11-21T08:40:13.513Z] [BOT] 🔍 DEBUG: Job "Software Engineer - Cloudworks - Skillbridge" | City: "Wright-Patterson AFB" | State: "OH" | Location Channel ID: "1429..."
[2025-11-21T08:40:13.711Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Cloudworks - Skillbridge @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T08:40:15.212Z] [BOT] 📝 Marking as posted: JID_e3128470-northrop_grumm...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T08:40:15.212Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T08:40:15.213Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T08:40:15.213Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_84ae4480
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T08:40:15.214Z] [BOT] 🔍 DEBUG: Temp file written (326674 bytes)
[2025-11-21T08:40:15.214Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T08:40:15.214Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T08:40:15.215Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326674 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T08:40:15.215Z] [BOT] 📍 [ROUTING] "AI/ML Engineer - Analyst - AI Labs" @ ORG_86a62f4a
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T08:40:15.504Z] [BOT] ✅ Created forum post: 🏢 AI/ML Engineer - Analyst - AI Labs @ ORG_86a62f4a in #💻・tech-jobs
  ✅ Industry: AI/ML Engineer - Analyst - AI Labs @ ORG_86a62f4a
[2025-11-21T08:40:17.004Z] [BOT] 🔍 DEBUG: Job "AI/ML Engineer - Analyst - AI Labs" | City: "Atlanta" | State: "GA" | Location Channel ID: "1429..."
[2025-11-21T08:40:17.201Z] [BOT] ✅ Created forum post: 🏢 AI/ML Engineer - Analyst - AI Labs @ ORG_86a62f4a in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-21T08:40:18.703Z] [BOT] 📝 Marking as posted: JID_e6593b0e...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T08:40:18.703Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T08:40:18.703Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_10a06c40
[2025-11-21T08:40:18.704Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T08:40:18.705Z] [BOT] 🔍 DEBUG: Temp file written (326727 bytes)
[2025-11-21T08:40:18.705Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T08:40:18.705Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T08:40:18.705Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326727 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T08:40:18.705Z] [BOT] 📍 [ROUTING] "Web Developer 1 - UI for Arcgis Enterprise" @ ORG_0fb6ee9c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T08:40:18.932Z] [BOT] ✅ Created forum post: 🏢 Web Developer 1 - UI for Arcgis Enterprise @ ORG_0fb6ee9c in #💻・tech-jobs
  ✅ Industry: Web Developer 1 - UI for Arcgis Enterprise @ ORG_0fb6ee9c
[2025-11-21T08:40:20.433Z] [BOT] 🔍 DEBUG: Job "Web Developer 1 - UI for Arcgis Enterprise" | City: "West Redlands" | State: "Redlands" | Location Channel ID: null
[2025-11-21T08:40:20.433Z] [BOT] 📝 Marking as posted: JID_8c705e85
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T08:40:20.433Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-21T08:40:20.433Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_57f76c27
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T08:40:20.435Z] [BOT] 🔍 DEBUG: Temp file written (326694 bytes)
[2025-11-21T08:40:20.435Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T08:40:20.435Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T08:40:20.435Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326694 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T08:40:20.435Z] [BOT] 📍 [ROUTING] "Application Engineer" @ ORG_3013b18f Controls
[2025-11-21T08:40:20.435Z] [BOT] Category: TECH (matched: "engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T08:40:20.621Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_3013b18f Controls in #💻・tech-jobs
  ✅ Industry: Application Engineer @ ORG_3013b18f Controls
[2025-11-21T08:40:22.123Z] [BOT] 🔍 DEBUG: Job "Application Engineer" | City: "Monaca" | State: "PA" | Location Channel ID: "1429..."
[2025-11-21T08:40:22.350Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_3013b18f Controls in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T08:40:23.851Z] [BOT] 📝 Marking as posted: JID_e8ab1968...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T08:40:23.852Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T08:40:23.852Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_58cc03a4
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T08:40:23.854Z] [BOT] 🔍 DEBUG: Temp file written (326756 bytes)
[2025-11-21T08:40:23.854Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T08:40:23.854Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T08:40:23.854Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326756 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T08:40:23.854Z] [BOT] 📍 [ROUTING] "Entry-level Software Engineer" @ ORG_1897ba46inStreet
   Category: TECH (matched: "software")
[2025-11-21T08:40:23.854Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T08:40:24.072Z] [BOT] ✅ Created forum post: 🏢 Entry-level Software Engineer @ ORG_1897ba46inStreet in #💻・tech-jobs
  ✅ Industry: Entry-level Software Engineer @ ORG_1897ba46inStreet
[2025-11-21T08:40:25.573Z] [BOT] 🔍 DEBUG: Job "Entry-level Software Engineer" | City: "San Mateo" | State: "CA" | Location Channel ID: "1429..."
[2025-11-21T08:40:25.765Z] [BOT] ✅ Created forum post: 🏢 Entry-level Software Engineer @ ORG_1897ba46inStreet in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-21T08:40:27.266Z] [BOT] 📝 Marking as posted: JID_70d6e113
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-21T08:40:27.266Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T08:40:27.266Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_000d1a54
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T08:40:27.268Z] [BOT] 🔍 DEBUG: Temp file written (326721 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T08:40:27.268Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T08:40:27.268Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326721 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T08:40:27.268Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - MERN - AWS" @ ORG_b344d80e Travelers Companies
   Category: TECH (matched: "software")
[2025-11-21T08:40:27.268Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-21T08:40:27.455Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - MERN - AWS @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - MERN - AWS @ ORG_b344d80e Travelers Companies
[2025-11-21T08:40:28.956Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1 - MERN - AWS" | City: "Sparks" | State: "MD" | Location Channel ID: "1429..."
[2025-11-21T08:40:29.126Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - MERN - AWS @ ORG_b344d80e Travelers Companies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T08:40:30.627Z] [BOT] 📝 Marking as posted: JID_77f74e98...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T08:40:30.628Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T08:40:30.628Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_4efcdbee
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T08:40:30.630Z] [BOT] 🔍 DEBUG: Temp file written (326750 bytes)
[2025-11-21T08:40:30.630Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T08:40:30.630Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T08:40:30.630Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326750 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T08:40:33.631Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-21T08:40:33.631Z] [BOT] 📍 [ROUTING] "Manufacturing Engineer 2 / Principal Manufacturing Engineer 3" @ ORG_f3f2248d Grumman
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-21T08:40:33.862Z] [BOT] ✅ Created forum post: 🏢 Manufacturing Engineer 2 / Principal Manufacturing Engineer 3 @ ORG_f3f2248d Grumman in #🩺・healthcare-jobs
  ✅ Industry: Manufacturing Engineer 2 / Principal Manufacturing Engineer 3 @ ORG_f3f2248d Grumman
[2025-11-21T08:40:35.362Z] [BOT] 🔍 DEBUG: Job "Manufacturing Engineer 2 / Principal Manufacturing Engineer 3" | City: "Chandler" | State: "AZ" | Location Channel ID: "1429..."
[2025-11-21T08:40:35.563Z] [BOT] ✅ Created forum post: 🏢 Manufacturing Engineer 2 / Principal Manufacturing Engineer 3 @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-21T08:40:37.064Z] [BOT] 📝 Marking as posted: JID_e3128470-northrop_grumm...
  🔍 DEBUG: Set size before add: 5000
[2025-11-21T08:40:37.064Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-21T08:40:37.065Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_14706c81
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-21T08:40:37.066Z] [BOT] 🔍 DEBUG: Temp file written (326848 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-21T08:40:37.066Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-21T08:40:37.066Z] [BOT] 🔍 DEBUG: Verified file exists, size: 326848 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-21T08:40:40.067Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-21T08:40:40.105Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 8
   Timestamp: 2025-11-21T08:40:40.105Z
[2025-11-21T08:40:42.115Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2768) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*