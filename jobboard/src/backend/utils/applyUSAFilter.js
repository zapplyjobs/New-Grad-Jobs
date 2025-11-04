async function applyUSAFilter(page, filterSelectors) {
  console.log("=== Applying USA location filter ===");
  console.log("Filter selectors received:", JSON.stringify(filterSelectors, null, 2));
  
  const maxRetries = 3;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🔄 Attempt ${attempt}/${maxRetries}`);
      
      // Step 1: Click location accordion (if provided)
      if (filterSelectors.accordionSelector) {
        console.log(`Looking for accordion selector: ${filterSelectors.accordionSelector}`);
        
        await page.waitForSelector(filterSelectors.accordionSelector, { timeout: 10000 });
        const accordionButton = await page.$(filterSelectors.accordionSelector);
        
        if (accordionButton) {
          console.log(`✓ Clicking location accordion...`);
          await accordionButton.click({ delay: 100 });
          await new Promise(resolve => setTimeout(resolve, 2000));
        } else {
          console.log(`⚠ Accordion button not found (Attempt ${attempt})`);
          continue;
        }
      }

      // Step 2: Type in search input (if provided)
      if (filterSelectors.searchInputSelector) {
        console.log(`Looking for search input selector: ${filterSelectors.searchInputSelector}`);
        
        await page.waitForSelector(filterSelectors.searchInputSelector, { 
          visible: true, 
          timeout: 10000 
        });
        
        const searchInput = await page.$(filterSelectors.searchInputSelector);
        if (searchInput) {
          const searchTerm = filterSelectors.searchTerm || "United States of America";
          console.log(`✓ Typing '${searchTerm}'...`);
          await searchInput.focus();
          
          // Clear input field properly
          await searchInput.click({ clickCount: 3 }); // Select all text
          await page.keyboard.press('Delete'); // Delete selected text
          
          await searchInput.type(searchTerm, { delay: 100 });
          await new Promise(resolve => setTimeout(resolve, 2000));
        } else {
          console.log(`⚠ Search input not found (Attempt ${attempt})`);
          continue;
        }
      }

      // Step 3: Click USA checkbox/option
      if (filterSelectors.checkboxSelector) {
        console.log(`Looking for checkbox selector: ${filterSelectors.checkboxSelector}`);
        
        await page.waitForSelector(filterSelectors.checkboxSelector, { 
          visible: true, 
          timeout: 10000 
        });
        
        const usaCheckbox = await page.$(filterSelectors.checkboxSelector);
        if (usaCheckbox) {
          console.log(`✓ Clicking USA checkbox...`);
          
          // Check if checkbox is already checked
          const isChecked = await page.evaluate(el => el.checked, usaCheckbox);
          console.log(`Checkbox already checked: ${isChecked}`);
          
          if (!isChecked) {
            await usaCheckbox.click({ delay: 100 });
          }
          
          console.log("✅ USA filter applied successfully");
          await new Promise(resolve => setTimeout(resolve, 3000));
          return true;
        } else {
          console.log(`⚠ USA checkbox not found (Attempt ${attempt})`);
        }
      }

    } catch (error) {
      console.log(`❌ Error applying USA filter (Attempt ${attempt}/${maxRetries}): ${error.message}`);
      
      // Add more detailed error logging
      if (error.message.includes('waiting for selector')) {
        console.log(`Selector timeout error. Current page URL: ${await page.url()}`);
        
        // Take a screenshot for debugging
        try {
          await page.screenshot({ path: `debug_attempt_${attempt}.png` });
          console.log(`Screenshot saved: debug_attempt_${attempt}.png`);
        } catch (screenshotError) {
          console.log('Could not take screenshot:', screenshotError.message);
        }
      }
      
      if (attempt === maxRetries) {
        console.log("⚠ Max retries reached, could not apply USA filter");
        return false;
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  return false;
}

module.exports = { applyUSAFilter}