# Discord Bot Execution Audit
**Timestamp:** 2025-11-14T23:55:43.573Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 41
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-14T23:52:37.774Z] ========================================
[2025-11-14T23:52:37.775Z] Discord Bot Execution Log
[2025-11-14T23:52:37.775Z] Environment: GitHub Actions
[2025-11-14T23:52:37.775Z] Node Version: v20.19.5
[2025-11-14T23:52:37.775Z] ========================================
[2025-11-14T23:52:37.775Z] Environment Variables Check:
[2025-11-14T23:52:37.775Z] DISCORD_TOKEN: ✅ Set
[2025-11-14T23:52:37.775Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-14T23:52:37.775Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-14T23:52:37.775Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-14T23:52:37.775Z] 
Multi-Channel Configuration:
[2025-11-14T23:52:37.776Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-14T23:52:37.776Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-14T23:52:37.776Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-14T23:52:37.776Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-14T23:52:37.776Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-14T23:52:37.776Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-14T23:52:37.776Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-14T23:52:37.776Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-14T23:52:37.776Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-14T23:52:37.776Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-14T23:52:37.776Z] 
Data Files Check:
[2025-11-14T23:52:37.777Z] .github/data/new_jobs.json: ✅ Exists (43 items, 215838 bytes)
[2025-11-14T23:52:37.779Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 320244 bytes)
[2025-11-14T23:52:37.779Z] 
========================================
[2025-11-14T23:52:37.779Z] Starting Enhanced Discord Bot...
[2025-11-14T23:52:37.779Z] ========================================
[2025-11-14T23:52:38.054Z] [BOT] 🔍 DEBUG: LOCATION_MODE_ENABLED = true
[2025-11-14T23:52:38.055Z] [BOT] 🔍 DEBUG: Location channel configuration:
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
[2025-11-14T23:52:38.783Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-14T23:52:38.785Z] [BOT] ⏭️ Skipping already posted (legacy ID): Entry Level - C Software Developer at mthree
[2025-11-14T23:52:38.785Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-14T23:52:38.786Z] [BOT] 📬 Found 41 new jobs (2 already posted)...
[2025-11-14T23:52:38.786Z] [BOT] 📤 Posting 41 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-14T23:52:38.789Z] [BOT] 📌 Posting 8 jobs to #📣・marketing-jobs
[2025-11-14T23:52:38.793Z] [BOT ERROR] (node:4452) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-14T23:52:39.012Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Associate @ ORG_9dee1c0e Van Lines in #📣・marketing-jobs
[2025-11-14T23:52:39.012Z] [BOT] ✅ Industry: Software Developer - Associate @ ORG_9dee1c0e Van Lines
[2025-11-14T23:52:40.514Z] [BOT] 🔍 DEBUG: Job "Software Developer - Associate" | City: "Evansville" | State: "IN" | Location Channel ID: "1429..."
[2025-11-14T23:52:40.933Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Associate @ ORG_9dee1c0e Van Lines in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:52:42.433Z] [BOT] 📝 Marking as posted: JID_821cc00a...
[2025-11-14T23:52:42.433Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-14T23:52:42.433Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:52:42.434Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:52:42.434Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_168b1a79
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:52:42.435Z] [BOT] 🔍 DEBUG: Temp file written (320252 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:52:42.435Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:52:42.436Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320252 bytes
[2025-11-14T23:52:42.436Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-14T23:52:42.611Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_3a8c1076 in #📣・marketing-jobs
  ✅ Industry: Software Engineer 1 @ ORG_3a8c1076
[2025-11-14T23:52:44.112Z] [BOT] 🔍 DEBUG: Job "Software Engineer 1" | City: "Palo Alto" | State: "CA" | Location Channel ID: "1429..."
[2025-11-14T23:52:44.334Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_3a8c1076 in #🌉・san-francisco
[2025-11-14T23:52:44.334Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-14T23:52:45.835Z] [BOT] 📝 Marking as posted: JID_e0d9b2be...
[2025-11-14T23:52:45.835Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:52:45.835Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:52:45.835Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_63c7ba8d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:52:45.836Z] [BOT] 🔍 DEBUG: Temp file written (320247 bytes)
[2025-11-14T23:52:45.836Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:52:45.837Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:52:45.837Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320247 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:52:47.515Z] [BOT] ✅ Created forum post: 🏢 Associate AI Software Engineer @ ORG_57e8a431 Brands in #📣・marketing-jobs
[2025-11-14T23:52:47.515Z] [BOT] ✅ Industry: Associate AI Software Engineer @ ORG_57e8a431 Brands
[2025-11-14T23:52:49.016Z] [BOT] 🔍 DEBUG: Job "Associate AI Software Engineer" | City: "El Segundo" | State: "CA" | Location Channel ID: "1429..."
[2025-11-14T23:52:49.470Z] [BOT] ✅ Created forum post: 🏢 Associate AI Software Engineer @ ORG_57e8a431 Brands in #🌉・san-francisco
[2025-11-14T23:52:49.470Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-14T23:52:50.971Z] [BOT] 📝 Marking as posted: JID_f3638bbe...
[2025-11-14T23:52:50.971Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:52:50.972Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:52:50.972Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_c0b4ef5b
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:52:50.974Z] [BOT] 🔍 DEBUG: Temp file written (320215 bytes)
[2025-11-14T23:52:50.974Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:52:50.974Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:52:50.974Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320215 bytes
[2025-11-14T23:52:50.974Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-14T23:52:51.220Z] [BOT] ✅ Created forum post: 🏢 Associate AI Software Engineer @ ORG_57e8a431 Brands in #📣・marketing-jobs
[2025-11-14T23:52:51.220Z] [BOT] ✅ Industry: Associate AI Software Engineer @ ORG_57e8a431 Brands
[2025-11-14T23:52:52.721Z] [BOT] 🔍 DEBUG: Job "Associate AI Software Engineer" | City: "El Segundo" | State: "CA" | Location Channel ID: "1429..."
[2025-11-14T23:52:53.145Z] [BOT] ✅ Created forum post: 🏢 Associate AI Software Engineer @ ORG_57e8a431 Brands in #🌉・san-francisco
[2025-11-14T23:52:53.146Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-14T23:52:54.646Z] [BOT] 📝 Marking as posted: JID_64c23412...
[2025-11-14T23:52:54.646Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:52:54.646Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:52:54.647Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_b1ccefea
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:52:54.648Z] [BOT] 🔍 DEBUG: Temp file written (320214 bytes)
[2025-11-14T23:52:54.648Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:52:54.648Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:52:54.648Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320214 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:52:54.817Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Partial Oxidation by Copper Catalysts @ ORG_13e36faa Lab in #📣・marketing-jobs
[2025-11-14T23:52:54.817Z] [BOT] ✅ Industry: Postdoctoral Research Associate - Partial Oxidation by Copper Catalysts @ ORG_13e36faa Lab
[2025-11-14T23:52:56.318Z] [BOT] 🔍 DEBUG: Job "Postdoctoral Research Associate - Partial Oxidation by Copper Catalysts" | City: "Shirley" | State: "NY" | Location Channel ID: "1429..."
[2025-11-14T23:52:56.536Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Partial Oxidation by Copper Catalysts @ ORG_13e36faa Lab in #🗽・new-york
[2025-11-14T23:52:56.536Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-14T23:52:58.037Z] [BOT] 📝 Marking as posted: JID_60e5b5d6...
[2025-11-14T23:52:58.037Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:52:58.038Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:52:58.039Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_f0e8ddd0
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:52:58.040Z] [BOT] 🔍 DEBUG: Temp file written (320262 bytes)
[2025-11-14T23:52:58.040Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:52:58.040Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:52:58.040Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320262 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:52:58.405Z] [BOT] ✅ Created forum post: 🏢 Configuration Analyst 1 @ ORG_81f16575ington Ingalls Industries in #📣・marketing-jobs
[2025-11-14T23:52:58.405Z] [BOT] ✅ Industry: Configuration Analyst 1 @ ORG_81f16575ington Ingalls Industries
[2025-11-14T23:52:59.906Z] [BOT] 🔍 DEBUG: Job "Configuration Analyst 1" | City: "Newport News" | State: "VA" | Location Channel ID: "1429..."
[2025-11-14T23:53:00.206Z] [BOT] ✅ Created forum post: 🏢 Configuration Analyst 1 @ ORG_81f16575ington Ingalls Industries in #💻・remote-usa
[2025-11-14T23:53:00.207Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-14T23:53:01.708Z] [BOT] 📝 Marking as posted: JID_95ccb76b...
[2025-11-14T23:53:01.708Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:53:01.709Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:53:01.709Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_2d72e81c
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:53:01.711Z] [BOT] 🔍 DEBUG: Temp file written (320288 bytes)
[2025-11-14T23:53:01.711Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:53:01.711Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:53:01.711Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320288 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:53:01.884Z] [BOT] ✅ Created forum post: 🏢 AI/ML Software Engineer @ iTradeNetwork in #📣・marketing-jobs
[2025-11-14T23:53:01.884Z] [BOT] ✅ Industry: AI/ML Software Engineer @ iTradeNetwork
[2025-11-14T23:53:03.385Z] [BOT] 🔍 DEBUG: Job "AI/ML Software Engineer" | City: "California" | State: "Locations" | Location Channel ID: null
[2025-11-14T23:53:03.386Z] [BOT] 📝 Marking as posted: JID_992ef08f
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:53:03.386Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:53:03.387Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_1cbcc006
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:53:03.388Z] [BOT] 🔍 DEBUG: Temp file written (320263 bytes)
[2025-11-14T23:53:03.388Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:53:03.388Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:53:03.388Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320263 bytes
[2025-11-14T23:53:03.388Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-14T23:53:03.658Z] [BOT] ✅ Created forum post: 🏢 Technology - Application Development - Full Time Analyst @ ORG_04ace811 in #📣・marketing-jobs
[2025-11-14T23:53:03.658Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_04ace811
[2025-11-14T23:53:05.160Z] [BOT] 🔍 DEBUG: Job "Technology - Application Development - Full Time Analyst" | City: "Irving" | State: "TX" | Location Channel ID: "1429..."
[2025-11-14T23:53:05.368Z] [BOT] ✅ Created forum post: 🏢 Technology - Application Development - Full Time Analyst @ ORG_04ace811 in #🤠・austin
[2025-11-14T23:53:05.368Z] [BOT] ✅ Location: 🤠・austin
[2025-11-14T23:53:06.869Z] [BOT] 📝 Marking as posted: JID_73d32110...
[2025-11-14T23:53:06.870Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:53:06.870Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:53:06.870Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_692ab994
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:53:06.872Z] [BOT] 🔍 DEBUG: Temp file written (320346 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:53:06.872Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:53:06.872Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320346 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:53:09.873Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-11-14T23:53:10.128Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_56d3dff7 in #💻・tech-jobs
[2025-11-14T23:53:10.129Z] [BOT] ✅ Industry: Software Engineer @ ORG_56d3dff7
[2025-11-14T23:53:11.630Z] [BOT] 🔍 DEBUG: Job "Software Engineer" | City: "Holmdel" | State: "NJ" | Location Channel ID: "1429..."
[2025-11-14T23:53:11.932Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_56d3dff7 in #💻・remote-usa
[2025-11-14T23:53:11.932Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-14T23:53:13.432Z] [BOT] 📝 Marking as posted: JID_761f2d30...
[2025-11-14T23:53:13.432Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:53:13.433Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:53:13.433Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e1c3d63e
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:53:13.434Z] [BOT] 🔍 DEBUG: Temp file written (320391 bytes)
[2025-11-14T23:53:13.434Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:53:13.434Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:53:13.435Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320391 bytes
[2025-11-14T23:53:13.435Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-14T23:53:14.751Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Fullstack - Trust and Safety @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-11-14T23:53:14.751Z] [BOT] ✅ Industry: Software Engineer Graduate - Fullstack - Trust and Safety @ ORG_1bb6fcfb
[2025-11-14T23:53:16.253Z] [BOT] 🔍 DEBUG: Job "Software Engineer Graduate - Fullstack - Trust and Safety" | City: "San Jose" | State: "CA" | Location Channel ID: "1429..."
[2025-11-14T23:53:16.449Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Fullstack - Trust and Safety @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-11-14T23:53:16.449Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-14T23:53:17.950Z] [BOT] 📝 Marking as posted: JID_694796fa...
[2025-11-14T23:53:17.950Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:53:17.951Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:53:17.951Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_a9614e27
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:53:17.952Z] [BOT] 🔍 DEBUG: Temp file written (320370 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:53:17.952Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:53:17.952Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320370 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:53:18.176Z] [BOT] ✅ Created forum post: 🏢 JPMorgan Chase Fellowship Program - Data Science Track @ ORG_569ec613 Morgan Chase in #💻・tech-jobs
[2025-11-14T23:53:18.177Z] [BOT] ✅ Industry: JPMorgan Chase Fellowship Program - Data Science Track @ ORG_569ec613 Morgan Chase
[2025-11-14T23:53:19.677Z] [BOT] 🔍 DEBUG: Job "JPMorgan Chase Fellowship Program - Data Science Track" | City: "Plano" | State: "TX" | Location Channel ID: "1429..."
[2025-11-14T23:53:19.903Z] [BOT] ✅ Created forum post: 🏢 JPMorgan Chase Fellowship Program - Data Science Track @ ORG_569ec613 Morgan Chase in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-14T23:53:21.404Z] [BOT] 📝 Marking as posted: JID_2896735f...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:53:21.404Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:53:21.405Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e525a5b9
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:53:21.406Z] [BOT] 🔍 DEBUG: Temp file written (320392 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:53:21.406Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:53:21.406Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320392 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:53:21.859Z] [BOT] ✅ Created forum post: 🏢 Senior ServiceNow Engineer @ ORG_ffb59591 James Financial in #💻・tech-jobs
[2025-11-14T23:53:21.859Z] [BOT] ✅ Industry: Senior ServiceNow Engineer @ ORG_ffb59591 James Financial
[2025-11-14T23:53:23.360Z] [BOT] 🔍 DEBUG: Job "Senior ServiceNow Engineer" | City: "St. Petersburg" | State: "FL" | Location Channel ID: "1429..."
[2025-11-14T23:53:23.544Z] [BOT] ✅ Created forum post: 🏢 Senior ServiceNow Engineer @ ORG_ffb59591 James Financial in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:53:25.045Z] [BOT] 📝 Marking as posted: JID_84da1fe7...
[2025-11-14T23:53:25.045Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:53:25.046Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:53:25.046Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_4b7cbbdb
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:53:25.047Z] [BOT] 🔍 DEBUG: Temp file written (320459 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:53:25.048Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:53:25.048Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320459 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:53:25.268Z] [BOT] ✅ Created forum post: 🏢 Enterprise Architecture - Technology & Engineering Fellow @ ORG_8edcbe2c Transportation Authority in #💻・tech-jobs
  ✅ Industry: Enterprise Architecture - Technology & Engineering Fellow @ ORG_8edcbe2c Transportation Authority
[2025-11-14T23:53:26.769Z] [BOT] 🔍 DEBUG: Job "Enterprise Architecture - Technology & Engineering Fellow" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-14T23:53:26.975Z] [BOT] ✅ Created forum post: 🏢 Enterprise Architecture - Technology & Engineering Fellow @ ORG_8edcbe2c Transportation Authority in #🗽・new-york
[2025-11-14T23:53:26.976Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-14T23:53:28.476Z] [BOT] 📝 Marking as posted: JID_e0a2dd37...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:53:28.476Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:53:28.477Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_37ac9c3f
[2025-11-14T23:53:28.477Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:53:28.478Z] [BOT] 🔍 DEBUG: Temp file written (320464 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:53:28.478Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:53:28.478Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320464 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:53:28.729Z] [BOT] ✅ Created forum post: 🏢 CV/ML Engineer @ ORG_1be5d78f in #💻・tech-jobs
  ✅ Industry: CV/ML Engineer @ ORG_1be5d78f
[2025-11-14T23:53:30.230Z] [BOT] 🔍 DEBUG: Job "CV/ML Engineer" | City: "SF" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-14T23:53:30.444Z] [BOT] ✅ Created forum post: 🏢 CV/ML Engineer @ ORG_1be5d78f in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-14T23:53:31.945Z] [BOT] 📝 Marking as posted: JID_6ca7370b...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:53:31.945Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:53:31.946Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_c2f01d4f
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:53:31.947Z] [BOT] 🔍 DEBUG: Temp file written (320456 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:53:31.947Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:53:31.947Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320456 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:53:34.948Z] [BOT] 📌 Posting 10 jobs to #💲・sales-jobs
[2025-11-14T23:53:35.318Z] [BOT] ✅ Created forum post: 🏢 Financial Data Analyst @ ORG_d5c1b124 Solutions in #💲・sales-jobs
[2025-11-14T23:53:35.318Z] [BOT] ✅ Industry: Financial Data Analyst @ ORG_d5c1b124 Solutions
[2025-11-14T23:53:36.819Z] [BOT] 🔍 DEBUG: Job "Financial Data Analyst" | City: "Englewood" | State: "NJ" | Location Channel ID: "1429..."
[2025-11-14T23:53:37.050Z] [BOT] ✅ Created forum post: 🏢 Financial Data Analyst @ ORG_d5c1b124 Solutions in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:53:38.551Z] [BOT] 📝 Marking as posted: JID_510eef57...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:53:38.551Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:53:38.552Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_40f7da3d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:53:38.554Z] [BOT] 🔍 DEBUG: Temp file written (320521 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:53:38.554Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:53:38.554Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320521 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:53:38.734Z] [BOT] ✅ Created forum post: 🏢 Business Insights Analyst @ ORG_207f0e5a in #💲・sales-jobs
  ✅ Industry: Business Insights Analyst @ ORG_207f0e5a
[2025-11-14T23:53:40.235Z] [BOT] 🔍 DEBUG: Job "Business Insights Analyst" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-14T23:53:40.472Z] [BOT] ✅ Created forum post: 🏢 Business Insights Analyst @ ORG_207f0e5a in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-14T23:53:41.974Z] [BOT] 📝 Marking as posted: JID_723a2850-hiscox_exte...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:53:41.974Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:53:41.974Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:53:41.974Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_8e586ccf
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:53:41.976Z] [BOT] 🔍 DEBUG: Temp file written (320576 bytes)
[2025-11-14T23:53:41.976Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:53:41.976Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:53:41.976Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320576 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:53:42.133Z] [BOT] ✅ Created forum post: 🎨 University Graduate - AI Context Engineer @ ORG_72fd3ae0 in #💲・sales-jobs
[2025-11-14T23:53:42.133Z] [BOT] ✅ Industry: University Graduate - AI Context Engineer @ ORG_72fd3ae0
[2025-11-14T23:53:43.634Z] [BOT] 🔍 DEBUG: Job "University Graduate - AI Context Engineer" | City: "SF" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-14T23:53:43.852Z] [BOT] ✅ Created forum post: 🎨 University Graduate - AI Context Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-14T23:53:45.354Z] [BOT] 📝 Marking as posted: JID_70c4903f-external_exp...
[2025-11-14T23:53:45.354Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:53:45.354Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_fa0794b7
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:53:45.356Z] [BOT] 🔍 DEBUG: Temp file written (320648 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:53:45.356Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:53:45.356Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320648 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:53:45.619Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_bf1bfe88 in #💲・sales-jobs
  ✅ Industry: Data Scientist @ ORG_bf1bfe88
[2025-11-14T23:53:47.120Z] [BOT] 🔍 DEBUG: Job "Data Scientist" | City: "McLean" | State: "VA" | Location Channel ID: "1429..."
[2025-11-14T23:53:47.411Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_bf1bfe88 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-11-14T23:53:48.912Z] [BOT] 📝 Marking as posted: JID_3bd8aa88...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:53:48.912Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:53:48.913Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_dd7ea518
[2025-11-14T23:53:48.913Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:53:48.915Z] [BOT] 🔍 DEBUG: Temp file written (320656 bytes)
[2025-11-14T23:53:48.915Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:53:48.915Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:53:48.915Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320656 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:53:49.160Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer @ ORG_bf1bfe88 in #💲・sales-jobs
  ✅ Industry: Software Development Engineer @ ORG_bf1bfe88
[2025-11-14T23:53:50.660Z] [BOT] 🔍 DEBUG: Job "Software Development Engineer" | City: "McLean" | State: "VA" | Location Channel ID: "1429..."
[2025-11-14T23:53:50.858Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer @ ORG_bf1bfe88 in #🌄・mountain-view
[2025-11-14T23:53:50.858Z] [BOT] ✅ Location: 🌄・mountain-view
[2025-11-14T23:53:52.359Z] [BOT] 📝 Marking as posted: JID_3bd8aa88...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:53:52.359Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:53:52.359Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_aa9f5abe
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:53:52.361Z] [BOT] 🔍 DEBUG: Temp file written (320669 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:53:52.361Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:53:52.361Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320669 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:53:52.754Z] [BOT] ✅ Created forum post: 🏢 Sales Pricing Analyst @ ORG_9b9b6e44 in #💲・sales-jobs
  ✅ Industry: Sales Pricing Analyst @ ORG_9b9b6e44
[2025-11-14T23:53:54.255Z] [BOT] 🔍 DEBUG: Job "Sales Pricing Analyst" | City: "New Albany" | State: "OH" | Location Channel ID: "1429..."
[2025-11-14T23:53:54.633Z] [BOT] ✅ Created forum post: 🏢 Sales Pricing Analyst @ ORG_9b9b6e44 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:53:56.134Z] [BOT] 📝 Marking as posted: JID_af7c2683...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:53:56.134Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:53:56.135Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_3e29f0a2
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:53:56.136Z] [BOT] 🔍 DEBUG: Temp file written (320702 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:53:56.136Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:53:56.136Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320702 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:53:56.385Z] [BOT] ✅ Created forum post: 🏢 Assoc Engineer - Software @ T-Mobile in #💲・sales-jobs
[2025-11-14T23:53:56.385Z] [BOT] ✅ Industry: Assoc Engineer - Software @ T-Mobile
[2025-11-14T23:53:57.886Z] [BOT] 🔍 DEBUG: Job "Assoc Engineer - Software" | City: "Bellevue" | State: "WA" | Location Channel ID: "1429..."
[2025-11-14T23:53:58.140Z] [BOT] ✅ Created forum post: 🏢 Assoc Engineer - Software @ T-Mobile in #🌧️・seattle
[2025-11-14T23:53:58.140Z] [BOT] ✅ Location: 🌧️・seattle
[2025-11-14T23:53:59.641Z] [BOT] 📝 Marking as posted: JID_ffa4b8c2...
[2025-11-14T23:53:59.641Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:53:59.642Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:53:59.642Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_da206bb6
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:53:59.644Z] [BOT] 🔍 DEBUG: Temp file written (320709 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:53:59.644Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:53:59.644Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320709 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:53:59.992Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_0a4b5d49 Holdings in #💲・sales-jobs
[2025-11-14T23:53:59.992Z] [BOT] ✅ Industry: Data Analyst @ ORG_0a4b5d49 Holdings
[2025-11-14T23:54:01.493Z] [BOT] 🔍 DEBUG: Job "Data Analyst" | City: "Milwaukee" | State: "WI" | Location Channel ID: "1429..."
[2025-11-14T23:54:01.750Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_0a4b5d49 Holdings in #💻・remote-usa
[2025-11-14T23:54:01.750Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-14T23:54:03.251Z] [BOT] 📝 Marking as posted: JID_7ef31bfa-marmon_ca...
[2025-11-14T23:54:03.251Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-14T23:54:03.251Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:54:03.252Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:54:03.252Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_f0ac9bb9
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:54:03.253Z] [BOT] 🔍 DEBUG: Temp file written (320723 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:54:03.253Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:54:03.253Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320723 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:54:03.949Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ T-Mobile in #💲・sales-jobs
[2025-11-14T23:54:03.949Z] [BOT] ✅ Industry: Associate Software Engineer @ T-Mobile
[2025-11-14T23:54:05.450Z] [BOT] 🔍 DEBUG: Job "Associate Software Engineer" | City: "Bellevue" | State: "WA" | Location Channel ID: "1429..."
[2025-11-14T23:54:05.631Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ T-Mobile in #🌧️・seattle
[2025-11-14T23:54:05.631Z] [BOT] ✅ Location: 🌧️・seattle
[2025-11-14T23:54:07.132Z] [BOT] 📝 Marking as posted: JID_ffa4b8c2...
[2025-11-14T23:54:07.132Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:54:07.133Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:54:07.133Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_13e4369e
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:54:07.134Z] [BOT] 🔍 DEBUG: Temp file written (320762 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:54:07.135Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:54:07.135Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320762 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:54:07.373Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst @ ORG_3aa5abc7 Games in #💲・sales-jobs
[2025-11-14T23:54:07.374Z] [BOT] ✅ Industry: Business Intelligence Analyst @ ORG_3aa5abc7 Games
[2025-11-14T23:54:08.874Z] [BOT] 🔍 DEBUG: Job "Business Intelligence Analyst" | City: "Alpharetta" | State: "GA" | Location Channel ID: "1429..."
[2025-11-14T23:54:09.298Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst @ ORG_3aa5abc7 Games in #💻・remote-usa
[2025-11-14T23:54:09.298Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-14T23:54:10.798Z] [BOT] 📝 Marking as posted: JID_a1bc3daa...
[2025-11-14T23:54:10.799Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:54:10.799Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:54:10.799Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_5da5bda6
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:54:10.801Z] [BOT] 🔍 DEBUG: Temp file written (320810 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:54:10.801Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:54:10.801Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320810 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:54:13.802Z] [BOT] 📌 Posting 9 jobs to #🩺・healthcare-jobs
[2025-11-14T23:54:33.555Z] [BOT] ✅ Created forum post: 🏢 Data Scientist / Machine Learning Engineer @ ORG_478e100e University in #🩺・healthcare-jobs
  ✅ Industry: Data Scientist / Machine Learning Engineer @ ORG_478e100e University
[2025-11-14T23:54:35.056Z] [BOT] 🔍 DEBUG: Job "Data Scientist / Machine Learning Engineer" | City: "State College" | State: "PA" | Location Channel ID: "1429..."
[2025-11-14T23:54:35.257Z] [BOT] ✅ Created forum post: 🏢 Data Scientist / Machine Learning Engineer @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:54:36.758Z] [BOT] 📝 Marking as posted: JID_28954219-psu_staff-job-...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:54:36.758Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:54:36.758Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_3959bd27
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:54:36.759Z] [BOT] 🔍 DEBUG: Temp file written (320892 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:54:36.760Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:54:36.760Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320892 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:54:36.951Z] [BOT] ✅ Created forum post: 🏢 Postdoc Research Associate - Intrans @ ORG_722b29f2 State University in #🩺・healthcare-jobs
  ✅ Industry: Postdoc Research Associate - Intrans @ ORG_722b29f2 State University
[2025-11-14T23:54:38.453Z] [BOT] 🔍 DEBUG: Job "Postdoc Research Associate - Intrans" | City: "Ames" | State: "IA" | Location Channel ID: "1429..."
[2025-11-14T23:54:38.695Z] [BOT] ✅ Created forum post: 🏢 Postdoc Research Associate - Intrans @ ORG_722b29f2 State University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:54:40.196Z] [BOT] 📝 Marking as posted: JID_3121493b-...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-14T23:54:40.196Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:54:40.197Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_481560e0
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:54:40.198Z] [BOT] 🔍 DEBUG: Temp file written (320944 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:54:40.199Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:54:40.199Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320944 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:54:40.379Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_39417f32 Allen in #🩺・healthcare-jobs
  ✅ Industry: Data Scientist @ ORG_39417f32 Allen
[2025-11-14T23:54:41.880Z] [BOT] 🔍 DEBUG: Job "Data Scientist" | City: "McLean" | State: "VA" | Location Channel ID: "1429..."
[2025-11-14T23:54:42.050Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_39417f32 Allen in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:54:43.551Z] [BOT] 📝 Marking as posted: JID_6312b0b9-bah_jobs-job-m...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:54:43.551Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:54:43.552Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_011a8cfc
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:54:43.553Z] [BOT] 🔍 DEBUG: Temp file written (320942 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:54:43.553Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:54:43.554Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320942 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:54:43.731Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_c8cc1c7b American Insurance Company in #🩺・healthcare-jobs
  ✅ Industry: Application Engineer @ ORG_c8cc1c7b American Insurance Company
[2025-11-14T23:54:45.232Z] [BOT] 🔍 DEBUG: Job "Application Engineer" | City: "Cincinnati" | State: "OH" | Location Channel ID: "1429..."
[2025-11-14T23:54:45.600Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_c8cc1c7b American Insurance Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:54:47.101Z] [BOT] 📝 Marking as posted: JID_b614135a-gaig_external...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:54:47.101Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:54:47.102Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_302bb7af
[2025-11-14T23:54:47.102Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:54:47.103Z] [BOT] 🔍 DEBUG: Temp file written (320969 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:54:47.103Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:54:47.103Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320969 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:54:47.278Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Distributed Systems/ Python @ ORG_cc7e1d22 in #🩺・healthcare-jobs
[2025-11-14T23:54:47.278Z] [BOT] ✅ Industry: Software Engineer - Distributed Systems/ Python @ ORG_cc7e1d22
[2025-11-14T23:54:48.779Z] [BOT] 🔍 DEBUG: Job "Software Engineer - Distributed Systems/ Python" | City: "Durham" | State: "NC" | Location Channel ID: "1429..."
[2025-11-14T23:54:49.091Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Distributed Systems/ Python @ ORG_cc7e1d22 in #🌉・san-francisco
[2025-11-14T23:54:49.092Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-14T23:54:50.591Z] [BOT] 📝 Marking as posted: JID_e8b1df69
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-14T23:54:50.591Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:54:50.592Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_34884f68
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:54:50.594Z] [BOT] 🔍 DEBUG: Temp file written (320974 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:54:50.594Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:54:50.594Z] [BOT] 🔍 DEBUG: Verified file exists, size: 320974 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:54:51.334Z] [BOT] ✅ Created forum post: 🏢 GSSC Associate / Software Engineer @ ORG_f3f2248d Grumman in #🩺・healthcare-jobs
  ✅ Industry: GSSC Associate / Software Engineer @ ORG_f3f2248d Grumman
[2025-11-14T23:54:52.836Z] [BOT] 🔍 DEBUG: Job "GSSC Associate / Software Engineer" | City: "California" | State: "Locations" | Location Channel ID: null
[2025-11-14T23:54:52.836Z] [BOT] 📝 Marking as posted: JID_e3128470-northrop_grumm...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:54:52.837Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:54:52.837Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_dadd7168
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:54:52.838Z] [BOT] 🔍 DEBUG: Temp file written (321091 bytes)
[2025-11-14T23:54:52.838Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:54:52.838Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:54:52.839Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321091 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:54:53.067Z] [BOT] ✅ Created forum post: 🏢 Analyst & Simulation Developer @ Trace3 in #🩺・healthcare-jobs
  ✅ Industry: Analyst & Simulation Developer @ Trace3
[2025-11-14T23:54:54.568Z] [BOT] 🔍 DEBUG: Job "Analyst & Simulation Developer" | City: "Colorado Springs" | State: "CO" | Location Channel ID: "1429..."
[2025-11-14T23:54:56.297Z] [BOT] ✅ Created forum post: 🏢 Analyst & Simulation Developer @ Trace3 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-14T23:54:57.796Z] [BOT] 📝 Marking as posted: JID_04361663...
[2025-11-14T23:54:57.797Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:54:57.797Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:54:57.797Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_2538e19d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:54:57.799Z] [BOT] 🔍 DEBUG: Temp file written (321105 bytes)
[2025-11-14T23:54:57.799Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:54:57.799Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:54:57.799Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321105 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:54:58.124Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_b235cccb in #🩺・healthcare-jobs
[2025-11-14T23:54:58.124Z] [BOT] ✅ Industry: Data Analyst @ ORG_b235cccb
[2025-11-14T23:54:59.626Z] [BOT] 🔍 DEBUG: Job "Data Analyst" | City: "Des Moines" | State: "IA" | Location Channel ID: "1429..."
[2025-11-14T23:54:59.832Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_b235cccb in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:55:01.333Z] [BOT] 📝 Marking as posted: JID_0ca2c945-...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:55:01.333Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:55:01.333Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_e5644eda
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:55:01.335Z] [BOT] 🔍 DEBUG: Temp file written (321172 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:55:01.335Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:55:01.335Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321172 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:55:01.555Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer 1 @ ORG_75f04b84 in #🩺・healthcare-jobs
  ✅ Industry: Systems Engineer 1 @ ORG_75f04b84
[2025-11-14T23:55:03.056Z] [BOT] 🔍 DEBUG: Job "Systems Engineer 1" | City: "St. Petersburg" | State: "FL" | Location Channel ID: "1429..."
[2025-11-14T23:55:03.349Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer 1 @ ORG_75f04b84 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:55:04.850Z] [BOT] 📝 Marking as posted: JID_6957dde4-rec_rtx_e...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:55:04.850Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:55:04.851Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_d7005566
[2025-11-14T23:55:04.851Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:55:04.852Z] [BOT] 🔍 DEBUG: Temp file written (321316 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:55:04.853Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:55:04.853Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321316 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:55:07.854Z] [BOT] 📌 Posting 3 jobs to #💰・finance-jobs
[2025-11-14T23:55:08.091Z] [BOT] ✅ Created forum post: 🏢 Technology Rotational Program - Associate Engineer @ ORG_20fe1bd2 Group in #💰・finance-jobs
  ✅ Industry: Technology Rotational Program - Associate Engineer @ ORG_20fe1bd2 Group
[2025-11-14T23:55:09.593Z] [BOT] 🔍 DEBUG: Job "Technology Rotational Program - Associate Engineer" | City: "Boston" | State: "MA" | Location Channel ID: "1429..."
[2025-11-14T23:55:09.886Z] [BOT] ✅ Created forum post: 🏢 Technology Rotational Program - Associate Engineer @ ORG_20fe1bd2 Group in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:55:11.387Z] [BOT] 📝 Marking as posted: JID_ad45ed0b...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:55:11.387Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:55:11.388Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_c35ca2b3
[2025-11-14T23:55:11.388Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:55:11.389Z] [BOT] 🔍 DEBUG: Temp file written (321339 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:55:11.390Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:55:11.390Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321339 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:55:11.580Z] [BOT] ✅ Created forum post: 🏢 Enterprise Strategy - Technology & Engineering Fellow @ ORG_8edcbe2c Transportation Authority in #💰・finance-jobs
  ✅ Industry: Enterprise Strategy - Technology & Engineering Fellow @ ORG_8edcbe2c Transportation Authority
[2025-11-14T23:55:13.081Z] [BOT] 🔍 DEBUG: Job "Enterprise Strategy - Technology & Engineering Fellow" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-14T23:55:13.601Z] [BOT] ✅ Created forum post: 🏢 Enterprise Strategy - Technology & Engineering Fellow @ ORG_8edcbe2c Transportation Authority in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-14T23:55:15.102Z] [BOT] 📝 Marking as posted: JID_e0a2dd37...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:55:15.102Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:55:15.102Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_b483e859
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:55:15.104Z] [BOT] 🔍 DEBUG: Temp file written (321332 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:55:15.104Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:55:15.104Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321332 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:55:15.424Z] [BOT] ✅ Created forum post: 🏢 Consultant - Data Management @ ORG_b344d80e Travelers Companies in #💰・finance-jobs
  ✅ Industry: Consultant - Data Management @ ORG_b344d80e Travelers Companies
