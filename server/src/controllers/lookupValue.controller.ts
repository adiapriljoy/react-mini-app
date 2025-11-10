import { Request, Response } from "express";
import { LookupValue } from "../models/lookupValue.model";
import { Lookup } from "../models/lookup.model";
import mongoose from "mongoose";

export const addLookupValue = async (req: Request, res: Response) => {
  try {
    const lookupValue = await LookupValue.create(req.body);
    res.status(201).json(lookupValue);
  } catch (error) {
    res.status(400).json({ message: "Failed to add lookup value", error });
  }
};

export const getLookupValues = async (req: Request, res: Response) => {
  try {
    const filter: any = {};

    if (req.query.lookupId) {
      //?lookupId={id}
      const lookupId = String(req.query.lookupId);
      if (!mongoose.isValidObjectId(lookupId)) {
        return res.status(400).json({ message: "Invalid lookupId format" });
      }
      filter.lookup = lookupId;
    } else if (req.query.lookupCode) {
      //?lookupCode={code}
      const code = String(req.query.lookupCode);
      const lookup = await Lookup.findOne({ code });
      if (!lookup) {
        return res
          .status(404)
          .json({ message: `Lookup with code '${code}' not found` });
      }
      filter.lookup = lookup._id;
    }

    const lookupValues = await LookupValue.find(filter)
      .populate("lookup", "code description")
      .lean();
    return res.json(lookupValues);
  } catch (error) {
    console.error("getLookupValues error:", error);
    return res.status(500).json({ message: "Failed to fetch lookup values" });
  }
};
