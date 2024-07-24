"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = void 0;
const products_1 = __importDefault(require("../resources/products"));
const getAllProducts = (_, res) => {
    try {
        res.json(products_1.default);
    }
    catch (e) {
        res.json(e);
    }
};
exports.getAllProducts = getAllProducts;
