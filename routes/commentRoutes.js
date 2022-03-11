import express from "express";
import{
    getAllComments,updateComment,deleteComment,getComment,createComment
}from "./../controllers/commentController.js"
const router=express.Router()
router.route("/").get(getAllComments)
router.route("/:id").get(getComment).patch(updateComment).delete(deleteComment).post(createComment)
export default router