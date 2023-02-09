import {Popup} from '../components/Popup.js';

export class PopupWithForm extends Popup{
  constructor(popups,handSubmit){
    super(popups)
    this._handSubmit = handSubmit;
    this._getInput = this._popupElement.querySelector('.popup__input');
    this._setForm = this._popupElement.querySelector('.popup__form');
  }
  _getInputValues(){
    const formValues = {};
    this._getInput.forEach('input', () =>{
      formValues[Input.name] = input.value;
    });
    return formValues
  };

  setEventListeners(){
    super.setEventListeners
  this._setForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    this._handSubmit(this._getInputValues());
  })
  }
  close() {
    super.close();
    this._form.reset();
};

}
