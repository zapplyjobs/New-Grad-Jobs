async function handleChevronClickPagination(page, pageNum, companyName, selector) {
  console.log(`Looking for next page button for ${companyName} page ${pageNum + 1}...`);
  
  try {
    // Access pagination config directly from selector
    const paginationConfig = selector.pagination;
    const nextButtonSelector = paginationConfig.nextButtonSelector;
    const parentButtonSelector = paginationConfig.parentButtonSelector;
    const disabledAttribute = paginationConfig.disabledAttribute;
    const jobSelector = selector.jobSelector;
    
    // console.log(`Using selectors for ${companyName}:`, {
    //   nextButtonSelector,
    //   parentButtonSelector,
    //   disabledAttribute,
    //   jobSelector
    // });
    
    const nextButton = await page.$(nextButtonSelector);
    
    if (nextButton) {
      let isClickable = false;
      
      // Handle different pagination types based on company configuration
      if (companyName === "Synopsys" || (!parentButtonSelector && !disabledAttribute)) {
        // Simple approach for Synopsys and similar companies
        // Just check if the next button has 'disabled' class
        isClickable = await page.evaluate((button) => {
          return !button.classList.contains('disabled');
        }, nextButton);
        
        console.log(`${companyName} next button disabled status: ${!isClickable}`);
        
      } else {
        // Complex approach for Workday and similar companies
        // Check parent button and various disabled states
        isClickable = await page.evaluate((button, parentSelector, disabledAttr) => {
          let targetButton = button;
          
          // If parent selector is specified, check the parent button
          if (parentSelector) {
            const parentButton = button.closest(parentSelector);
            if (parentButton) {
              targetButton = parentButton;
            }
          }
          
          // Check various disabled states
          const isDisabled = targetButton.disabled || 
                            targetButton.getAttribute(disabledAttr || 'disabled') === 'true' ||
                            targetButton.getAttribute('aria-disabled') === 'true' ||
                            targetButton.classList.contains('disabled') ||
                            targetButton.hasAttribute('disabled');
          
          return !isDisabled;
        }, nextButton, parentButtonSelector, disabledAttribute);
        
        console.log(`${companyName} next button disabled status: ${!isClickable}`);
      }
      
      if (isClickable) {
        console.log(`Clicking next page button for ${companyName} page ${pageNum + 1}...`);
        
        if (companyName === "Synopsys" || (!parentButtonSelector && !disabledAttribute)) {
          // Simple click for Synopsys - direct click on the a.next link
          await nextButton.click();
          
          // Wait for navigation to complete (Synopsys uses page navigation)
          try {
            await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 45000 });
            console.log(`Successfully navigated to next page for ${companyName}`);
          } catch (navError) {
            console.log(`Navigation timeout for ${companyName}, but continuing...`);
          }
          
        } else {
          // Complex click for Workday and similar companies
          // Click the parent button if specified, otherwise click the next button directly
          if (parentButtonSelector) {
            const parentButton = await page.evaluateHandle((button, parentSelector) => {
              return button.closest(parentSelector);
            }, nextButton, parentButtonSelector);
            
            if (parentButton && !parentButton._disposed) {
              await parentButton.click();
              await parentButton.dispose(); // Clean up the handle
            } else {
              await nextButton.click();
            }
          } else {
            await nextButton.click();
          }
          
          // Wait for content to load (no navigation for dynamic content)
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
        
        // Wait for job listings to appear with company-specific selector
        try {
          await page.waitForSelector(jobSelector, { timeout: 10000 });
          console.log(`Successfully loaded next page content for ${companyName}`);
          return true; // Continue pagination
        } catch (waitError) {
          console.log(`Timeout waiting for job listings with selector "${jobSelector}" for ${companyName}`);
          return false; // Stop pagination if jobs don't load
        }
        
      } else {
        console.log(`Next page button is disabled for ${companyName}, reached last page`);
        return false; // Stop pagination
      }
    } else {
      console.log(`No next page button found with selector "${nextButtonSelector}" for ${companyName}, reached last page`);
      return false; // Stop pagination
    }
  } catch (error) {
    console.log(`Error navigating to next page for ${companyName}: ${error.message}`);
    return false; // Stop pagination on error
  }
}
// Usage example:
// const companyConfig = companySelectors[companyKey]; // Get from your selectors config
// const canContinue = await handleChevronClickPagination(page, pageNum, companyName, companyConfig);

