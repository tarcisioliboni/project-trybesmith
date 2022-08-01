import { Router } from 'express';
import usersController from '../controllers/usersController';

const usersRouter = Router();

usersRouter.post('/', usersController.addUsers);

export default usersRouter;