import { Router } from 'express';
import CarsRouter from './Cars.Router';

const router = Router();

router.use('/cars', CarsRouter);

export default router;