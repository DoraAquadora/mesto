import { Popup } from "../components/Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._form = this._popupElement.querySelector(".popup__form");
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleConfirmDelete();
    });
    super.setEventListeners();
  }

  setSubmitConfirm(submitConfirm) {
    this._handleConfirmDelete = submitConfirm;
  }


}