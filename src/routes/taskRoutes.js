import express from "express"
import { createTask, getTasks, updateTask, deleteTask } from "../controllers/taskController.js"
import authMiddleware from "../middlewares/authMiddleware.js"
import validate from "../middlewares/validate.js";
import { createTaskSchema, updateTaskSchema } from "../validations/taskValidation.js";

const router = express.Router();

router.use(authMiddleware);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task created successfully
 */

router.post("/", validate(createTaskSchema), createTask);

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get tasks for logged-in user
 *     tags: [Tasks]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: completed
 *         schema:
 *           type: boolean
 *     responses:
 *       200:
 *         description: List of tasks
 */

router.get("/", getTasks);

router.put("/:id", validate(updateTaskSchema), updateTask);
router.delete("/:id", deleteTask);

export default router;
