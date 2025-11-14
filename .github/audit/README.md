# Audit Logs - Obfuscated Bot Activity

**Purpose:** Sanitized execution logs for Discord bot runs, committed to repository for debugging.

## Why Obfuscated Logs?

**Problem:** Discord bot logs contain sensitive information (company names, job titles, Discord IDs) that shouldn't be in public git history.

**Solution:** Audit logs use one-way hashing to preserve debugging capability while protecting privacy.

## Obfuscation Mapping

| Original | Obfuscated | Example |
|----------|-----------|---------|
| Company names | `ORG_[hash]` | "Google" → `ORG_3c8a9f12` |
| Job titles | `ROLE_[hash]` | "Software Engineer" → `ROLE_7b2e4a56` |
| Job IDs | `JID_[hash]` | "google-swe-12345" → `JID_9d4f1c23` |
| Discord channels | `CH_[hash]` | "1429..." → `CH_a5f8d091` |

## What's Preserved?

✅ **Timestamps** - Exact execution times
✅ **Metrics** - Job counts (posted, failed, skipped)
✅ **Errors** - Full error messages (sanitized)
✅ **Status codes** - Exit codes and success/failure
✅ **Database saves** - Whether posted_jobs.json was updated

## What's Hidden?

❌ **Company names** - Hashed for privacy
❌ **Job titles** - Hashed for privacy
❌ **Discord IDs** - Hashed for security
❌ **Job URLs** - Part of job ID hash

## Reading Audit Logs

**For debugging:**
1. Check `latest.md` for most recent run
2. Look for "Database Saved: YES" to verify posted_jobs.json update
3. Check error section for failures
4. Compare metrics (posted/failed/skipped) with expected values

**For full details:**
1. Go to Actions tab → Select workflow run
2. Download artifacts: `job-processing-logs-[run-number].zip`
3. Extract and view `discord-bot.log` (full, unsanitized log)

## Retention

- **Audit logs (git):** Committed permanently, only `latest.md` updated each run
- **Full logs (artifacts):** Kept for 90 days, then auto-deleted
- **Timestamped audit logs:** Created each run but not committed (local only)

## Security Note

✅ **Safe to commit** - All sensitive data hashed
✅ **Safe to share** - Repository can remain public
✅ **Debuggable** - Patterns still visible, metrics intact

Hashes are deterministic (same input → same hash), so you can track:
- Same company across runs
- Same job appearing multiple times
- Channel posting patterns

---

*For questions about audit log format, see `.github/scripts/create-audit-log.js`*
