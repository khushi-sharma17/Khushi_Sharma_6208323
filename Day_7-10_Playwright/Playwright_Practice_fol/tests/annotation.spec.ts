import {test} from "@playwright/test"

//? we are adding some extra label


/**
 * skip
 * 
 * describe
 * slow
 * settlement
 */






// commands : npx playwright test relative path --header
// commands : npx playwright test -g "test2"



test("test2", async() => {
    console.log("test5");
})


// test("title2", async ({ page, browserName }) => {

//     await page.goto("https://www.flipkart.com");

//     await page.getByPlaceholder("Search for Products, Brands and More")
//               .fill("search");

//     console.log(browserName);
// });


// npx playwright test -g "test2"