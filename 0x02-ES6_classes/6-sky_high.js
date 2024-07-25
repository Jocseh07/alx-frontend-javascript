import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, height) {
    super(sqft);
    if (typeof height !== 'number') {
      throw new Error('Height must be a number');
    }
    this._height = height;
  }

  get height() {
    return this._height;
  }

  set height(height) {
    if (typeof height !== 'number') {
      throw new Error('Height must be a number');
    }
    this._height = height;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._height} floors`;
  }
}
