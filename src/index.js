
import './pages/index.css'; 

import { initialCards } from "./components/cards"
import { openPopup, closePopup  } from "./components/modal"
import {createCard, deleteCard } from './components/card'

const galleryContainer = document.querySelector(".places__list");
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const closeButtons = document.querySelectorAll('.popup__close');

<<<<<<< HEAD

// Сохранение
=======
// Элементы попапа изображения
const popupImageElement = popupImage.querySelector('.popup__image');
const popupCaption = popupImage.querySelector('.popup__caption');

// Формы
>>>>>>> d0bbfb7 (maestro_6_fix_const)
const formAddCard = document.querySelector('form[name="new-place"]');
const cardNameInput = formAddCard.querySelector('.popup__input_type_card-name');
const cardLinkInput = formAddCard.querySelector('.popup__input_type_url');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileEditForm = document.querySelector('form[name="edit-profile"]');
const nameInput = profileEditForm.querySelector('.popup__input_type_name');
const jobInput = profileEditForm.querySelector('.popup__input_type_description');

<<<<<<< HEAD
=======
// Обработчик клика по изображению карточки
function handleImageClick(cardData) {
  popupImageElement.src = cardData.link;
  popupImageElement.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  openPopup(popupImage);
}

// Обработчик лайка
function handleLikeClick(evt) {
  toggleLike(evt);
}

// Функция рендеринга карточки
function renderCard(cardData) {
  const cardElement = createCard(
    cardData,
    handleImageClick,
    handleLikeClick
  );
  galleryContainer.append(cardElement);
}

// Инициализация карточек
initialCards.forEach(renderCard);

// Обработчики открытия попапов
editButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEdit);
});
>>>>>>> d0bbfb7 (maestro_6_fix_const)

editButton.addEventListener('click', () => openPopup(popupEdit));
addButton.addEventListener('click', () => openPopup(popupAdd));



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

<<<<<<< HEAD

closeButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const popup = e.target.closest('.popup');
        closePopup(popup);
    });
});
profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);


formAddCard.addEventListener('submit', handleAddCardSubmit);

editButton.addEventListener('click', () => {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;

    openPopup(popupEdit);
});

//Отображение всех карточек
initialCards.forEach((cardData) => {
    const card = createCard(cardData);
    renderCard(card);
});

// Добавление карточки в DOM
export function renderCard(cardElement) {
  galleryContainer.appendChild(cardElement);
}


function handleProfileEditFormSubmit(evt) {
  evt.preventDefault(); 

 
=======
// Обработчик формы редактирования профиля
profileEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
>>>>>>> d0bbfb7 (maestro_6_fix_const)
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

<<<<<<< HEAD
 
  closePopup(popupEdit);
}

function handleAddCardSubmit(evt) {
=======
// Обработчик формы добавления карточки
formAddCard.addEventListener('submit', (evt) => {
>>>>>>> d0bbfb7 (maestro_6_fix_const)
  evt.preventDefault();

  const newCardData = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  };
<<<<<<< HEAD
  

  const cardElement = createCard(newCardData, deleteCard);
  galleryContainer.prepend(cardElement);
  
 
=======

  renderCard(newCardData);
>>>>>>> d0bbfb7 (maestro_6_fix_const)
  closePopup(popupAdd);
  formAddCard.reset();
}
