
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


// Сохранение
const formAddCard = document.querySelector('form[name="new-place"]');
const cardNameInput = formAddCard.querySelector('.popup__input_type_card-name');
const cardLinkInput = formAddCard.querySelector('.popup__input_type_url');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileEditForm = document.querySelector('form[name="edit-profile"]');
const nameInput = profileEditForm.querySelector('.popup__input_type_name');
const jobInput = profileEditForm.querySelector('.popup__input_type_description');


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

 
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

 
  closePopup(popupEdit);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  
  const newCardData = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  };
  

  const cardElement = createCard(newCardData, deleteCard);
  galleryContainer.prepend(cardElement);
  
 
  closePopup(popupAdd);
  formAddCard.reset();
}
