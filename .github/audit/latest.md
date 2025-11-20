# Discord Bot Execution Audit
**Timestamp:** 2025-11-20T20:02:05.143Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-20T20:01:44.826Z] ========================================
[2025-11-20T20:01:44.827Z] Discord Bot Execution Log
[2025-11-20T20:01:44.827Z] Environment: GitHub Actions
[2025-11-20T20:01:44.827Z] Node Version: v20.19.5
[2025-11-20T20:01:44.827Z] ========================================
[2025-11-20T20:01:44.827Z] Environment Variables Check:
[2025-11-20T20:01:44.828Z] DISCORD_TOKEN: ✅ Set
[2025-11-20T20:01:44.828Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-20T20:01:44.828Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-20T20:01:44.828Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-20T20:01:44.828Z] 
Multi-Channel Configuration:
[2025-11-20T20:01:44.828Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-20T20:01:44.828Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-20T20:01:44.828Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-20T20:01:44.828Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-20T20:01:44.828Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-20T20:01:44.828Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-20T20:01:44.828Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-20T20:01:44.828Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-20T20:01:44.828Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-20T20:01:44.828Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-20T20:01:44.828Z] 
Data Files Check:
[2025-11-20T20:01:44.829Z] .github/data/new_jobs.json: ✅ Exists (7 items, 23169 bytes)
[2025-11-20T20:01:44.831Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 324325 bytes)
[2025-11-20T20:01:44.831Z] 
========================================
[2025-11-20T20:01:44.831Z] Starting Enhanced Discord Bot...
[2025-11-20T20:01:44.831Z] ========================================
[2025-11-20T20:01:45.107Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-20T20:01:45.107Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-20T20:01:46.292Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-20T20:01:46.294Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-20T20:01:46.294Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6a50d101 at IXL Learning
[2025-11-20T20:01:46.294Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 4 new jobs (3 already posted)...
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-20T20:01:46.296Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-11-20T20:01:46.296Z] [BOT] 📍 [ROUTING] "Performance Simulation/Application Associate Engineer" @ ORG_85937e82 Inc.
[2025-11-20T20:01:46.296Z] [BOT] Category: TECH (matched: "engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T20:01:46.302Z] [BOT ERROR] (node:2321) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-20T20:01:46.818Z] [BOT] ✅ Created forum post: 🏢 Performance Simulation/Application Associate Engineer @ ORG_85937e82 Inc. in #💻・tech-jobs
[2025-11-20T20:01:46.818Z] [BOT] ✅ Industry: Performance Simulation/Application Associate Engineer @ ORG_85937e82 Inc.
[2025-11-20T20:01:48.320Z] [BOT] 🔍 DEBUG: Job "Performance Simulation/Application Associate Engineer" | City: "Tucson" | State: "AZ" | Location Channel ID: "1429..."
[2025-11-20T20:01:48.550Z] [BOT] ✅ Created forum post: 🏢 Performance Simulation/Application Associate Engineer @ ORG_85937e82 Inc. in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-20T20:01:50.051Z] [BOT] 📝 Marking as posted: JID_2cd0913f...
  🔍 DEBUG: Set size before add: 5000
[2025-11-20T20:01:50.051Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T20:01:50.051Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_7274e05a
[2025-11-20T20:01:50.051Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T20:01:50.053Z] [BOT] 🔍 DEBUG: Temp file written (324404 bytes)
[2025-11-20T20:01:50.053Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T20:01:50.053Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T20:01:50.053Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324404 bytes
[2025-11-20T20:01:50.053Z] [BOT] 💾 Saved 5000 posted job IDs to database
📍 [ROUTING] "Associate Data Engineer" @ ORG_3db6634d
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T20:01:50.297Z] [BOT] ✅ Created forum post: 🏢 Associate Data Engineer @ ORG_3db6634d in #💻・tech-jobs
[2025-11-20T20:01:50.297Z] [BOT] ✅ Industry: Associate Data Engineer @ ORG_3db6634d
[2025-11-20T20:01:51.798Z] [BOT] 🔍 DEBUG: Job "Associate Data Engineer" | City: "Hammersmith" | State: "London" | Location Channel ID: null
[2025-11-20T20:01:51.798Z] [BOT] 📝 Marking as posted: JID_be852503...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T20:01:51.798Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-20T20:01:51.799Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e56f85ca
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T20:01:51.800Z] [BOT] 🔍 DEBUG: Temp file written (324407 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T20:01:51.800Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T20:01:51.800Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324407 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-20T20:01:51.800Z] [BOT] 📍 [ROUTING] "Product Engineer: System Performance Engineer" @ ORG_04c08645ins
   Category: TECH (matched: "engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T20:01:52.153Z] [BOT] ✅ Created forum post: 🏢 Product Engineer: System Performance Engineer @ ORG_04c08645ins in #💻・tech-jobs
[2025-11-20T20:01:52.154Z] [BOT] ✅ Industry: Product Engineer: System Performance Engineer @ ORG_04c08645ins
[2025-11-20T20:01:53.655Z] [BOT] 🔍 DEBUG: Job "Product Engineer: System Performance Engineer" | City: "Columbus" | State: "IN" | Location Channel ID: "1429..."
[2025-11-20T20:01:53.885Z] [BOT] ✅ Created forum post: 🏢 Product Engineer: System Performance Engineer @ ORG_04c08645ins in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-20T20:01:55.387Z] [BOT] 📝 Marking as posted: JID_6c84996b...
[2025-11-20T20:01:55.387Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T20:01:55.387Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-20T20:01:55.387Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_8835bad0
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T20:01:55.389Z] [BOT] 🔍 DEBUG: Temp file written (324451 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T20:01:55.389Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T20:01:55.389Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324451 bytes
[2025-11-20T20:01:55.389Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-20T20:01:55.389Z] [BOT] 📍 [ROUTING] "Digital Tools Software Developer" @ ORG_04c08645ins
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-20T20:01:55.771Z] [BOT] ✅ Created forum post: 🏢 Digital Tools Software Developer @ ORG_04c08645ins in #💻・tech-jobs
  ✅ Industry: Digital Tools Software Developer @ ORG_04c08645ins
[2025-11-20T20:01:57.273Z] [BOT] 🔍 DEBUG: Job "Digital Tools Software Developer" | City: "Columbus" | State: "IN" | Location Channel ID: "1429..."
[2025-11-20T20:01:57.492Z] [BOT] ✅ Created forum post: 🏢 Digital Tools Software Developer @ ORG_04c08645ins in #💻・remote-usa
[2025-11-20T20:01:57.492Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-20T20:01:58.993Z] [BOT] 📝 Marking as posted: JID_6c84996b...
[2025-11-20T20:01:58.993Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-20T20:01:58.994Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-20T20:01:58.994Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e4eee02b
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-20T20:01:58.995Z] [BOT] 🔍 DEBUG: Temp file written (324495 bytes)
[2025-11-20T20:01:58.995Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-20T20:01:58.995Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-20T20:01:58.995Z] [BOT] 🔍 DEBUG: Verified file exists, size: 324495 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-20T20:02:01.997Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2025-11-20T20:02:01.997Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-20T20:02:02.036Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
[2025-11-20T20:02:02.037Z] [BOT] Total entries: 4
   Timestamp: 2025-11-20T20:02:02.036Z
[2025-11-20T20:02:04.046Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2321) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*