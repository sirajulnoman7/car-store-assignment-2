import carModel from '../car/carModel';
import { IOrder } from './orderInterface';
import orderModel from './orderModel';

const createOrder = async (order: IOrder): Promise<IOrder> => {
  const car = await carModel.findById(order.carId);
  // console.log(car);
  if (!car) {
    throw new Error(`Car with ID ${order.carId} not found.`);
  }

  if (car.quantity < order.quantity) {
    throw new Error('Not enough quantity in stock');
  }

  // remaining quantity in the car
  car.quantity -= order.quantity;
  if (car.quantity === 0) {
    car.inStock = false;
  }
  // save remaining quantity in the car collection
  await car.save();

  const result = await orderModel.create({
    ...order,
    totalPrice: car.price * order.quantity,
  });

  return result;
};

// calculate total revenue in the orders
const totalRevenue = async () => {
  const result = await orderModel.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
    { $project: { totalRevenue: 1 } },
  ]);
  return result[0];
};

export const OrderService = {
  createOrder,
  totalRevenue,
};
