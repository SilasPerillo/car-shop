import { Request, Response } from 'express';
import { MotorcyclesService } from '../Services';

export default class MotorcyclesController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { body } = req;

    const { statusCode, message } = await MotorcyclesService.create(body);

    return res.status(statusCode).json(message);
  }
}