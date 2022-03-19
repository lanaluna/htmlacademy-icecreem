var cardsData = [
  {
    inStock: true,
    imgUrl: 'gllacy/choco.jpg',
    text: 'Сливочно-кофейное с кусочками шоколада',
    price: 310,
    isHit: true,
    specialOffer: 'Двойная порция сиропа бесплатно!'
  },
  {
    inStock: false,
    imgUrl: 'gllacy/lemon.jpg',
    text: 'Сливочно-лимонное с карамельной присыпкой',
    price: 125,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/cowberry.jpg',
    text: 'Сливочное с брусничным джемом',
    price: 170,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/cookie.jpg',
    text: 'Сливочное с кусочками печенья',
    price: 250,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/creme-brulee.jpg',
    text: 'Сливочное крем-брюле',
    price: 190,
    isHit: false
  }
];

// находим тег ul, куда будем вставлять карточки
var list = document.querySelector('.goods');

// функция создает тег с именем tagName, классом className и если есть с текстом text
var createTag = function (tagName, className, text) {
  var item = document.createElement(tagName);
  item.classList.add(className);

  if (text) {
    item.textContent = text;
  }

  return item;
};

// функция рендерит карточку
var renderCards = function (product) {
  var listItem = createTag('li', 'good'); // создаем обертку

  // создаем заголовок
  var listItemHeader = createTag('h2', 'good__description', product.text);
  listItem.appendChild(listItemHeader);

  // создаем картинку
  var listItemImg = createTag('img', 'good__image');
  listItemImg.src = product.imgUrl;
  listItemImg.alt = product.text;
  listItem.appendChild(listItemImg);

  // создаем цену
  var listItemPrice = createTag('p', 'good__price', `${product.price}₽/кг`);
  listItem.appendChild(listItemPrice);

  // класс, отвечающий за наличие товара
  var aviability = 'good--available';

  // если товара нет, класс меняем
  if(!product.inStock) {
    aviability = 'good--unavailable';
  }

  listItem.classList.add(aviability);

  // присваем отдельный класс, если товар хит продаж
  if(product.isHit) {
    listItem.classList.add('good--hit');
  }

  // выводим строку о спецпредложении, если это оно
  if (product.specialOffer) {
    var listItemSpecial = createTag('p', 'good__special-offer', product.specialOffer);
    listItem.appendChild(listItemSpecial);
  }

  return listItem;
};

// перебираем массив объектов и для каждого элемента генерим карточку
for (let i = 0; i < cardsData.length; i++) {
  var card = renderCards(cardsData[i]);
  list.appendChild(card);
}
