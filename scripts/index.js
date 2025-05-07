// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу


// Карточки
const locationTemplate = document.querySelector("#card-template").content.querySelector(".card");
const galleryContainer = document.querySelector(".places__list");

// DOM-элемент 

function generateLocationCard(info) {
  const locationCard = locationTemplate.cloneNode(true);
  const imageEl = locationCard.querySelector(".card__image");
  const titleEl = locationCard.querySelector(".card__title");
  const removeBtn = locationCard.querySelector(".card__delete-button");

  imageEl.src = info.link;
  imageEl.alt = info.name;
  titleEl.textContent = info.name;

  // Удаление 
  removeBtn.addEventListener("click", () => {
    locationCard.remove();
  });

  return locationCard;
}

// Отображение
function displayGallery(items) {
  items.forEach(item => {
    const cardElement = generateLocationCard(item);
    galleryContainer.appendChild(cardElement);
  });
}

// Запуск
displayGallery(initialCards);