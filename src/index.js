import './pages/index.css';
import { initialCards } from "./components/cards";
import { openPopup, closePopup } from "./components/modal";
import { createCard, toggleLike } from './components/card';

// DOM элементы
const galleryContainer = document.querySelector(".places__list");
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const closeButtons = document.querySelectorAll('.popup__close');

// Формы
const formAddCard = document.querySelector('form[name="new-place"]');
const cardNameInput = formAddCard.querySelector('.popup__input_type_card-name');
const cardLinkInput = formAddCard.querySelector('.popup__input_type_url');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileEditForm = document.querySelector('form[name="edit-profile"]');
const nameInput = profileEditForm.querySelector('.popup__input_type_name');
const jobInput = profileEditForm.querySelector('.popup__input_type_description');

// Обработчик клика по изображению карточки
function handleImageClick(cardData) {
  const popupImageElement = popupImage.querySelector('.popup__image');
  const popupCaption = popupImage.querySelector('.popup__caption');
  
  popupImageElement.src = cardData.link;
  popupImageElement.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  
  openPopup(popupImage);
}

// Обработчик удаления карточки
function handleDeleteCard(cardElement) {
  if (confirm('Вы уверены, что хотите удалить эту карточку?')) {
    cardElement.remove();
  }
}

// Обработчик лайка
function handleLikeClick(evt) {
  toggleLike(evt);
  // Здесь можно добавить дополнительную логику (например, отправку на сервер)
}

// Функция рендеринга карточки
function renderCard(cardData) {
  const cardElement = createCard(
    cardData,
    handleImageClick,
    handleDeleteCard,
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

addButton.addEventListener('click', () => openPopup(popupAdd));

// Обработчики закрытия попапов
closeButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const popup = e.target.closest('.popup');
    closePopup(popup);
  });
});

// Обработчики форм
profileEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEdit);
});

formAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  const newCardData = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  };
  
  renderCard(newCardData);
  closePopup(popupAdd);
  formAddCard.reset();
});