[2025-11-14T23:55:16.925Z] [BOT] 🔍 DEBUG: Job "Consultant - Data Management" | City: "Hartford" | State: "CT" | Location Channel ID: "1429..."
[2025-11-14T23:55:17.173Z] [BOT] ✅ Created forum post: 🏢 Consultant - Data Management @ ORG_b344d80e Travelers Companies in #💻・remote-usa
[2025-11-14T23:55:17.173Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-14T23:55:18.674Z] [BOT] 📝 Marking as posted: JID_77f74e98...
[2025-11-14T23:55:18.674Z] [BOT] 🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:55:18.674Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
[2025-11-14T23:55:18.674Z] [BOT] 🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_9dd68131
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:55:18.676Z] [BOT] 🔍 DEBUG: Temp file written (321366 bytes)
[2025-11-14T23:55:18.676Z] [BOT] 🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:55:18.676Z] [BOT] 🔍 DEBUG: Rename complete
🔍 DEBUG: Verified file exists, size: 321366 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:55:21.677Z] [BOT] 📌 Posting 5 jobs to #📁・JID_e938df7b
[2025-11-14T23:55:21.973Z] [BOT] ✅ Created forum post: 🏢 Student Researcher @ ORG_478e100e University in #📁・JID_e938df7b
[2025-11-14T23:55:21.973Z] [BOT] ✅ Industry: Student Researcher @ ORG_478e100e University
[2025-11-14T23:55:23.474Z] [BOT] 🔍 DEBUG: Job "Student Researcher" | City: "State College" | State: "PA" | Location Channel ID: "1429..."
[2025-11-14T23:55:23.764Z] [BOT] ✅ Created forum post: 🏢 Student Researcher @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:55:25.265Z] [BOT] 📝 Marking as posted: JID_28954219-psu_staff-job-...
  🔍 DEBUG: Set size before add: 5000
  🔍 DEBUG: Set size after add: 5001 (NEW)
