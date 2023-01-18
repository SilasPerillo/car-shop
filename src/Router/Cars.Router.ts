import { Router } from 'express';
import { CarController } from '../Controllers';

const CarsRouter = Router();

CarsRouter.post('/', (req, res) => CarController.create(req, res));

export default CarsRouter;