import {test} from "@playwright/test"

test("get by methods", async({page}) => {
    
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.getByLabel("Username", {exact : true}).fill("student")

    await page.getByLabel("Password").fill("Password123")

    // await page.getByRole("textbox", {name : "Username", exact : true}).fill("student")

    await page.getByRole("button", { name: "Submit" }).click();

    await page.getByPlaceholder("Enter your name").fill("Khushi")
    
})