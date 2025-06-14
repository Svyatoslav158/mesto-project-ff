import { initialCards } from "./components/cards"

const locationTemplate = document.querySelector("#card-template").content.querySelector(".card");
const galleryContainer = document.querySelector(".places__list");

// Удаление
function deleteCard(cardElement) {
  cardElement.remove();
}

// Создание карточки
function createCard(data, onDelete) {
  const locationCard = locationTemplate.cloneNode(true);
  const imageEl = locationCard.querySelector(".card__image");
  const titleEl = locationCard.querySelector(".card__title");
  const removeBtn = locationCard.querySelector(".card__delete-button");
  const likeBtn = locationCard.querySelector(".card__like-button");

  imageEl.src = data.link;
  imageEl.alt = data.name;
  titleEl.textContent = data.name;

  removeBtn.addEventListener("click", () => {
    onDelete(locationCard);
  });

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__like-button_is-active");
  });

  return locationCard;
}

// Добавление карточки в DOM
function renderCard(cardElement) {
  galleryContainer.appendChild(cardElement);
}

// Отображение всех карточек
initialCards.forEach((cardData) => {
  const card = createCard(cardData, deleteCard);
  renderCard(card);
});

