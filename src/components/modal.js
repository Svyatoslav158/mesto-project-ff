import { createCard, deleteCard, galleryContainer } from './cards'

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.popup__close');


// Сохранение
const formAddCard = document.querySelector('form[name="new-place"]');
const cardNameInput = formAddCard.querySelector('.popup__input_type_card-name');
const cardLinkInput = formAddCard.querySelector('.popup__input_type_url');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formElement = document.querySelector('form[name="edit-profile"]');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');

export function initModalListner() {
    popups.forEach((popup) => {
        popup.addEventListener('mousedown', (evt) => {
            if (evt.target === popup) {
                closePopup(popup);
            }
        });
    });

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
    formElement.addEventListener('submit', handleFormSubmit);


    formAddCard.addEventListener('submit', handleAddCardSubmit);

    editButton.addEventListener('click', () => {
        nameInput.value = profileTitle.textContent;
        jobInput.value = profileDescription.textContent;

        openPopup(popupEdit);
    });

}

function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscClose);
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscClose);
}


function handleEscClose(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}


function handleFormSubmit(evt) {
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

