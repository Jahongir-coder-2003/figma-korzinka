document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Cart section
  const section = document.createElement("section");
  section.classList.add("korzinka");
  section.innerHTML = `
    <div class="container">
      <div class="cart-container">
        <h1 class="cart-title">Корзина</h1>
        <div class="cart-header">
          <div class="checkbox-container">
            <input type="checkbox" id="select-all">
            <label for="select-all">Выбрать все</label>
          </div>
          <div class="delivery-info">
            <span>Доставка из Москвы</span>
          </div>
        </div>
        <div class="flex-container">
          <div class="korzinkaCards">
            <div class="cart-items" id="cart-items">
              <!-- Items will be injected dynamically -->
            </div>
          </div>
          <div class="cart-summary">
            <div class="summary-left">
              <div class="discount-toggle">
                <label class="switch">
                  <input type="checkbox" checked>
                  <span class="slider round"></span>
                </label>
                <span>Списать 200 ₽</span>
              </div>
              <div class="discount-info">
                На счете имеется 200 ₽
              </div>
            </div>
            <div class="summary-right">
              <button class="checkout-btn">Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  body.appendChild(section);

  // Dynamic Cart Items
  const cartItems = [
    { name: "Комбайн КСК-1218", weight: "13.5 кг", price: "89.00" },
    { name: "Комбайн КСК-1218 со скидкой", weight: "13.5 кг", price: "80.10" },
    { name: "Комбайн КСК-1218", weight: "13.5 кг", price: "85.00" },
  ];

  const cartContainer = document.getElementById("cart-items");

  cartItems.forEach((item) => {
    const quantity = 1;
    const totalPrice = (parseFloat(item.price) * quantity).toFixed(2);

    const div = document.createElement("div");
    div.className = "cart-item";
    div.setAttribute("data-price", item.price); // Save unit price

    div.innerHTML = `
      <div class="item-image">
        <img src="../images/korzinka/korzinka-img.png" alt="Комбайн">
      </div>
      <div class="item-details">
        <div class="item-name">${item.name}</div>
        <div class="item-weight">${item.weight}</div>
      </div>
      <div class="item-quantity">
        <button class="quantity-btn minus">-</button>
        <span class="quantity">${quantity}</span>
        <button class="quantity-btn plus">+</button>
      </div>
      <div class="item-price">
        <div class="price">${totalPrice} ₽</div>
      </div>
    `;
    cartContainer.appendChild(div);
  });

  // Quantity +/- and price update
  document.querySelectorAll(".cart-item").forEach((item) => {
    const minus = item.querySelector(".minus");
    const plus = item.querySelector(".plus");
    const qtySpan = item.querySelector(".quantity");

    minus.addEventListener("click", () => {
      let qty = parseInt(qtySpan.textContent);
      if (qty > 1) {
        qty--;
        qtySpan.textContent = qty;
        updatePrice(item, qty);
      } else {
        item.remove();
      }
    });

    plus.addEventListener("click", () => {
      let qty = parseInt(qtySpan.textContent);
      qty++;
      qtySpan.textContent = qty;
      updatePrice(item, qty);
    });
  });

  function updatePrice(item, quantity) {
    const unitPrice = parseFloat(item.getAttribute("data-price"));
    const total = (unitPrice * quantity).toFixed(2);
    item.querySelector(".price").textContent = `${total} ₽`;
  }
});
