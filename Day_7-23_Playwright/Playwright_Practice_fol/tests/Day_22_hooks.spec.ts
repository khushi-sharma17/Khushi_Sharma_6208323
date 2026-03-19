import {test} from "@playwright/test"

// Don't use fixtures here
test.beforeAll("", async() => {
    console.log("before all");
})

test.beforeEach("", async() => {
    console.log("before Each");
})

test.afterAll("", async() => {
    console.log("after all");
})

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