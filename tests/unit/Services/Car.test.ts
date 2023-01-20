import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
// import * as sinon from 'sinon';
import { ok, created } from '../../../src/utils/httpHelpers';
import { CarService } from '../../../src/Services';
import { bodyCar, outputCar, arrayAllCars } from './mock/Cars.mock';
// import ICar from '../../../src/Interfaces/ICar';

describe('CarService', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('route to create car', async function () {
    sinon.stub(Model, 'create').resolves(outputCar as any);
    
    const result = await CarService.create(bodyCar);

    expect(result).to.be.deep.equal(created(outputCar));
  });

  it('route to get all', async function () {
    sinon.stub(Model, 'find').resolves(arrayAllCars as any);
    
    const result = await CarService.getAll();

    expect(result).to.be.deep.eq(ok(arrayAllCars));
  });
});