import mongoose from "mongoose";

const lookupValueSchema = new mongoose.Schema(
  {
    lookup: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lookup",
      required: true,
    },
    code: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export const LookupValue = mongoose.model("LookupValue", lookupValueSchema);
