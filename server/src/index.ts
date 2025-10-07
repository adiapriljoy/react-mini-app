import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import calculationRoutes from "./routes/calculationRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/calculations", calculationRoutes);

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
