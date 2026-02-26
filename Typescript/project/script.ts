interface Product {
    id: number;
    name: string;
    image: string;
}

let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

function addToCart(id: number, name: string, image: string): void {
    const product: Product = { id, name, image };
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}


(window as any).addToCart = addToCart;


function displayCart(): void {
    const cartContainer = document.getElementById("cart-items");
    if (!cartContainer) return;

    cartContainer.innerHTML = "";

    cart.forEach((product: Product) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" width="150"/>
            <hr/>
        `;
        cartContainer.appendChild(div);
    });
}


if (window.location.pathname.includes("cart.html")) {
    displayCart();
}