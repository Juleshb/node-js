import mongoose from "mongoose";
const messageSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:[true,"this field is required"]
        
    },
    email:{
        type:String,
        required:[true,"this field is required"],
        trim:true
    }, message:{
        type:String,
        required:[true,"this field is required"]
        
    }, 
    createdAt:{
        type:Date,
        default:Date.now()     
    },
})

const Message=mongoose.model("Message",messageSchema,)
export default Message