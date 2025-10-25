
  const cart = {};

  function addToCart(id, name, price) {
    cart[id] = cart[id] ? { ...cart[id], qty: cart[id].qty + 1 } : { name, price, qty: 1 };
    updateCart();
  }

  function updateCart() {
    const list = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");
    list.innerHTML = "";
    let total = 0;

    for (const id in cart) {
      const item = cart[id];
      const subtotal = item.price * item.qty;
      total += subtotal;

      list.innerHTML += `
        <div class="flex justify-between items-center p-2">
          <span>${item.name}</span>
          <div class="flex items-center space-x-2">
            <button onclick="changeQty(${id}, -1)" class="bg-red-500 text-white px-2 rounded">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${id}, 1)" class="bg-green-500 text-white px-2 rounded">+</button>
            <span>₱${subtotal.toFixed(2)}</span>
          </div>
        </div>
      `;
    }

    totalEl.textContent = `Total: ₱${total.toFixed(2)}`;
  }

  function changeQty(id, amount) {
    if (!cart[id]) return;
    cart[id].qty += amount;
    if (cart[id].qty <= 0) delete cart[id];
    updateCart();
  }
