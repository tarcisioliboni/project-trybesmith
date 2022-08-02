import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const ordersControler = {
  getAll: async (_req: Request, res: Response) => {
    const result = await ordersService.getall();
    res.json(result);
  },
};

export default ordersControler;
