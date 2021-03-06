import express from "express";
import {
getAllBlogs,createBlog,updateBlog,deleteBlog,getBlog
}from "./../controllers/blogController.js"
import { checkUser } from "../middlewares/authentication.js";
const router=express.Router()
router.route("/").get(checkUser,getAllBlogs).post(createBlog)
router.route("/:id").get(getBlog).patch(updateBlog).delete(deleteBlog)
export default router