import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import { created } from '../utils/httpHelpers';
// import { badRequest, ok } from '../utils/httpHelpers';

export default class CarService {
  static async create(body: ICar) {
    const carODM = new CarODM();

    const result = await carODM.create(body);

    const obj = {
      id: result.id,
      model: result.model,
      year: result.year,
      color: result.color,
      status: result.status,
      buyValue: result.buyValue,
      doorsQty: result.doorsQty,
      seatsQty: result.seatsQty,
    };

    return created(obj);
  }
}