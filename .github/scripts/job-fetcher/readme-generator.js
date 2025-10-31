const fs = require("fs");
const companyCategory = require("./software.json");
const {
  companies,
  ALL_COMPANIES,
  getCompanyEmoji,
  getCompanyCareerUrl,
  formatTimeAgo,
  getExperienceLevel,
  getJobCategory,
  formatLocation,
} = require("./utils");

// Generate enhanced job table with better formatting
// Import or load the JSON configuration

function generateJobTable(jobs) {
  console.log(`🔍 DEBUG: Starting generateJobTable with ${jobs.length} total jobs`);
  
  if (jobs.length === 0) {
    return `| Company | Role | Location | Posted | Level | Category | Apply |
|---------|------|----------|--------|-------|----------|-------|
| *No current openings* | *Check back tomorrow* | *-* | *-* | *-* | *-* | *-* |`;
  }

  // Create a map of lowercase company names to actual names for case-insensitive matching
  const companyNameMap = new Map();
  Object.entries(companyCategory).forEach(([categoryKey, category]) => {
    category.companies.forEach(company => {
      companyNameMap.set(company.toLowerCase(), { 
        name: company, 
        category: categoryKey,
        categoryTitle: category.title 
      });
    });
  });

  console.log(`🏢 DEBUG: Configured companies by category:`);
  Object.entries(companyCategory).forEach(([categoryKey, category]) => {
    console.log(`  ${category.emoji} ${category.title}: ${category.companies.join(', ')}`);
  });

  // Get unique companies from job data
  const uniqueJobCompanies = [...new Set(jobs.map(job => job.employer_name))];
  console.log(`\n📊 DEBUG: Unique companies found in job data (${uniqueJobCompanies.length}):`, uniqueJobCompanies);

  // Group jobs by company - PROCESS ALL COMPANIES (whitelist filter removed)
  const jobsByCompany = {};
  const processedCompanies = new Set();

  jobs.forEach((job) => {
    const companyName = job.employer_name;
    processedCompanies.add(companyName);

    if (!jobsByCompany[companyName]) {
      jobsByCompany[companyName] = [];
    }
    jobsByCompany[companyName].push(job);
  });

  console.log(`\n✅ DEBUG: ALL Companies INCLUDED (${processedCompanies.size}):`, [...processedCompanies].sort());

  // Log job counts by company
  console.log(`\n📈 DEBUG: Job counts by company:`);
  Object.entries(jobsByCompany)
    .sort((a, b) => b[1].length - a[1].length) // Sort by job count descending
    .forEach(([company, jobs]) => {
      const companyInfo = companyNameMap.get(company.toLowerCase());
      const category = companyInfo?.categoryTitle || 'Uncategorized';
      console.log(`  ${company}: ${jobs.length} jobs (Category: ${category})`);
    });

  let output = "";

  // Handle each category
  Object.entries(companyCategory).forEach(([categoryKey, categoryData]) => {
    // Filter companies that actually have jobs
    const companiesWithJobs = categoryData.companies.filter(company => 
      jobsByCompany[company] && jobsByCompany[company].length > 0
    );
    
    if (companiesWithJobs.length > 0) {
      const totalJobs = companiesWithJobs.reduce((sum, company) => 
        sum + jobsByCompany[company].length, 0
      );
      
      console.log(`\n📝 DEBUG: Processing category "${categoryData.title}" with ${companiesWithJobs.length} companies and ${totalJobs} total jobs:`);
      companiesWithJobs.forEach(company => {
        console.log(`  - ${company}: ${jobsByCompany[company].length} jobs`);
      });
      
      output += `### ${categoryData.emoji} **${categoryData.title}** (${totalJobs} positions)\n\n`;

      // First handle companies with more than 10 jobs - each gets its own table/section
      const bigCompanies = companiesWithJobs.filter(
        companyName => jobsByCompany[companyName].length > 10
      );

      bigCompanies.forEach((companyName) => {
        const companyJobs = jobsByCompany[companyName];
        const emoji = getCompanyEmoji(companyName);
        
        if (companyJobs.length > 50) {
          output += `<details>\n`;
          output += `<summary><h4>${emoji} <strong>${companyName}</strong> (${companyJobs.length} positions)</h4></summary>\n\n`;
        } else {
          output += `#### ${emoji} **${companyName}** (${companyJobs.length} positions)\n\n`;
        }
        
        output += `| Role | Location | Posted | Level | Category | Apply |\n`;
        output += `|------|----------|--------|-------|----------|-------|\n`;
        
        companyJobs.forEach((job) => {
          const role = job.job_title;
          const location = formatLocation(job.job_city, job.job_state);
          const posted = formatTimeAgo(job.job_posted_at_datetime_utc);
          const level = getExperienceLevel(job.job_title, job.job_description);
          const category = getJobCategory(job.job_title, job.job_description);
          const applyLink = job.job_apply_link || getCompanyCareerUrl(job.employer_name);

          let statusIndicator = "";
          const description = (job.job_description || "").toLowerCase();
          if (description.includes("no sponsorship") || description.includes("us citizen")) {
            statusIndicator = " 🇺🇸";
          }
          if (description.includes("remote")) {
            statusIndicator += " 🏠";
          }

          output += `| ${role}${statusIndicator} | ${location} | ${posted} | ${level} | ${category} | [Apply](${applyLink}) |\n`;
        });
        
        if (companyJobs.length > 50) {
          output += `\n</details>\n\n`;
        } else {
          output += "\n";
        }
      });

      // Then combine all companies with 10 or fewer jobs into one table
      const smallCompanies = companiesWithJobs.filter(
        companyName => jobsByCompany[companyName].length <= 10
      );

      if (smallCompanies.length > 0) {
        output += `| Company | Role | Location | Posted | Level | Category | Apply |\n`;
        output += `|---------|------|----------|--------|-------|----------|-------|\n`;

        smallCompanies.forEach((companyName) => {
          const companyJobs = jobsByCompany[companyName];
          const emoji = getCompanyEmoji(companyName);
          
          companyJobs.forEach((job) => {
            const role = job.job_title;
            const location = formatLocation(job.job_city, job.job_state);
            const posted = formatTimeAgo(job.job_posted_at_datetime_utc);
            const level = getExperienceLevel(job.job_title, job.job_description);
            const category = getJobCategory(job.job_title, job.job_description);
            const applyLink = job.job_apply_link || getCompanyCareerUrl(job.employer_name);

            let statusIndicator = "";
            const description = (job.job_description || "").toLowerCase();
            if (description.includes("no sponsorship") || description.includes("us citizen")) {
              statusIndicator = " 🇺🇸";
            }
            if (description.includes("remote")) {
              statusIndicator += " 🏠";
            }

            output += `| ${emoji} **${companyName}** | ${role}${statusIndicator} | ${location} | ${posted} | ${level} | ${category} | [Apply](${applyLink}) |\n`;
          });
        });
        
        output += "\n";
      }
    }
  });

  // NEW: Process uncategorized companies (not in software.json)
  const categorizedCompanies = new Set();
  Object.values(companyCategory).forEach(category => {
    category.companies.forEach(company => categorizedCompanies.add(company));
  });

  const uncategorizedCompanies = Object.keys(jobsByCompany).filter(
    company => !categorizedCompanies.has(company)
  );

  if (uncategorizedCompanies.length > 0) {
    const totalUncategorizedJobs = uncategorizedCompanies.reduce(
      (sum, company) => sum + jobsByCompany[company].length, 0
    );

    console.log(`\n📝 DEBUG: Processing UNCATEGORIZED companies: ${uncategorizedCompanies.length} companies with ${totalUncategorizedJobs} jobs`);

    output += `### 🏢 **Other Companies** (${totalUncategorizedJobs} positions)\n\n`;

    // Handle large uncategorized companies (>10 jobs) separately
    const bigUncategorized = uncategorizedCompanies.filter(
      company => jobsByCompany[company].length > 10
    );

    bigUncategorized.forEach((companyName) => {
      const companyJobs = jobsByCompany[companyName];
      const emoji = getCompanyEmoji(companyName);

      if (companyJobs.length > 50) {
        output += `<details>\n`;
        output += `<summary><h4>${emoji} <strong>${companyName}</strong> (${companyJobs.length} positions)</h4></summary>\n\n`;
      } else {
        output += `#### ${emoji} **${companyName}** (${companyJobs.length} positions)\n\n`;
      }

      output += `| Role | Location | Posted | Level | Category | Apply |\n`;
      output += `|------|----------|--------|-------|----------|-------|\n`;

      companyJobs.forEach((job) => {
        const role = job.job_title;
        const location = formatLocation(job.job_city, job.job_state);
        const posted = formatTimeAgo(job.job_posted_at_datetime_utc);
        const level = getExperienceLevel(job.job_title, job.job_description);
        const category = getJobCategory(job.job_title, job.job_description);
        const applyLink = job.job_apply_link || getCompanyCareerUrl(job.employer_name);

        let statusIndicator = "";
        const description = (job.job_description || "").toLowerCase();
        if (description.includes("no sponsorship") || description.includes("us citizen")) {
          statusIndicator = " 🇺🇸";
        }
        if (description.includes("remote")) {
          statusIndicator += " 🏠";
        }

        output += `| ${role}${statusIndicator} | ${location} | ${posted} | ${level} | ${category} | [Apply](${applyLink}) |\n`;
      });

      if (companyJobs.length > 50) {
        output += `</details>\n\n`;
      } else {
        output += "\n";
      }
    });

    // Handle small uncategorized companies (<=10 jobs) in one table
    const smallUncategorized = uncategorizedCompanies.filter(
      company => jobsByCompany[company].length <= 10
    );

    if (smallUncategorized.length > 0) {
      output += `| Company | Role | Location | Posted | Level | Category | Apply |\n`;
      output += `|---------|------|----------|--------|-------|----------|-------|\n`;

      smallUncategorized.forEach((companyName) => {
        const companyJobs = jobsByCompany[companyName];
        const emoji = getCompanyEmoji(companyName);

        companyJobs.forEach((job) => {
          const role = job.job_title;
          const location = formatLocation(job.job_city, job.job_state);
          const posted = formatTimeAgo(job.job_posted_at_datetime_utc);
          const level = getExperienceLevel(job.job_title, job.job_description);
          const category = getJobCategory(job.job_title, job.job_description);
          const applyLink = job.job_apply_link || getCompanyCareerUrl(job.employer_name);

          let statusIndicator = "";
          const description = (job.job_description || "").toLowerCase();
          if (description.includes("no sponsorship") || description.includes("us citizen")) {
            statusIndicator = " 🇺🇸";
          }
          if (description.includes("remote")) {
            statusIndicator += " 🏠";
          }

          output += `| ${emoji} **${companyName}** | ${role}${statusIndicator} | ${location} | ${posted} | ${level} | ${category} | [Apply](${applyLink}) |\n`;
        });
      });

      output += "\n";
    }
  }

  console.log(`\n🎉 DEBUG: Finished generating job table with ${Object.keys(jobsByCompany).length} companies processed (${categorizedCompanies.size} categorized + ${uncategorizedCompanies.length} uncategorized)`);
  return output;
}
function generateInternshipSection(internshipData) {
  if (!internshipData) return "";

  return `
---

## 🎓 **SWE Internships 2025-2026** 

> **Top internships for students in data science, statistics, analytics, and related majors.**

### 🏢 **FAANG+ Internship Programs**

| Company | Program | Application Link | Status |
|---------|---------|------------------|--------|
${internshipData.companyPrograms
  .map((program) => {
    const companyObj = ALL_COMPANIES.find((c) => c.name === program.company);
    const emoji = companyObj ? companyObj.emoji : "🏢";
    return `| ${emoji} **${program.company}** | ${program.program} | [Apply](${program.url}) | ${program.deadline} |`;
  })
  .join("\n")}

### 📚 **Top Software Internship Resources**

| Platform | Type | Description | Link |
|----------|------|-------------|------|
${internshipData.sources
  .map(
    (source) =>
      `| **${source.emogi} ${source.name}** | ${source.type} | ${source.description} | [Visit](${source.url}) |`
  )
  .join("\n")}

`;
}

