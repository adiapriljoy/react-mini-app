import { Request, Response } from "express";
import { Calculation } from "../models/calculation.model";

export const getCalculations = async (req: Request, res: Response) => {
  try {
    const history = await Calculation.find().sort({ createdAt: -1 }).limit(10);
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: "Error fetching history", error });
  }
};

export const createCalculation = async (req: Request, res: Response) => {
  try {
    const { expression, result } = req.body;
    const newCalc = new Calculation({ expression, result });
    await newCalc.save();
    res.status(201).json(newCalc);
  } catch (error) {
    res.status(500).json({ message: "Error saving calculation", error });
  }
};

export const deleteAllCalculations = async (req: Request, res: Response) => {
  try {
    const result = await Calculation.deleteMany({});
    res.json({ message: `Deleted ${result.deletedCount} calculations` });
  } catch (error) {
    res.status(500).json({ message: "Error deleting all calculations", error });
  }
};
