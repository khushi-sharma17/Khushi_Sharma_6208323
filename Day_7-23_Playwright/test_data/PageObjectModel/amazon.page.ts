import { Page, Locator } from "@playwright/test"

class AmazonPage {

    page: Page
    searchBox: Locator
    searchButton: Locator
    ramFilter: Locator
    fourthMobile: Locator
    addToCart: Locator

    constructor(page: Page) {

        this.page = page

        this.searchBox = page.locator("#twotabsearchtextbox")
        this.searchButton = page.locator("#nav-search-submit-button")

        // RAM filter
        this.ramFilter = page.locator("text=10 GB & Above")

        // 4th product
        this.fourthMobile = page.locator(
            "//div[@data-component-type='s-search-result']//h2/a"
        ).nth(3)

        this.addToCart = page.locator("#add-to-cart-button")
    }

    async gotoAmazon(url: string) {
        await this.page.goto(url)
    }

    async searchProduct(product: string) {
        await this.searchBox.fill(product)
        await this.searchButton.click()
    }

    async selectRamFilter() {
        await this.ramFilter.click()
    }

    async openFourthMobile() {
        await this.fourthMobile.click()
    }

    async addProductToCart(newPage: Page) {
        await newPage.locator("#add-to-cart-button").click()
    }
}

export default AmazonPage