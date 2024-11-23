import { Request, Response } from 'express';
import { OrderService } from './orderService';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    const result = await OrderService.createOrder(order);
    res.status(200).json({
      status: true,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
      error: err,
    });
  }
};
// total revenue
const totalRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.totalRevenue();
    res.status(200).json({
      status: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

export const orderController = {
  createOrder,
  totalRevenue,
};
