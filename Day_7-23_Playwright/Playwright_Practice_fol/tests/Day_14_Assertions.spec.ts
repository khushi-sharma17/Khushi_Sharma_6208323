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
    // checks whether element exists in DOM or not....
    
    // await expect(page.locator("//input[contains(@type,'password')]"))
    
    // await page.screenshot({path:"screenshot/Assertions.png"});


    // await expect(username).toContainText()   --> wrong
    // Input fields don’t have text inside → they have value
    await expect(username).toHaveValue("something")
    
    await expect(page.locator("//input[contains(@type,'text')]")).not.toHaveClass("form-control")
    // toContainClass is not valid here.
    
    await expect(password).toHaveScreenshot()
    
})



// npx playwright show-report --port 9324

// toHaveText  --> exact match
// toContainText  --> partial match

// what are soft assertions and hard assertions ?



// Types of waits : 
// autoWait....
// hard coded waits
// explicit waits




// waitForTimeout