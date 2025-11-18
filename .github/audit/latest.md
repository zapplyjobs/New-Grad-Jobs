# Discord Bot Execution Audit
**Timestamp:** 2025-11-18T05:01:34.912Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-18T05:01:25.207Z] ========================================
[2025-11-18T05:01:25.208Z] Discord Bot Execution Log
[2025-11-18T05:01:25.208Z] Environment: GitHub Actions
[2025-11-18T05:01:25.208Z] Node Version: v20.19.5
[2025-11-18T05:01:25.208Z] ========================================
[2025-11-18T05:01:25.208Z] Environment Variables Check:
[2025-11-18T05:01:25.208Z] DISCORD_TOKEN: ✅ Set
[2025-11-18T05:01:25.208Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-18T05:01:25.208Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-18T05:01:25.208Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-18T05:01:25.208Z] 
Multi-Channel Configuration:
[2025-11-18T05:01:25.208Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-18T05:01:25.209Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-18T05:01:25.209Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-18T05:01:25.209Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-18T05:01:25.209Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-18T05:01:25.209Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-18T05:01:25.209Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-18T05:01:25.209Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-18T05:01:25.209Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-18T05:01:25.209Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-18T05:01:25.209Z] 
Data Files Check:
[2025-11-18T05:01:25.209Z] .github/data/new_jobs.json: ✅ Exists (2 items, 9729 bytes)
[2025-11-18T05:01:25.211Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 323579 bytes)
[2025-11-18T05:01:25.211Z] 
========================================
[2025-11-18T05:01:25.211Z] Starting Enhanced Discord Bot...
[2025-11-18T05:01:25.211Z] ========================================
[2025-11-18T05:01:25.487Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-18T05:01:25.488Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-18T05:01:25.956Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-18T05:01:25.957Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-18T05:01:25.957Z] [BOT] 📬 Found 1 new jobs (1 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-18T05:01:25.957Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-18T05:01:25.958Z] [BOT] 📍 [ROUTING] "Clinical Analytics Analyst - Information Systems Analytic Health" @ ORG_0f4848d3ing Health
[2025-11-18T05:01:25.958Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-18T05:01:25.962Z] [BOT ERROR] (node:2165) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-18T05:01:26.129Z] [BOT] ✅ Created forum post: 🏢 Clinical Analytics Analyst - Information Systems Analytic Health @ ORG_0f4848d3ing Health in #💻・tech-jobs
  ✅ Industry: Clinical Analytics Analyst - Information Systems Analytic Health @ ORG_0f4848d3ing Health
[2025-11-18T05:01:27.632Z] [BOT] 🔍 DEBUG: Job "Clinical Analytics Analyst - Information Systems Analytic Health" | City: "Miamisburg" | State: "OH" | Location Channel ID: "1429..."
[2025-11-18T05:01:27.806Z] [BOT] ✅ Created forum post: 🏢 Clinical Analytics Analyst - Information Systems Analytic Health @ ORG_0f4848d3ing Health in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-18T05:01:29.307Z] [BOT] 📝 Marking as posted: JID_ba7c169d...
  🔍 DEBUG: Set size before add: 5000
[2025-11-18T05:01:29.307Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-18T05:01:29.308Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_41d20c2c
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-18T05:01:29.309Z] [BOT] 🔍 DEBUG: Temp file written (323581 bytes)
[2025-11-18T05:01:29.309Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-18T05:01:29.309Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-18T05:01:29.310Z] [BOT] 🔍 DEBUG: Verified file exists, size: 323581 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-18T05:01:32.311Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-18T05:01:32.350Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/audit/routing-encrypted.json
   Total entries: 1
   Timestamp: 2025-11-18T05:01:32.349Z
[2025-11-18T05:01:34.358Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:2165) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*