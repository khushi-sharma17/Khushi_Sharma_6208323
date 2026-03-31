import {test} from "@playwright/test"

// Don't use fixtures here --> A pre configured object provided by playwright
// Hooks = These are special functions that run at specific times in the test lifecycle
// Think of them as like = setup and cleanup logic around your tests


// Runs once before all tests
test.beforeAll("", async() => {
    console.log("before all");
})

// Runs before every test
test.beforeEach("", async() => {
    console.log("before Each");
})

// Runs once after all tests
test.afterAll("", async() => {
    console.log("after all");
})

// Runs after every test
test.afterEach("", async() => {
    console.log("after Each");
})

test.skip("test 1", async({page}) => {
    console.log("test 1");
})

test("test 2", async({page}) => {
    console.log("test 2");
})


// beforeAll
// beforeEach
// afterAll
// afterEach




/**

👉 Playwright runs tests in **parallel by default**

So:

* `beforeAll` is per file (or per worker)
* Each test still gets its own isolated environment

 */