import { Request, Response } from "express";
import { Lookup } from "../models/lookup.model";

export const addLookup = async (req: Request, res: Response) => {
  try {
    const lookup = await Lookup.create(req.body);
    res.status(201).json(lookup);
  } catch (error) {
    res.status(400).json({ message: "Failed to add lookup", error });
  }
};

export const getLookups = async (req: Request, res: Response) => {
  try {
    const lookups = await Lookup.find();
    res.json(lookups);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch lookups", error });
  }
};
