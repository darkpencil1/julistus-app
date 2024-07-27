"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImage = exports.getProductWithId = exports.getAllProducts = void 0;
const path_1 = __importDefault(require("path"));
const products_1 = __importDefault(require("../resources/products"));
const getAllProducts = (_, res) => {
    try {
        res.status(200);
        res.json(products_1.default);
    }
    catch (e) {
        res.json(e);
    }
};
exports.getAllProducts = getAllProducts;
const getProductWithId = (req, res) => {
    const id = req.params.id;
    try {
        const product = products_1.default.find((product) => product.id.toString() === id);
        if (product)
            res.json(product);
        else
            res.send("No product found with provided id.");
    }
    catch (e) {
        res.json(e);
    }
};
exports.getProductWithId = getProductWithId;
const getImage = (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path_1.default.join(__dirname, "..", "..", "src", "resources", "images", imageName);
    res.sendFile(imagePath, (err) => {
        if (err) {
            res.status(404).send("Image not found");
        }
    });
};
exports.getImage = getImage;