function generateArchivedSection(archivedJobs, stats) {
  if (archivedJobs.length === 0) return "";

  const archivedFaangJobs = archivedJobs.filter((job) =>
    companies.faang_plus.some((c) => c.name === job.employer_name)
  ).length;

  return `
---

<details>
<summary><h2>🗂️ <strong>ARCHIVED SWE JOBS</strong> - ${
    archivedJobs.length
  } Older Positions (7+ days old) - Click to Expand 👆</h2></summary>

### 📊 **Archived Job Stats**
- **📁 Total Jobs**: ${archivedJobs.length} positions
- **🏢 Companies**: ${Object.keys(stats.totalByCompany).length} companies
- **⭐ FAANG+ Jobs & Internships**: ${archivedFaangJobs} positions

${generateJobTable(archivedJobs)}

</details>

---

`;
}

// Generate comprehensive README
async function generateReadme(currentJobs, archivedJobs = [], internshipData = null, stats = null) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const totalCompanies = Object.keys(stats?.totalByCompany || {}).length;
  const faangJobs = currentJobs.filter((job) =>
    companies.faang_plus.some((c) => c.name === job.employer_name)
  ).length;

  return `<div align="center">

<!-- Banner -->
<img src="jobboard/public/mega-zapply.png" alt="Zapply - New Grad Jobs" width="200">

<h3>💼 New Grad Jobs 2025-2026</h3>
<p><em>Real-time job opportunities from 261 companies</em></p>

<br>

<!-- Row 1: Job Stats (Custom Static Badges) -->
![Total Jobs](https://img.shields.io/badge/Total_Jobs-${currentJobs.length}-brightgreen?style=flat&logo=briefcase)
![Companies](https://img.shields.io/badge/Companies-261-blue?style=flat&logo=building)
![FAANG+ Jobs](https://img.shields.io/badge/FAANG+_Jobs-${faangJobs}-red?style=flat&logo=star)
![Updated](https://img.shields.io/badge/Updated-Every_15_Minutes-orange?style=flat&logo=calendar)
![License](https://img.shields.io/badge/License-CC--BY--NC--4.0-purple?style=flat&logo=creativecommons)

<!-- Row 2: Repository Stats -->
![GitHub stars](https://img.shields.io/github/stars/zapplyjobs/New-Grad-Jobs?style=flat&logo=github&color=yellow)
![GitHub forks](https://img.shields.io/github/forks/zapplyjobs/New-Grad-Jobs?style=flat&logo=github&color=blue)
![Last commit](https://img.shields.io/github/last-commit/zapplyjobs/New-Grad-Jobs?style=flat&color=red)
![Contributors](https://img.shields.io/github/contributors/zapplyjobs/New-Grad-Jobs?style=flat&color=green)

<!-- Row 3: Workflow Health -->
![Update Jobs](https://img.shields.io/github/actions/workflow/status/zapplyjobs/New-Grad-Jobs/update-jobs.yml?style=flat&label=job-updates&logo=github-actions&logoColor=white)

<!-- Row 4: Community & Links (for-the-badge style) -->
[![Browse Jobs](https://img.shields.io/badge/Browse_Jobs-Live_Site-FF6B35?style=for-the-badge&logo=rocket&logoColor=white)](https://new-grad-positions.vercel.app/)
[![Zapply](https://img.shields.io/badge/Zapply-Company_Site-4F46E5?style=for-the-badge&logo=zap&logoColor=white)](https://zapply-jobs.vercel.app/)
[![Discord](https://img.shields.io/badge/Discord-Join_Community-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/yKWw28q7Yq)
[![Reddit](https://img.shields.io/badge/Reddit-Join-FF4500?style=for-the-badge&logo=reddit&logoColor=white)](https://www.reddit.com/r/Zapply/)
[![Report Issue](https://img.shields.io/badge/Report_Issue-Bug_Tracker-yellow?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zapplyjobs/New-Grad-Jobs/issues)

<!-- Zapply extension badge - add when extension launches -->
<!-- [![Zapply Extension](https://img.shields.io/badge/Extension-Apply_Faster-4F46E5?style=for-the-badge&logo=chrome&logoColor=white)](https://zapply-extension-url) -->

</div>

---

# 💻 Software Engineering Jobs & Internships 2025-2026 by Zapply

**🚀 Real-time software engineering, programming, and IT jobs from 250 companies like Tesla, NVIDIA, and Raytheon. Updated every 24 hours with ${currentJobs.length} fresh opportunities for data analysts, scientists, and entry-level software developers.**

**🎯 Includes roles across tech giants, fast-growing startups, and engineering-first companies like Chewy, CACI, and TD Bank.**

**🛠  Help us grow! Add new jobs by submitting an issue! View contributing steps here.**

---

## Apply Faster with Zapply
⚡ Apply to 50 jobs in the time it takes to do 5. Use Zapply’s extension to instantly submit applications across Tesla, Amazon, NVIDIA, and 500+ other data-focused employers.  
[Download Zapply Extension](#)
---

## ⭐ Stay Up-to-Date
**Don't miss new opportunities!**  
- 🌟 **Star this repo** to get updates on your GitHub dashboard
- 👁️ **Watch** for instant notifications on new jobs
- 🔔 **Turn on notifications** to never miss FAANG+ postings

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=zapplyjobs/New-Grad-Jobs&type=Date&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=zapplyjobs/New-Grad-Jobs&type=Date" />
  <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=zapplyjobs/New-Grad-Jobs&type=Date" />
</picture>


---

## 📊 Live Stats
- **🔥 Current Positions**: ${currentJobs.length}
- **🏢 Companies**: 261 companies
- **⭐ FAANG+ Jobs**: ${faangJobs} premium opportunities
- **📅 Last Updated**: ${currentDate}
- **🤖 Next Update**: Tomorrow at 9 AM UTC



${internshipData ? generateInternshipSection(internshipData) : ""}

---

## 🎯 Fresh Software Job Listings 2025-2026 (Under 1 Week)

${generateJobTable(currentJobs)}

---

## Current Job Insights

### 🏢 Top Companies

#### 🌟 FAANG+ (${companies.faang_plus.length} companies)
${companies.faang_plus.map((c) => `${c.emoji} [${c.name}](${c.career_url})`).join(" • ")}

#### 🦄 Unicorn Startups (${companies.unicorn_startups.length} companies)
${companies.unicorn_startups.map((c) => `${c.emoji} [${c.name}](${c.career_url})`).join(" • ")}

#### 💰 Fintech Leaders (${companies.fintech.length} companies)
${companies.fintech.map((c) => `${c.emoji} [${c.name}](${c.career_url})`).join(" • ")}

#### 🎮 Gaming & Entertainment (${[...companies.gaming, ...companies.media_entertainment].length} companies)
${[...companies.gaming, ...companies.media_entertainment].map((c) => `${c.emoji} [${c.name}](${c.career_url})`).join(" • ")}

#### ☁️ Enterprise & Cloud (${[...companies.top_tech, ...companies.enterprise_saas].length} companies)
${[...companies.top_tech, ...companies.enterprise_saas].map((c) => `${c.emoji} [${c.name}](${c.career_url})`).join(" • ")}

---

## 📈 Experience Breakdown

| Level               | Count | Percentage | Top Companies                     |
|---------------------|-------|------------|-----------------------------------|
| 🟢 Entry Level & New Grad | ${stats?.byLevel["Entry-Level"] || 0} | ${stats ? Math.round((stats.byLevel["Entry-Level"] / currentJobs.length) * 100) : 0}% | No or minimal experience |
| 🟡 Beginner & Early Career | ${stats?.byLevel["Mid-Level"] || 0} | ${stats ? Math.round((stats.byLevel["Mid-Level"] / currentJobs.length) * 100) : 0}% | 1-2 years of experience |
| 🔴 Manager         | ${stats?.byLevel["Senior"] || 0} | ${stats ? Math.round((stats.byLevel["Senior"] / currentJobs.length) * 100) : 0}% | 2+ years of experience |

---

## 🌍 Top Locations
${stats ? Object.entries(stats.byLocation)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 8)
  .map(([location, count]) => `- **${location}**: ${count} positions`)
  .join("\n") : ""}

---

## 🔍 Filter by Role Category
${stats ? Object.entries(stats.byCategory)
  .sort((a, b) => b[1] - a[1])
  .map(([category, count]) => {
    const icon = {
      "Mobile Development": "📱",
      "Frontend Development": "🎨",
      "Backend Development": "⚙️",
      "Full Stack Development": "🌐",
      "Machine Learning & AI": "🧠",
      "Data Science & Analytics": "📊",
      "DevOps & Infrastructure": "☁️",
      "Security Engineering": "🛡️",
      "Product Management": "📋",
      "Design": "🎨",
      "Software Engineering": "💻",
    }[category] || "💻";

    const categoryJobs = currentJobs.filter(
      (job) => getJobCategory(job.job_title, job.job_description) === category
    );
    const topCompanies = [...new Set(categoryJobs.slice(0, 3).map((j) => j.employer_name))];

    return `#### ${icon} ${category} (${count} positions)
