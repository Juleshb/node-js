import Blog from "../.vscode/models/blogModel.js";
export const createBlog=async(req,res)=>{
    try {
        const newBlog=await Blog.create(req.body)
        res.status(201).json({
            status:"success",
            data:{
                newBlog
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
    export const getAllBlogs=async(req,res)=>{
        try {
            const blogs=await Blog.find()
            res.status(200).json({
                status:"success",
                data:{
                    blogs
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
        export const getBlog=async(req,res)=>{
            try {
                const blog=await Blog.findById(req.params.id)
                res.status(200).json({
                    status:"success",
                    data:{
                        blog
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
            export const updateBlog=async(req,res)=>{
                try {
                    const blog=await Blog.findByIdAndUpdate(req.params.id,req.body,{
                        new:true,
                        runValidators:true
                    })
                    res.status(200).json({
                        status:"success",
                        data:{
                            blog
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
                export const deleteBlog=async(req,res)=>{
                    try {
                        await Blog.findByIdAndDelete(req.params.id)
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