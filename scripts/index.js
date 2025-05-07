// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу



const locationTemplate = document.querySelector("#card-template").content.querySelector(".card");
const galleryContainer = document.querySelector(".places__list");

//  удаление 
function DeleteCard(cardElement) {
  cardElement.remove();
}

//  создание
function createCard(data, onDelete) {
  const locationCard = locationTemplate.cloneNode(true);
  const imageEl = locationCard.querySelector(".card__image");
  const titleEl = locationCard.querySelector(".card__title");
  const removeBtn = locationCard.querySelector(".card__delete-button");

  imageEl.src = data.link;
  imageEl.alt = data.name;
  titleEl.textContent = data.name;

  //  колбэк
  removeBtn.addEventListener("click", () => {
    onDelete(locationCard);
  });

  return locationCard;
}

//  DOM
function renderCard(cardElement) {
  galleryContainer.appendChild(cardElement);
}

// Отображение
initialCards.forEach((cardData) => {
  const card = createCard(cardData, DeleteCard);
  renderCard(card);
});