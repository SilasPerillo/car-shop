import ICar from '../../Interfaces/ICar';

export default class CreateObj {
  static Car(payload: ICar) {
    const objectCreator = {
      id: payload.id,
      model: payload.model,
      year: payload.year,
      color: payload.color,
      status: payload.status,
      buyValue: payload.buyValue,
      doorsQty: payload.doorsQty,
      seatsQty: payload.seatsQty,
    };
    return objectCreator;
  }
}