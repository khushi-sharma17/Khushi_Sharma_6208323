import { test } from "@playwright/test"
import LoginPage from "../PageObjectModel/login.page"
import ProductPage from "../PageObjectModel/product.page"
import CartPage from "../PageObjectModel/cart.page"
import fs from "fs"

const data = JSON.parse(
  fs.readFileSync("./testdata/data.json","utf-8")
)

test("ShopperStack Cart Flow", async ({ page }) => {

    const login = new LoginPage(page)
    const product = new ProductPage(page)
    const cart = new CartPage(page)

    await login.goto(data.url)

    await login.login(data.username, data.password)

    await product.addFirstProduct()

    await cart.openCart()

    await cart.removeProduct()

    await page.goBack()
    await product.addFirstProduct()

    await cart.openCart()

    await cart.increaseQuantity()

    await cart.checkout()

})