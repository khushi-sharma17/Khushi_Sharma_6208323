import { Page, Locator } from "@playwright/test"

class ProductPage {

    page: Page
    products: Locator
    addToCartBtn: Locator

    constructor(page: Page) {

        this.page = page
        this.products = page.locator("//button[text()='Add to cart']")
    }

    async addFirstProduct() {
        await this.products.nth(0).click()
    }
    
}

export default ProductPage