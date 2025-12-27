import express from "express"
import { createTask, getTasks, updateTask, deleteTask } from "../controllers/taskController.js"
import authMiddleware from "../middlewares/authMiddleware.js"
import validate from "../middlewares/validate.js";
import { createTaskSchema, updateTaskSchema } from "../validations/taskValidation.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", validate(createTaskSchema), createTask);
router.get("/", getTasks);
router.put("/:id", validate(updateTaskSchema), updateTask);
router.delete("/:id", deleteTask);

export default router;
