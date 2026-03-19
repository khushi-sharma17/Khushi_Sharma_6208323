import { test } from "@playwright/test"
import * as path from "path"

// import path from "path"
// import { fileURLToPath } from "url"

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)


// test("upload files", async({page}) => {
    
//     console.log(__dirname);
//     console.log(__filename);

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     await page.locator('#singleFileInput').setInputFiles("C:/Users/vs/OneDrive/Desktop/Khushi_Sharma_6208323/Day_7-15_Playwright/Playwright_Practice_fol/tests/uploadfile/demo.txt")

//     await page.getByRole("button", {name : "Upload Single File"}).click()

//     await page.waitForTimeout(3000)
// })








// test("multiple upload files", async({page}) => {
    
//     console.log(__dirname);
//     console.log(__filename);

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     await page.locator('#singleFileInput').setInputFiles(path.join([
//         path.join(__dirname, 'uploadfile/demo.txt'),
//         path.join(__dirname, 'uploadfile/demo1.xlsx'),
//     ]))

//     // await page.getByRole("button", {name : "Upload Single File"}).click()

//     await page.waitForTimeout(3000)
// })





// test("single path upload files", async({page}) => {
    
//     console.log(__dirname);
//     console.log(__filename);

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     await page.locator('#singleFileInput').setInputFiles(path.join(__dirname, "uploadfile/demo.txt"))

//     // await page.getByRole("button", {name : "Upload Single File"}).click()

//     await page.waitForTimeout(3000)
// })





// Download
test.only("Task 4",async({browser}) => {

    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.getByPlaceholder("Enter text here").fill("dhgdhsgxcdgxxkkhdkhdskh");
    await page.getByPlaceholder("Filename").fill("newFile.txt");
    const [page2]=await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("button",{name:'Download'}).click()
    ])
    // await page.pause();

    // let download = "C://Users/khushi/Desktop/p1/downloads"
    // let filename = await downloadfile.suggestedFilename()
    // await downloadfile.saveAs(path.join(downloadfolder, filename))

})


// what is the difference between information and data.....