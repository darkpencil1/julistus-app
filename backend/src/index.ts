import express from "express";
import cors from "cors";
import productRouter from "./routers/product.router";
import questRouter from "./routers/quest.router";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON
app.use(express.json());
app.use(express.static("resources/images/"));

app.use("/api/product", productRouter);
app.use("/api/quest", questRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
