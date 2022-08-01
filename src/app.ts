import express from 'express';
import productRoutes from './routes/productRoutes';
import usersRoutes from './routes/usersRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', usersRoutes);

export default app;