# Discord Bot Execution Audit
**Timestamp:** 2025-11-14T03:04:12.032Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-14T03:03:55.726Z] ========================================
[2025-11-14T03:03:55.727Z] Discord Bot Execution Log
[2025-11-14T03:03:55.727Z] Environment: GitHub Actions
[2025-11-14T03:03:55.727Z] Node Version: v20.19.5
[2025-11-14T03:03:55.728Z] ========================================
[2025-11-14T03:03:55.728Z] Environment Variables Check:
[2025-11-14T03:03:55.728Z] DISCORD_TOKEN: ✅ Set
[2025-11-14T03:03:55.728Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-14T03:03:55.728Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-14T03:03:55.728Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-14T03:03:55.728Z] 
Multi-Channel Configuration:
[2025-11-14T03:03:55.728Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-14T03:03:55.728Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-14T03:03:55.728Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-14T03:03:55.728Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-14T03:03:55.728Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-14T03:03:55.728Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-14T03:03:55.728Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-14T03:03:55.728Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-14T03:03:55.728Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-14T03:03:55.728Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-14T03:03:55.728Z] 
Data Files Check:
[2025-11-14T03:03:55.729Z] .github/data/new_jobs.json: ✅ Exists (2 items, 8715 bytes)
[2025-11-14T03:03:55.730Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 317819 bytes)
[2025-11-14T03:03:55.730Z] 
========================================
[2025-11-14T03:03:55.730Z] Starting Enhanced Discord Bot...
[2025-11-14T03:03:55.730Z] ========================================
[2025-11-14T03:03:56.001Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-14T03:03:56.002Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-14T03:03:56.561Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-14T03:03:56.562Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-11-14T03:03:56.562Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-14T03:03:56.563Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-14T03:03:56.568Z] [BOT ERROR] (node:2263) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-14T03:03:56.743Z] [BOT] ✅ Created forum post: 🏢 Junior Full Stack Engineer - Python/React/AWS @ ORG_a35c6c02 in #🩺・healthcare-jobs
  ✅ Industry: Junior Full Stack Engineer - Python/React/AWS @ ORG_a35c6c02
[2025-11-14T03:03:58.244Z] [BOT] 🔍 DEBUG: Job "Junior Full Stack Engineer - Python/React/AWS" | City: "Philadelphia" | State: "PA" | Location Channel ID: "1429..."
[2025-11-14T03:03:58.421Z] [BOT] ✅ Created forum post: 🏢 Junior Full Stack Engineer - Python/React/AWS @ ORG_a35c6c02 in #💻・remote-usa
[2025-11-14T03:03:58.422Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-14T03:03:59.922Z] [BOT] 📝 Marking as posted: JID_e573726c-comcast_ca...
[2025-11-14T03:03:59.922Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T03:03:59.923Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_eb394caa
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T03:03:59.924Z] [BOT] 🔍 DEBUG: Temp file written (317832 bytes)
[2025-11-14T03:03:59.924Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T03:03:59.924Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T03:03:59.924Z] [BOT] 🔍 DEBUG: Verified file exists, size: 317832 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T03:04:02.925Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-14T03:04:03.207Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 @ ORG_b3910ba4 financial in #💻・tech-jobs
  ✅ Industry: Software Development Engineer 1 @ ORG_b3910ba4 financial
[2025-11-14T03:04:04.708Z] [BOT] 🔍 DEBUG: Job "Software Development Engineer 1" | City: "Arlington" | State: "TX" | Location Channel ID: "1429..."
[2025-11-14T03:04:04.903Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 @ ORG_b3910ba4 financial in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-14T03:04:06.403Z] [BOT] 📝 Marking as posted: JID_b1636b37...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T03:04:06.403Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T03:04:06.403Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_acc06472
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T03:04:06.405Z] [BOT] 🔍 DEBUG: Temp file written (317849 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T03:04:06.405Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T03:04:06.405Z] [BOT] 🔍 DEBUG: Verified file exists, size: 317849 bytes
[2025-11-14T03:04:06.405Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-14T03:04:09.407Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-14T03:04:11.416Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2263) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*