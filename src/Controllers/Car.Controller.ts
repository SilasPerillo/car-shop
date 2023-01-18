import { Request, Response } from 'express';
import { CarService } from '../Services';

export default class CarController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { body } = req;

    const { statusCode, message } = await CarService.create(body);

    return res.status(statusCode).json(message);
  }
}