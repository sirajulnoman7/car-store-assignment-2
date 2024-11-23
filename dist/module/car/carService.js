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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carService = void 0;
const carModel_1 = __importDefault(require("./carModel"));
// create cars
const createCar = (car) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield carModel_1.default.create(car);
    return result;
});
// get all cars using dynamic query
const getCars = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield carModel_1.default.find(query);
    return result;
});
// get single car
const getSingleCar = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield carModel_1.default.findById(carId);
    return result;
});
// update single car
const updateSingleCar = (carId, carData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield carModel_1.default.findByIdAndUpdate(carId, carData, {
        new: true,
    });
    return result;
});
// delete car
const deleteCar = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield carModel_1.default.findByIdAndDelete(carId);
    return result;
});
exports.carService = {
    createCar,
    getCars,
    getSingleCar,
    updateSingleCar,
    deleteCar,
};
