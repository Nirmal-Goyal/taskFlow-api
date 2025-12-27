import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import taskRoutes from "./routes/taskRoutes.js"

dotenv.config()

const app = express();
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.json({
        msg: "TaskFlow API running"
    });
});


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})