let cartCount = 0;

function addToCart(productName) {
    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;
    document.getElementById("cart-count-display").textContent = cartCount;

    let item = document.createElement("li");
    item.textContent = productName;

    document.getElementById("cart-items").appendChild(item);
}