${topCompanies
  .map((company) => {
    const companyObj = ALL_COMPANIES.find((c) => c.name === company);
    const emoji = companyObj ? companyObj.emoji : "🏢";
    return `${emoji} ${company}`;
  })
  .join(" • ")}`;
  })
  .join("\n\n") : ""}

---

## 🔮 Why Software Engineers Choose Our Job Board

- ✅ **100% Real Jobs**: ${currentJobs.length} verified roles for Software Engineering roles from 250 companies.
- ✅ **Fresh Daily Updates**: Live data from Tesla, Raytheon, Chewy, and CACI refreshed every 24 hours automatically.
- ✅ **Entry-Level Focused**: Smart filtering for internships and entry-level analytics roles.
- ✅ **Intern-to-FTE Pipeline**: Track internships converting to full-time roles.
- ✅ **Direct Applications**: Bypass recruiters—apply directly to career pages for Tesla, Amazon, and NVIDIA.
- ✅ **Mobile-Optimized**: Ideal mobile experience for students job hunting between classes.

---

## 🚀 **Job Hunt Tips That Actually Work**

### 🔍 **Research Before Applying**
- Find the hiring manager: Search "[Company] [Team] engineering manager" on LinkedIn.
- Check recent tech decisions: Review their engineering blog for stack changes or new initiatives.
- Verify visa requirements: Look for 🇺🇸 indicators or "US persons only" in the job description.
- Use this [100% ATS-compliant resume template](#).

### 📄 **Resume Best Practices**
- Mirror their tech stack:  Copy exact keywords from job post (React, Django, Node.js, etc.)..
- Lead with business impact: “Improved app speed by 30%” > “Used JavaScript.”
- Show product familiarity: Example: "Built Netflix-style recommendation engine" or "Created Stripe payment integration."
- Read this [guide on resume tweaks](#).

### 🎯 **Interview Best Practices**
- Ask domain questions: "How do you handle CI/CD at scale?" shows real research.
- Prepare case stories: "Migration failed, learned X, rebuilt with Y" demonstrates growth mindset.
- Reference their products:  "As a daily Slack user, I've noticed..." proves genuine interest.
- Review this [interview guide](#) for behavioral, technical, and curveball questions.

---

## 📬 **Stay Updated**

- **⭐ Star this repo** to bookmark for daily checks.
- **👀 Watch to get notified of new SWE jobs.
- **🔔 Subscribe to our newsletter** for instant updates.
- **📱 Bookmark on mobile** for quick job hunting.

---

## 🤝 **Become a Contributor**
Add new jobs! See the [contributing guide](#contributing-guide).

### Contributing Guide
#### 🎯 Roles We Accept
- Located in the US, Canada, or Remote.
- Not already in our database.
- Currently accepting applications.

#### 🚀 How to Add Jobs
1. Create a new issue.
2. Select the "New Job" template.
3. Fill out and submit the form.
   > Submit separate issues for each position, even from the same company.

#### ✏️ How to Update Jobs
1. Copy the job URL to edit.
2. Create a new issue.
3. Select the "Edit Job" template.
4. Paste the URL and describe changes.

#### ⚡ What Happens Next
- Our team reviews within 24-48 hours.
- Approved jobs are added to the main list.
- The README updates automatically via script.
- Contributions go live at the next daily refresh (9 AM UTC).
- Questions? Create a miscellaneous issue, and we’ll assist! 🙏



${archivedJobs.length > 0 ? generateArchivedSection(archivedJobs, stats) : "No archived jobs available."}

---

## 🌟 Recognition & Press

**Zapply's New Grad Jobs has been featured and trusted by thousands of job seekers!**

- 📰 **Featured on GitHub Trending** - Top trending repository for job seekers
- 💼 **Trusted by 1000+ job seekers** in our Discord community
- 🚀 **Daily updates** ensure you never miss new opportunities
- ⭐ **Community-driven** with contributions from developers worldwide

> *Have you featured or mentioned our repo? Let us know and we'll add you here!*

---

<div align="center">

**🎯 ${currentJobs.length} current opportunities from 261 companies**

**Found this helpful? Give it a ⭐ to support Zapply!**

*Not affiliated with any companies listed. All applications redirect to official career pages.*

---

**Last Updated**: ${currentDate} • **Next Update**: Daily at 9 AM UTC

</div>`;
}

// Update README file
async function updateReadme(currentJobs, archivedJobs, internshipData, stats) {
  try {
    console.log("📝 Generating README content...");
    const readmeContent = await generateReadme(
      currentJobs,
      archivedJobs,
      internshipData,
      stats
    );
    fs.writeFileSync("README.md", readmeContent, "utf8");
    console.log(`✅ README.md updated with ${currentJobs.length} current jobs`);

    console.log("\n📊 Summary:");
    console.log(`- Total current: ${currentJobs.length}`);
    console.log(`- Archived:      ${archivedJobs.length}`);
    console.log(
      `- Companies:     ${Object.keys(stats?.totalByCompany || {}).length}`
    );
  } catch (err) {
    console.error("❌ Error updating README:", err);
    throw err;
  }
}

module.exports = {
  generateJobTable,
  generateInternshipSection,
  generateArchivedSection,
  generateReadme,
  updateReadme,
};
