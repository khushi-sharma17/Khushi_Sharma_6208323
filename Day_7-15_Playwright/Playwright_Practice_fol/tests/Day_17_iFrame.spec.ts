import {test} from "@playwright/test"

test("frames", async({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    // await page.locator("//input[@name='mytext1']").fill("First Frame")

    let frame = await page.frames()

    console.log(frame.length);

    console.log(frame)

    for (const values of frame) {
        console.log(await values.title());

    }

    await page.title()
    
    
    let frame3 = await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_3.html"})
    await frame3?.locator("//frame[@src='frame_3.html']")

    // in the form of array
    let frame1 = await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame1?.locator('//input[@name="mytext1"]')

    let frame2 = await page.frameLocator('//frame[@src="frame_2.html"]')

    await frame2.locator("//input[@name='mytext2']").fill("dxfcgvbh")
    await page.locator('//frame[@src="frame_2.html"]').contentFrame()



})


// 7 frames are there


// why is contentFrame used ??









// import { test, expect } from "@playwright/test";

// test("Get all IDs from middle frame", async ({ page }) => {

//   await page.goto("https://ui.vision/demo/webtest/frames/");

//   // Switch to middle frame (Frame 3)
//   const frame3 = page.frameLocator('frame[src="frame_3.html"]');

//   // Inside frame3 there is another iframe
//   const innerFrame = frame3.frameLocator('iframe');

//   // Locate all elements having id attribute
//   const elements = await innerFrame.locator('[id]').all();

//   // Print all ids
//   for (const element of elements) {
//     const idValue = await element.getAttribute('id');
//     console.log(idValue);
//   }

// });