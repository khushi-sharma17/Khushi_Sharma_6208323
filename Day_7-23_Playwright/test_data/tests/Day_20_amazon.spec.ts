import { test } from "@playwright/test"
import AmazonPage from "../PageObjectModel/amazon.page"
import fs from "fs"

const data = JSON.parse(
    fs.readFileSync("./testdata/data.json", "utf-8")
)

test("amazon mobile add to cart", async ({ page, context }) => {

    const amazon = new AmazonPage(page)

    await amazon.gotoAmazon(data.url)

    await amazon.searchProduct(data.searchProduct)

    await amazon.selectRamFilter()

    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        amazon.openFourthMobile()
    ])

    await newPage.waitForLoadState()

    await newPage.locator("#add-to-cart-button").click()

})