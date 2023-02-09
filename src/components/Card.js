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

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._elementChangeData();

    return this._element;
  }

  _elementChangeData() {
    this._element.querySelector('.cards__image').src = this._image;
    this._element.querySelector('.cards__title').textContent = this._title;
    this._element.querySelector('.cards__image').alt = this._title;
  }

  _setEventListeners() {
    this._element.querySelector('.cards__like-btn').addEventListener('click', (event) => {
      this._handleLikeButton(event);
    });

    this._element.querySelector('.cards__remove-btn').addEventListener('click', (event) => {
      this._handleDeleteCard(event);
    });

    this._element.querySelector('.cards__image').addEventListener('click', () => {
      this._handleCardClick(this._title, this._image);
    });
  }

  _handleLikeButton(event) {
    event.target.classList.toggle('cards__like-btn_active');
  }

  _handleDeleteCard(event) {
    this._element.remove(event);
  }
}
