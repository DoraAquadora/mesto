//Импорт css
import '../pages/index.css'

//Импорт массива
import { initialCards } from '../utils/constants.js';
import {elements} from '../utils/elements.js';
import { Validation } from '../utils/enablevalidation.js';

//Импорт классов
import { Card } from '../components/Card.js';
import {Popup} from '../components/Popup.js';
import { FormValidator } from '../components/FormValidator.js';
import { Sections } from '../components/Sections.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

//Импорт DOM узлов
import { profilePopup, EditButton, PopupForm, PopupInputName, PopupInputJob, popupAddCard, buttonAddCard, popupImgrend} from '../utils/elements';

//Userinfo
//Создание попапа 1(имя, профессии)
const userInfo = new UserInfo({ nameSelector: '.profile__name', infoSelector: '.profile__text' });

//Редактирование имени и информации о себе попап 1
function editProfileForm(formValues) {
  userInfo.setUserInfo(formValues);
  popupProfile.close();
}

//PopupWithForm
//Функция для попапа 1 (имя, профессии)
  const popupProfile =  new PopupWithForm('.popup_type_profile', editProfileForm);
  popupProfile.setEventListeners();

const handleCardFormSubmit = (formValues) => {
  const cardItem = {
    name: formValues.place,
    link: formValues.url
  }

  const newCard = createCard(cardItem);
  cardList.addItem(newCard);
  popupCard.close();
}

  const popupCard = new PopupWithForm('.popup_add-card', handleCardFormSubmit);
popupCard.setEventListeners();

function createCard(item) {
  const card = new Card(item, 'element-template', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
}

const cardList = new Sections({
  renderer: (item) => {
    const cardElement = createCard(item);//Создаем новую карточку
    cardList.addItem(cardElement);
  }
},
  '.cards'
);

cardList.renderItems(initialCards);


//PopupWithImage
// Попап 3 (открытие картинок с текстом)
const popupImage = new PopupWithImage('.card-image__img');
popupImage.setEventListeners();

  //Функция открытия попапа 3
function handleCardClick(name, link) {
  popupImage.open(name, link);
  };

//Запускаем валидацию на форму из попапа профиля (используются данные из файла FormValidator.js)
const popupProfileFormValidator = new FormValidator(Validation, profilePopup);//fffffffffffffffffff
popupProfileFormValidator.enableValidation();

//Слушатели
//Открытие попапа 1 (имя и профессия)
EditButton.addEventListener('click', function () {
  const userData = userInfo.getUserInfo();
  PopupInputName.value = userData.name;
  PopupInputJob.value = userData.info;
  popupProfile.open();
});

//Открытие попапа 2(добавление карточек)
buttonAddCard.addEventListener('click', function () {
  popupCard.open();
  popupCardFormValidator.disableButton();
});

//Запускаем валидацию на форму из попапа добавления карточки
const popupCardFormValidator = new FormValidator(Validation, popupAddCard);
popupCardFormValidator.enableValidation();










