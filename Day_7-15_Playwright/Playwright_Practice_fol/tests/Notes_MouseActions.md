In **Playwright**, **mouse actions** simulate real user interactions with the mouse such as clicking, hovering, dragging, scrolling, etc. These actions are very important in **UI automation testing** because many UI behaviors depend on mouse interactions.

I will explain:

1. **All mouse actions in Playwright**
2. **How each one works**
3. **How they appear in your file**
4. **When to use each action**

---

# 1. Click Action

### Method

```ts
locator.click()
```

### Purpose

Simulates a **single mouse click** on an element.

### Example from your file

```ts
await page.locator('#btn_a').click({button:"right", clickCount : 2, force : true})
```

### Options Explained

| Option           | Meaning                                        |
| ---------------- | ---------------------------------------------- |
| `button:"right"` | Performs **right click** instead of left click |
| `clickCount:2`   | Performs **double click**                      |
| `force:true`     | Click even if element is hidden/covered        |

### Types of Clicks

#### Left Click (default)

```ts
await locator.click()
```

#### Right Click

```ts
await locator.click({button:"right"})
```

#### Middle Click

```ts
await locator.click({button:"middle"})
```

---

# 2. Double Click

### Method

```ts
locator.dblclick()
```

### Example in your file

```ts
await page.locator("#btn_a").dblclick()
```

### What it does

Performs **two quick clicks** on the element.

Equivalent to:

```ts
await locator.click({clickCount:2})
```

### Used when

* Opening folders
* Editing text
* Selecting words

---

# 3. Hover

### Method

```ts
locator.hover()
```

### Example from your code

```ts
await page.locator("#btn_a").hover()
```

### What it does

Moves the mouse pointer **over the element without clicking**.

### Used for

* Dropdown menus
* Tooltips
* Hidden elements that appear on hover

Example

```ts
await page.getByText("Menu").hover()
```

---

# 4. Mouse Down

### Method

```ts
page.mouse.down()
```

### Example from your code

```ts
await page.mouse.down()
```

### What it does

Simulates **pressing the mouse button** but **not releasing it**.

### Used for

* Drag operations
* Holding buttons

---

# 5. Mouse Up

### Method

```ts
page.mouse.up()
```

### Example

```ts
await page.mouse.up()
```

### What it does

Releases the mouse button.

### Typical Flow

```
hover element
mouse.down()
move
mouse.up()
```

This is how **drag and drop** works internally.

---

# 6. Mouse Move

### Method

```ts
page.mouse.move(x, y)
```

### Example from your file

```ts
await page.mouse.move(100, 100)
```

### What it does

Moves the mouse pointer to **specific screen coordinates**.

Example

```ts
await page.mouse.move(300,200)
```

### Used for

* Canvas interactions
* Custom drag operations
* UI animations

---

# 7. Drag and Drop (Manual)

### Using mouse events

Example from your file:

```ts
await page.getByText("Mobile Charger").hover();
await page.mouse.down();
await page.getByText("Mobile Accessories").hover();
await page.mouse.up();
```

### Step-by-step

1️⃣ Hover source element
2️⃣ Press mouse
3️⃣ Move to target
4️⃣ Release mouse

Flow:

```
hover(source)
mouse.down()
hover(target)
mouse.up()
```

---

# 8. Drag and Drop (Using dragTo)

### Method

```ts
source.dragTo(target)
```

### Example from your code

```ts
await page.getByText("Mobile Charger").dragTo(page.getByText("Mobile Accessories"));
```

### What Playwright does internally

```
hover source
mouse.down
move to target
mouse.up
```

### Advantage

Much simpler than manual drag.

---

# 9. Dispatch Event

### Method

```ts
locator.dispatchEvent("click")
```

### Example from your file

```ts
await page.locator("#submit").dispatchEvent("click")
```

### What it does

Triggers **JavaScript event directly** without real mouse action.

Difference:

| Method          | Behaviour        |
| --------------- | ---------------- |
| click()         | Real mouse click |
| dispatchEvent() | JS event trigger |

Used when UI blocks real clicking.

---

# 10. Scroll Action

### Method

```ts
locator.scrollIntoViewIfNeeded()
```

### Example from your file

