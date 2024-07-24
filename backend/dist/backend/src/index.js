"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_router_1 = __importDefault(require("./routers/product.router"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
// Middleware to parse JSON
app.use(express_1.default.json());
app.use(express_1.default.static("./resources/images/"));
// Use product router
app.use("/api/product", product_router_1.default);
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
