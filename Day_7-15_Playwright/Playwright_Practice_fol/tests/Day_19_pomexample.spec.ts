import {test} from "@playwright/test"
import Example from "C:/Users/vs/OneDrive/Desktop/Khushi_Sharma_6208323/Day_7-15_Playwright/Playwright_Practice_fol/tests/Day_19_pomexample.spec.ts"

test("", async({page}) => {

    let examplepage = new Example(page)

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await examplepage.usernameTF.fill("khushi")

})