let cart = [];

function addItem(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;

  let items = document.getElementById("cart-items");
  items.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price;
    items.innerHTML += `<p>${item.name} - ${item.price} kr</p>`;
  });

  document.getElementById("total").innerText = total;
}

function openCart() {
  document.getElementById("cart").style.display = "block";
}

function closeCart() {
  document.getElementById("cart").style.display = "none";
}

function checkout() {
  alert("Bestilling sendt 🚀");
  cart = [];
  updateCart();
  closeCart();
}
