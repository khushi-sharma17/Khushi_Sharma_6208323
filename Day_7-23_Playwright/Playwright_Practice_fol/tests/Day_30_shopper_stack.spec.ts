import { test, expect } from "@playwright/test";

test("Login API", async ({ request }) => {

  let res = await request.post(
    "https://www.shoppersstack.com/shopping/users/login",
      {
        data: {
          email: "khushi.17.march.2004@gmail.com",
          password: "Khushi@uni2",
          role: "SHOPPER"
        },ignoreHTTPSErrors:true
      }
    );

    // Check status
    // expect(res.status()).toBe(200);

    // Convert response to JSON
    let resData = await res.json();

    // Extract token
    let token = resData.data.jwtToken;

    //   console.log("Token:", token);
    let res2 = await request.get("https://www.shoppersstack.com/shopping/products/alpha",{
      headers:{
          Authorization:`Bearer ${token}`
      },ignoreHTTPSErrors:true
    })
    console.log(await res2.json());





    // get default products
    let res3 = await request.get(
      "https://www.shoppersstack.com/shopping/products/alpha",
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        ignoreHTTPSErrors: true
      }
    );



    // Optional assertions
    expect(res3.status()).toBe(200);
    let allProducts = await res3.json()
    console.log("All Products : ", allProducts);




    

    let loginRes = await request.post(
    "https://www.shoppersstack.com/shopping/users/login",
    {
      data: {
        email: "khushi.17.march.2004@gmail.com",
        password: "Khushi@uni2",
        role: "SHOPPER"
      },
      ignoreHTTPSErrors: true
    }
  );
    

    // get all addresses
    let loginData = await loginRes.json();

    let shopperId = loginData.data.userId;   

    console.log("Token:", token);
    console.log("ShopperId:", shopperId);

    // 🔹 Step 2: Get all addresses
    let addressRes = await request.get(
      `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/address`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        ignoreHTTPSErrors: true
      }
    );

    // 🔹 Assertions
    expect(addressRes.status()).toBe(200);

    let addressData = await addressRes.json();

    console.log("Addresses:", addressData);





    // post all the addresses
  let addRes = await request.post(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/address`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      data: {
        buildingInfo: "Flat 101",
        landmark: "Near Temple",
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        pincode: "411001"
      },
      ignoreHTTPSErrors: true
    }
  );

  // 🔹 Assertions
  expect(addRes.status()).toBe(201); // sometimes 200, check once

  let addData = await addRes.json();

  console.log("New Address Added:", addData);

  // 🔹 Extract addressId (like Postman script)
  let addressId = addData.data.addressId;
  console.log("AddressId:", addressId);



  




  // get all the cart items
  let cartRes = await request.get(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/carts`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      ignoreHTTPSErrors: true
    }
  );

  // 🔹 Assertions
  expect(cartRes.status()).toBe(200);

  let cartData = await cartRes.json();

  console.log("Cart Items:", cartData);

  // 🔹 Extract itemId (like Postman)
  if (cartData.data.length > 0) {
    let itemId = cartData.data[0].itemId;
    console.log("First Item ID:", itemId);
  } else {
    console.log("Cart is empty 🛒");
  }





  // Post all the cart items
  let addCartRes = await request.post(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/carts`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        // "Content-Type": "application/json"
      },
      data: {
        productId: 51,
        quantity: 2
      },
      ignoreHTTPSErrors: true
    }
  );

  // 🔹 Assertions
  expect(addCartRes.status()).toBe(201); // sometimes 200

  cartData = await addCartRes.json();

  console.log("Cart Response:", cartData);

  // 🔹 Extract itemId (like Postman)
  let itemId = cartData.data.itemId;
  console.log("Added Item ID:", itemId);










  const cartResponse = await request.get(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/carts`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      ignoreHTTPSErrors: true
    }
  );

  // 🔹 Assertions
  expect(cartResponse.status()).toBe(200);

  cartData = await cartResponse.json();

  console.log("Cart Data:", cartData);

  // 🔹 Handle cart items safely
  if (cartData.data && cartData.data.length > 0) {

    console.log(`Total Items in Cart: ${cartData.data.length}`);

    cartData.data.forEach((item : any, index : any) => {
      console.log(`Item ${index + 1}:`);
      console.log("ItemId:", item.itemId);
      console.log("ProductId:", item.productId);
      console.log("Quantity:", item.quantity);
    });

    // 🔹 Extract first itemId (like Postman global)
    const itemId = cartData.data[0].itemId;
    console.log("First Item ID:", itemId);

  } else {
    console.log("Cart is empty 🛒");
  }









  // get order history
  const orderRes = await request.get(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/orders`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      ignoreHTTPSErrors: true
    }
  );

  // 🔹 Assertion
  expect(orderRes.status()).toBe(200);

  const orderData = await orderRes.json();

  console.log("Order Response:", orderData);

  // 🔹 Step 3: Handle Orders Safely
  if (orderData.data && orderData.data.length > 0) {

    console.log(`Total Orders: ${orderData.data.length}`);

    orderData.data.forEach((order : any, index : any) => {
      console.log(`\nOrder ${index + 1}:`);
      console.log("Order ID:", order.orderId);
      console.log("Total Price:", order.totalPrice);
      console.log("Order Status:", order.status);
      console.log("Created At:", order.createdAt);

      // 🔹 If order has items
      if (order.products && order.products.length > 0) {
        order.products.forEach((item : any, i : any) => {
          console.log(`  Product ${i + 1}:`);
          console.log("  Product ID:", item.productId);
          console.log("  Quantity:", item.quantity);
        });
      }

    });

    // 🔹 Extract first orderId (like Postman variable)
    const orderId = orderData.data[0].orderId;
    console.log("First Order ID:", orderId);

  } else {
    console.log("No Orders Found 📦");
  }







  


  // const orderRes = await request.post(
  //   `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/orders`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     },

  //     data: {
  //       // ⚠️ adjust based on API requirement
  //       paymentMode: "COD",
  //       addressId: 1   // make sure this exists
  //     },

  //     ignoreHTTPSErrors: true
  //   }
  // );

  // 🔹 Assertions
  // expect(orderRes.status()).toBe(201); // sometimes 200 depending on API

  // const orderData = await orderRes.json();

  // console.log("Order Placed Response:", orderData);

  // // 🔹 Step 3: Validate response
  // if (orderData.data) {
  //   console.log("Order ID:", orderData.data.orderId);
  //   console.log("Status:", orderData.data.status);
  //   console.log("Total Price:", orderData.data.totalPrice);
  // } else {
  //   console.log("Order not placed ❌");
  // }



});