import { Popup } from "../components/Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector('.popup__form'); // находим элементы формы для того, чтобы в методе close сбросить все инпуты формы (сбросить форму)
        this._inputList = this._popupElement.querySelectorAll('.popup__input'); // находим все элементы полей
    }
    _getInputValues() {
        const formValues = {};

        this._inputList.forEach(input => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();

            this._handleFormSubmit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}
