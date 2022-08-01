import { Request, Response } from 'express';
import { Users } from '../interfaces/usersInterface';
import usersService from '../services/usersService';

const usersController = {
  addUsers: async (req: Request, res: Response) => {
    const users = req.body as Users;
    const result = await usersService.addUsers(users);
    res.status(201).json(result);
  },
};

export default usersController;