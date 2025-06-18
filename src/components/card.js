export function createCard(cardData, handleImageClick, handleDeleteClick, handleLikeClick) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');

  // Заполняем данные карточки
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  // Обработчики событий
  cardImage.addEventListener('click', () => handleImageClick(cardData));
  deleteButton.addEventListener('click', () => handleDeleteClick(cardElement));
  likeButton.addEventListener('click', handleLikeClick);

  return cardElement;
}

// Базовая функция лайка
export function toggleLike(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}