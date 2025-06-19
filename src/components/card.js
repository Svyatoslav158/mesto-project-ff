
export function createCard(cardData, handleImageClick, handleLikeClick) {
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
  likeButton.addEventListener('click', handleLikeClick);
  
  // Обработчик удаления теперь полностью внутри модуля
  deleteButton.addEventListener('click', () => {
    if (confirm('Вы уверены, что хотите удалить эту карточку?')) {
      cardElement.remove();
    }
  });

  return cardElement;
}

export function toggleLike(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}