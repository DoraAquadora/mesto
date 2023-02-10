import './../pages/index.css';
import { initialCards } from '../utils/constants.js';
import { validate } from '../utils/validate.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { popupElementProfile, profileButton, formProfile, nameInput, jobInput, popupAddCard, addCardButton, popupImageRend} from '../utils/components.js';

const userInfo = new UserInfo({ nameSelector: '.profile__title', infoSelector: '.profile__profession' });

function handleProfileFormSubmit(formValues) {
  userInfo.setUserInfo(formValues);
  popupProfile.close();
}
  const popupProfile =  new PopupWithForm('.popup_type_profile', handleProfileFormSubmit);
  popupProfile.setEventListeners();

const handleCardFormSubmit = (formValues) => {
  const cardItem = {
    title: formValues.place,
    image: formValues.url
  }

  const newCard = createCard(cardItem);
  cardList.addItem(newCard);
  popupCard.close();
}

  const popupCard = new PopupWithForm('.popup_type_add-place', handleCardFormSubmit);
popupCard.setEventListeners();

function createCard(item) {
  const card = new Card(item, '#templateCards', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
}

const cardList = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement);
  }
},
  '.cards'
);

cardList.renderItems(initialCards);


const popupImage = new PopupWithImage('.popup_type_place-image');
popupImage.setEventListeners();

function handleCardClick(title, image) {
  popupImage.open(title, image);
  };

const popupProfileFormValidator = new FormValidator(validate, popupElementProfile);
popupProfileFormValidator.enableValidation();

profileButton.addEventListener('click', function () {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.info;
  popupProfile.open();
});

addCardButton.addEventListener('click', function () {
  popupCard.open();
  popupCardFormValidator.disableSubmitButton();
});

const popupCardFormValidator = new FormValidator(validate, popupAddCard);
popupCardFormValidator.enableValidation();
