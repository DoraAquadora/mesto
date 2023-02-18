export class Section {
  constructor({ renderer }, container) {
    this._renderer = renderer;
    this._container = container;
  }

  renderItems = (items) => {
    items.forEach(this._renderer);
  };

  addItem(cardElement) {
    this._container.prepend(cardElement);
  }
}