```ts
await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
```

### What it does

Scrolls page **until the element becomes visible**.

Equivalent to user scrolling page.

---

# 11. Checkbox Mouse Interaction

### Example

```ts
await page.locator('//input[@type="checkbox"]').uncheck()
```

### What it does

Removes check from checkbox.

Related methods:

```
check()
uncheck()
isChecked()
```

---

# 12. Force Click

Example from your file

```ts
await page.locator("#submit").click({force : true})
```

### Normally Playwright checks:

* element visible
* element enabled
* element stable

If any condition fails → click fails.

Using `force:true` bypasses checks.

---

# Now Let’s Explain Your File Step-by-Step

## Test 1 (Commented)

```ts
await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
```

Opens webpage.

---

### Right Double Click

```ts
await page.locator('#btn_a').click({button:"right", clickCount : 2, force : true})
```

Meaning

```
Right mouse button
Double click
Force execution
```

---

### Double Click

```ts
await page.locator("#btn_a").dblclick()
```

Performs **two clicks**.

---

### Hover

```ts
await page.locator("//img[@class='w-5 h-5 mt-5 ml-3 cursor-pointer']").hover()
```

Moves mouse over image.

---

### Mouse Press

```ts
await page.mouse.down()
```

Press mouse.

---

### Mouse Release

```ts
await page.mouse.up()
```

Release mouse.

---

# Test 2

```ts
await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
```

Open page.

---

### Force Click Disabled Button

```ts
await page.locator("#submit").click({force : true})
```

Click disabled button.

---

### Dispatch Event

```ts
await page.locator("#submit").dispatchEvent("click")
```

Trigger JS click event.

---

# Test 3 (Drag and Drop)

```ts
await page.locator("//div[text()='Mobile Charger']")
.dragTo(page.locator('//div[text()="Mobile Accessories"]/parent::div'))
```

Drag **Mobile Charger** into **Mobile Accessories container**.

---

# Manual Drag and Drop

```ts
await page.getByText("Mobile Charger").hover();
await page.mouse.down();
await page.getByText("Mobile Accessories").hover();
await page.mouse.up();
```

Steps:

```
hover source
press mouse
hover target
release mouse
```

---

# DragTo Method (Final Working Code)

```ts
await page.getByText("Mobile Charger").dragTo(page.getByText("Mobile Accessories"));
await page.getByText("Mobile Cover").dragTo(page.getByText("Mobile Accessories"));
await page.getByText("Laptop Cover").dragTo(page.getByText("Laptop Accessories"));
await page.getByText("Laptop Charger").dragTo(page.getByText("Laptop Accessories"));
```

This automatically performs drag and drop.

---

# Scroll Test

```ts
await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
```

Open page.

---

### Scroll to Checkbox

```ts
await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
```

Scroll until checkbox visible.

---

### Uncheck Checkbox

```ts
await page.locator('//input[@type="checkbox"]').uncheck()
```

Remove check mark.

---

### Wait

```ts
await page.waitForTimeout(3000)
```

Pause execution for **3 seconds**.

---

### Move Mouse

```ts
await page.mouse.move(100, 100)
```

Move mouse to coordinates.

---

# Summary of Mouse Actions

| Action        | Method                     |
| ------------- | -------------------------- |
| Click         | `click()`                  |
| Right Click   | `click({button:"right"})`  |
| Double Click  | `dblclick()`               |
| Hover         | `hover()`                  |
| Mouse Down    | `mouse.down()`             |
| Mouse Up      | `mouse.up()`               |
| Mouse Move    | `mouse.move(x,y)`          |
| Drag and Drop | `dragTo()`                 |
| Manual Drag   | `hover → down → up`        |
| Scroll        | `scrollIntoViewIfNeeded()` |
| Trigger Event | `dispatchEvent()`          |

---

💡 **Important Tip (Interview Question)**

Difference between:

```
dragTo()
mouse.down()
mouse.up()
```

Answer:

| dragTo               | mouse events   |
| -------------------- | -------------- |
| Built-in drag method | manual control |
| simple               | complex        |
| recommended          | advanced cases |

---

If you want, I can also show you **5 very important Playwright mouse interview questions** that testers are commonly asked in **automation interviews**.
