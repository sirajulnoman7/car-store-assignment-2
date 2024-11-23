import { ICar } from './carInterface';
import carModel from './carModel';

// create cars
const createCar = async (car: ICar): Promise<ICar> => {
  const result = await carModel.create(car);

  return result;
};
// get all cars using dynamic query
const getCars = async (query: object) => {
  const result = await carModel.find(query);
  return result;
};
// get single car
const getSingleCar = async (carId: string) => {
  const result = await carModel.findById(carId);
  return result;
};
// update single car
const updateSingleCar = async (carId: string, carData: ICar) => {
  const result = await carModel.findByIdAndUpdate(carId, carData, {
    new: true,
  });
  return result;
};
// delete car
const deleteCar = async (carId: string) => {
  const result = await carModel.findByIdAndDelete(carId);
  return result;
};
export const carService = {
  createCar,
  getCars,
  getSingleCar,
  updateSingleCar,
  deleteCar,
};
