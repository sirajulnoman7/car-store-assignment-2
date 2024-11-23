import { Router } from 'express';
import { orderController } from './orderController';

const orderRouter = Router();
orderRouter.post('/orders', orderController.createOrder);
orderRouter.get('/revenue', orderController.totalRevenue);

export default orderRouter;
