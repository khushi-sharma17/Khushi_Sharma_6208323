import {test} from "@playwright/test"

// The test function is used to define a test case.



//? we are adding some extra label


/**
 * skip = used to skip a test case
 * only = Run ONLY this test and ignore all others
 * describe = used to group multiple tests together
 * slow = marks a test as slow running
 * setTimeout = Used to increase timeout limit.
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







