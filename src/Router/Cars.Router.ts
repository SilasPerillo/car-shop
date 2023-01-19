import { Router } from 'express';
import { CarController } from '../Controllers';

const CarsRouter = Router();

CarsRouter.post('/', (req, res) => CarController.create(req, res));
CarsRouter.get('/:id', (req, res) => CarController.getById(req, res));
CarsRouter.put('/:id', (req, res) => CarController.update(req, res));
CarsRouter.get('/', (req, res) => CarController.getAll(req, res));

export default CarsRouter;