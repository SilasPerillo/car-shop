import { Router } from 'express';
import { MotorcyclesController } from '../Controllers';

const MotorcyclesRouter = Router();

MotorcyclesRouter.post('/', (req, res) => MotorcyclesController.create(req, res));
MotorcyclesRouter.get('/:id', (req, res) => MotorcyclesController.getById(req, res));
// MotorcyclesRouter.put('/:id', (req, res) => MotorcyclesController.update(req, res));
MotorcyclesRouter.get('/', (req, res) => MotorcyclesController.getAll(req, res));

export default MotorcyclesRouter;