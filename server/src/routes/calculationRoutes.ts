import { Router } from "express";
import { Calculation } from "../models/Calculation";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const history = await Calculation.find().sort({ createdAt: -1 }).limit(10);
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: "Error fetching history", error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { expression, result } = req.body;
    const newCalc = new Calculation({ expression, result });
    await newCalc.save();
    res.status(201).json(newCalc);
  } catch (error) {
    res.status(500).json({ message: "Error saving calculation", error });
  }
});

router.delete("/", async (req, res) => {
  try {
    const result = await Calculation.deleteMany({});
    res.json({ message: `Deleted ${result.deletedCount} calculations` });
  } catch (error) {
    res.status(500).json({ message: "Error deleting all calculations", error });
  }
});

export default router;
