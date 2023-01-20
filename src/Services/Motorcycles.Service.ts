import { Types } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';
import { ok, created, unprocessableEntity, notFound } from '../utils/httpHelpers';
import CreateObj from './utils/CreateObj';

export default class MotorcyclesService {
  static async create(body: IMotorcycle) {
    const motorcyclesODM = new MotorcyclesODM();

    const result = await motorcyclesODM.create(body);

    const obj = CreateObj.Motorcycle(result);

    return created(obj);
  }

  static async getAll() {
    const motorcyclesODM = new MotorcyclesODM();

    const result = await motorcyclesODM.getAll();

    const resultsMap = result.map((moto) => CreateObj.Motorcycle(moto));

    return ok(resultsMap);
  }

  static async getById(id: string) {
    if (!Types.ObjectId.isValid(id)) return unprocessableEntity('Invalid mongo id');
    
    const motorcyclesODM = new MotorcyclesODM();

    const result = await motorcyclesODM.getById(id);

    if (!result.length) return notFound('Motorcycle not found');
    
    const obj = CreateObj.Motorcycle(result[0]);

    return ok(obj);
  }
}