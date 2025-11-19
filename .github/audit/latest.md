# Discord Bot Execution Audit
**Timestamp:** 2025-11-19T00:39:40.081Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-19T00:39:17.327Z] ========================================
[2025-11-19T00:39:17.328Z] Discord Bot Execution Log
[2025-11-19T00:39:17.328Z] Environment: GitHub Actions
[2025-11-19T00:39:17.328Z] Node Version: v20.19.5
[2025-11-19T00:39:17.328Z] ========================================
[2025-11-19T00:39:17.328Z] Environment Variables Check:
[2025-11-19T00:39:17.328Z] DISCORD_TOKEN: ✅ Set
[2025-11-19T00:39:17.328Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-19T00:39:17.328Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-19T00:39:17.329Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-19T00:39:17.329Z] 
Multi-Channel Configuration:
[2025-11-19T00:39:17.329Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-19T00:39:17.329Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-19T00:39:17.329Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-19T00:39:17.329Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-19T00:39:17.329Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-19T00:39:17.329Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-19T00:39:17.329Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-19T00:39:17.329Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-19T00:39:17.329Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-19T00:39:17.329Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-19T00:39:17.329Z] 
Data Files Check:
[2025-11-19T00:39:17.329Z] .github/data/new_jobs.json: ✅ Exists (5 items, 36143 bytes)
[2025-11-19T00:39:17.331Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323782 bytes)
[2025-11-19T00:39:17.331Z] 
========================================
[2025-11-19T00:39:17.331Z] Starting Enhanced Discord Bot...
[2025-11-19T00:39:17.331Z] ========================================
[2025-11-19T00:39:17.602Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-19T00:39:17.603Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-19T00:39:18.439Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-19T00:39:18.440Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-19T00:39:18.440Z] [BOT] 📬 Found 4 new jobs (1 already posted)...
[2025-11-19T00:39:18.440Z] [BOT] 📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-19T00:39:18.442Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-19T00:39:18.443Z] [BOT] 📍 [ROUTING] "Software Engineer - Swe1 or Swe2 - United States" @ ORG_a032fda9
[2025-11-19T00:39:18.443Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T00:39:18.447Z] [BOT ERROR] (node:2342) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-19T00:39:18.752Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Swe1 or Swe2 - United States @ ORG_a032fda9 in #💻・tech-jobs
[2025-11-19T00:39:18.753Z] [BOT] ✅ Industry: Software Engineer - Swe1 or Swe2 - United States @ ORG_a032fda9
[2025-11-19T00:39:20.254Z] [BOT] 🔍 DEBUG: Job "Software Engineer - Swe1 or Swe2 - United States" | City: "Washington" | State: "Locations" | Location Channel ID: null
[2025-11-19T00:39:20.255Z] [BOT] 📝 Marking as posted: JID_ead592db...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-19T00:39:20.255Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T00:39:20.255Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T00:39:20.255Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_d04fe9b1
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T00:39:20.257Z] [BOT] 🔍 DEBUG: Temp file written (323771 bytes)
[2025-11-19T00:39:20.257Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T00:39:20.257Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T00:39:20.257Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323771 bytes
[2025-11-19T00:39:20.258Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Research Fellow - Deep Learning" @ ORG_10a0c5f8 General Brigham
[2025-11-19T00:39:20.258Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T00:39:20.542Z] [BOT] ✅ Created forum post: 🏢 Research Fellow - Deep Learning @ ORG_10a0c5f8 General Brigham in #💻・tech-jobs
[2025-11-19T00:39:20.543Z] [BOT] ✅ Industry: Research Fellow - Deep Learning @ ORG_10a0c5f8 General Brigham
[2025-11-19T00:39:22.043Z] [BOT] 🔍 DEBUG: Job "Research Fellow - Deep Learning" | City: "Boston" | State: "MA" | Location Channel ID: "1429..."
[2025-11-19T00:39:22.264Z] [BOT] ✅ Created forum post: 🏢 Research Fellow - Deep Learning @ ORG_10a0c5f8 General Brigham in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-19T00:39:23.766Z] [BOT] 📝 Marking as posted: JID_052d497a...
  🔍 DEBUG: Set size before add: 5000
[2025-11-19T00:39:23.766Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T00:39:23.766Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_9973bfe2
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T00:39:23.767Z] [BOT] 🔍 DEBUG: Temp file written (323832 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T00:39:23.767Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T00:39:23.767Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323832 bytes
💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Software Engineer 1" @ ORG_3777b69e
[2025-11-19T00:39:23.768Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-19T00:39:23.988Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_3777b69e in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_3777b69e
[2025-11-19T00:39:25.490Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "Remote in USA" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-19T00:39:25.675Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_3777b69e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-19T00:39:27.175Z] [BOT] 📝 Marking as posted: JID_08eac8ff...
[2025-11-19T00:39:27.176Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T00:39:27.176Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_49e37fc4
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T00:39:27.177Z] [BOT] 🔍 DEBUG: Temp file written (323836 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T00:39:27.178Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T00:39:27.178Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323836 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T00:39:30.178Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2025-11-19T00:39:30.178Z] [BOT] 📍 [ROUTING] "Computer Specialist" @ ORG_8edcbe2c Transportation Authority
   Category: PRODUCT (matched: "product manager")
   Channel: 📦・product-jobs (1391...8889)
[2025-11-19T00:39:30.425Z] [BOT] ✅ Created forum post: 🏢 Computer Specialist @ ORG_8edcbe2c Transportation Authority in #📦・product-jobs
  ✅ Industry: Computer Specialist @ ORG_8edcbe2c Transportation Authority
[2025-11-19T00:39:31.927Z] [BOT] 🔍 DEBUG: Job "Computer Specialist" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-19T00:39:32.261Z] [BOT] ✅ Created forum post: 🏢 Computer Specialist @ ORG_8edcbe2c Transportation Authority in #🗽・new-york
[2025-11-19T00:39:32.262Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-19T00:39:33.762Z] [BOT] 📝 Marking as posted: JID_e0a2dd37...
[2025-11-19T00:39:33.762Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-19T00:39:33.763Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-19T00:39:33.763Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_6fa67f29
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-19T00:39:33.764Z] [BOT] 🔍 DEBUG: Temp file written (323817 bytes)
[2025-11-19T00:39:33.764Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-19T00:39:33.764Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-19T00:39:33.764Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323817 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-19T00:39:36.765Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2025-11-19T00:39:36.765Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-19T00:39:36.803Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 4
[2025-11-19T00:39:36.803Z] [BOT] Timestamp: 2025-11-19T00:39:36.802Z
[2025-11-19T00:39:38.811Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2342) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*