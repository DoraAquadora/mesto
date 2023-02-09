import {Popup} from '../components/Popup.js';

export class PopupWithImage extends Popup{
  constructor(popups){
    super(popups)
    this._popupImgrend = this._popupElement.querySelector('.card-image__img');
    this._popupCaption = this._popupElement.querySelector('.card-image__caption');
  }

  open(name,link){
    this._popupImgrend.src = link;
    this._popupImgrend.alt = name;
    this._popupCaption.textContent = name;
    super.open()
  }
};
