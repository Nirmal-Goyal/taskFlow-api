import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import User from "./models/User.js";

dotenv.config()

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.json({
        msg: "TaskFlow API running"
    });
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})