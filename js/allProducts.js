let cardContainers = document.querySelectorAll(".katalog-cards");
let inputSearch = document.querySelector(".search__input");
const products = [
  { id: 1, images: ["../images/katalog/img1.png"], title: "Молоко" },
  { id: 2, images: ["../images/katalog/img2.png"], title: "Сыр" },
  { id: 3, images: ["../images/katalog/img3.png"], title: "Яйца" },
  { id: 4, images: ["../images/katalog/img4.png"], title: "Хлеб" },
  { id: 5, images: ["../images/katalog/img5.png"], title: "Мясо" },
  { id: 6, images: ["../images/katalog/img6.png"], title: "Рыба" },
  { id: 7, images: ["../images/katalog/img7.png"], title: "Овощи" },
  { id: 8, images: ["../images/katalog/img8.png"], title: "Фрукты" },
  { id: 9, images: ["../images/katalog/img9.png"], title: "Йогурт" },
  { id: 10, images: ["../images/katalog/img10.png"], title: "Сок" },
  { id: 11, images: ["../images/katalog/img11.png"], title: "Чай" },
  { id: 12, images: ["../images/katalog/img12.png"], title: "Кофе" },
];

function getProductCard(el) {
  return `
    <div class="food-card">
      <img src="${el.images[0]}" alt="?" class="food-card__image">
      <div class="food-card__overlay"></div>
      <h2 class="food-card__title">${el.title} ${el.id}</h2>
    </div>`;
}

cardContainers.forEach((container) => {
  container.innerHTML = products
    .map((product) => getProductCard(product))
    .join("");
});

inputSearch.addEventListener("keyup", (e) => {
  let searchValue = e.target.value.toLowerCase();
  cardContainers.forEach((container) => {
    let cards = container.querySelectorAll(".food-card");
    cards.forEach((card) => {
      let title = card
        .querySelector(".food-card__title")
        .textContent.toLowerCase();
      if (title.includes(searchValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
