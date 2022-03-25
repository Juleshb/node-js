import express from "express";
import{
    getAllMessages,updateMessage,deleteMessage,getMessage,createMessage
}from "./../controllers/messageController.js"
import { checkUser, restrictTo } from "../middlewares/authentication.js";

const router=express.Router()
router.route("/").get(checkUser, restrictTo('admin'),getAllMessages).post(createMessage)
router.route("/:id").get(getMessage).patch(updateMessage).delete(deleteMessage)
export default router
