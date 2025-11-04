const fs = require("fs");
const path = require("path");

// Read selectors.json using fs
const selectorsPath = path.join(__dirname, "selectors.json");
const selectors = JSON.parse(fs.readFileSync(selectorsPath, "utf8"));

function getCompanies(searchQuery = "", pageNum = 1) {
  return {

       "amd": {
      name: "AMD",
      baseUrl: "",
      url: `https://careers.amd.com/careers-home/jobs?&keywords=${encodeURIComponent(searchQuery)}&stretchUnit=MILES&stretch=10&location=United%20States&woe=12&regionCode=US&page=${pageNum}`,
      selector: selectors.amd
    },
    // done

        //  "job_apply_link": "https://careers-amd.icims.com/jobs/67948/login"
    // https://careers.amd.com/careers-home/jobs/68449?lang=en-us
    // amd no posted date inside the job card detail


    "abb": {
      name: "ABB",
      baseUrl: "https://careers.abb",
      url: `https://careers.abb/global/en/search-results?keywords=${encodeURIComponent(searchQuery)}&from=${(pageNum - 1) * 10}&s=1`,
      selector: selectors.abb,
      filters: {
        "applyUSAFilter": {
          "accordionSelector": "button#Country\\/Territory\\/AreaAccordion.facet-menu.au-target",
          "searchInputSelector": "input[id='facetInput_5'][data-ps='1c680c5e-input-1']",
          "checkboxSelector": "input#country_phs_0.au-target",
          "searchTerm": "United States of America"
        }
      }
    },//not good
          // "job_apply_link": "https://careers.abb/global/en/job/JR00002120/Sales-Specialist"
    // https://careers.abb/global/en/job/JR00002120/Sales-Specialist
    // use this selctor #acc-skip-content > div.ph-page > div > div > div.job-page-external > div > div > div.col-lg-8.col-md-8.col-sm-12 > section:nth-child(1) > div > div > div.job-description.au-target.phw-widget-ctr-nd > div.jd-info.au-target > ul:nth-child(22)
    // problem
    // done
    // no posted date inside the job card detail

    "synopsys": {
      name: "Synopsys",
      baseUrl: "https://careers.synopsys.com",
      url: `https://careers.synopsys.com/search-jobs/Principal%20Full%20Stack%20Cloud%20&%20AI%20Software%20Engineer/United%20States/44408/1/2/6252001/39x7599983215332/-98x5/50/2`,
      selector: selectors.synopsys

      //  "job_apply_link": "https://careers.synopsys.com/search-jobs/job/hillsboro/silicon-validation-manager-12490/44408/84997058608"
      //https://careers.synopsys.com/job/hillsboro/silicon-validation-manager-12490/44408/84997058608
      //and use these selectors  #anchor-responsibilities > div.ats-description.ajd_job-details__ats-description > ul:nth-child(12)
      //done
    },


    "rivian": {
      name: "RIVIAN",
      baseUrl: "https://careers.rivian.com",
      url: `https://careers.rivian.com/careers-home/jobs?keywords=${encodeURIComponent(searchQuery)}&categories=Software%20Engineering&location=united%20states&stretch=10&stretchUnit=MILES&sortBy=relevance&page=${pageNum}`,
      selector: selectors.rivian
    },

    // ------------we have to use the data of apply link here

    //    // "job_apply_link": "https://us-careers-rivian.icims.com/jobs/20528/login"
    // https://careers.rivian.com/careers-home/jobs/22482?lang=en-us&previousLocale=en-US
    // https://careers.rivian.com/careers-home/jobs/20528?lang=en-us&previousLocale=en-US
    // selector li  for description
    // no posted date inside the job card detail
    // --------------------------------------------------------------------------------------having same structure

    apple: {
      name: "Apple",
      baseUrl: "https://jobs.apple.com",
      url: `https://jobs.apple.com/en-us/search?search=${encodeURIComponent(
        searchQuery
      ).replace(
        /%20/g,
        "+"
      )}&sort=relevance&location=united-states-USA&page=${pageNum}`,
      selector: selectors.apple,
    },
    //      "job_apply_link": "https://jobs.apple.com/en-us/details/200607287-0157/data science-development-engineer-data-center-data science?team=HRDWR"
    // https://jobs.apple.com/en-us/details/200607287-0157/data science-development-engineer-data-center-data science?team=HRDWR
    // selector #jobdetails-minimumqualifications

    // dif
    "arm": {
      name: "Arm",
      baseUrl: `https://careers.arm.com`,
      url: `https://careers.arm.com/search-jobs/software%20engineer/United%20States?orgIds=33099&kt=1&alp=6252001&alt=2&p=${pageNum}`,
      selector: selectors.arm

      // "job_apply_link": "https://careers.arm.com/job/austin/distinguished-engineer-and-architect-data science-verification/33099/82681565104"
      //https://careers.arm.com/job/austin/distinguished-engineer-and-architect-data science-verification/33099/82681565104
      // selctor:#anchor-responsibilities > div.ats-description > ul:nth-child(10)>li
    },
  //  we have to mkae sure to add the logic inside the detail extraction to get the posted data also 
  //    same in posted date to salesforce


  //   diff
  

//     //diff same as honey well
    jpmc: {
      name: "JPMorgan Chase",
      baseUrl: "https://jpmc.fa.oraclecloud.com",
      url: `https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/jobs?keyword=${encodeURIComponent(
        searchQuery
      )}&location=United+States&locationId=300000000469866&locationLevel=country&mode=location&selectedCategoriesFacet=300000086152753`,
      selector: selectors.jpmc,

      //      "job_apply_link": "https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210629578/?keyword=data science+engineer&location=United+States&locationId=300000000469866&locationLevel=country&mode=location"
      //https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/jobs/preview/210656130/?keyword=data science+engineering&location=United+States&locationId=300000000289738&locationLevel=country&mode=location
      //use this selector #ui-id-15 > div.oj-dialog-container > div.oj-dialog-content.oj-dialog-default-content > div > div.app-dialog__wrapper.app-dialog__wrapper--active.app-dialog__wrapper--align-center.oj-dialog-body > div > job-details-checker > job-details-loader > job-details-page > div > article > job-details-content > div > div.cc-page.cc-page--job-details-modal > div > div > div > div:nth-child(2) > div > div > div > div > div > div > ul:nth-child(8)
      //done
   //we have to mkae sure to add the logic inside the detail extraction to get the posted data also 
     //same in posted date to salesforce    
    },
    ti: {
      name: "Texas Instruments",
      baseUrl: "https://careers.ti.com",
      url: `https://careers.ti.com/en/sites/CX/jobs?keyword=${encodeURIComponent(
        searchQuery
      )}&lastSelectedFacet=CATEGORIES&location=United+States&locationId=300000000361862&locationLevel=country&mode=location`,
      selector: selectors.ti,
      //"job_apply_link": "https://careers.ti.com/en/sites/CX/job/25002271/?keyword=data science+engineer&location=United+States&locationId=300000000361862&locationLevel=country&mode=location"
      //https://careers.ti.com/en/sites/CX/jobs/preview/25002271/?keyword=data science+engineering&location=United+States&locationId=300000000361862&locationLevel=country&mode=location
      //use this selector #ui-id-13 > div > div.oj-dialog-content.oj-dialog-default-content > div > div.app-dialog__wrapper.app-dialog__wrapper--active.app-dialog__wrapper--align-center.oj-dialog-body > div > job-details-checker > job-details-loader > job-details-page > div > article > job-details-content > div > div.cc-page.cc-page--job-details-modal > div > div:nth-child(1) > div > div:nth-child(4) > div > div > div > div > div > div > ul:nth-child(2)
      //done
    },








    "waymo": {
      name: "Waymo",
      baseUrl: "https://careers.withwaymo.com",
      url: `https://careers.withwaymo.com/jobs/search?page=${pageNum}&department_uids%5B%5D=451e57010e816b71a8312792faf5740f&country_codes%5B%5D=US&dropdown_field_1_uids%5B%5D=032bf1b3c966086ebe1d0cd037cd2eef&dropdown_field_1_uids%5B%5D=5c171b4c656ebf8d39faf490d07d69d1&dropdown_field_1_uids%5B%5D=c08225843430b8d611354d3bffcc2bea&query=${encodeURIComponent(searchQuery)}`,
      selector: selectors.waymo
      //done


      //      "job_apply_link": "https://careers.withwaymo.com/jobs/electrical-engineer-compute-data science-mountain-view-california-united-states"
      //https://careers.withwaymo.com/jobs/electrical-engineer-compute-data science-mountain-view-california-united-states
      // and use the selector #job_description_1_2 > ul:nth-child(9)
// no posted date inside the job card detail

    },

    google: {
      name: "Google",
      baseUrl: "https://www.google.com/about/careers/applications",
       url: `https://www.google.com/about/careers/applications/jobs/results/?location=United%20States&target_level=EARLY&target_level=MID&target_level=INTERN_AND_APPRENTICE&q=${encodeURIComponent(
        searchQuery
      )}&page=${pageNum}`,
      selector: selectors.google,
      //filters applied
      //done
    //no posted date inside the job card detail
    },

    amazon: {
      name: "Amazon",
      baseUrl: "https://amazon.jobs",
      url: `https://www.amazon.jobs/en-gb/search?offset=${(pageNum - 1) * 10
        }&result_limit=10&sort=relevant&distanceType=Mi&radius=24km&industry_experience=one_to_three_years&latitude=38.89036&longitude=-77.03196&loc_group_id=&loc_query=united%20states&base_query=${encodeURIComponent(
          searchQuery
        )}&city=&country=USA&region=&county=&query_options=&`,
      selector: selectors.amazon,
      //filters applied
      //done
    },

    meta: {
      name: "Meta",
      baseUrl: "https://www.metacareers.com",
      url: `https://www.metacareers.com/jobs?teams[0]=University%20Grad%20-%20Business&teams[1]=University%20Grad%20-%20Engineering%2C%20Tech%20%26%20Design&teams[2]=University%20Grad%20-%20PhD%20%26%20Postdoc&teams[3]=Software%20Engineering&q=${encodeURIComponent(
        searchQuery
      )}&category%5B%5D=software-development&page=${pageNum}`
      ,
      selector: selectors.meta,
      //filter applied
      //done
    //no posted date inside the job card detail
    },
    microsoft: {
      name: "Microsoft",
      baseUrl: "https://jobs.careers.microsoft.com",
      url: `https://jobs.careers.microsoft.com/global/en/search?&q=${encodeURIComponent(
        searchQuery
      )}&d=Software%20Engineering&lc=United%20States&exp=Students%20and%20graduates&l=en_us&pg=${pageNum}&pgSz=20&o=Relevance&flt=true`
      ,
      selector: selectors.microsoft,
      // filter applied
      //done
      //https://jobs.careers.microsoft.com/global/en/job/1892746/Services-Account-Executive---Strategic-Account-IC4
    },
    "ibm": {
      name: "IBM",
      baseUrl: "https://www.ibm.com",
      url: `https://www.ibm.com/careers/search?field_keyword_08[0]=Software%20Engineering&field_keyword_18[0]=Entry%20Level&field_keyword_18[1]=Internship&field_keyword_05[0]=United%20States&q=${encodeURIComponent(searchQuery)}&p=${pageNum}`,
      selector: selectors.ibm
      //"job_city": "Entry LevelNew York",
      //done
      //no posted date available even after clicking the job 
      
    },
    salesforce: {
      name: "Salesforce",
      baseUrl: "https://careers.salesforce.com",
      url: `https://careers.salesforce.com/en/jobs?page=${pageNum}&search=${encodeURIComponent(searchQuery)}&country=United%20States%20of%20America&team=Software+Engineering&jobtype=Apprentice+%28Fixed+Term%29&jobtype=Intern&jobtype=New+Grads&jobtype=Regular&pagesize=20#results`,
      selector: selectors.salesforce
      //we have to mkae sure to add the logic inside the detail extraction to get the posted data also 
    },
    "dell": {
      name: "Dell",
      baseUrl: "https://dell.wd1.myworkdayjobs.com",
      url: `https://dell.wd1.myworkdayjobs.com/External?q=${encodeURIComponent(searchQuery)}&Location_Country=bc33aa3152ec42d4995f4791a106ed09&Job_Profiles=914289f44c2f018d77a638aa9c39fce5&Job_Profiles=914289f44c2f0167a70527aa9c3992e5&Job_Profiles=914289f44c2f01177ee92faa9c39c6e5&Job_Profiles=914289f44c2f01ef8daa54b19c396cf6&Job_Profiles=7b0a08cdc207018a15c9fc3c1d048ce6`,
      selector: selectors.dell
    },

    "infineon": {
      name: "Infineon Technologies",
      baseUrl: "https://jobs.infineon.com",
      url: `https://jobs.infineon.com/careers?query=${encodeURIComponent(searchQuery)}&start=${(pageNum - 1) * 10}&location=united%20states&pid=563808956305280&Join%20as=student%2Fintern%2Ftrainee&Join%20as=graduate%20%28incl.%20graduate%20programs%29&Join%20as=apprentice&Join%20as=dual%20student&domain=infineon.com&sort_by=timestamp`,
      selector: selectors.infineon,
      //done
      //no date inside the job card detail
    },
    "micron": {
      key: "micron",
      name: "Micron Technology",
      baseUrl: "https://careers.micron.com",
      url: `https://careers.micron.com/careers?query=${encodeURIComponent(searchQuery).replace(/%20/g, '+')}&start=${(pageNum - 1) * 10}&location=united+states&sort_by=timestamp&filter_include_remote=1&filter_seniority=1%2C0%2C2`,
      selector: selectors.micron
      //click on each job card and use this selector 
      //#job-description-container > div > div > ul:nth-child(8)
      //done
    },

  

    analogdevices: {
      name: "Analog Devices",
      baseUrl: "https://analogdevices.wd1.myworkdayjobs.com",
      url: `https://analogdevices.wd1.myworkdayjobs.com/External?q=${encodeURIComponent(
        searchQuery
      )}&jobFamilyGroup=70d83412bedc1001051ae66d2e950000&jobFamilyGroup=633b03df4f5d1000ec2458c3865d0000&jobFamilyGroup=633b03df4f5d1000ec247e24e03b0000&locationCountry=bc33aa3152ec42d4995f4791a106ed09`,
      selector: selectors.analogdevices,
    },
    //  just have to click on each job and use the below selector

    // https://analogdevices.wd1.myworkdayjobs.com/en-US/External/details/Sr-Systems-and-data science-Engineer_R251086?q=data science+engineer&locationCountry=bc33aa3152ec42d4995f4791a106ed09
    // #mainContent > div > div.css-1142bqn > div > div > section > div > div.css-oa138a > div > div > div > div.css-1i27f3a > div > div.css-t7l5ok > ul:nth-child(12) > li
    //done

    "appliedmaterials": {
      name: "Applied Materials",
      baseUrl: "https://careers.appliedmaterials.com",
      url: `https://careers.appliedmaterials.com/careers?domain=appliedmaterials.com&triggerGoButton=false&query=${encodeURIComponent(searchQuery)}&start=${(pageNum - 1) * 10}&location=united+states&pid=790304383258&sort_by=solr&filter_include_remote=1&filter_country=United+States+of+America&filter_seniority=Mid-Level%2CEntry%2CManager`,
      selector: selectors.appliedmaterials
      //it is having its own filter in the url
      //done
    },

    "baesystems": {
      name: "BAE Systems",
      baseUrl: "https://bah.wd1.myworkdayjobs.com",
      url: `https://bah.wd1.myworkdayjobs.com/en-US/BAH_Jobs?q=${encodeURIComponent(searchQuery)}`,
      selector: selectors.baesystems
      //onclicking each job u have to use this #mainContent > div > div.css-1142bqn > div > div > section > div > div.css-oa138a > div > div > div > div.css-1i27f3a > div > div.css-muoh1b > ul:nth-child(5)>li
      //same as analog 
      //DONE
    },










    "broadcom": {
      name: "Broadcom",
      baseUrl: "https://broadcom.wd1.myworkdayjobs.com",
      url: `https://broadcom.wd1.myworkdayjobs.com/External_Career?q=${encodeURIComponent(searchQuery)}&locationCountry=bc33aa3152ec42d4995f4791a106ed09`,
      selector: selectors.broadcom
      //click on the link and use this selector #mainContent > div > div.css-1142bqn > div > div > section > div > div.css-oa138a > div > div > div > div.css-1i27f3a > div > div.css-i1swdh > ul:nth-child(12)
      //exactly same also selctor same to the analog 
      //DONE
    },


    "cisco": {
      name: "Cisco",
      baseUrl: `https://jobs.cisco.com`,
      url: `https://jobs.cisco.com/jobs/SearchJobs/${searchQuery}?21181=%5B187%5D&21181_format=6023&21178=%5B169482%5D&21178_format=6020&21180=%5B166%2C164%2C165%5D&21180_format=6022&listFilterMode=1&projectOffset=${(pageNum - 1) * 10}`,
      selector: selectors.cisco
      // filtered by url for apprentice ,early in career ,intern
      //done
    },

    "gdit": {
      name: "General Dynamics",
      baseUrl: "https://gdit.wd5.myworkdayjobs.com",
      url: `https://gdit.wd5.myworkdayjobs.com/External_Career_Site?q=${encodeURIComponent(searchQuery)}`,
      selector: selectors.gdit
      // on clicking each job we have to use the selector
      // document.querySelector('.css-1x6f30n').textContent;
      // and we have to search for Experience : years
      // DONE
    },

    "10xgenomics": {
      name: "10x Genomics",
      baseUrl: "https://careers.10xgenomics.com",
      url: `https://careers.10xgenomics.com/careers?query=${encodeURIComponent(searchQuery.replace(/ /g, '+'))}&start=${(pageNum - 1) * 10}&location=united+states&sort_by=solr&filter_include_remote=1`,
      selector: selectors['10xgenomics']
      //same click the job and use this selctor 
      // //#job-description-container > div > ul:nth-child(10)
      // done
    },

    "guidehouse": {
      name: "Guidehouse",
      baseUrl: "https://guidehouse.wd1.myworkdayjobs.com",
      url: `https://guidehouse.wd1.myworkdayjobs.com/en-US/External?q=${encodeURIComponent(searchQuery)}&Location_Country=bc33aa3152ec42d4995f4791a106ed09&jobFamily=d44ba6ecd0281001edd7c970874b0000&jobFamily=0301db9670ec01ad66d5eba4c700c10b`,
      selector: selectors.guidehouse
      //same click one each job and use the selector
      //#mainContent > div > div.css-1142bqn > div > div > section > div > div.css-oa138a > div > div > div > div.css-1i27f3a > div > div.css-ydj8rt > ul:nth-child(13)
      // //DONE
    },

    "hpe": {
      name: "Hewlett Packard Enterprise",
      baseUrl: "https://hpe.wd5.myworkdayjobs.com",
      url: `https://hpe.wd5.myworkdayjobs.com/WFMathpe?q=${encodeURIComponent(searchQuery)}&locations=e459dee6bf0a01f51082fd2708240d5c&locations=3950c424ea1c01d5b87223aa442cc958&locations=e69f9781661b10219199635d840babb5&locations=bb84e32ded880145afe5d2d0dd2b5c62&locations=f607629c2aa1010d124a5599402c703f&locations=e69f9781661b102191a28884e0f0b85f&locations=e459dee6bf0a01607d49d56409244b64&locations=e69f9781661b1021919815e9ca32a9ee&locations=bb84e32ded88013ee847c281d92b6745&locations=90058e87ba0e1001d2f4d7e27b0d0000&locations=47385449f64a017d4c903202dc2b5657&locations=98cbd30d374e10330ceffda6d7a4fc41&locations=2e0d9cc9554b01deafe88869442cb356&locations=acac3e510b17018644380803dc2b7f55&locations=bb84e32ded88017f2a05da01dc2b4656&locations=2e0d9cc9554b01761ed1696d442cbe56&locations=62b0c47c914b015d3c97fb6707248955&locations=acac3e510b1701630be274ffdb2b6d55&locations=98cbd30d374e10330cf05e491004fc5f&locations=cc3bff87cf8101bded44c0f2dc00e375&locations=f607629c2aa10196b908a08e462c0567`,
      selector: selectors.hpe
      //same as before click on each job and use this selector
      //#mainContent > div > div.css-1142bqn > div > div > section > div > div.css-oa138a > div > div > div > div.css-1i27f3a > div > div.css-11ukcqc
      //done
    },

    "illumina": {
      name: "Illumina",
      baseUrl: "https://illumina.wd1.myworkdayjobs.com",
      url: `https://illumina.wd1.myworkdayjobs.com/illumina-careers?q=${encodeURIComponent(searchQuery)}&locationCountry=bc33aa3152ec42d4995f4791a106ed09jobFamilyGroup=b69e8a0c349510d41b51ed3048a08c72&jobFamilyGroup=7d0395d4a924423b9b4cc70a22ff605e&jobFamilyGroup=174f84e0d2084db4ba1f194cb79b316d&jobFamilyGroup=662dc3b84e394f76a0fa663a3b349ff1`,
      selector: selectors.illumina
      //same as before click on the job and use this selector
      //#mainContent > div > div.css-1142bqn > div > div > section > div > div.css-oa138a > div > div > div > div.css-1i27f3a > div > div.css-oplht1 > div > div > div > div > ul:nth-child(6)
      //done
    },

    "intel": {
      name: "Intel",
      baseUrl: "https://intel.wd1.myworkdayjobs.com",
      url: `https://intel.wd1.myworkdayjobs.com/External?q=${encodeURIComponent(searchQuery)}&locations=1e4a4eb3adf101b8aec18a77bf810dd0&locations=1e4a4eb3adf1018c4bf78f77bf8112d0&locations=1e4a4eb3adf10118b1dfe877bf8162d0&locations=da6b8032b879100204a63a809f6c0000&locations=1e4a4eb3adf10146fd5c5276bf81eece&locations=1e4a4eb3adf1011246675c76bf81f8ce&locations=0741efd9f02e01994a3c9ca2ae078199&locations=1e4a4eb3adf1016541777876bf8111cf&locations=1e4a4eb3adf101fa2a777d76bf8116cf&locations=1e4a4eb3adf10174f0548376bf811bcf&jobFamilyGroup=ace7a3d23b7e01a0544279031a0ec85c`,
      selector: selectors.intel
      // same as above and use the selector
      //#mainContent > div > div.css-1142bqn > div > div > section > div > div.css-oa138a > div > div > div > div.css-1i27f3a > div > div.css-1hv0qyi > div:nth-child(17)
      //done
    },

    "magna": {
      name: "Magna International",
      baseUrl: "https://wd3.myworkdaysite.com",
      url: `https://wd3.myworkdaysite.com/en-US/recruiting/magna/Magna?q=${encodeURIComponent(searchQuery)}&Country=bc33aa3152ec42d4995f4791a106ed09&jobFamilyGroup=5aaaed564f430127348455ca250345df`,
      selector: selectors.magna
      //same use this selctor after clicking the job 
      //#mainContent > div > div.css-1142bqn > div > div > section > div > div.css-oa138a > div > div > div > div.css-1i27f3a > div > div.css-zokh5w > div:nth-child(11)
      //done
      //some hardware jobs are there so we have to filter them out
    },

    "marvel": {
      name: "Marvel Technology",
      baseUrl: "https://marvell.wd1.myworkdayjobs.com",
      url: `https://marvell.wd1.myworkdayjobs.com/MarvellCareers?q=${encodeURIComponent(searchQuery)}&Country=bc33aa3152ec42d4995f4791a106ed09&jobFamilyGroup=65dea26481d001fb93160edd98173001`,
      selector: selectors.marvel
      // //same use this selctor after clicking the job 
      //       //#mainContent > div > div.css-1142bqn > div > div > section > div > div.css-oa138a > div > div > div > div.css-1i27f3a > div > div.css-dwylkc > ul:nth-child(17)
      //done
    },

    "nvidia": {
      name: "NVIDIA",
      baseUrl: "https://nvidia.wd5.myworkdayjobs.com",
      url: `https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite?q=${encodeURIComponent(searchQuery)}&locationHierarchy1=2fcb99c455831013ea52fb338f2932d8&jobFamilyGroup=0c40f6bd1d8f10ae43ffaefd46dc7e78`,
      selector: selectors.nvidia
      //same as above
      //#mainContent > div > div.css-1142bqn > div > div > section > div > div.css-oa138a > div > div > div > div.css-1i27f3a > div > div.css-4r17ng > ul:nth-child(9)

      //done
    },

    "verizon": {
      name: "Verizon",
      baseUrl: "https://verizon.wd12.myworkdayjobs.com",
      url: `https://verizon.wd12.myworkdayjobs.com/verizon-careers/?q=${encodeURIComponent(searchQuery)}&locationCountry=bc33aa3152ec42d4995f4791a106ed09`,
      selector: selectors.verizon
      //same as above
      //#mainContent > div > div.css-1142bqn > div > div > section > div > div.css-oa138a > div > div > div > div.css-1i27f3a > div > div.css-4r17ng > ul:nth-child(7)
      //done
    },

    "workday": {
      name: "Workday",
      baseUrl: "https://workday.wd5.myworkdayjobs.com",
      url: `https://workday.wd5.myworkdayjobs.com/Workday?q=${encodeURIComponent(searchQuery)}&Location_Country=bc33aa3152ec42d4995f4791a106ed09`,
      selector: selectors.workday
      //same as above and use the following selector 
      //#mainContent > div > div.css-1142bqn > div > div > section > div > div.css-oa138a > div > div > div > div.css-1i27f3a > div > div.css-1rdwyhm > ul:nth-child(30)
      //done
    },








 
  };
}

module.exports = { getCompanies };
