import {test} from "@playwright/test"

test("frame", async({page, browser}) => {

    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")

    let context = await browser.newContext({permissions : ["notifications"]})

    let result = await page.evaluate(() => {
        return Notification.requestPermission()
    })
    
})