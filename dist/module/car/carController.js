"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carControllers = void 0;
const carService_1 = require("./carService");
// create car method
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield carService_1.carService.createCar(data);
        res.status(200).json({
            success: true,
            message: 'car created successfully ',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: `something went wrong please check again ${err.message}`,
            err,
        });
    }
});
// get all cars method
const getCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const result = yield carService_1.carService.getCars(query);
        res.status(200).json({
            success: true,
            message: 'show all cars successfully ',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong please check again ',
            err,
        });
    }
});
// get single car method
const getSingleCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        const result = yield carService_1.carService.getSingleCar(carId);
        res.status(200).json({
            success: true,
            message: 'update car successfully ',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: `something went wrong please check again ${err.message}`,
            err,
        });
    }
});
// create car method
const updateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        const carData = req.body;
        const result = yield carService_1.carService.updateSingleCar(carId, carData);
        res.status(200).json({
            success: true,
            message: 'car updated successfully ',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong please check again ',
            err,
        });
    }
});
// create car method
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        yield carService_1.carService.deleteCar(carId);
        res.status(200).json({
            success: true,
            message: 'car deleted successfully ',
            data: {},
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong please check again ',
            err,
        });
    }
});
exports.carControllers = {
    createCar,
    getCars,
    getSingleCar,
    updateCar,
    deleteCar,
};
