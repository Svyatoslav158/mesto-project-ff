const japanImage = "https://images.unsplash.com/photo-1741851374655-3911c1b0e95a?w=500&auto=format&fit=crop&q=60";
const usaImage = "https://images.unsplash.com/photo-1741367658528-8134fab3b67d?q=80&w=1974&auto=format&fit=crop";
const icelandImage = "https://images.unsplash.com/photo-1724376682600-6540c4570ac8?w=500&auto=format&fit=crop&q=60";
const scotlandImage = "https://plus.unsplash.com/premium_photo-1732568404499-8561e0788a13?q=80&w=1974&auto=format&fit=crop";
const peruImage = "https://images.unsplash.com/photo-1740004731264-3cde5c198cc2?q=80&w=1974&auto=format&fit=crop";
const belarusImage = "https://images.unsplash.com/photo-1636590969448-bdfacae4a933?q=80&w=1935&auto=format&fit=crop";

export const initialCards = [ 
  { name: "Япония", link: japanImage }, 
  { name: "США", link: usaImage },
  { name: "Исландия", link: icelandImage },
  { name: "Шотландия", link: scotlandImage },
  { name: "Перу", link: peruImage }, 
  { name: "Беларусь", link: belarusImage } 
];


const locationTemplate = document.querySelector("#card-template").content.querySelector(".card");
export const galleryContainer = document.querySelector(".places__list");


export function initCards() {
  
  initialCards.forEach((cardData) => {
    const card = createCard(cardData, deleteCard);
    renderCard(card);
  });

}

// Удаление
export function deleteCard(cardElement) {
  cardElement.remove();
}

// Создание карточки
export function createCard(data, onDelete) {
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
export function renderCard(cardElement) {
  galleryContainer.appendChild(cardElement);
}
