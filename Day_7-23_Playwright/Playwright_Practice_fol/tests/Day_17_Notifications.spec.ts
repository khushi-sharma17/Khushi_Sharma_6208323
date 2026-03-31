import {test} from "@playwright/test"

test("frame", async({browser}) => {
    
    let context = await browser.newContext({permissions : ["notifications"]})
    let page = await context.newPage()

    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")


    // evaluate --> Runs code inside the browser
    let result = await page.evaluate(() => {
        return Notification.requestPermission()         // This is a web API which either returns "granted" / "denied" or "default".....
    })
    
    console.log(result)         // should be 'granted'
})




/**
 * page.evaluate() — Deep Theory

await page.evaluate(() => {
    return Notification.requestPermission()
})

🔹 What it does:

👉 Runs code inside the browser

NOT Node.js ❌
BUT inside webpage ✅


✔ Two environments:
Environment	Runs where
Test code	Node.js


evaluate()	Browser (DOM)
✔ Example:
page.evaluate(() => document.title)


👉 This runs inside the page

 */