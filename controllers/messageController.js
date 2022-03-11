import Message from "../.vscode/models/messageModel.js";
export const createMessage=async(req,res)=>{
try {
    const newMessage=await Message.create(req.body)
    res.status(201).json({
        status:"success",
        data:{
            newMessage
        }
    })
} catch (error) {
    res.status(400).json({
        message:"error occured",
        data:{
            error
        }
    })
}
}
export const getAllMessages=async(req,res)=>{
    try {
        const messages=await Message.find()
        res.status(200).json({
            status:"success",
            data:{
                messages
            }
        })
    } catch (error) {
        res.status(500).json({
            message:"error occured",
            data:{
                error
            }
        })
    }
    }
    export const getMessage=async(req,res)=>{
        try {
            const message=await Message.findById(req.params.id)
            res.status(200).json({
                status:"success",
                data:{
                    message
                }
            })
        } catch (error) {
            res.status(404).json({
                message:"error occured",
                data:{
                    error
                }
            })
        }
        }
        export const updateMessage=async(req,res)=>{
            try {
                const message=await Message.findByIdAndUpdate(req.params.id,req.body,{
                    new:true,
                    runValidators:true
                })
                res.status(200).json({
                    status:"success",
                    data:{
                        message
                    }
                })
            } catch (error) {
                res.status(404).json({
                    message:"error occured",
                    data:{
                        error
                    }
                })
            }
            }
            export const deleteMessage=async(req,res)=>{
                try {
                    await Message.findByIdAndDelete(req.params.id)
                    res.status(204).json({
                        status:"success",
                        data:{
                        }
                    })
                } catch (error) {
                    res.status(404).json({
                        message:"error occured",
                        data:{
                            error
                        }
                    })
                }
                }