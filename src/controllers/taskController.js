import Task from "../models/Task.js"

//CREATE TASK
export const createTask = async(req, res) => {
    const {title, description} = req.body;

    try {
        const task = await Task.create({
            title,
            description,
            owner: req.user._id,
        });
        res.status(201).json(task);
    } catch(error){
        res.status(500).json({
            msg: "Failed to create task"
        })
    }
}

// GET ALL TASKS FOR LOGGED-IN USER (with pagination and sorting)
export const getTasks = async(req, res) => {
    try {
        const page = Math.max(parseInt(req.query.page) || 1, 1);
        const limit = Math.min(parseInt(req.query.limit) || 10, 50);
        const skip = (page-1)*limit;

        const tasks = await Task.find({owner: req.user._id}).sort({
            createdAt: -1,
        })
        .skip(skip)
        .limit(limit);

        const totalTasks = await Task.countDocuments({
            owner: req.user._id,
        })

        res.json({
            page,
            limit,
            totalTasks,
            totalPages: Math.ceil(totalTasks/limit),
            tasks,
        });
    } catch (error) {
        res.status(500).json({
            msg: "Failed to fetch tasks"
        })
    }
}

//UPDATE TASK
export const updateTask = async(req, res) => {
    const {id} = req.params;

    try {
        const task = await Task.findOneAndUpdate(
            {_id: id, owner: req.user._id},
            req.body,
            {new: true}
        )

        if(!task){
            return res.status(404).json({
                msg: "Task not found"
            })
        }

        res.json(task);
    } catch (error) {
        return res.status(500).json({
            msg: "Failed to update task"
        })
    }
}

//DELETE TASK
export const deleteTask = async(req, res) => {
    const {id} = req.params;

    try{
        const task = await Task.findOneAndDelete({
            _id: id,
            owner: req.user._id,
        })

        if(!task){
            return res.status(404).json({
                msg: "Task not found"
            })
        }
        res.json({
            msg: "Task deleted successfully"
        })
    } catch(error){
        res.status(500).json({
            msg: "Failed to delete task"
        })
    }
}