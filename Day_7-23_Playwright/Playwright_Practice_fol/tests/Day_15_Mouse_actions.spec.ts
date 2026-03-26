import {test} from "@playwright/test"

test("test1", async({page}) => {
    
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")

    await page.locator('#btn_a').click({button:"right", clickCount : 2, force : true})

    await page.locator("#btn_a").dblclick()       // .click({clickCount : 2})

    await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer]').hover()

    await page.locator("#btn_a").hover()

    await page.mouse.down()

    await page.mouse.up()

})


// Notes : 
/**
 * button:"right"	Performs right click instead of left click
 * clickCount:2	Performs double click
 * force:true	Click even if element is hidden/covered
 */





test("test2", async({page}) => {
    
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")

    await page.locator("#submit").click({force : true})
    
    await page.locator("#submit").dispatchEvent("click")

})



test("test3", async({page}) => {

    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")

    await page.locator("#submit").dispatchEvent("click")

    await page.locator("//div[text()='Mobile Charger']").dragTo(page.locator('//div[text()="Mobile Accessories"]/parent::div'))

    // await page.mouse.down()

    // await page.waitForTimeout(2000)

    // await page.mouse.up()
})




test("Drag and Drop", async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2');
    await page.getByText("Mobile Charger").hover();
    await page.mouse.down();
    await page.getByText("Mobile Accessories").hover();
    await page.mouse.up();
    // await page.getByText("Mobile Cover").hover();
    // await page.mouse.down();
    // await page.getByText("Mobile Accessories").hover();
    // await page.mouse.up();
    // await page.getByText("Laptop Cover").hover();
    // await page.mouse.down();
    // await page.getByText("Laptop Accessories").hover();
    // await page.mouse.up();
    // await page.getByText("Laptop Charger").hover();
    // await page.mouse.down();
    // await page.getByText("Laptop Accessories").hover();
    // await page.mouse.up();
})

//! Drag and Drop using Drag to method
test.only("Drag to Method",async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2');
    await page.getByText("Mobile Charger").dragTo(page.getByText("Mobile Accessories"));
    await page.getByText("Mobile Cover").dragTo(page.getByText("Mobile Accessories"));
    await page.getByText("Laptop Cover").dragTo(page.getByText("Laptop Accessories"));
    await page.getByText("Laptop Charger").dragTo(page.getByText("Laptop Accessories"));    
})




test("scroll", async({page}) => {

    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")

    await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
    
    // await page.locator('//input[@type="checkbox"]').click()
    await page.locator('//input[@type="checkbox"]').uncheck()

    await page.waitForTimeout(3000)

    await page.mouse.move(100, 100)

})






/** Mouse Events : 
 * 1. Click Action
 * 2. Double Click
 * 3. Hover
 * 4. Mouse Down
 * 5. Mouse Up
 * 6. Mouse Move
 * 7. Drag and Drop (Manual)
 * 8. Drag and Drop (Using dragTo)
 * 9. Dispatch Event : Triggers JavaScript event directly without real mouse action.
 * 10. Scroll Action
 * 11. CheckBox Mouse Interaction : check(), uncheck(), isChecked()
 * 12. Force Click  :  await page.locator("#submit").click({force : true})
 * 13. 
 */