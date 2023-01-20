import { Model, Schema, model, models } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcyclesODM {
  private schema: Schema;
  private model: Model<IMotorcycle>;

  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.Motorcycles || model('Motorcycles', this.schema);
  }

  public async create(motorcycles: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...motorcycles }); 
  }

  // public async getAll(): Promise<IMotorcycles[]> {
  //   return this.model.find();
  // }

  // public async getById(id: string): Promise<IMotorcycles[]> {
  //   return this.model.find({ _id: id });
  // }

  // public async update(id: string, body: IMotorcycles) {
  //   return this.model.updateOne({ _id: id }, { ...body });
  // }
}