async function infiniteScroll(page, companyName, maxPages) {
  try {
    await page.waitForSelector('li', { timeout: 100000 });
  } catch (error) {
    console.log(`No jobs found for ${companyName}, stopping...`);
    return false; // Indicate no jobs found
  }
  
  console.log(`Starting infinite scroll for ${companyName} with ${maxPages} scrolls...`);
  
  // Perform infinite scroll to load more jobs
  for (let scrollNum = 1; scrollNum <= maxPages; scrollNum++) {
    console.log(`Scroll ${scrollNum}/${maxPages} for ${companyName}...`);
    
    // Get current job count before scrolling
    const jobCountBefore = await page.evaluate(() => {
      const jobItems = document.querySelectorAll('li span.job-tile__title');
      return jobItems.length;
    });
    
    // Scroll to bottom of page
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    
    // Wait for new content to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check if more jobs loaded
    const jobCountAfter = await page.evaluate(() => {
      const jobItems = document.querySelectorAll('li span.job-tile__title');
      return jobItems.length;
    });
    
    if (jobCountAfter === jobCountBefore) {
      console.log(`No new jobs loaded after scroll ${scrollNum} for ${companyName}, reached end of listings. Stopping scroll.`);
      return false; // Stop scrolling
    } else {
      console.log(`Loaded ${jobCountAfter - jobCountBefore} new jobs after scroll ${scrollNum} for ${companyName}`);
    }
    
    // Add delay between scrolls to be respectful
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log(`Finished scrolling for ${companyName}, now extracting all job data...`);
  return true; // Indicate scrolling completed
}

async function handleShowMoreButton(page, companyName, maxPages) {
  console.log(`\n=== PHASE 1: Loading all jobs for ${companyName} (clicking Show More ${maxPages} times) ===`);
  
  for (let clickCount = 1; clickCount <= maxPages; clickCount++) {
    console.log(`Click attempt ${clickCount}/${maxPages}...`);
    
    try {
      await page.waitForSelector("div.job-card-container.list", { timeout: 100000 });
    } catch (error) {
      console.log(`No jobs found on page for ${companyName}, stopping...`);
      return false;
    }
    
    const currentJobCount = await page.$$eval("div.job-card-container.list", cards => cards.length);
    console.log(`Current job count: ${currentJobCount}`);
    
    console.log("Scrolling to find Show More button...");
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
      const containers = document.querySelectorAll([
        'div.inline-block.position-cards-container',
        'div.search-results-main-container',
        'div.flexbox'
      ].join(','));
      containers.forEach(container => {
        if (container) container.scrollTop = container.scrollHeight;
      });
    });
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const showMoreSelectors = [
      "#pcs-body-container > div:nth-child(2) > div.search-results-main-container > div > div.inline-block.position-cards-container > div > div.iframe-button-wrapper > button",
      "button.btn.btn-sm.btn-secondary.show-more-positions",
      "button[class*='show-more']",
      "button[data-automation-id*='show-more']",
      "button:not([disabled])[textContent*='Show More' i]"
    ];
    
    let showMoreClicked = false;
    
    for (const selector of showMoreSelectors) {
      try {
        const showMoreButton = await page.$(selector);
        
        if (showMoreButton) {
          const buttonInfo = await page.evaluate(button => {
            const rect = button.getBoundingClientRect();
            const styles = window.getComputedStyle(button);
            return {
              isVisible: rect.width > 0 && rect.height > 0,
              isDisplayed: styles.display !== 'none',
              isDisabled: button.disabled || button.hasAttribute('disabled')
            };
          }, showMoreButton);
          
          if (buttonInfo.isVisible && buttonInfo.isDisplayed && !buttonInfo.isDisabled) {
            await page.evaluate(button => {
              button.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            }, showMoreButton);
            
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            try {
              await showMoreButton.click();
            } catch (clickError) {
              await page.evaluate(button => button.click(), showMoreButton);
            }
            
            console.log(`✓ Clicked Show More button (${clickCount}/${maxPages})`);
            
            await new Promise(resolve => setTimeout(resolve, 4000));
            
            const newJobCount = await page.$$eval("div.job-card-container.list", cards => cards.length);
            console.log(`Job count after click: ${newJobCount} (was ${currentJobCount})`);
            
            if (newJobCount > currentJobCount) {
              console.log(`✓ Successfully loaded ${newJobCount - currentJobCount} more jobs`);
              showMoreClicked = true;
              break;
            } else {
              console.log(`⚠ Job count didn't increase, button might not have worked`);
            }
          } else {
            console.log(`Button found but not clickable: visible=${buttonInfo.isVisible}, displayed=${buttonInfo.isDisplayed}, disabled=${buttonInfo.isDisabled}`);
          }
        }
      } catch (error) {
        console.log(`Selector ${selector} failed: ${error.message}`);
        continue;
      }
    }
    
    if (!showMoreClicked) {
      console.log("No clickable Show More button found with any selector, stopping...");
      return false;
    }
  }
  
  return true;
}

module.exports = { handleChevronClickPagination, infiniteScroll,handleShowMoreButton };