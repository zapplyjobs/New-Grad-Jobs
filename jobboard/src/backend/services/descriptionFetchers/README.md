# Job Description Fetchers

Modular system for fetching job descriptions from various ATS (Applicant Tracking System) platforms.

## Architecture

```
descriptionFetchers/
├── index.js              # Main orchestrator with caching
├── cache.js              # Description caching (7-day TTL)
├── workdayFetcher.js     # Workday ATS (~40-50% of jobs)
├── greenhouseFetcher.js  # Greenhouse ATS (~30-40% of jobs)
├── ashbyFetcher.js       # Ashby ATS (~10-15% of jobs)
├── leverFetcher.js       # Lever ATS (common)
└── genericFetcher.js     # Fallback using meta tags/JSON-LD
```

## Supported Platforms

| Platform | URL Pattern | Coverage |
|----------|-------------|----------|
| **Workday** | `*.myworkdayjobs.com` | ~40-50% |
| **Greenhouse** | `*greenhouse` platform | ~30-40% |
| **Ashby** | `jobs.ashbyhq.com` | ~10-15% |
| **Lever** | `jobs.lever.co` | Common |
| **Generic** | Fallback for all others | ~20% |

## Usage

### Fetch Single Description

```javascript
const { fetchDescription } = require('./descriptionFetchers');

const result = await fetchDescription('https://example-company.com/careers/jobs/123');

if (result.success) {
  console.log(result.description);
  console.log(result.requirements); // Array or null
  console.log(result.responsibilities); // Array or null
}
```

### Fetch Multiple Descriptions (Batch)

```javascript
const { fetchDescriptionsBatch } = require('./descriptionFetchers');

const jobs = [
  { job_apply_link: 'https://...' },
  { job_apply_link: 'https://...' },
  // ...
];

const enrichedJobs = await fetchDescriptionsBatch(jobs, {
  batchSize: 10,
  delayBetweenRequests: 1000 // 1 second
});

// Each job now has:
// - job_description: Full description text
// - description_platform: Which platform was used
// - description_success: true/false
```

### Detect Platform

```javascript
const { detectPlatform } = require('./descriptionFetchers');

const platform = detectPlatform('https://truist.wd1.myworkdayjobs.com/...');
// Returns: 'workday'
```

### Cache Management

```javascript
const { cache } = require('./descriptionFetchers');

// Get cache stats
const stats = cache.getStats();
console.log(stats);
// {
//   totalEntries: 150,
//   activeEntries: 145,
//   expiredEntries: 5,
//   totalSizeMB: '2.34',
//   cacheDir: '...'
// }

// Clear all cache
cache.clear();

// Clear expired entries only
cache.clearExpired();
```

## Configuration

### Options

**fetchDescription(url, options)**
- `timeout`: Request timeout in ms (default: 10000)
- `retries`: Number of retry attempts (default: 3)
- `useCache`: Use cached results (default: true)

**fetchDescriptionsBatch(jobs, options)**
- `batchSize`: Jobs per batch (default: 10)
- `delayBetweenRequests`: Delay in ms (default: 1000)

### Cache Settings

- **TTL**: 7 days
- **Location**: `.github/data/description-cache/`
- **Format**: JSON files with MD5 hash filenames

## Return Format

```javascript
{
  success: true,              // Boolean
  platform: 'greenhouse',     // Platform name
  description: '...',         // Full description text
  requirements: [...],        // Array of requirements (or null)
  responsibilities: [...],    // Array of responsibilities (or null)
  metadata: {
    source: 'greenhouse',
    url: '...',
    fetchedAt: '2025-11-13T...'
  }
}
```

## Error Handling

- **Retry Logic**: 3 attempts with exponential backoff (2s, 4s, 8s)
- **Graceful Degradation**: Returns `success: false` instead of throwing
- **Fallback**: Generic fetcher tries multiple extraction methods

## Testing

Run the test suite:

```bash
node test-description-fetcher.js
```

Tests include:
1. Platform detection
2. Individual platform fetchers
3. Caching performance
4. Error handling

## Adding New Platforms

1. Create `newPlatformFetcher.js`:
```javascript
async function fetch(url, options = {}) {
  const { timeout = 10000 } = options;

  // Fetch and parse
  const description = ...;

  return {
    description,
    requirements: null,
    responsibilities: null,
    metadata: { source: 'newplatform', url, fetchedAt: new Date().toISOString() }
  };
}

module.exports = { fetch };
```

2. Update `index.js`:
```javascript
const newPlatformFetcher = require('./newPlatformFetcher');

function detectPlatform(url) {
  if (url.includes('newplatform.com')) return 'newplatform';
  // ...
}

// Add case in switch statement
case 'newplatform':
  result = await newPlatformFetcher.fetch(url, { timeout });
  break;
```

## Performance

- **Network fetch**: ~2-5 seconds per job
- **Cached fetch**: <10ms per job
- **Batch processing**: ~1 hour for 1000 jobs (with 1s delay)

## Best Practices

1. **Always use caching** for production workflows
2. **Respect rate limits**: 1-2 second delay between requests
3. **Monitor success rates**: Track `description_success` field
4. **Handle failures gracefully**: Jobs without descriptions should still post
5. **Clear expired cache** periodically to save disk space

## Troubleshooting

**Low success rate for a platform?**
- Check if platform changed their HTML structure
- Use browser DevTools to inspect new selectors
- Update the platform fetcher with new selectors

**Cache not working?**
- Check `.github/data/description-cache/` exists and is writable
- Verify cache TTL hasn't expired
- Check cache stats with `cache.getStats()`

**Timeouts?**
- Increase timeout option (default: 10s)
- Check network connectivity
- Platform may be slow to respond

## Security Considerations

1. **User-Agent**: Uses standard browser user agent
2. **Public Data**: Only scrapes publicly accessible job postings
3. **Rate Limiting**: Respects reasonable request delays
4. **No Authentication**: Does not bypass login requirements
5. **TOS Compliance**: Scraping public job boards is standard practice

## Future Enhancements

- [ ] Add more platforms (iCIMS, Taleo, SmartRecruiters)
- [ ] Extract salary information where available
- [ ] Parse structured data (benefits, remote status, etc.)
- [ ] Add parallel batch processing for faster fetching
- [ ] Implement proxy rotation for high-volume scraping
