export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  // Закрытие попапа нажатием на Esc

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  // Закрытие попапа кликом на оверлей и на крестик

  setEventListeners() {
    this._popupElement.querySelector('.popup__close-btn').addEventListener('click', () => {
        this.close();
      });

    this._popupElement.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup_is-opened')) {
        this.close();
      }
    })
}
}

