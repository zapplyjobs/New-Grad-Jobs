# GitHub Actions Log Analyzer

Analyze workflow run logs via GitHub REST API to debug issues without installing `gh` CLI.

## Setup

1. **Create GitHub Personal Access Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Name: `Workflow Log Analyzer`
   - Scopes needed: `repo` (or just `actions:read` for public repos)
   - Expiration: 90 days (or custom)
   - Click "Generate token"
   - **Copy token immediately** (won't be shown again)

2. **Set environment variable:**
   ```bash
   # Windows (Command Prompt)
   set GITHUB_TOKEN=ghp_your_token_here

   # Windows (PowerShell)
   $env:GITHUB_TOKEN="ghp_your_token_here"

   # Linux/Mac
   export GITHUB_TOKEN=ghp_your_token_here
   ```

## Usage

### Basic Usage (Last 10 runs)
```bash
node .github/scripts/analyze-workflow-logs.js
```

### Analyze More Runs
```bash
node .github/scripts/analyze-workflow-logs.js --runs=20
```

### Search for Specific Text
```bash
# Find all companies being skipped
node .github/scripts/analyze-workflow-logs.js --search="SKIPPED"

# Find location posting issues
node .github/scripts/analyze-workflow-logs.js --search="remote-usa"

# Find specific company
node .github/scripts/analyze-workflow-logs.js --search="Google"
```

### Analyze Different Workflow
```bash
node .github/scripts/analyze-workflow-logs.js --workflow=daily-stats.yml
```

### Combine Options
```bash
node .github/scripts/analyze-workflow-logs.js --workflow=update-jobs.yml --runs=50 --search="error"
```

## What It Shows

### Company Analysis
- ✅ **Included Companies**: Companies whose jobs are being processed
- 🔴 **Skipped Companies**: Companies being filtered out

### Failure Tracking
- Lists all failed/cancelled workflow runs
- Provides direct links to GitHub Actions page

### Location Posting Debug
- Detects jobs going to `#remote-usa` channel
- Helps identify location detection issues

## Example Output

```
🔍 Analyzing 10 recent runs of update-jobs.yml...

✅ Found 10 workflow runs

📋 Run #3271 - success (10/24/2025, 4:45:00 PM)
  ✅ Analyzed logs

📋 Run #3270 - success (10/24/2025, 4:30:00 PM)
  ✅ Analyzed logs

======================================================================
📊 ANALYSIS SUMMARY
======================================================================

🟢 Included Companies (15):
Amazon, Apple, Google, Meta, Microsoft, Netflix, Tesla, ...

🔴 Skipped Companies (42):
Acme Corp, Beta Industries, ...

⚠️  Failed/Cancelled Runs (2):
  - Run #3265: cancelled
    https://github.com/user/repo/actions/runs/12345

📍 Location Posting Issues Found:
  Runs with remote-usa posts: 3

======================================================================
```

## Security Notes

### ✅ Safe (No Prompt Injection Risk)
- Direct HTTPS API calls (no shell execution)
- No `gh` CLI subprocess spawning
- Token-scoped permissions
- Input validation on parameters

### ⚠️ Token Security
- **Never commit token to git**
- **Never share token** in screenshots/logs
- **Use environment variable** only
- **Rotate token** if exposed
- **Minimum scope**: Use `actions:read` for public repos

## Troubleshooting

### "GITHUB_TOKEN not set"
```bash
# Set the token first:
set GITHUB_TOKEN=ghp_your_token_here

# Then run script
node .github/scripts/analyze-workflow-logs.js
```

### "HTTP 401: Unauthorized"
- Token expired or invalid
- Token doesn't have required scopes
- Regenerate token with `repo` or `actions:read` scope

### "No workflow runs found"
- Check workflow filename: `--workflow=update-jobs.yml`
- Verify workflow has run at least once
- Check repository name in script (lines 22-23)

### Rate Limiting
- GitHub API: 5,000 requests/hour with token
- Each run analyzed = 2 requests (run data + logs)
- Can analyze ~2,500 runs/hour safely

## Configuration

Edit script to change defaults (lines 22-26):

```javascript
const REPO_OWNER = 'YourUsername';  // Your GitHub username
const REPO_NAME = 'YourRepo';       // Your repository name
const WORKFLOW_FILE = 'update-jobs.yml';  // Default workflow
const NUM_RUNS = 10;  // Default number of runs
```

## API Endpoints Used

1. **List workflow runs:**
   ```
   GET /repos/{owner}/{repo}/actions/workflows/{workflow}/runs
   ```

2. **Download logs:**
   ```
   GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs
   ```

Reference: https://docs.github.com/en/rest/actions/workflow-runs

## Next Steps

After identifying issues:

1. **Skipped companies** → Review `companyNameMap` in job-fetcher
2. **Location issues** → Check `enhanced-discord-bot.js` location detection
3. **Failures** → Click provided URLs to see full GitHub Actions logs
