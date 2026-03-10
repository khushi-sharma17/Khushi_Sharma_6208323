import {test, expect} from "@playwright/test"
test.use({
    actionTimeout : 3000
})

test("Assertions", async({page}) => {
    
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    // await page.waitForTimeout()

    const username = page.locator("//input[contains(@type,'text')]")
    const password = page.locator("//input[contains(@type,'password')]")


    await expect(username).toBeAttached()
    
    // await expect(page.locator("//input[contains(@type,'password')]"))
    
    // await page.screenshot({path:"screenshot/Assertions.png"});


    // await expect(username).toContainText()
    
    await expect(page.locator("//input[contains(@type,'text')]")).not.toContainClass("form-control")
    
    await expect(password).toHaveScreenshot()
    
})



// npx playwright show-report --port 9324

// Partial texts : 
// toHaveText
// toContainText

// what are soft assertions and hard assertions ?



// Types of waits : 
// autoWait....
// hard coded waits
// explicit waits




// waitForTimeout