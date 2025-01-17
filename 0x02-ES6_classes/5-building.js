export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    if (
      this.constructor !== Building
      && this.evacuationWarningMessage === undefined
    ) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
  }
}
