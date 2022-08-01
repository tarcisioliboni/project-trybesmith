import jwtService from './jwtService';
import { Users } from '../interfaces/usersInterface';
import usersModels from '../models/usersModels';

const usersService = {
  addUsers: async (users: Users) => {
    const { id, username } = await usersModels.addUsers(users);
    const token = jwtService.createToken({ id, username });
    return { token };
  },
};

export default usersService;
