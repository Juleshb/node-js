import mongoose from "mongoose";
import validator from "validator"
const userSchema=new mongoose.Schema({
    name:{
        type:String,
      //  required:[true,"this field is required"]
        
    },
    email:{
        type:String,
       // required:[true,"this field is required"],
        trim:true,
        unique:true
   
    }, role: {
        type: String,
        default: "user",
        enum: ["user", "admin"],
    },
    password:{
        type:String,
       // required:[true,"this field is required"],
        //select: false
        
    }, confirmPassword:{
        type:String,
       // required:[true,"this field is required"],
        validate:{
            validator:function(ele){
                return ele===this.password

            },
            message:"password miss marches"
        }
    
        
    },
    createdAt:{
        type:Date,
        default:Date.now()     
    },
})

userSchema.pre("save",function(next){
    this.confirmPassword=undefined
    next();
})

const User=mongoose.model("User",userSchema)
export default User