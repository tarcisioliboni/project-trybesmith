import ordersModel from '../models/ordersModel';

const ordersService = {
  getall: async () => {
    const result = await ordersModel.getAll();
    return result;
  },
};

export default ordersService;
