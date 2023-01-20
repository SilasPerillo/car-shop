import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  public engineCapacity: number;

  constructor({ id, model, year, color, status, buyValue, category, engineCapacity }: IMotorcycle) {
    super({ id, model, year, color, status, buyValue });
    this.category = category;
    this.engineCapacity = engineCapacity;
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
  public getCategory() {
    return this.category;
  }
  public getEngineCapacity() {
    return this.engineCapacity;
  }
}