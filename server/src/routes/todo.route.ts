import express from "express";
import { addTodo, getTodos } from "../controllers/todo.controller";
const router = express.Router();

router.post("/", addTodo);
router.get("/", getTodos);

export default router;
