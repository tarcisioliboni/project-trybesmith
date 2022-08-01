import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { Users } from '../interfaces/usersInterface';

const usersModel = {
  addUsers: async (users: Users) => {
    const { username, classe, level, password } = users;
    const q = 'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES (?, ?, ?, ?)';
    const [result] = await connection
      .execute<ResultSetHeader>(q, [username, classe, level, password]);
    return { id: result.insertId, username };
  },
};

export default usersModel;
