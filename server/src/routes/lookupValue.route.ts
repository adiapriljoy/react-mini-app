import express from "express";
import {
  addLookupValue,
  getLookupValues,
} from "../controllers/lookupValue.controller";

const router = express.Router();

router.post("/", addLookupValue);
router.get("/", getLookupValues);

export default router;
