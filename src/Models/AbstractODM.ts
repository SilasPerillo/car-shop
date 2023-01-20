import { Model } from 'mongoose';

export default class AbstractODM<T> {
  private _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }
}