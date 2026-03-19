import {test} from "@playwright/test"

//p[contains(text(),"Final")] | 
//a[@data-title="Dabang Delhi K.C. VS Puneri Paltan"].nth(1) | 
//p[text()="Thyagaraj Indoor Stadium, Delhi"]

//p[contains(text(),"Final")] | p[contains(text(),"Dabang Delhi K.C.")] | p[contains(text(),"31")] | //svg[contains(@class,"circle-svg")] |  p[contains(text(),"28")] |  p[contains(text(),"Puneri Paltan")] | p[contains(text(),"Thyagaraj Indoor Stadium, Delhi")]


test("", async({page}) => {

    await page.goto("https://www.prokabaddi.com/schedule-fixtures-results?tab=recent")

    await page.locator("//p[contains(text(),'Final')] | p[contains(text(),'Dabang Delhi K.C.')] | p[contains(text(),'31')] | //svg[contains(@class,'circle-svg')] |  p[contains(text(),'28')] |  p[contains(text(),'Puneri Paltan')] | p[contains(text(),'Thyagaraj Indoor Stadium, Delhi')]")
    
})