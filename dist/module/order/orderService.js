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
exports.OrderService = void 0;
const carModel_1 = __importDefault(require("../car/carModel"));
const orderModel_1 = __importDefault(require("./orderModel"));
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const car = yield carModel_1.default.findById(order.carId);
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
    yield car.save();
    const result = yield orderModel_1.default.create(Object.assign(Object.assign({}, order), { totalPrice: car.price * order.quantity }));
    return result;
});
// calculate total revenue in the orders
const totalRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orderModel_1.default.aggregate([
        { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
        { $project: { totalRevenue: 1 } },
    ]);
    return result[0];
});
exports.OrderService = {
    createOrder,
    totalRevenue,
};
