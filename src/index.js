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
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.popup__close');



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



const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formElement = document.querySelector('form[name="edit-profile"]');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
editButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;

  openPopup(popupEdit);
});


function handleFormSubmit(evt) {
  evt.preventDefault(); 

 
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

 
  closePopup(popupEdit);
}


formElement.addEventListener('submit', handleFormSubmit);


// Сохранение


const formAddCard = document.querySelector('form[name="new-place"]');
const cardNameInput = formAddCard.querySelector('.popup__input_type_card-name');
const cardLinkInput = formAddCard.querySelector('.popup__input_type_url');

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


formAddCard.addEventListener('submit', handleAddCardSubmit);




function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscClose);
 popup.style.display = 'flex'; 
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscClose);
 
   setTimeout(() => { popup.style.display = 'none'; }, 500);
}