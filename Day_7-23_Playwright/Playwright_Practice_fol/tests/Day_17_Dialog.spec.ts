import {test} from "@playwright/test"

test("", async({page}) => {

    page.on("dialog", async(d) => {

        await d.accept("gvschbsjn")

        // returns a promise only
        if (d.type() == "alert") {
            await d.accept("")
            await d.defaultValue()          // gives "Harry Potter"
        }
        
        // confirm
        else if (d.type() == "confirm") {
            await d.dismiss()
            await d.message()
        }


        else if (d.type() == "prompt") {
            await d.accept("hello")

            if (d.defaultValue() == "harry potter") {
                console.log(await d.defaultValue());
                await d.accept()
            } else {
                await d.accept("tom")
            }
        }

        // prompt
    })

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//button[@id="alert-Btn]').click()

    await page.getByRole("button", {name : "Confirmation Alert"}).click()

    await page.getByRole("button", {name : "Prompt Alert"}).click()

})


// page.on("dialog", () => {})
// page.once("event", () => {})