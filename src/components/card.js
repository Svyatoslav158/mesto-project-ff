// Создание карточки
export function createCard(data) {
  const locationTemplate = document.querySelector("#card-template").content.querySelector(".card");
  const locationCard = locationTemplate.cloneNode(true);
  const imageEl = locationCard.querySelector(".card__image");
  const titleEl = locationCard.querySelector(".card__title");
  const removeBtn = locationCard.querySelector(".card__delete-button");
  const likeBtn = locationCard.querySelector(".card__like-button");

  imageEl.src = data.link;
  imageEl.alt = data.name;
  titleEl.textContent = data.name;

  removeBtn.addEventListener("click", () => {
    deleteCard(locationCard);
  });

  likeBtn.addEventListener("click", () => {
    likeCard(likeBtn)
  });

  return locationCard;
}

// Удаление
export function deleteCard(cardElement) {
  cardElement.remove();
}

function likeCard(likeBtn) {
    likeBtn.classList.toggle("card__like-button_is-active");
}