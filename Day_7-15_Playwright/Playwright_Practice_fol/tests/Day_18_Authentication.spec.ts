import {test, expect} from "@playwright/test"

// test("test1", async({browser}) => {

//     let context = await browser.newContext({httpCredentials : {username : "admin", password : "admin"}})

//     let page = await context.newPage()
    
//     await page.goto("https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/")

// })




test("test2", async({browser}) => {
    
    let context = await browser.newContext({httpCredentials : {username : "admin", password : "admin"}})

    let page = await context.newPage()

    await page.goto("https://the-internet.herokuapp.com/basic_auth")

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/basic_auth")
    
})





// test("upload file", async({page, browser}) => {

// })





// | Aspect              | Authentication                                         | Notification                                                    |
// | ------------------- | ------------------------------------------------------ | --------------------------------------------------------------- |
// | **Meaning**         | Verifying the **identity of a user**                   | **Informing or alerting** a user about something                |
// | **Purpose**         | To make sure the user is **who they claim to be**      | To **deliver information or updates**                           |
// | **When it happens** | Usually during **login or access to secure resources** | Happens whenever the system needs to **send updates or alerts** |
// | **Example**         | Entering username and password, OTP verification       | Getting an email, push notification, or SMS                     |
// | **Security role**   | Part of **security and access control**                | Mostly for **communication and user engagement**                |
