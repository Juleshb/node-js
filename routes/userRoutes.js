import express from "express";
import {
getAllUsers,createUser,updateUser,deleteUser,getUser, login
}from "./../controllers/userController.js"
const router=express.Router()
router.route("/").get(getAllUsers).post(createUser,login)
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser)
export default router