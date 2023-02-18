export class Card {
  constructor(
    { data, userId, handleCardClick, handleDeleteIconClick, handleLikeClick },
    templateSelector
  ) {
    this._text = data.name;
    this._imageLink = data.link;
    this._alt = data.name;
    this._id = data._id;
    this._likes = data.likes;
    this._owner = data.owner;
    this._ownerId = this._owner._id;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplateCard() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.cards__item')
    .cloneNode(true);
    this._buttonLike = cardElement.querySelector(".cards__like-btn");//gg
    this._cardImg = cardElement.querySelector(".cards__image");//gg
    this._delete = cardElement.querySelector(".cards__remove-btn");//gg
    this._likeCounter = cardElement.querySelector(".cards__like-count");//gg

    return cardElement;
  }

generateCard = () => {
  this._element = this._getTemplateCard(); 
   this._setEventListeners()
  this.toggleButtonLike()

  this._likeCounter.textContent = this._likes.length;
  this._element.querySelector(".cards__title").textContent = this._text;
  this._cardImg.src = this._imageLink;
  this._cardImg.alt = this._text;

  return this._element;
}

  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => {
      this._handleLikeClick(this._id);
    });

    this._delete.addEventListener('click', () => {
      this._handleDeleteIconClick(this._id);
    });

    this._cardImg.addEventListener('click', () => {
      this._handleCardClick(this._text, this._imageLink);//title
    });
  }

  checkMyId() {
    if (this._userId !== this._ownerId) {
      this._delete.classList.add("cards__remove-btn_active");
    } else {
      this._delete.classList.remove("cards__remove-btn_active");
    }
  }

  countNewLike(newData) {
    this._likes = newData.likes;
    this._likeCounter.textContent = this._likes.length;
  }
  
  availableLikes = () => {
    const isMyLikes = this._likes.some((like) => like._id === this._userId);
    return isMyLikes;
  };

toggleButtonLike() {
  if (this.availableLikes()) {
    this._buttonLike.classList.add("cards__like-btn_active");
  } else {
    this._buttonLike.classList.remove("cards__like-btn_active");
  }  
}

  handleDeleteCard() {
    this._element.remove();
  }
}