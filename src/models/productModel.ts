import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { Product } from '../interfaces/productInterface';

const productModel = {
  addProduct: async (product: Product) => {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products(name, amount) VALUES (?, ?)';
    const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
    return { id: result.insertId, name, amount };
  },
};

export default productModel;
