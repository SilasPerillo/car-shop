// import { Types } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';
import { created } from '../utils/httpHelpers';
// import { ok, created, unprocessableEntity, notFound } from '../utils/httpHelpers';
import CreateObj from './utils/CreateObj';

export default class MotorcyclesService {
  static async create(body: IMotorcycle) {
    const motorcyclesODM = new MotorcyclesODM();

    const result = await motorcyclesODM.create(body);

    const obj = CreateObj.Motorcycles(result);

    return created(obj);
  }
}