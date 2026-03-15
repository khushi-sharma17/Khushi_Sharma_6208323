import {test} from "@playwright/test"


test("standard dropdown", async({page}) => {

    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")

    await page.locator('#country_code').selectOption({value : "+91"})

    // await page.locator('#country_code').selectOption({label : "+91"})

    await page.locator('#select3').selectOption({value : "India"})
    
    // console.log(await );
    
    await page.locator('#select5').selectOption({value : "Rajasthan"})

    await page.locator("@//label[@for='cities']/following-sibling::select").selectOption({value : "Barmer"})

})



test("multi select", async({page}) => {

    await page.goto("")

    await page.locator('#select-mutliple-native').selectOption([{value : "Fjailraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}, {index : 3}, {}])

})



test("custom dropdown", async({page}) => {
    
    await page.goto("https://www.myntra.com/shoes")

    await page.locator('//div[@class="sort-sortBy"]').click({force : true})

    await page.waitForTimeout(3000)

    let options = await page.locator('//label[@class="sort-label"]').all()

    for (let opt of options) {
        let text = await opt.textContent()
        console.log(text);

        // if (text.includes("Better ")) {
        //     await opt.click()
        //     break;
        // }
    }

})




// slow
// only
// skip
// fail
// slow 
// describe