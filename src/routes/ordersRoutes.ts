import { Router } from 'express';
import ordersController from '../controllers/ordersController';

const productRouter = Router();

productRouter.get('/', ordersController.getAll);

export default productRouter;