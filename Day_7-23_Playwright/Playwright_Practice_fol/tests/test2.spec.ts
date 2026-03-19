import {test} from "@playwright/test";

// page fixture 
// test("title2", async({page}) => {
//     // goto
//     await page.goto("https://www.amazon.in/")
//     await page.locator('input#twotabsearchtextbox').fill("shoes")
// })


// tests and workers
// test("title2", async({browser}) => {
//     let context = await browser.newContext()
//     let page = await context.newPage()


//     await page.goto("https://www.amazon.in/")
//     await page.locator('input#twotabsearchtextbox').fill("shoes")
// })



// test("title2", async({context}) => {

//     let page = await context.newPage()
//     // goto
    
//     await page.goto("https://www.amazon.in/")
//     await page.locator('input#twotabsearchtextbox').fill("shoes")
// })



test("title2", async({browser, browserName}) => {

    let context = await browser.newContext()
    let page = await context.newPage()
    let page2 = await context.newPage()

    // goto
    
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("shoes")
    
    // await page.pause()
    // await page2.goto("https://www.flipkart.com")
    // await page2.locator('input.nw1UBF.v1zwn25').fill("search")
    console.log(browserName);
    
})




// command = npx playwright test tests/test2.spec.ts

// ! fixtures ---> It is a setup block of code which is reusable


/**
 * page
 * browser
 * browserName
 * context
 * request  ----> API
 */



// exexcute command = npx playwright test tests/test2.spec.ts


// npx playwright test tests/test2.spec.ts --headed