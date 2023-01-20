import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
// import * as sinon from 'sinon';
import { ok, created } from '../../../src/utils/httpHelpers';
import { MotorcyclesService } from '../../../src/Services';
import { bodyMotorcycle, outputMotorcycle, arrayAllMotorcycles } from './mock/Motorcycles.mock';
// import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('MotorcyclesService', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('route to create Motorcycle', async function () {
    sinon.stub(Model, 'create').resolves(outputMotorcycle as any);
    
    const result = await MotorcyclesService.create(bodyMotorcycle);

    expect(result).to.be.deep.equal(created(outputMotorcycle));
  });

  it('route to get all', async function () {
    sinon.stub(Model, 'find').resolves(arrayAllMotorcycles as any);
    
    const result = await MotorcyclesService.getAll();

    expect(result).to.be.deep.eq(ok(arrayAllMotorcycles));
  });
});