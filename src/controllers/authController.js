import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async(req, res) => {
    const {name, email, password} = req.body;

    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                msg: "User already exists"
            })
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        res.status(201).json({
            msg: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch(error) {
        res.status(500).json({
            msg: "Registration failed"
        })
    }
};


export const login = async(req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                msg: "Invalid credentials"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                msg: "Invalid Credentials"
            });
        }

        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );

        res.json({
            msg: "Login successfully",
            token,
        })
    } catch(error){
        res.status(500).json({
            msg: "Login failed"
        });
    }
}