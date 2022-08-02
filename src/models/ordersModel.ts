import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';

const ordersModel = {
  getAll: async () => {
    const query = `
      SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) AS productsIds
      FROM Trybesmith.Orders AS ord
      INNER JOIN Trybesmith.Products AS prod
      ON prod.orderId = ord.id
      GROUP BY ord.id
      ORDER BY ord.userId
      `;
    const [result] = await connection.execute<RowDataPacket[]>(query);
    return result;
  },
};

export default ordersModel;
