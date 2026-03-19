import { Page, Locator } from "@playwright/test"

class CartPage {

    page: Page
    cartIcon: Locator
    removeBtn: Locator
    increaseQty: Locator
    checkoutBtn: Locator

    constructor(page: Page) {

        this.page = page

        this.cartIcon = page.locator("#cartIcon")
        this.removeBtn = page.locator("//button[text()='Remove']")
        this.increaseQty = page.locator("//button[contains(@class,'increase')]")
        this.checkoutBtn = page.locator("//button[text()='Checkout']")
    }

    async openCart() {
        await this.cartIcon.click()
    }

    async removeProduct() {
        await this.removeBtn.click()
    }

    async increaseQuantity() {
        await this.increaseQty.click()
    }

    async checkout() {
        await this.checkoutBtn.click()
    }
}

export default CartPage