import {test} from "@playwright/test"
import ExcelJS from "exceljs"
import * as path from "path"

// test("reading test data", async({page}) => {
    
//     let book = new ExcelJS.Workbook()
//     await book.xlsx.readFile(path.join(__dirname, "../../test_data/readexcel.xlsx"))

//     let sheet = await book.getWorksheet("Sheet1")
//     let data = await sheet?.getRow(1).getCell(1).toString()

//     console.log(data);  
    
// })



// test("reading second sheet data", async ({ page }) => {

//     const book = new ExcelJS.Workbook()

//     await book.xlsx.readFile(
//         path.join(__dirname, "../../test_data/readexcel.xlsx")
//     )

//     const sheet = book.getWorksheet("Sheet2")

//     if (!sheet) {
//         console.log("Sheet not found")
//         return
//     }

//     const totalRows = sheet.rowCount
//     const totalCols = sheet.columnCount

//     for (let i = 1; i <= totalRows; i++) {

//         for (let j = 1; j <= totalCols; j++) {

//             const data = sheet.getRow(i).getCell(j).value

//             console.log(`Row ${i} Col ${j} : ${data}`)
//         }

//     }

// })










test("reading third sheet data", async ({ page }) => {

    const book = new ExcelJS.Workbook()

    await book.xlsx.readFile(
        path.join(__dirname, "../../test_data/readexcel.xlsx")
    )

    
    const sheet = book.getWorksheet("Sheet3")
    
    if (!sheet) {
        console.log("Sheet not found")
        return
    }

    await page.goto("https://demoapps.qspiders.com/ui")

    
    const name = await page.locator('#name')
    const email = await page.locator('#email')
    const password = await page.locator('#password')


    for (let i = 1; i <= sheet?.rowCount; i++) {
        const nameValue = sheet.getRow(i).getCell(1).value
        const emailValue = sheet.getRow(i).getCell(2).value
        const passwordValue = sheet.getRow(i).getCell(3).value

    
        await name.fill(String(nameValue))
        await email.fill(String(emailValue))
        await password.fill(String(passwordValue))
    }
    
})