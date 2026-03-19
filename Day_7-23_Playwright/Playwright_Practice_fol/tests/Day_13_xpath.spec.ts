import { test } from '@playwright/test';

test('Locate name and price together', async ({ page }) => {

  await page.goto("https://www.amazon.in");

  await page.locator("//input[@id='twotabsearchtextbox']").fill("phones");
  await page.locator("//input[@id='nav-search-submit-button']").click();

  await page.waitForSelector("//div[@data-component-type='s-search-result']");

  await page.locator('//span[@class="a-price-whole"]').nth(2).innerText()

  const data = await page.locator(
    'span[@class="a-price-whole"]|//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]/child::span'
  ).allInnerTexts();


  // await page.getByTestId("", {exact : true})

  console.log(data);

});

// "//div[@data-component-type='s-search-result']//h2/span|//div[@data-component-type='s-search-result']//span[@class='a-price-whole']"

// span[@class="a-price-whole"]|//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]/child::span  


// union operator
// all text contains


//span[contains(text(),"Samsung Galaxy S26 Ultra 5G (Sky Blue, 12GB RAM, 256GB Storage) with Built-in Privacy Display, AI Phone, Photo Assist, Creative Studio, 200MP Camera, 5000mAh Battery and Snapdragon 8 Elite Gen 5")] | //span[contains(@class,'a-price-whole')]




//  getByMethods = get the element by the specific name
//  getByText
//  getByAltText()
//  getByLabel()
//  getByTitle()
//  getByPlaceholder()
//  getByRole()
//  getByTestId()