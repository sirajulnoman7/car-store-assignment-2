import { model, Schema } from 'mongoose';
import { ICar } from './carInterface';

const carSchema = new Schema<ICar>(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: {
      type: Number,
      required: [true, 'price minimum up to 100 $'],
      min: 100,
    },
    category: {
      type: String,
      enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
      required: true,
    },
    description: {
      type: String,
      minlength: 30,
      required: [true, 'please write minimum 30 character '],
    },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

const carModel = model<ICar>('car', carSchema);
export default carModel;
