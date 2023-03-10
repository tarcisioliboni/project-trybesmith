import { Product } from '../interfaces/productInterface';
import productModel from '../models/productModel';

const productService = {
  addProduct: async (product: Product) => {
    const result = await productModel.addProduct(product);
    return result;
  },
  listProduct: async () => {
    const result = await productModel.listProduct();
    return result;
  },
};

export default productService;
