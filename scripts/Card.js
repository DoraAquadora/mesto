import { openPopup, popupImgCaption, popupImgPic, popupImg } from "./index.js";
export class Card {
    constructor(data, template) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._template = template;
    }
    _getTemplate() {
      this._newElement = document
        .querySelector(this._template)//ошибка тега обрати внимание
        .content
        .querySelector('.card')
        .cloneNode(true);
      return this._newElement;
    }
    createCard() {
        this._getTemplate();
        const imageSrc = this._newElement.querySelector('.card__img');
        const cardTitle = this._newElement.querySelector('.card__title');
        imageSrc.src = this._link;
        imageSrc.alt = this._name;
        cardTitle.textContent = this._name;
        this._setListenersForItem();
        return this._newElement;
    }

    _deleteCard() {
      this._newElement.remove();
      this._newElement = null;
    }
    _addOrRemoveLike() {
        this._elementLike.classList.toggle('card__like_active');
      }
    _openCard() {
        popupImgPic.src = this._link;
        popupImgCaption.textContent = this._name;
        popupImgPic.alt = this._name;
        openPopup(popupImg);
    }
    _setListenersForItem() {
        this._deleteCardButton = this._newElement.querySelector('.card__del');
        this._deleteCardButton.addEventListener('click', () => {
          this._deleteCard();
        });
        this._elementLike = this._newElement.querySelector('.card__like');
        this._elementLike.addEventListener('click', () => {
          this._addOrRemoveLike();
        });
        this._cardImage = this._newElement.querySelector('.card__img');
        this._cardImage.addEventListener('click', () => {
          this._openCard();
        });
    }
};
