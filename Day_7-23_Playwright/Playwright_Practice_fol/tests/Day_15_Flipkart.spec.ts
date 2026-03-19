import { test } from "@playwright/test";

// test("flipkart first shoe price", async ({ page }) => {

//   await page.goto("https://www.flipkart.com/search?q=shoes");

//   // locate the first shoe
//   const firstShoe = page.locator('//div[@class="Fo1I0b"]').first();

//   // remove target="_blank" so it opens in same tab
//   await page.evaluate(() => {
//     const link = document.querySelector('a[target="_blank"]');
//     if (link) link.removeAttribute('target');
//   });

//   // click and wait for navigation
//   await Promise.all([
//     page.waitForNavigation(),
//     firstShoe.click()
//   ]);

//   // fetch the price on product page
//   const price = await page.locator('//div[contains(@class,"Nx9bqj")]').innerText();

//   console.log("Price of first shoe:", price);

// });



test.only("task12", async({page}) => {

    await page.goto("https://www.flipkart.com/")
    await page.locator("//span[@class='b3wTLE']").click()
    await page.locator("//input[@class='nw1UBF vlzwn25']").first().fill("phones")
    await page.locator("//button[@class='XFwMiH']").first().click()

    // await page.waitForNavigation()

    // await page.locator()


    let page2 = await Promise.all([
        page.waitForNavigation(),
        page.locator("//a[@class='k7wcnx']").first().click()
    ])

    console.log(await page.url());
    // console.log(await page2.url())
    
})