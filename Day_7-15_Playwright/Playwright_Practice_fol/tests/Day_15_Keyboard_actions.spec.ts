import {test} from "@playwright/test"

test('Keyboard copy paste example', async ({ page }) => {

  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

  
  await page.click('#name');
  await page.keyboard.type('');


  await page.keyboard.press('Tab');
  await page.keyboard.type('');

  
  await page.keyboard.down('Control');
  await page.keyboard.press('KeyA');
  await page.keyboard.up('Control');

  
  await page.keyboard.down('Control');
  await page.keyboard.press('KeyC');
  await page.keyboard.up('Control');


  await page.keyboard.press('Tab');

  await page.keyboard.down('Control');
  await page.keyboard.press('KeyV');
  await page.keyboard.up('Control');

});