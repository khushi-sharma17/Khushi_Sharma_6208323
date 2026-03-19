import { Page, Locator } from "@playwright/test"

class LoginPage {

    page: Page
    loginBtn: Locator
    emailTF: Locator
    passwordTF: Locator
    submitBtn: Locator

    constructor(page: Page) {

        this.page = page
        this.loginBtn = page.locator("#loginBtn")
        this.emailTF = page.locator("#Email")
        this.passwordTF = page.locator("#Password")
        this.submitBtn = page.locator("//button[text()='Login']")
    }

    async goto(url: string) {
        await this.page.goto(url)
    }

    async login(username: string, password: string) {

        await this.loginBtn.click()
        await this.emailTF.fill(username)
        await this.passwordTF.fill(password)
        await this.submitBtn.click()

    }
}

export default LoginPage