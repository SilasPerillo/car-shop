import { Model, Schema, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car }); 
  }

  public async getAll(): Promise<ICar[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<ICar[]> {
    return this.model.find({ _id: id });
  }

  public async update(id: string, body: ICar) {
    return this.model.updateOne({ _id: id }, { ...body });
  }
}