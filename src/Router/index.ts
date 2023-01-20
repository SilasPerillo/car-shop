import { Router } from 'express';
import CarsRouter from './Cars.Router';
import MotorcyclesRouter from './Motorcycles.Router';

const router = Router();

router.use('/cars', CarsRouter);
router.use('/motorcycles', MotorcyclesRouter);

export default router;