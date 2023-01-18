import ICar from '../Interfaces/ICar';

export default class Car {
  public id: string | undefined;
  protected model: string;
  public year: number;
  public color: string;
  public status: boolean | undefined;
  public buyValue: number;
  private doorsQty: number;
  public seatsQty: number;

  constructor({ id, model, year, color, status, buyValue, doorsQty, seatsQty }: ICar) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  public getId() {
    return this.id;
  }
  public getModel() {
    return this.model;
  }
  public getYear() {
    return this.year;
  }
  public getColor() {
    return this.color;
  }
  public getStatus() {
    return this.status;
  }
  public getBuyValue() {
    return this.buyValue;
  }
  public getDoorsQty() {
    return this.doorsQty;
  }
  public getSeatQty() {
    return this.seatsQty;
  }
}