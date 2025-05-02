const cardContainers = document.querySelectorAll(".katalog-cards");
const inputSearch = document.querySelector(".header-search");

function getProductCard(el) {
  return `
    <div class="food-card">
      <img src="${el.image}" alt="${el.name}" class="food-card__image">
      <div class="food-card__overlay"></div>
      <h2 class="food-card__title">${el.name} ${el.id}</h2>
    </div>`;
}

// Har bir konteyner uchun mahsulotlar kartasini qo'shamiz

function names(data = categories) {
  cardContainers.forEach((container) => {
    container.innerHTML = ""; // Har bir konteynerni tozalaymiz
    data.forEach((el) => {
      container.innerHTML += getProductCard(el);
    });
  });
}
names(categories);

inputSearch.addEventListener("keyup", function () {
  let search = this.value.toLowerCase();
  console.log(search);

  let searchProduct = categories.filter((el) => el.name.includes(search));
  names(searchProduct);
});
