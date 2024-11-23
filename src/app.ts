import express from 'express';
import carRouter from './module/car/carRoute';
import orderRouter from './module/order/orderRoute';
const app = express();

// middleware
app.use(express.json());

// router
app.use('/api', carRouter);
app.use('/api', orderRouter);

app.get('/', (req, res) => {
  res.send('car store is working now!');
});

export default app;
