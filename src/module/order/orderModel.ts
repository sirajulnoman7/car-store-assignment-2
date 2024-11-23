import { model, Schema } from 'mongoose';
import { IOrder } from './orderInterface';

export const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
        },
        message: '{VALUE} is not a valid email',
      },
      immutable: true,
    },

    totalPrice: { type: Number },
    quantity: {
      type: Number,
      required: [true, 'please enter quantity'],
    },
    carId: { type: String },
  },
  {
    timestamps: true,
  },
);

const orderModel = model<IOrder>('order', orderSchema);

export default orderModel;
