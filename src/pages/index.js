import './../pages/index.css';
import {Api} from '../components/Api.js'//ll
import { validate } from '../utils/validate.js';//ll
import { Card } from '../components/Card.js';//ll
import { FormValidator } from '../components/FormValidator.js';//ll
import { Section } from '../components/Section.js';//ll
import { PopupWithImage } from '../components/PopupWithImage.js';//ll
import { PopupWithForm } from '../components/PopupWithForm.js';//ll
import { PopupWithConfirmation} from '../components/PopupWithConfirmation.js'//ll
import { UserInfo } from '../components/UserInfo.js';//ll
import {  profileName,
  profileJob,
  cardsElementList,
  formEditProfile,
  formEditAvatar,
  formElementCard,
  buttonOpenAddCardPopup,
  buttonOpenEditProfilePopup,
  profileAvatar,
  buttonEditAvatar,} from '../utils/components.js';
let userId;
const popupWithImage = new PopupWithImage({ popupSelector: ".popup_type_place-image" });
popupWithImage.setEventListeners();

const userInfo = new UserInfo({
  name: profileName,
  about: profileJob,
  avatar: profileAvatar,
});

// Попап удаления

const popupWithConfirmation = new PopupWithConfirmation({
  popupSelector: ".popup_delete",
});

// Создание карточки

const createCard = (data) => {
  const card = new Card(
    {
      data,
      userId: userId,
      handleCardClick: (name, link) => {
        popupWithImage.open(name, link);
      },
      handleDeleteIconClick: () => {
        popupWithConfirmation.open();
        popupWithConfirmation.setSubmitConfirm(() => {
          api
            .deleteCard(data._id)
            .then((res) => {
              card.handleDeleteCard(res);
              popupWithConfirmation.close();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      },
      handleLikeClick: (id) => {
        if (card.availableLikes()) {
          api
            .deleteLike(id)
            .then((res) => {
              card.countNewLike(res);
              card.toggleButtonLike();
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api
            .addLike(id)
            .then((res) => {
              card.countNewLike(res);
              card.toggleButtonLike();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
    },
    "#template-cards"
  );
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
  card.checkMyId();
};

const cardList = new Section(
  { renderer: (item) => createCard(item) },
  cardsElementList
);

popupWithConfirmation.setEventListeners();

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-59/",
  headers: {
    authorization: "04fe2fa3-c86b-49c0-922d-ad413859efcc",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserIfnoApi(), api.getInitialCards()])
  .then((res) => {
    const resUser = res[0];
    const resCard = res[1];
    userId = resUser._id;
    userInfo.setUserInfo(resUser);
    cardList.renderItems(resCard);
  })
  .catch((err) => {
    console.log(err);
  });

// Форма редактирования профиля

const handleEditProfilePopup = () => {
  const data = userInfo.getUserInfo();
  popupEditProfile.setInputValues(data);
  popupEditProfile.open();
  formValidatorProfile.resetValidation();
};

const popupEditProfile = new PopupWithForm({
  popupSelector: ".popup_type_profile",
  handleFormSubmit: (name, about) => {
    popupEditProfile.waitLoad(true);
    api
      .sendUserIfno(name, about)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.waitLoad(false);
      });
  },
});

buttonOpenEditProfilePopup.addEventListener("click", () => {
  handleEditProfilePopup(profileName, profileJob);
});

popupEditProfile.setEventListeners();

// Форма создания карточки

const popupWithCard = new PopupWithForm({
  popupSelector: ".popup_type_add-place",
  handleFormSubmit: (name, link) => {
    popupWithCard.waitLoad(true);
    api
      .addNewCard(name, link)
      .then((res) => {
        createCard(res);
        popupWithCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithCard.waitLoad(false);
      });
  },
});

buttonOpenAddCardPopup.addEventListener("click", () => {
  popupWithCard.open();
  formValidatorCard.disableSubmitButton();
  formValidatorCard.resetValidation();
});

popupWithCard.setEventListeners();

// Форма редактирования аватара

const popupWithAvatar = new PopupWithForm({
  popupSelector: ".popup_type_update-avatar",
  handleFormSubmit: (link) => {
    popupWithAvatar.waitLoad(true);
    api
      .addNewAvatar(link)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupWithAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithAvatar.waitLoad(false);
      });
  },
});

buttonEditAvatar.addEventListener("click", () => {
  popupWithAvatar.open();
  formValidatorAvatar.disableSubmitButton();
  formValidatorAvatar.resetValidation();
});

popupWithAvatar.setEventListeners();

// Валидация форм

const formValidatorCard = new FormValidator(
  validate,
  formElementCard
);
const formValidatorProfile = new FormValidator(
  validate,
  formEditProfile
);

const formValidatorAvatar = new FormValidator(
  validate,
  formEditAvatar
);

formValidatorCard.enableValidation();
formValidatorProfile.enableValidation();
formValidatorAvatar.enableValidation();
