let favorites = [];
let pageCards = document.querySelector(".page2-cards");
let favoriteCount = document.querySelector(".favorite");

function updateFavoriteCount() {
  favoriteCount.innerText = favorites.length;
}

function getCards(el) {
  let card = document.createElement("div");
  card.className = "page2-card";

  // Rasm
  let cardImg = document.createElement("div");
  cardImg.className = "page2-card-img";
  let img = document.createElement("img");
  img.src = el.images[0];
  img.alt = "Mahsulot rasmi";
  cardImg.append(img);
  card.append(cardImg);

  // Like tugmasi
  let likeBtn = document.createElement("div");
  likeBtn.className = "like-btn";
  likeBtn.innerHTML = "❤️";
  card.append(likeBtn);

  likeBtn.addEventListener("click", () => {
    if (!favorites.includes(el.id)) {
      favorites.push(el.id);
      likeBtn.classList.add("liked");
    } else {
      favorites = favorites.filter((id) => id !== el.id);
      likeBtn.classList.remove("liked");
    }
    updateFavoriteCount();
  });

  // Narx
  let price = document.createElement("h3");
  price.innerText = el.price + " ₽";
  card.append(price);

  // Tavsif
  let desc = document.createElement("p");
  desc.innerText = el.description;
  card.append(desc);

  return card;
}

// Barcha mahsulotlarni chiqarish
products.forEach((el) => {
  pageCards.append(getCards(el));
});
