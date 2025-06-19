<<<<<<< HEAD
// Создание карточки
export function createCard(data) {
  const locationTemplate = document.querySelector("#card-template").content.querySelector(".card");
  const locationCard = locationTemplate.cloneNode(true);
  const imageEl = locationCard.querySelector(".card__image");
  const titleEl = locationCard.querySelector(".card__title");
  const removeBtn = locationCard.querySelector(".card__delete-button");
  const likeBtn = locationCard.querySelector(".card__like-button");
=======
// card.js
export function createCard(cardData, handleImageClick, handleLikeClick) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
>>>>>>> d0bbfb7 (maestro_6_fix_const)

  imageEl.src = data.link;
  imageEl.alt = data.name;
  titleEl.textContent = data.name;

<<<<<<< HEAD
  removeBtn.addEventListener("click", () => {
    deleteCard(locationCard);
=======
  // Обработчики событий
  cardImage.addEventListener('click', () => handleImageClick(cardData));
  likeButton.addEventListener('click', handleLikeClick);
  
  // Обработчик удаления 
  deleteButton.addEventListener('click', () => {
    if (confirm('Вы уверены, что хотите удалить эту карточку?')) {
      cardElement.remove();
    }
>>>>>>> d0bbfb7 (maestro_6_fix_const)
  });

  likeBtn.addEventListener("click", () => {
    likeCard(likeBtn)
  });

  return locationCard;
}

<<<<<<< HEAD
// Удаление
export function deleteCard(cardElement) {
  cardElement.remove();
}

function likeCard(likeBtn) {
    likeBtn.classList.toggle("card__like-button_is-active");
=======
export function toggleLike(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
>>>>>>> d0bbfb7 (maestro_6_fix_const)
}