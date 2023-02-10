export class Card {
  constructor(data, templateSelector, handleCardClick) {
  this._title = data.title;
  this._image = data.image;
  this._templateSelector = templateSelector;
  this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.cards__item')
    .cloneNode(true);

    return cardElement;
  }


generateCard = () => {
  this._element = this._getTemplate();
  this._like = this._element.querySelector(".cards__like-btn");
  this._titleCard = this._element.querySelector(".cards__title");
  this._cardImg = this._element.querySelector(".cards__image");
  this._delete = this._element.querySelector(".cards__remove-btn");
  this._elementChangeData()
  this._setEventListeners()
  return this._element;
}



  _setEventListeners() {
    this._like.addEventListener('click', (event) => {
      this._handleLikeButton(event);
    });

    this._delete.addEventListener('click', (event) => {
      this._handleDeleteCard(event);
    });

    this._cardImg.addEventListener('click', () => {
      this._handleCardClick(this._title, this._image);
    });
  }

  _elementChangeData() {
    this._cardImg.alt = this._title;
    this._cardImg.src = this._image;
    this._titleCard.textContent = this._title;
}

  _handleLikeButton(event) {
    event.target.classList.toggle('cards__like-btn_active');
  }

  _handleDeleteCard(event) {
    this._element.remove(event);
  }
}
