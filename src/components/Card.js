export class Card {
  constructor(data, template,handleCardClick) {
     // this._data = data;
      this._name = data.name;
      this._link = data.link;
      this._template = template;
      this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    this._newElement = document.querySelector(this._template).content.querySelector('.card').cloneNode(true);
    return this._newElement;
  }

  generateCard() {
    this._getTemplate();
    const cardImg = this._newElement.querySelector('.card__image');
    const cardTitle = this._newElement.querySelector('.card__title');
    cardImg.src = this._link;
    cardImg.alt = this._name;
    cardTitle.textContent = this._name;

    this._setListenersForItem();
    return this._newElement;
  }

  _cardLike(){
    this._likeElement.classList.toggle('card__like_active');
  }

  _delCard(){
    this._newElement.remove();
    this._newElement = null;
  }

 // _openImgRend(){
  //  popupImgrend.src = this._link
  //  popupImgrend.alt = this._name;
   // popupImgCap.textContent = this._name;
    //open(popupImg)
 // }

  _setListenersForItem() {
    this._deleteCardButton = this._newElement.querySelector('.card__del');
    this._deleteCardButton.addEventListener('click', () => {
      this._delCard();
    });
    this._likeElement = this._newElement.querySelector('.card__like');
    this._likeElement.addEventListener('click', () => {
      this._cardLike();
    });
    this._cardImage = this._newElement.querySelector('.card__image');
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });
}
};



