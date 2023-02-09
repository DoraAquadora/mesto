export class Sections {
  constructor({renderer},sectionCards){

    this._initialArray = renderer;
    this._container = document.querySelector(sectionCards);
  }
  renderItems(items) { //перебор массива
   items.forEach((item) =>{
    this._renderer(item);
   })
   };

   addItem(element) {//принимает параметр и вставляет в разметку
    this._container.append(element);
  }

  };



