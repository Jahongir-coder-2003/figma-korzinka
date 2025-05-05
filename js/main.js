let pageCards = document.querySelector(".page2-cards");
let pageCards3 = document.querySelector(".page3-cards");
let pageCards4 = document.querySelector(".page4-cards");
let favoriteCount = document.querySelector(".favorite");
function getCards(el) {
  let card = document.createElement("div");
  card.className = "page2-card";

  let cardImg = document.createElement("div");
  cardImg.className = "page2-card-img";
  card.append(cardImg);
  let cardImgimg = document.createElement("img");
  cardImgimg.src = el.images[0];
  cardImgimg.alt = "CARD IMG NO?";

  cardImg.append(cardImgimg);

  let cardTitle = document.createElement("div");
  cardTitle.className = "page2-card-title";
  card.append(cardTitle);
  let cardTitleh3 = document.createElement("h3");

  cardTitleh3.innerText = el.price += " ₽";

  cardTitle.append(cardTitleh3);
  let cardTitleh4 = document.createElement("h4");

  cardTitleh4.innerText = "50,50 ₽";

  cardTitle.append(cardTitleh4);

  let cardInfo = document.createElement("div");
  cardInfo.className = "page2-card-info";
  card.append(cardInfo);

  let cardInfop = document.createElement("p");
  cardInfop.innerText = "С картой";
  cardInfo.append(cardInfop);
  let cardInfop2 = document.createElement("p");
  cardInfop2.innerText = "Обычная";
  cardInfo.append(cardInfop2);

  let cardh5 = document.createElement("h5");
  cardh5.innerText = el.description;
  card.append(cardh5);

  let cardBtn = document.createElement("a");
  cardBtn.href = "../pages/korzinka.html";
  cardBtn.innerHTML = "<button>В КОРЗИНУ</button>";
  card.append(cardBtn);
  pageCards.append(card);

  return card;
}

let discountProduct = products.filter((el) => el.discount > 0).slice(-4);
discountProduct.map((el) => pageCards.append(getCards(el)));

let endProduct = products.filter((el) => el).slice(-4);
endProduct.map((el) => pageCards3.append(getCards(el)));

let ratingProduct = products
  .filter((el) => el)
  .slice(-4)
  .toSorted((a, b) => b.rating - a.rating);

ratingProduct.map((el) => pageCards4.append(getCards(el)));

//page5
let cards5 = document.querySelector(".page5-cards");

console.log(cards5);
function getCards5() {
  let card5 = document.createElement("div");
  card5.className = "page5-card";
  cards5.append(card5);

  let cardInfo5 = document.createElement("div");
  cardInfo5.className = "page5-card-info";
  card5.append(cardInfo5);

  let card5h2 = document.createElement("h2");
  card5h2.innerText = "Оформите карту «Северяночка»";
  cardInfo5.append(card5h2);

  let card5p = document.createElement("p");
  card5p.innerText = "И получайте бонусы при покупке в магазинах и на сайте";
  cardInfo5.append(card5p);

  let cardImg5 = document.createElement("div");
  cardImg5.className = "page5-card-img";
  card5.append(cardImg5);
  let cardImg5img = document.createElement("img");
  cardImg5img.src = "./images/page5-card-img2.png";
  cardImg5img.alt = "CARD IMG NO?";
  cardImg5.append(cardImg5img);
}
getCards5();
getCards5();

//PAGE7

let cards7 = document.querySelector(".page7-cards");
console.log(cards7);

function getCards7() {
  let card7 = document.createElement("div");
  card7.className = "page7-card";
  cards7.append(card7);

  let cardImg7 = document.createElement("div");
  cardImg7.className = "page7-card-img";
  card7.append(cardImg7);

  let cardImg7img = document.createElement("img");
  cardImg7img.src = "./images/page7-card-img.png";
  cardImg7img.alt = "CARD IMG NO?";
  cardImg7.append(cardImg7img);

  let cardInfo7 = document.createElement("div");
  cardInfo7.className = "page7-card-info";
  card7.append(cardInfo7);

  let card7p = document.createElement("p");
  card7p.innerText = "05.03.2021";
  cardInfo7.append(card7p);

  let card7h2 = document.createElement("h2");
  card7h2.innerText = "Весеннее настроение для каждой";
  cardInfo7.append(card7h2);

  let card7h3 = document.createElement("h3");
  card7h3.innerText =
    "  8 Марта – это не просто Международный женский день, это еще и день весеннего настроения, когда хочется дарить подарки и радовать себя и близких. Мы подготовили для вас специальные предложения на 8 Марта, которые помогут создать атмосферу праздника и сделать этот день незабываемым.";
  cardInfo7.append(card7h3);

  card7btn = document.createElement("button");
  card7btn.innerText = "ПОДРОБНЕЕ";
  cardInfo7.append(card7btn);
}
getCards7();
getCards7();
getCards7();
