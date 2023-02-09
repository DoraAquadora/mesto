export class Popup{
  constructor(popups){
    this._popupElement = document.querySelector(popups);
    this._handEndClose = this._handEndClose.blind(this);
  }

  open(){
    this._popupElement.classList.add('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose );
  }

  close(){
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose );
  };

  setEventListeners(){
    this._popupElement.querySelector('popup__closed').addEventListener('click', () =>{
      close()
    });
    this._popupElement.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup_opened')) {
        this.close()}});
  };

  _handleEscClose(e){
    if (e.target === 'Escape'){
     this.close()
    };
  };
};