[2025-11-14T23:55:25.266Z] [BOT] 🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:55:25.266Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_9d42648b
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:55:25.268Z] [BOT] 🔍 DEBUG: Temp file written (321400 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:55:25.268Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:55:25.268Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321400 bytes
[2025-11-14T23:55:25.268Z] [BOT] 💾 Saved 5000 posted job IDs to database
[2025-11-14T23:55:25.446Z] [BOT] ✅ Created forum post: 🏢 Research Assistant - Computer Science and Engineering @ ORG_478e100e University in #📁・JID_e938df7b
  ✅ Industry: Research Assistant - Computer Science and Engineering @ ORG_478e100e University
[2025-11-14T23:55:26.948Z] [BOT] 🔍 DEBUG: Job "Research Assistant - Computer Science and Engineering" | City: "State College" | State: "PA" | Location Channel ID: "1429..."
[2025-11-14T23:55:27.283Z] [BOT] ✅ Created forum post: 🏢 Research Assistant - Computer Science and Engineering @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-14T23:55:28.784Z] [BOT] 📝 Marking as posted: JID_28954219-psu_staff-job-...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:55:28.784Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:55:28.784Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_97259dca
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:55:28.786Z] [BOT] 🔍 DEBUG: Temp file written (321462 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:55:28.786Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:55:28.786Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321462 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:55:29.144Z] [BOT] ✅ Created forum post: 🏢 GPU Power Architect @ ORG_0890f456 in #📁・JID_e938df7b
  ✅ Industry: GPU Power Architect @ ORG_0890f456
