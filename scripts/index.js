import { FormValidator } from "../scripts/FormValidator.js";
import { Card } from "../scripts/Card.js";
import {samplesCards} from "../scripts/cards.js"

const buttonOpenProf = document.querySelector('.profile__edit-btn');// кнопка открытия профиля
const popupProfile = document.querySelector('.popup_type_profile-edit');// сам попап профиля
const popupProfileClose = document.querySelector('.popup__profile-close');//ЗАКРЫТЬ

const popupProfileName = popupProfile.querySelector('.popup__input_type_name');
const popupProfileInfo = popupProfile.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const popupAddCard = document.querySelector('.popup_type_add-card');// сам попап
const buttonAddCard = document.querySelector('.profile__add-card');// Кнопка карточек
const popupCardClose = document.querySelector('.popup__add-close');//ЗАКРЫТЬ

export const popupImg = document.querySelector('.popup_type_image');
const popupRendorClose = document.querySelector('.popup__rendor-close')//ЗАКРЫТЬ

const sectionCards = document.querySelector('.cards');
const popupCardName = document.querySelector('.popup__input_type_card-name');
const popupCardUrl = document.querySelector('.popup__input_type_card-url');
export const popupImgCaption = popupImg.querySelector('.card-image__caption');
export const popupImgPic = popupImg.querySelector('.card-image__img');

const buttonSubmitAddCardForm = document.querySelector('.popup__submit-btn_place');

const formProfile = document.querySelector('.popup__form_type_profile');// ФОРМА
const formCard = document.querySelector('.popup__form_type_card'); //ФОРМА

const popups = document.querySelectorAll('.popup');

const Validation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_error_active'
};

const profileValidatorEdit = new FormValidator(Validation, formProfile);
const cardValidatorAdd = new FormValidator(Validation, formCard);

profileValidatorEdit.enableValidation();
cardValidatorAdd.enableValidation();

function createCards(data) {
  const card = new Card(data, '.element-template');
  const newElement = card.createCard();
  return newElement;
}

function renderCard(data) {
  const newElement = createCards(data);
  sectionCards.append(newElement);
}
function render() {
  samplesCards .forEach(renderCard);
}

function addNewCard(e) {
  e.preventDefault();
  const createdNewElement = createCards({ name: popupCardName.value, link: popupCardUrl.value })
  sectionCards.prepend(createdNewElement);
  closeAddCardPopup();
}

export function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closeByEsc);
}
function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closeByEsc);
}

function openProfilePopup() {
  popupProfileName.value = profileName.textContent;
  popupProfileInfo.value = profileAbout.textContent;
  openPopup( popupProfile);
}
function closeProfilePopup() {
  closePopup( popupProfile);
  console.log(closeProfilePopup())
}

function submitForm(evt) {
  evt.preventDefault();
  profileName .textContent = popupProfileName.value;
  profileAbout.textContent = popupProfileInfo.value;
  closePopup( popupProfile);
}

function openAddCardPopup() {
  openPopup(popupAddCard);
}

function closeAddCardPopup() {
  closePopup(popupAddCard);
  cardValidatorAdd.disableButton( buttonSubmitAddCardForm);//ЗАМЕНА
  formCard .reset();
}

function closeCard() {
  closePopup(popupImg);
}console.log(closeCard())

function closeByOverlay(overlay) {
  overlay.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_active')) {
      closePopup(overlay);
    }
  })//если не закронтся поставь попап
}
function closeByEsc(evt) {
  if (evt.key == 'Escape') {
    const openedOverlay = document.querySelector('.popup_active');
    closePopup(openedOverlay);
  }
}
popups.forEach(closeByOverlay);

buttonAddCard.addEventListener('click', openAddCardPopup);
popupCardClose.addEventListener('click', closeAddCardPopup);

buttonOpenProf.addEventListener('click', openProfilePopup);
popupProfileClose.addEventListener('click', closeProfilePopup);

formProfile.addEventListener('submit', submitForm);
popupRendorClose.addEventListener('click', closeCard);

formCard.addEventListener('submit', addNewCard);

render();
