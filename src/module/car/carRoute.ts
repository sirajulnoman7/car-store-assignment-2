import { Router } from 'express';
import { carControllers } from './carController';

const carRouter = Router();
carRouter.post('/cars', carControllers.createCar);
carRouter.get('/cars', carControllers.getCars);
carRouter.get('/cars/:carId', carControllers.getSingleCar);
carRouter.put('/cars/:carId', carControllers.updateCar);
carRouter.delete('/cars/:carId', carControllers.deleteCar);

export default carRouter;
