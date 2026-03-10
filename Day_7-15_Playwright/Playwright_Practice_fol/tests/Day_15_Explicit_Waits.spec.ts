import {test} from "@playwright/test"

test("Explicit Waits", async({page}) => {

    await page.goto("https://www.amazon.com/")

    await page.getByTestId("nav_cs_hul_disb").waitFor({timeout:20000, state : "detached"});

    await page.locator('[data-csa-c-content-id="nav_cs_hul_disb"]').waitFor({ timeout : 20000, state: "visible" });


    // (await page.waitForSelector("//span[text()='Best Sellers in Beauty & Personal Care']")).click()

    // await page.locator("xpath").click()
    
})


// state : attached, detached, visible, hidden, 