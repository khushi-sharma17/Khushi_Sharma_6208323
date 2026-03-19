class Example {
    usernameTF : string
    password : string
    SubmitBtn : any

    constructor(page) {
        this.usernameTF = page.locator("#username")
    }

    async login() {
        await this.SubmitBtn.click()
    }
}

export default Example




// import { Page, Locator } from "@playwright/test"

// class Example {

//     usernameTF: Locator
//     passwordTF: Locator
//     submitBtn: Locator

//     constructor(page: Page) {

//         this.usernameTF = page.locator("#username")
//         this.passwordTF = page.locator("#password")
//         this.submitBtn = page.locator("#submit")

//     }

//     async login() {
//         await this.SubmitBtn.click()
//     }    

// }

// export default Example