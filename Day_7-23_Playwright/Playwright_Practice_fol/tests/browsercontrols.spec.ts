import {test} from "@playwright/test"

// npx playwright test tests/browsercontrolss.spec.ts 


test("browser controls", async({page, browser}) => {

    // let size = await page.viewportSize()
    // console.log(size);
    // await page.setViewportSize({width : 500, height : 500})
    // console.log(await page.viewportSize());

    let context = await browser.newContext();
    // let page = await context.newPage();

    await page.goto("https://www.amazon.com/")
    let time = new Date().getTime()

    await page.screenshot({path : `screenshot/${time}.png`})
    console.log(await context.cookies());



    // const title = await page.url()

    // console.log(title);


    await browser.close();

})