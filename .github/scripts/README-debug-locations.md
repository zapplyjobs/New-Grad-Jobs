# Location Posting Debug Guide

## Problem

Location-specific Discord channels are not receiving job posts. Only `remote-usa` occasionally gets jobs, while other city-specific channels (ny, sf, seattle, etc.) remain empty.

## What We Know

1. ✅ **Secrets ARE configured** - All 10 location channel secrets exist in GitHub (confirmed by user)
2. ✅ **Code is deployed** - enhanced-discord-bot.js has location posting logic (lines 38-54, 323-410, 763-785)
3. ✅ **Workflow is configured** - update-jobs.yml passes all location secrets (lines 72-81)
4. ❌ **Jobs aren't matching** - Only remote-usa gets occasional posts, city channels are empty

## Root Cause Hypothesis

The job location data from JSearch API likely doesn't have detailed city information, OR the location detection logic is too strict/incorrect.

**Possible scenarios:**
- Jobs have `job_city: "United States"` or `job_city: null` → No city match
- Jobs have `job_city: "Remote"` → Falls through to remote-usa
- Location detection regex patterns don't match actual data format
- Job descriptions don't contain city names in the expected format

## Diagnostic Steps

### Step 1: Add Workflow Logging (RECOMMENDED)

Add this step to `.github/workflows/update-jobs.yml` after the job fetcher runs:

```yaml
- name: Debug job locations
  run: node .github/scripts/analyze-job-locations.js
  env:
    DISCORD_REMOTE_USA_CHANNEL_ID: ${{ secrets.DISCORD_REMOTE_USA_CHANNEL_ID }}
    DISCORD_NY_CHANNEL_ID: ${{ secrets.DISCORD_NY_CHANNEL_ID }}
    DISCORD_AUSTIN_CHANNEL_ID: ${{ secrets.DISCORD_AUSTIN_CHANNEL_ID }}
    DISCORD_CHICAGO_CHANNEL_ID: ${{ secrets.DISCORD_CHICAGO_CHANNEL_ID }}
    DISCORD_SEATTLE_CHANNEL_ID: ${{ secrets.DISCORD_SEATTLE_CHANNEL_ID }}
    DISCORD_REDMOND_CHANNEL_ID: ${{ secrets.DISCORD_REDMOND_CHANNEL_ID }}
    DISCORD_MV_CHANNEL_ID: ${{ secrets.DISCORD_MV_CHANNEL_ID }}
    DISCORD_SF_CHANNEL_ID: ${{ secrets.DISCORD_SF_CHANNEL_ID }}
    DISCORD_SUNNYVALE_CHANNEL_ID: ${{ secrets.DISCORD_SUNNYVALE_CHANNEL_ID }}
    DISCORD_SAN_BRUNO_CHANNEL_ID: ${{ secrets.DISCORD_SAN_BRUNO_CHANNEL_ID }}
```

This will show:
- How many jobs match each location channel
- Sample jobs for each category
- Percentage breakdown
- Which jobs have no location match

### Step 2: Check Bot Debug Logs

The enhanced-discord-bot.js already has debug logging at line 765:

```javascript
console.log(`  🔍 DEBUG: Job "${job.job_title}" | City: "${job.job_city}" | State: "${job.job_state}" | Location Channel ID: ${locationChannelId ? ...}`);
```

Check GitHub Actions logs for these lines to see:
- What `job_city` and `job_state` values actually look like
- Which `locationChannelId` is being returned
- If most jobs return `null` for locationChannelId

### Step 3: Sample Job Data Format

Based on the JSearch API, jobs should have:
- `job_city`: City name (e.g., "San Francisco", "New York", "Remote")
- `job_state`: State code (e.g., "CA", "NY", "WA")
- `job_title`: Title (may contain location like "Software Engineer - Seattle")
- `job_description`: Full description (may mention city/remote)

If these fields are empty or have unexpected values, location matching will fail.

## Expected Fixes Based on Findings

### If jobs have generic locations:
```javascript
// Most jobs show: job_city="United States" or job_city="Remote"
// Solution: Improve fallback logic to parse job_title and job_description more aggressively
```

### If city names are abbreviated:
```javascript
// Jobs show: job_city="SF" instead of "San Francisco"
// Solution: Add more abbreviation mappings in cityAbbreviations
```

### If state codes appear without cities:
```javascript
// Jobs show: job_city="" but job_state="CA"
// Solution: Map state codes to default cities (CA→SF, NY→NYC, etc.) even for non-remote jobs
```

### If regex patterns don't match:
```javascript
// Job titles like "Remote (California)" don't match /\bca\b/
// Solution: Add more flexible regex patterns
```

## Quick Test

Run the analyzer locally (won't work without job data, but shows the logic):
```bash
cd /c/Users/jarra/Videos/Work/Business/New-Grad-Positions
node .github/scripts/analyze-job-locations.js
```

## Files Involved

- `.github/workflows/update-jobs.yml` - Workflow that passes secrets
- `.github/scripts/enhanced-discord-bot.js` - Bot with location detection (line 323: getJobLocationChannel)
- `.github/scripts/analyze-job-locations.js` - Diagnostic script
- `.github/scripts/check-location-secrets.js` - Secret verification
- `.github/data/new_jobs.json` - Job data (populated during workflow runs)

## Next Actions

1. Add the debug logging step to the workflow
2. Trigger a manual workflow run
3. Check the Actions logs for location distribution
4. Based on findings, update getJobLocationChannel() function
5. Test and verify jobs appear in city channels

---

**Created:** 2025-10-25
**Status:** Diagnostic phase - awaiting workflow run data
