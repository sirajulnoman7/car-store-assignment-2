"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("./orderController");
const orderRouter = (0, express_1.Router)();
orderRouter.post('/orders', orderController_1.orderController.createOrder);
orderRouter.get('/revenue', orderController_1.orderController.totalRevenue);
exports.default = orderRouter;
