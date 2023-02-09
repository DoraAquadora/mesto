export class FormValidator {
  constructor(Validate, formElement) {
      this._inputSelector = Validate.inputSelector;
      this._submitButtonSelector = Validate.submitButtonSelector;
      this._inactiveButtonClass = Validate.inactiveButtonClass;
      this._inputErrorClass = Validate.inputErrorClass;
      this._errorClass = Validate.errorClass;
      this._formElement = formElement;
      this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
      this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
  };

  _showInputError(input, errorMessage) {
      const error = this._formElement.querySelector(`#${input.id}-error`);
      input.classList.add(this._inputErrorClass);
      error.textContent = errorMessage;
      error.classList.add(this._errorClass);
  };

  _hideInputError(input) {
      const error = this._formElement.querySelector(`#${input.id}-error`);
      error.textContent = '';
      input.classList.remove(this._inputErrorClass);
      error.classList.remove(this._errorClass);
  };

  _checkInputValidity(input) {
      if (!input.validity.valid) {
          this._showInputError(input, input.validationMessage);
      } else {
          this._hideInputError(input);
      }
  };

  _setEventListeners() {
      this._inputList.forEach(input => {
          input.addEventListener('input', () => {
              this._checkInputValidity(input);
              this._toggleButtonState(this._inputList, this._submitButton);
          });
      });
  };

  enableValidation() {
      this._setEventListeners();
  };

  _hasInvalidInput(inputList) {
      return inputList.some((inputElement) => {

          return !inputElement.validity.valid;
      })
  };

  _toggleButtonState(inputList, buttonElement) {
      if (this._hasInvalidInput(inputList)) {
          buttonElement.classList.add(this._inactiveButtonClass);
          buttonElement.disabled = true;
      } else {
          buttonElement.classList.remove(this._inactiveButtonClass);
          buttonElement.disabled = false;
      }
  };

  disableSubmitButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }
};
