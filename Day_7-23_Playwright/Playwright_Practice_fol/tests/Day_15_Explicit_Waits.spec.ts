import {test} from "@playwright/test"

test("Explicit Waits", async({page}) => {

    await page.goto("https://www.amazon.com/")

    // .waitFor() is an explicit wait
    await page.getByTestId("nav_cs_hul_disb").waitFor({timeout:20000, state : "detached"});

    // await page.locator('[data-csa-c-content-id="nav_cs_hul_disb"]').waitFor({ timeout : 20000, state: "visible" });


    // (await page.waitForSelector("//span[text()='Best Sellers in Beauty & Personal Care']")).click()

    // await page.locator("xpath").click()

    await page.waitForNavigation()      // we didn't trigger navigation before this, so : it will wait unnecessarily, Might timeout

    // Correct Pattern : 
    await Promise.all([
        page.waitForNavigation(),
        page.click("a")
    ])

    // await page.url()
    // await page2.url()

})


// 3. Unnecessary explicit waits
// 👉 Playwright already auto-waits


// state : attached, detached, visible, hidden, 



// the controller will be in the next path....




// Explicit Wait methods : 
/**
 * 1. locator.waitFor()
 * 2. waitForSelector("#login", {state : visible})   // older style , prefer the above one
 * 3. waitForNavigation()     // waits for page to load after navigation,  Use when : clicking a link, redirection happens
 * 4. waitForURL()          // Better than waitForNavigation
 * 5. waitForLoadState()     // State : load -> full page loaded, domcontentloaded, networkidle
 * 
 */







// what is the scope of page fixture ?
/**
 * page is one browser tab.
 * 
 * Scope : 
 * - page is created fresh for each test
 * - isolated between tests
 * - Not shared
 * 
 * why this matters : 
 * - No data leakage
 * - Parallel execution safe
 * - Clean Environment
 * 
 * 
 * If you want shared state :
 * Use : 
 * - context
 * - storageState
 */