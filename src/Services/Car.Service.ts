import { Types } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import { ok, created, unprocessableEntity, notFound } from '../utils/httpHelpers';
import CreateObj from './utils/CreateObj';
// import { badRequest, ok } from '../utils/httpHelpers';

const messageNotFound = 'Car not found';
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
    if (!Types.ObjectId.isValid(id)) return unprocessableEntity('Invalid mongo id');
    
    const carODM = new CarODM();

    const result = await carODM.getById(id);

    if (!result.length) return notFound('Car not found');
    
    const obj = CreateObj.Car(result[0]);

    return ok(obj);
  }

  static async update(id: string, body: ICar) {
    if (!Types.ObjectId.isValid(id)) return unprocessableEntity('Invalid mongo id');
    
    const carODM = new CarODM();

    const verifyCar = await carODM.getById(id);

    if (!verifyCar.length) return notFound(messageNotFound);

    const result = await carODM.update(id, body);
    
    if (!result) return notFound(messageNotFound);

    const constructorObj = { id, ...body };
    
    const obj = CreateObj.Car(constructorObj);

    return ok(obj);
  }
}