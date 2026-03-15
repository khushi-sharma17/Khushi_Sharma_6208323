import {test} from "@playwright/test"
import fs from "fs"
import path from "path"

let data = fs.readFileSync(path.join(__dirname, 'Day_7-15_Playwright/test_data/data.json'))

let datafile = JSON.parse(datafile)


test("json data", async({page}) => {
    // console.log(data.greet);

    data.forEach(d => {
        console.log(d.greet);
    })
})



test("for application", async({page}) => {
    
    await page.goto(data.url)
    await page.getByLabel("Username").fill(data.username)

    data.forEach(() => {
        
    })

})



test.only("for application", async({page}) => {

    for (let d of data.invalid) {
        let url = d.url
        let username = d.username
        let password = d.password

        await page.goto(url)
        console.log(page.title());
    }
})