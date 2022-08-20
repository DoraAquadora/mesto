
// включение валидации форм
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
      setEventListeners(formElement, config);
  });
};

// показать ошибку инпута
const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};
// убрать ошибку инпута
const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  console.log(errorElement)
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

// функция условия
const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
      hideInputError(formElement, inputElement, config);
  }
};

// установка слушателя
const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config, formElement);
  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
          toggleButtonState(inputList, buttonElement, config, formElement);
          checkInputValidity(formElement, inputElement, config);
      });
  });
};

// проверка на валидность
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  });
};

// получение без значения
const toggleButtonState = (inputList, buttonElement, config, formElement) => {
  if (hasInvalidInput(inputList)) {
      formElement.querySelector(config.submitButtonSelector).setAttribute('disabled', 'disabled');
      buttonElement.classList.add(config.inactiveButtonClass);
  } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
      formElement.querySelector(config.submitButtonSelector).removeAttribute('disabled');
  }
};

// включение валидации
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_error_active'
});


