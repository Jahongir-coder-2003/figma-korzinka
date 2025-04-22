let card = document.createElement("div");
card.className = "page2-card";

let cardImg = document.createElement("div");
cardImg.className = "page2-card-img";
card.append(cardImg);
let cardImgimg = document.createElement("img");
cardImgimg.src = "./images/page2-cardd-img1.png";
cardImgimg.alt = "CARD IMG NO?";

cardImg.append(cardImgimg);
let cardTitle = document.createElement("div");
cardTitle.className = "page2-card-title";
card.append(cardTitle);
let cardTitleh3 = document.createElement("h3");

cardTitleh3.innerText = "44,50 ₽";

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
cardh5.innerText = "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...";
card.append(cardh5);

let cardBtn = document.createElement("a");
cardBtn.innerHTML = "<button>В КОРЗИНУ</button>";
card.append(cardBtn);
console.log(card);
