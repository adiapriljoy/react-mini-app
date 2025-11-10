import express from "express";
import { addLookup, getLookups } from "../controllers/lookup.controller";

const router = express.Router();

router.post("/", addLookup);
router.get("/", getLookups);

export default router;