[2025-11-14T23:55:30.645Z] [BOT] 🔍 DEBUG: Job "GPU Power Architect" | City: "California" | State: "Locations" | Location Channel ID: null
  📝 Marking as posted: JID_a73a5f53...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:55:30.645Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:55:30.646Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_ae7f21af
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:55:30.647Z] [BOT] 🔍 DEBUG: Temp file written (321500 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:55:30.647Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:55:30.647Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321500 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:55:31.099Z] [BOT] ✅ Created forum post: 🏢 Customer Management - Technology & Engineer Fellow @ ORG_8edcbe2c Transportation Authority in #📁・JID_e938df7b
  ✅ Industry: Customer Management - Technology & Engineer Fellow @ ORG_8edcbe2c Transportation Authority
[2025-11-14T23:55:32.600Z] [BOT] 🔍 DEBUG: Job "Customer Management - Technology & Engineer Fellow" | City: "NYC" | State: "Locations" | Location Channel ID: "1429..."
[2025-11-14T23:55:32.848Z] [BOT] ✅ Created forum post: 🏢 Customer Management - Technology & Engineer Fellow @ ORG_8edcbe2c Transportation Authority in #🗽・new-york
[2025-11-14T23:55:32.848Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-14T23:55:34.349Z] [BOT] 📝 Marking as posted: JID_e0a2dd37...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:55:34.349Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:55:34.349Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_fc4f67d2
[2025-11-14T23:55:34.349Z] [BOT] 🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:55:34.351Z] [BOT] 🔍 DEBUG: Temp file written (321497 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:55:34.351Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:55:34.351Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321497 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:55:34.632Z] [BOT] ✅ Created forum post: 🏢 Futurefocus Tech 2026 @ ORG_3507fe20 in #📁・JID_e938df7b
[2025-11-14T23:55:34.632Z] [BOT] ✅ Industry: Futurefocus Tech 2026 @ ORG_3507fe20
[2025-11-14T23:55:36.133Z] [BOT] 🔍 DEBUG: Job "Futurefocus Tech 2026" | City: "Chicago" | State: "IL" | Location Channel ID: "1429..."
[2025-11-14T23:55:36.296Z] [BOT] ✅ Created forum post: 🏢 Futurefocus Tech 2026 @ ORG_3507fe20 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-14T23:55:37.797Z] [BOT] 📝 Marking as posted: JID_90cca23f...
  🔍 DEBUG: Set size before add: 5000
[2025-11-14T23:55:37.797Z] [BOT] 🔍 DEBUG: Set size after add: 5001 (NEW)
🔍 DEBUG: Before trimming - array has 5001 entries
[2025-11-14T23:55:37.798Z] [BOT] 🔍 DEBUG: Trimmed from 5001 to 5000
🔍 DEBUG: Removed 1 oldest IDs (by insertion order): JID_54114e2d
🔍 DEBUG: Writing temp file to /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp
[2025-11-14T23:55:37.799Z] [BOT] 🔍 DEBUG: Temp file written (321493 bytes)
🔍 DEBUG: Renaming /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json.tmp → /home/runner/work/New-Grad-Jobs/New-Grad-Jobs/.github/data/posted_jobs.json
[2025-11-14T23:55:37.799Z] [BOT] 🔍 DEBUG: Rename complete
[2025-11-14T23:55:37.799Z] [BOT] 🔍 DEBUG: Verified file exists, size: 321493 bytes
💾 Saved 5000 posted job IDs to database
[2025-11-14T23:55:40.800Z] [BOT] 🎉 Posting complete! Successfully posted: 41, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-14T23:55:42.809Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] (node:4452) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*