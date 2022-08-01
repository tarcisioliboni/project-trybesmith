import { Request, Response } from 'express';
import { Product } from '../interfaces/productInterface';
import productService from '../services/productService';

const productController = {
  addProduct: async (req: Request, res: Response) => {
    const product = req.body as Product;
    const result = await productService.addProduct(product);
    res.status(201).json(result);
  },
  listProduct: async (_req: Request, res: Response) => {
    const result = await productService.listProduct();
    res.json(result);
  },
};

export default productController;