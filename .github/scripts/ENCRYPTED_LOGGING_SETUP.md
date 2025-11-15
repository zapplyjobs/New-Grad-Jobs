# Encrypted Production Logging System

**Purpose:** Debug job routing issues by viewing detailed production logs locally without exposing sensitive data in the repository.

## 🎯 How It Works

1. **Production (GitHub Actions):** Bot logs detailed routing info → Encrypts logs → Commits encrypted file to repo
2. **Local Development:** You decrypt logs → View channel routing details → Debug misrouting issues

## 📦 Files Created

### Core System Files
- `encryption-utils.js` - AES-256-GCM encryption/decryption utilities
- `routing-logger.js` - Tracks which channel each job is routed to
- `enhanced-channel-router.js` - Returns detailed routing info (category + matched keyword)
- `decrypt-routing-logs.js` - Script to view encrypted logs locally

### Output Files
- `.github/audit/routing-encrypted.json` - Encrypted routing logs (committed to repo)
- `.local/routing-logs-decrypted.json` - Decrypted logs (local only, gitignored)

## 🔐 Setup Instructions

### Step 1: Add GitHub Secret

Add encryption password as a GitHub repository secret:

1. Go to: `Settings` → `Secrets and variables` → `Actions`
2. Click `New repository secret`
3. Name: `LOG_ENCRYPT_PASSWORD`
4. Value: `[your-secure-password-here]`
5. Click `Add secret`

**Security:** Use a strong password (16+ characters, mixed case, numbers, symbols)

### Step 2: Set Local Environment Variable

On your local machine, set the decryption password:

**Windows (PowerShell):**
```powershell
$env:LOG_DECRYPT_PASSWORD = "your-secure-password-here"
```

**Windows (CMD):**
```cmd
set LOG_DECRYPT_PASSWORD=your-secure-password-here
```

**Mac/Linux:**
```bash
export LOG_DECRYPT_PASSWORD="your-secure-password-here"
```

**Permanent (add to your shell profile):**
```bash
# Add to ~/.bashrc or ~/.zshrc
export LOG_DECRYPT_PASSWORD="your-secure-password-here"
```

### Step 3: Integrate with Discord Bot

Add to `enhanced-discord-bot.js`:

```javascript
// Add at top with other requires
const RoutingLogger = require('./routing-logger');
const { getJobChannelDetails } = require('./enhanced-channel-router');

// Initialize logger
const routingLogger = new RoutingLogger();

// Replace getJobChannel() calls with getJobChannelDetails()
// OLD:
const channelId = getJobChannel(job);

// NEW:
const routingInfo = getJobChannelDetails(job, CHANNEL_CONFIG);
const channelId = routingInfo.channelId;

// Log the routing decision
routingLogger.logRouting(
  job,
  routingInfo.category,
  routingInfo.matchedKeyword,
  channelId,
  channel.name
);

// At end of posting (before client.destroy()):
// Save encrypted log (GitHub Actions) or plaintext (local)
if (process.env.GITHUB_ACTIONS) {
  const password = process.env.LOG_ENCRYPT_PASSWORD;
  if (password) {
    routingLogger.saveEncrypted(password);
  } else {
    console.warn('⚠️ LOG_ENCRYPT_PASSWORD not set - routing log not saved');
  }
} else {
  // Local development - save plaintext
  routingLogger.savePlaintext();
}
```

### Step 4: Update Workflow

Add to `.github/workflows/update-jobs.yml` (after bot runs):

```yaml
- name: Commit encrypted routing logs
  if: success()
  run: |
    if [ -f .github/audit/routing-encrypted.json ]; then
      git config user.name "github-actions[bot]"
      git config user.email "github-actions[bot]@users.noreply.github.com"
      git add .github/audit/routing-encrypted.json
      git commit -m "chore: update encrypted routing logs" || echo "No changes to commit"
      git push
    fi
```

## 📖 Usage

### View Production Logs Locally

After the bot runs on GitHub Actions:

```bash
cd C:\Users\jarra\Videos\Work\Business\Job_Listings\New-Grad-Positions

# Set password (if not already set)
$env:LOG_DECRYPT_PASSWORD = "your-password"

# Decrypt and view logs
node .github/scripts/decrypt-routing-logs.js
```

**Output Example:**
```
🔓 Decrypting routing logs...

✅ Successfully decrypted!

================================================================================
CHANNEL ROUTING DEBUG LOG
================================================================================
Timestamp: 2025-11-15T12:30:45.123Z
Total Jobs: 15
================================================================================

[1] Data Scientist - Product Analytics @ Meta
    Category: PRODUCT
    Matched Keyword: "product analyst"
    Channel: #🎯・product-jobs
    Channel ID: 1429...xxxx

[2] Software Engineer 1 @ American Express
    Category: TECH
    Matched Keyword: "default"
    Channel: #💻・tech-jobs
    Channel ID: 1429...yyyy

[3] Account Executive @ Salesforce
    Category: SALES
    Matched Keyword: "account executive"
    Channel: #💼・sales-jobs
    Channel ID: 1429...zzzz

================================================================================
CATEGORY SUMMARY
================================================================================
TECH                 10 jobs
PRODUCT              3 jobs
SALES                2 jobs
================================================================================

💾 Decrypted logs saved to: .local/routing-logs-decrypted.json
```

