import {test} from "@playwright/test"

test("test1", async({browser}) => {

    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.myntra.com/shoes?rawquery=shoes")

    let page2 = await context.newPage()
    await page2.goto("https://www.flipkart.com/")


    await page.getByPlaceholder("Search for Products, Brands and More").first().fill("shoes")
    await page.keyboard.press("Enter")

    let [page3] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator('//img[@class="MZeksS"]').first().click()
    ])

    console.log(page);
    console.log(page2);

    console.log(await context.pages());

})


// there are 6 window handlers

/**
 * 👉 In Selenium:
called window handlers

👉 In Playwright:
called Page objects
 */







test("test2", async({browser}) => {

    let context = await browser.newContext()

    let page = await context.newPage()

    await page.goto("https://demoapps.qspiders.com/ui/browser/product/1")

    // await expect(page.locator("//h1[@class='text-3xl font-bold mb-2']"))

    let text = await page.locator("//h1[@class='text-3xl font-bold mb-2']").textContent()
    console.log(text)

})





// https://demoapps.qspiders.com/ui/download?sublist=0

// write the text
// change the file name 
// and download it 