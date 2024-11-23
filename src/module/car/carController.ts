import { Request, Response } from 'express';
import { carService } from './carService';

// create car method
const createCar = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await carService.createCar(data);
    res.status(200).json({
      success: true,
      message: 'car created successfully ',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: `something went wrong please check again ${err.message}`,
      err,
    });
  }
};

// get all cars method
const getCars = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const result = await carService.getCars(query);
    res.status(200).json({
      success: true,
      message: 'show all cars successfully ',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong please check again ',
      err,
    });
  }
};
// get single car method
const getSingleCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await carService.getSingleCar(carId);
    res.status(200).json({
      success: true,
      message: 'update car successfully ',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: `something went wrong please check again ${err.message}`,
      err,
    });
  }
};

// create car method
const updateCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const carData = req.body;
    const result = await carService.updateSingleCar(carId, carData);
    res.status(200).json({
      success: true,
      message: 'car updated successfully ',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong please check again ',
      err,
    });
  }
};
// create car method
const deleteCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    await carService.deleteCar(carId);
    res.status(200).json({
      success: true,
      message: 'car deleted successfully ',
      data: {},
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong please check again ',
      err,
    });
  }
};
export const carControllers = {
  createCar,
  getCars,
  getSingleCar,
  updateCar,
  deleteCar,
};
