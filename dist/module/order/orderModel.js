"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
            },
            message: '{VALUE} is not a valid email',
        },
        immutable: true,
    },
    totalPrice: { type: Number },
    quantity: {
        type: Number,
        required: [true, 'please enter quantity'],
    },
    carId: { type: String },
}, {
    timestamps: true,
});
const orderModel = (0, mongoose_1.model)('order', exports.orderSchema);
exports.default = orderModel;
