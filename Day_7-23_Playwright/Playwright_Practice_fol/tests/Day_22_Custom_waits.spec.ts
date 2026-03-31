import {test} from "@playwright/test"

// waitForFunction allows waiting for custom JavaScript conditions in the browser context when built-in waits are insufficient.
test("custom waits", async({page}) => {

    await page.goto("https://www.amazon.in/")

    // custom waits
    await page.waitForFunction(() => {
        // return document.readyState === 'complete'
        let ele = document.querySelectorAll("cv bn")
        return ele.length > 1
    })

    const title = await page.title()
    console.log(title);
    
})



/**
 * waitForFunction is polling-based

It keeps checking like:

check → false
check → false
check → true 
 */



/**
 * 7. Why Use waitForFunction()?
Use it when:
✔ No proper locator exists
✔ Complex condition needed
✔ Dynamic UI logic

 */




/**
 * Timeout : 
Default timeout = 30 seconds
You can change it:
await page.waitForFunction(fn, { timeout: 10000 })
 */