"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_router_1 = __importDefault(require("./routers/product.router"));
const quest_router_1 = __importDefault(require("./routers/quest.router"));
const achievement_router_1 = __importDefault(require("./routers/achievement.router"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use((0, cors_1.default)());
// Middleware to parse JSON
app.use(express_1.default.json());
//Serve images
app.use(express_1.default.static("resources/images/"));
// Serve client
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "..", "client/build")));
//Routers
app.use("/api/product", product_router_1.default);
app.use("/api/quest", quest_router_1.default);
app.use("/api/achievement", achievement_router_1.default);
//As default send back client index.html
app.get("*", (_, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "..", "client/build", "index.html"));
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
