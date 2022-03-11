import mongoose from "mongoose";
const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"this field is required"]
        
    },
    description:{
        type:String,
        required:[true,"this field is required"],
        trim:true
    }, body:{
        type:String,
        required:[true,"this field is required"]
        
    }, photo:{
        type:String,
        required:[true,"this field is required"]
        
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
        
    }],
    createdAt:{
        type:Date,
        default:Date.now()     
    },
})

const Blog=mongoose.model("Blog",blogSchema)
export default Blog