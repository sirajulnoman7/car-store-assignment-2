"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carRoute_1 = __importDefault(require("./module/car/carRoute"));
const orderRoute_1 = __importDefault(require("./module/order/orderRoute"));
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
// router
app.use('/api', carRoute_1.default);
app.use('/api', orderRoute_1.default);
app.get('/', (req, res) => {
    res.send('car store is working now!');
});
exports.default = app;
