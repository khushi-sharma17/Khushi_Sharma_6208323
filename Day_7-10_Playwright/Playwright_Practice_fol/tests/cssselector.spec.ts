import {test} from "@playwright/test"



test("css selector", async({page}) => {

    await page.goto(`https://www.amazon.in/`)

    await page.locator(`//input[@id=twotabsearchtextbox]`).fill("Samsung Phones")
    await page.locator(`//input[@id="nav-search-submit-button"]`).click()
    // await page.locator(`xpath=span[@class="a-price-whole(1)"]`).last().click()
    // await page.locator(`xpath=span[@class="a-price-whole"]`).last().click()
    await page.locator(`//span[@class="a-price-whole"]`).nth(2).innerText()

    // await page.locator('//input[@type="submit"]').click();
})




// test("css selector", async({page}) => {

//     await page.goto(`https://www.amazon.com`)

//     await page.locator(`xpath=/html/body/div/header/div/div/div[2]/div/form/div[2]/div/input`).click()

//     // await page.locator('//input[@type="submit"]').click();
// })




// test("css selector", async({page}) => {

//     // await page.goto('https://practicetestautomation.com/practice-test-login/')

//     // await page.locator("input#username").fill("student")

//     // await page.locator("input#password").fill("Password123")

//     // await page.locator("button#submit").click()

//     // await page.locator(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color").click()


//     await page.goto(`https://techbeamers.com/practice-test-login/`)

//     await page.locator(`input#username`).fill("username")

// })







// do the above code also with xml structure



// input[name="username"]

// #username[name="username"]


/**
 * CSS Locators
 * 
 * 1 - #idvalue
 * 2 - .classvalue
 * 
 * 3 - tagname#idvalue
 * 4 - tagname.classvalue
 * 
 * 
 * 5 - [attribute="attri-value"]
 * 6 - tagname[attribute="attri-value"]
 * 
 * 
 * 7 - #idvalue.classvalue
 * 8 - tagname#idvalue.classname
 * 
 * 9 - #idvalue[attribute="attri_value"]
 * 10 - .classvalue[attribute="attri_value"]
 * 11 - tagname.classvalue[attribute="attri_value"]
 * 12 - [attribute="attri-value"][attribute="attri-value"]
 * 13 - tagname#idvalue[attribute="attri_value"]
 * 14 - tagname[attribute="attri_value"][attribute="attri_value"]
 */



// for absolute path, it is single slash

// for relative path it is double slash....

// there are 3 syntaxes for relative path

// textarea[@id="email"]

// input[@class="form-control" and @id="email"]


// //button[@id="confirmBtn" and .="Confirmation Alert"]