import {test} from "@playwright/test"

// test("test1", async({browser}) => {

//     let context = await browser.newContext()

//     let page = await context.newPage()

//     // await page.goto("https://www.myntra.com/shoes?rawquery=shoes")

//     let page2 = await context.newPage()
//     await page2.goto("https://www.flipkart.com/")


//     await page.getByPlaceholder("Search for Products, Brands and More").first().fill("shoes")

//     await page.keyboard.press("Enter")

//     let [page3] = await Promise.all([
//         page.waitForEvent("popup"),
//         page.locator('//img[@class="MZeksS"]').first().click()
//     ])

//     console.log(page);
//     console.log(page2);

// })


// there are 6 window handlers







test("test2", async({browser}) => {

    let context = await browser.newContext()

    let page = await context.newPage()

    await page.goto("https://demoapps.qspiders.com/ui/browser/product/1")

    await page.locator("//h1[@class='text-3xl font-bold mb-2']")


})





// https://demoapps.qspiders.com/ui/download?sublist=0

// write the text

// change the file name 

// and download it 