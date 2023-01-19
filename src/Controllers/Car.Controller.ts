import { Request, Response } from 'express';
import { CarService } from '../Services';

export default class CarController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { body } = req;

    const { statusCode, message } = await CarService.create(body);

    return res.status(statusCode).json(message);
  }

  static async getAll(req: Request, res: Response): Promise<Response> {
    const { statusCode, message } = await CarService.getAll();

    return res.status(statusCode).json(message);
  }

  static async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { statusCode, message } = await CarService.getById(id);

    return res.status(statusCode).json(message);
  }

  static async update(req: Request, res: Response): Promise<Response> {
    const { body } = req;
    const { id } = req.params;

    const { statusCode, message } = await CarService.update(id, body);

    return res.status(statusCode).json(message);
  }
}