### Analyze Misrouting

If you see a job in the wrong channel:

1. **Check the matched keyword**: Did an unexpected word trigger the match?
2. **Inspect the regex pattern**: Is the pattern too broad?
3. **Fix the categorization logic**: Update `enhanced-channel-router.js`
4. **Test locally**: Run bot locally to verify fix

## 🔍 Debugging Workflow

### Problem: "Data Scientist - Product Analytics" going to wrong channel

**Step 1:** View encrypted logs
```bash
node .github/scripts/decrypt-routing-logs.js
```

**Step 2:** Find the job in output
```
[5] Data Scientist - Product Analytics @ Meta
    Category: PRODUCT
    Matched Keyword: "product analyst"
    Channel: #🎯・product-jobs
```

**Step 3:** Identify the issue
- **Issue:** Keyword "product analyst" matches "product analytics"
- **Should be:** TECH channel (Data Scientist is a tech role)

**Step 4:** Fix the regex in `enhanced-channel-router.js`
```javascript
// BEFORE (too broad):
regex: /\b(product manager|product owner|product marketing|product analyst)\b/

// AFTER (more specific):
regex: /\b(product manager|product owner|product marketing|product analyst(?!ics))\b/
// Negative lookahead (?!ics) prevents matching "product analytics"
```

**Step 5:** Test the fix locally
```bash
# Run bot locally with test data
node .github/scripts/enhanced-discord-bot.js
```

**Step 6:** Deploy and verify
```bash
git add .
git commit -m "fix: prevent 'product analytics' from matching product analyst keyword"
git push
```

## 🛡️ Security Notes

1. **Never commit** `.local/` directory (protected by .gitignore)
2. **Never commit** plaintext routing logs
3. **Encrypted logs are safe** to commit to repo
4. **Password must be secret** - stored in GitHub Secrets only
5. **Local password** should match GitHub Secret password

## 🧪 Testing

### Test Encryption Locally

```bash
cd C:\Users\jarra\Videos\Work\Business\Job_Listings\New-Grad-Positions
node .github/scripts/encryption-utils.js
```

Expected output:
```
🔐 Testing encryption...
✅ Encrypted successfully
🔓 Decrypted successfully
✅ Encryption/Decryption test PASSED
```

### Test Routing Logger

```javascript
const RoutingLogger = require('./.github/scripts/routing-logger');
const logger = new RoutingLogger();

// Test logging
logger.logRouting(
  { job_title: 'Test Job', employer_name: 'Test Company' },
  'tech',
  'software engineer',
  '1234567890',
  'tech-jobs'
);

// Save (local development mode)
logger.savePlaintext();
```

## 📝 File Locations

```
New-Grad-Positions/
├── .github/
│   ├── audit/
│   │   ├── latest.md (sanitized audit - existing)
│   │   └── routing-encrypted.json (NEW - encrypted routing logs)
│   └── scripts/
│       ├── enhanced-discord-bot.js (modify this)
│       ├── encryption-utils.js (NEW)
│       ├── routing-logger.js (NEW)
│       ├── enhanced-channel-router.js (NEW)
│       └── decrypt-routing-logs.js (NEW)
├── .local/ (gitignored)
│   ├── logs/
│   │   └── routing-2025-11-15.json (local debug logs)
│   └── routing-logs-decrypted.json (decrypted production logs)
└── .gitignore (updated to exclude .local/)
```

## ❓ FAQ

**Q: What if I forget the password?**
A: Encrypted logs are unrecoverable. Set a new password in GitHub Secrets and wait for next bot run.

**Q: Can I view logs without decrypting?**
A: No, encrypted logs are AES-256-GCM encrypted. You must decrypt with the correct password.

**Q: How long are logs retained?**
A: Each bot run overwrites `routing-encrypted.json`. Git history preserves old versions.

**Q: What if the password is wrong?**
A: Decryption fails with error: "Invalid password - unable to authenticate data"

**Q: Can I decrypt logs on GitHub?**
A: No. Decryption is designed for local viewing only (security best practice).

## 🎉 Benefits

✅ **Debug production issues** - See exactly which channel each job was routed to
✅ **Identify false positives** - Find which keywords triggered incorrect matches
✅ **Secure by design** - Encrypted logs safe to commit, plaintext never leaves local machine
✅ **Easy troubleshooting** - Clear output shows job title, category, matched keyword, channel
✅ **Zero maintenance** - Automatic encryption on GitHub Actions, simple decryption locally

## 📚 Next Steps

1. Add GitHub Secret: `LOG_ENCRYPT_PASSWORD`
2. Integrate routing logger into Discord bot
3. Update workflow to commit encrypted logs
4. Run bot on GitHub Actions
5. Decrypt logs locally to debug routing issues

---

**Created:** 2025-11-15
**Status:** Ready for integration
**Security:** AES-256-GCM encryption with scrypt key derivation
