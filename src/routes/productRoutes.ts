import { Router } from 'express';
import productController from '../controllers/productController';

const productRouter = Router();

productRouter.post('/', productController.addProduct);
productRouter.get('/', productController.listProduct);

export default productRouter;