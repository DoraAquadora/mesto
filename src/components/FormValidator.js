export class FormValidator{
  constructor(settings, form, evtButtonCard){
    this._form = form;
    this._settings = settings;
    this._evtButtonCard = evtButtonCard;
    this._currentButton = form.querySelector(this._settings.submitButtonSelector);
  }

  enableValidation(){
    this._setEventListeners();
  }
  _setEventListeners(){
    this._form.addEventListener('input', () =>{
      this._checkInputValidity(event)
    });
  };
  _checkInputValidity(event){
    this._input = event.target;
    this._showInputError();
    this._hideInputError();
  };

  _showInputError(){
    this._errorElement = this._form.querySelector(`.${this._input.id}-error`);
    this._errorElement.textContent = this._input.validationMessage;
  }
  _hideInputError(){
  if(this._form.checkValidity()){
    this._toggleButtonState(true);
  }
  else {
    this._toggleButtonState(false);
  }

  if(this._input.checkValidity()){
    this._setErrorInput(true);
  }
  else {
    this._setErrorInput(false);
  }
  };

  _toggleButtonState(state){
    if (state) {
      this._currentButton.removeAttribute('disabled');
      this._currentButton.classList.remove(this._settings.inactiveButtonClass);

    } else {
      this.disableButton(this._currentButton);
    }

};

disableButton(button) {
  button.setAttribute('disabled', true);
  button.classList.add(this._settings.inactiveButtonClass);
};

_setErrorInput(state) {
  if (state) {
    this._input.classList.remove(this._settings.inputErrorClass);

  } else {
    this._input.classList.add(this._settings.inputErrorClass);
  }
}

};



