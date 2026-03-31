import {test} from "@playwright/test"

// The test function is used to define a test case.



//? we are adding some extra label


/**
 * skip = used to skip a test case
 * only = Run ONLY this test and ignore all others
 * describe = used to group multiple tests together
 * slow = marks a test as slow running
 * setTimeout = Used to increase timeout limit.
 * fixme = bonus ()
 */






// commands : npx playwright test relative path --headed
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







//annotations- we are adding some extra labels
//skip , only, fix me, fail, describe, slow, settimeout

// test.skip("test 1",async()=>{
// console.log();
// })
// test("test 2",async()=>{
// console.log();
// })
// test("test 3",async()=>{
// console.log();
// })
// test("test 4",async()=>{
// console.log();
// })



// test.slow("test1", async() => {
//     test.slow()
//     console.log("test1");
// })


// test.describe("test6", async() => {
//     console.log("test6");
//     test("", () => {})
// })


// test.describe("test6", async() => {

//     console.log("test6");
    
//     test("", async({page}) => {

//     });

//     test("", () => {})
//     test("", () => {})
// })



// test.fail("test6", async() => {

//     console.log("test6");
    
//     test("", async({page}) => {

//     })

//     test("", () => {})
//     test("", () => {})
// })








//span[text()="Search"]

//span[contains(text(),"Nike")]

//span[contains(@class,"shortcut-name nav-assistant-card-font")]

//span[contains(@atribute, "")]

