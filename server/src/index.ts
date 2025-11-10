import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import calculationRoutes from "./routes/calculation.route";
import todoRoutes from "./routes/todo.route";
import lookupRoutes from "./routes/lookup.route";
import lookupValueRoutes from "./routes/lookupValue.route";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/calculations", calculationRoutes);
app.use("/api/todos", todoRoutes);
app.use("/api/lookups", lookupRoutes);
app.use("/api/lookup-values", lookupValueRoutes);

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
