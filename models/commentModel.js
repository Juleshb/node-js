import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    comment:{
        type:String,
        required:[true,"this field is required"]
        
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        
        ref:"Blog"
    },name:{
        type:String,
        required:[true,"this field is required"]
        
    },
    createdAt:{
        type:Date,
        default:Date.now()     
    },
})

const Comment=mongoose.model("Comment",commentSchema,)
export default Comment