import express from 'express';
import productRoutes from './routes/productRoutes';
import usersRoutes from './routes/usersRoutes';
import ordersRoutes from './routes/ordersRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);

export default app;