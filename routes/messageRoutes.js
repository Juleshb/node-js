import express from "express";
import{
    getAllMessages,updateMessage,deleteMessage,getMessage,createMessage
}from "./../controllers/messageController.js"
import { checkUser } from "../middlewares/authentication.js";
const router=express.Router()
router.route("/").get(checkUser,getAllMessages).post(createMessage)
router.route("/:id").get(getMessage).patch(updateMessage).delete(deleteMessage)
export default router
