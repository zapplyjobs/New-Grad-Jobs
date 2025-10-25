/**
 * GitHub Actions Workflow Log Analyzer
 *
 * Fetches and analyzes workflow run logs to debug issues like:
 * - Which companies are being skipped
 * - Why jobs aren't posted to location channels
 * - Workflow failures and patterns
 *
 * Usage:
 *   GITHUB_TOKEN=your_token node .github/scripts/analyze-workflow-logs.js
 *
 * Options:
 *   --workflow=update-jobs.yml  (default)
 *   --runs=10                   (number of runs to analyze, default: 10)
 *   --search="text to find"     (search for specific text in logs)
 */

const https = require('https');
const zlib = require('zlib');

// Configuration
const REPO_OWNER = 'zapplyjobs';  // Update with your GitHub username/org
const REPO_NAME = 'New-Grad-Jobs';  // Update with your repo name
const WORKFLOW_FILE = process.argv.find(arg => arg.startsWith('--workflow='))?.split('=')[1] || 'update-jobs.yml';
const NUM_RUNS = parseInt(process.argv.find(arg => arg.startsWith('--runs='))?.split('=')[1] || '10');
const SEARCH_TEXT = process.argv.find(arg => arg.startsWith('--search='))?.split('=')[1];

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!GITHUB_TOKEN) {
  console.error('❌ Error: GITHUB_TOKEN environment variable not set');
  console.error('Usage: GITHUB_TOKEN=your_token node analyze-workflow-logs.js');
  process.exit(1);
}

// GitHub API helper
function githubRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: path,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'workflow-log-analyzer'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      // Handle redirects (log downloads return 302)
      if (res.statusCode === 302 || res.statusCode === 301) {
        const redirectUrl = new URL(res.headers.location);
        const redirectReq = https.get(redirectUrl, (redirectRes) => {
          const chunks = [];
          redirectRes.on('data', chunk => chunks.push(chunk));
          redirectRes.on('end', () => {
            const buffer = Buffer.concat(chunks);
            // Logs are gzipped
            zlib.gunzip(buffer, (err, decompressed) => {
              if (err) {
                resolve(buffer.toString()); // Try plain text if not gzipped
              } else {
                resolve(decompressed.toString());
              }
            });
          });
        });
        redirectReq.on('error', reject);
        return;
      }

      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 400) {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        } else {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            resolve(data); // Return raw if not JSON
          }
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

// Main analysis function
async function analyzeWorkflowLogs() {
  console.log(`🔍 Analyzing ${NUM_RUNS} recent runs of ${WORKFLOW_FILE}...\n`);

  try {
    // Step 1: Get workflow runs
    const runsData = await githubRequest(
      `/repos/${REPO_OWNER}/${REPO_NAME}/actions/workflows/${WORKFLOW_FILE}/runs?per_page=${NUM_RUNS}`
    );

    if (!runsData.workflow_runs || runsData.workflow_runs.length === 0) {
      console.log('❌ No workflow runs found');
      return;
    }

    console.log(`✅ Found ${runsData.workflow_runs.length} workflow runs\n`);

    // Step 2: Analyze each run
    const skippedCompanies = new Set();
    const includedCompanies = new Set();
    const locationIssues = [];
    const failures = [];

    for (const run of runsData.workflow_runs) {
      const runNumber = run.run_number;
      const status = run.conclusion || run.status;
      const createdAt = new Date(run.created_at).toLocaleString();

      console.log(`📋 Run #${runNumber} - ${status} (${createdAt})`);

      // Track failures
      if (status === 'failure' || status === 'cancelled') {
        failures.push({ number: runNumber, status, url: run.html_url });
      }

      // Step 3: Get logs for this run
      try {
        const logs = await githubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/actions/runs/${run.id}/logs`);

        // Parse logs for company information
        const skippedMatches = logs.match(/❌ DEBUG: Companies SKIPPED[^:]*: \[(.*?)\]/);
        if (skippedMatches) {
          const companies = skippedMatches[1].split(',').map(c => c.trim().replace(/['"]/g, ''));
          companies.forEach(c => c && skippedCompanies.add(c));
        }

        const includedMatches = logs.match(/✅ DEBUG: Companies INCLUDED[^:]*: \[(.*?)\]/);
        if (includedMatches) {
          const companies = includedMatches[1].split(',').map(c => c.trim().replace(/['"]/g, ''));
          companies.forEach(c => c && includedCompanies.add(c));
        }

        // Check for location posting issues
        if (logs.includes('remote-usa') || logs.includes('Remote - USA')) {
          const remoteMatches = logs.match(/Posted to #remote-usa:.*?\n/g);
          if (remoteMatches) {
            locationIssues.push({ run: runNumber, matches: remoteMatches });
          }
        }

        // Search for specific text if requested
        if (SEARCH_TEXT && logs.includes(SEARCH_TEXT)) {
          console.log(`  🔍 Found "${SEARCH_TEXT}" in run #${runNumber}`);
          const lines = logs.split('\n').filter(line => line.includes(SEARCH_TEXT));
          lines.forEach(line => console.log(`     ${line.trim()}`));
        }

        console.log(`  ✅ Analyzed logs`);
      } catch (logError) {
        console.log(`  ⚠️  Could not fetch logs: ${logError.message}`);
      }

      console.log('');
    }

    // Step 4: Summary report
    console.log('\n' + '='.repeat(70));
    console.log('📊 ANALYSIS SUMMARY');
    console.log('='.repeat(70) + '\n');

    console.log(`🟢 Included Companies (${includedCompanies.size}):`);
    if (includedCompanies.size > 0) {
      console.log([...includedCompanies].sort().join(', '));
    } else {
      console.log('  (none found in logs)');
    }

    console.log(`\n🔴 Skipped Companies (${skippedCompanies.size}):`);
    if (skippedCompanies.size > 0) {
      console.log([...skippedCompanies].sort().join(', '));
    } else {
      console.log('  (none found in logs)');
    }

    if (failures.length > 0) {
      console.log(`\n⚠️  Failed/Cancelled Runs (${failures.length}):`);
      failures.forEach(f => {
        console.log(`  - Run #${f.number}: ${f.status}`);
        console.log(`    ${f.url}`);
      });
    }

    if (locationIssues.length > 0) {
      console.log(`\n📍 Location Posting Issues Found:`);
      console.log(`  Runs with remote-usa posts: ${locationIssues.length}`);
    }

    console.log('\n' + '='.repeat(70));

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.message.includes('401')) {
      console.error('\n💡 Tip: Make sure your GITHUB_TOKEN has "repo" or "actions:read" scope');
    }
  }
}

// Run the analyzer
analyzeWorkflowLogs();
