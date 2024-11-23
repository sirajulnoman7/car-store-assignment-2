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
exports.orderController = void 0;
const orderService_1 = require("./orderService");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const result = yield orderService_1.OrderService.createOrder(order);
        res.status(200).json({
            status: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: err.message,
            error: err,
        });
    }
});
// total revenue
const totalRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield orderService_1.OrderService.totalRevenue();
        res.status(200).json({
            status: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: 'something went wrong',
            error: err,
        });
    }
});
exports.orderController = {
    createOrder,
    totalRevenue,
};
