import mongoose from "mongoose";

const lookupSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export const Lookup = mongoose.model("Lookup", lookupSchema);
