import User from "../models/userModel.js";
import jwt  from "jsonwebtoken";
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
            return res.status(401).json({ message: 'user does not exit' })
        }
        req.user=gotUser
    } catch (error) {
        res.status(401).json({
            message:"login first"
        })

    }
    next()
}



const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(401).json({
                Status: "UNAUTHORIZED!",
                Message: 'You do not have access to this role.'
            });
        }
        next()
    }
}
export {checkUser, restrictTo}