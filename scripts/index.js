const buttonOpenProf = document.querySelector('.profile__edit-btn');
const popupProfile = document.querySelector('.popup_type_profile-edit');
const FormProfile = document.querySelector('.popup__form_type_profile');
const popupProfileName = popupProfile.querySelector('.popup__input_type_name');
const popupProfileInfo = popupProfile.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const buttonAddCard = document.querySelector('.profile__add-card');
const popupAddCard = document.querySelector('.popup_type_add-card');
const FormCard = document.querySelector('.popup__form_type_card')
const popupCardName = document.querySelector('.popup__input_type_card-name');
const popupCardUrl = document.querySelector('.popup__input_type_card-url');
const popupImg = document.querySelector('.popup_type_image');
const popupImgPic = popupImg.querySelector('.card-image__img');
const popupImgCaption = popupImg.querySelector('.card-image__caption');
const sectionCards = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card').content;
const popups = document.querySelectorAll('.popup');

// Открытие попапов
function openPopup (popup) {
  popup.classList.add('popup_active');
  window.addEventListener('keyup', closePopupHandler);

}
// Функции Профиля
buttonOpenProf.addEventListener('click', () => {
  popupProfileName.value = profileName.textContent;
  popupProfileInfo.value = profileAbout.textContent;
  openPopup(popupProfile);
});

  FormProfile.addEventListener('submit', evt => {
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileAbout.textContent = popupProfileInfo.value;
  closePopup(popupProfile);
});

// Закрытие попапов
function closePopup (popup) {
  popup.classList.remove('popup_active');
  window.removeEventListener('keyup', closePopupHandler);
}
// Закрытие попапов на esc
function closePopupHandler (evt) {
  if (evt.key === 'Escape') {
    for (let i = 0; i < popups.length; i++) {
      if (popups[i].classList.contains('popup_active')) {
        closePopup(popups[i]);
        return;
      }
    }
  }
};

// Функции карточек
buttonAddCard.addEventListener('click', () => {
  popupCardName.value = '';
  popupCardUrl.value = '' ;
  openPopup(popupAddCard);
});

function createCard(title, src) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__title').textContent = title;
  const cardImg = card.querySelector('.card__img');
  cardImg.src = src;
  cardImg.alt = title;
  cardImg.addEventListener('click', () => openPopupImg(title, src));
  card.querySelector('.card__like').addEventListener('click', () => likeCard(card));
  card.querySelector('.card__del').addEventListener('click', () => delCard(card));
  return card;
}

 FormCard.addEventListener('submit', evt => {
  evt.preventDefault();
  const card = createCard(popupCardName.value, popupCardUrl.value);
  addNewCard(card);
  closePopup(popupAddCard);
});

function addNewCard(card) {
  sectionCards.prepend(card);
}

function delCard(card) {
  card.remove();
}

function likeCard (card) {
  card.querySelector('.card__like').classList.toggle('card__like_active');
}
// Попап с картинкой
function openPopupImg (title, src) {
  popupImgPic.src = src;
  popupImgPic.alt = title;
  popupImgCaption.textContent = title;
  openPopup(popupImg);
}

popups.forEach(popup => {
  popup.addEventListener('click', (evt) => {
    if ( evt.target === evt.currentTarget ||evt.target.classList.contains('popup__close-btn'))
      closePopup(popup);
  });
});

// Изначальный набор карточек
samplesCards.forEach(el => addNewCard(createCard(el.title, el.src)));
