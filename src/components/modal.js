// modal.js

/**
 * Открывает попап
 * @param {HTMLElement} popup — элемент попапа
 */
export function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscClose);
  popup.addEventListener('mousedown', handleOverlayClose);
}

/**
 * Закрывает попап
 * @param {HTMLElement} popup — элемент попапа
 */
export function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscClose);
  popup.removeEventListener('mousedown', handleOverlayClose);
}

/**
 * Закрытие по Escape
 * @param {KeyboardEvent} evt
 */
function handleEscClose(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

/**
 * Закрытие по клику вне попапа (оверлей)
 * @param {MouseEvent} evt
 */
function handleOverlayClose(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}
