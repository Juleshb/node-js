import User from "../models/userModel.js";
import { Jwt } from "jsonwebtoken";
import { promisify } from "util";


const checkUser = async (req, res, next) => {
    let token
    try {
        if (req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1]
        }
        if (!token) {
            return res.status(401).json({ message: 'Login first' })
        }
        const decoded = await promisify(jwt.verify)(token,  'iamjules')
        const gotUser = await User.findById(decoded._id)
        if(!gotUser){
            return res.status(401).json({ message: 'uder does not exit' })
        }
        req.user=gotUser
    } catch (error) {
        res.status(401).json({
            message:"😛"
        })

    }
    next()
}