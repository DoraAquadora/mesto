import { Popup } from "../components/Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImageElementImage = this._popupElement.querySelector('.popup__image');
        this._popupTitleElementImage = this._popupElement.querySelector('.popup__image-title');
      }

    open(title, image) {
        this._popupImageElementImage.src = image;
        this._popupImageElementImage.alt = title;
        this._popupTitleElementImage.textContent = title;
        super.open();
    }
}

