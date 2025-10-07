import mongoose from "mongoose";

const calculationSchema = new mongoose.Schema(
  {
    expression: { type: String, required: true },
    result: { type: String, required: true },
  },
  { timestamps: true }
);

export const Calculation = mongoose.model("Calculation", calculationSchema);
