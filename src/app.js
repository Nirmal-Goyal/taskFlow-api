import express from "express"
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        msg: "TaskFlow API running"
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})