import express from "express";
import {
  getAllTodo,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/TodoController.js";

const router = express.Router();

router.get("/", getAllTodo);
router.get("/:id", getTodo);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
