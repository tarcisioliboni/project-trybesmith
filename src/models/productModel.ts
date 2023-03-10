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
  listProduct: async () => {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [result] = await connection.query(query);
    return result;
  },
};

export default productModel;
