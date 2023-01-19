import { Types } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import { ok, created, unprocessableEntity, notFound } from '../utils/httpHelpers';
import CreateObj from './utils/CreateObj';
// import { badRequest, ok } from '../utils/httpHelpers';

export default class CarService {
  static async create(body: ICar) {
    const carODM = new CarODM();

    const result = await carODM.create(body);

    const obj = CreateObj.Car(result);

    return created(obj);
  }

  static async getAll() {
    const carODM = new CarODM();

    const result = await carODM.getAll();

    const resultsMap = result.map((car) => CreateObj.Car(car));

    return ok(resultsMap);
  }

  static async getById(id: string) {
    const carODM = new CarODM();

    if (!Types.ObjectId.isValid(id)) return unprocessableEntity('Invalid mongo id');

    const result = await carODM.getById(id);
    
    if (!result.length) return notFound('Car not found');
    
    const obj = CreateObj.Car(result[0]);

    return ok(obj);
  }
}