import { Router } from "express";
import {
  getCalculations,
  createCalculation,
  deleteAllCalculations,
} from "../controllers/calculation.controller";

const router = Router();

router.get("/", getCalculations);
router.post("/", createCalculation);
router.delete("/", deleteAllCalculations);

export default router;
