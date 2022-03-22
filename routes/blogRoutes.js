import express from "express";
import {
getAllBlogs,createBlog,updateBlog,deleteBlog,getBlog
}from "./../controllers/blogController.js"

const router=express.Router()
router.route("/").get(getAllBlogs).post(createBlog)
router.route("/:id").get(getBlog).patch(updateBlog).delete(deleteBlog)
export default router

/*

belog authantication

import { checkUser, restrictTo } from "../middlewares/authentication.js";

const router=express.Router()
router.route("/").get(checkUser, restrictTo('admin'),getAllBlogs).post(checkUser, restrictTo('admin'),createBlog)
router.route("/:id").get(getBlog).patch(updateBlog).delete(deleteBlog)
export default router

*/