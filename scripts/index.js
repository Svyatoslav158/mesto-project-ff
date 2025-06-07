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


// POP
// ---------- Открытие попапов ----------

// Кнопки
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

// Попапы
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');

// Все кнопки закрытия
const closeButtons = document.querySelectorAll('.popup__close');

// Функции
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// События на открытие
editButton.addEventListener('click', () => openPopup(popupEdit));
addButton.addEventListener('click', () => openPopup(popupAdd));

//  открытие попапа по клику на картинку

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('card__image')) {
    const img = popupImage.querySelector('.popup__image');
    const caption = popupImage.querySelector('.popup__caption');
    img.src = e.target.src;
    img.alt = e.target.alt;
    caption.textContent = e.target.alt;
    openPopup(popupImage);
  }
});

// События на закрытие
closeButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const popup = e.target.closest('.popup');
    closePopup(popup);
  });
});
