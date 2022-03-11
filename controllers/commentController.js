import Comment from "../models/commentModel.js";
export const createComment = async(req, res) => {
    try {
        const newComment = await Comment.create({
            postID: req.params.id,
            name: req.body.name,
            comment: req.body.comment
        })
        const blogPost = await Blog.findById(req.params.id);
        blogPost.comments.push(newComment)
        await blogPost.save((e) => {
            res.status(201).json({
                Message: "New Comment Added Successfully",
                Data: blogPost
            })
        })
    } catch (error) {
        res.status(400).json({
            message: "An error occured try to fix it",
            data: { error }
        })
    }
}
export const getAllComments = async(req, res) => {
    try {
        const comments = await Comment.find()
        res.status(200).json({
            status: "All comments retrieved sucessfully",
            result: comments.length,
            data: { comments }
        })
    } catch (error) {
        res.status(500).json({
            message: "An error occured",
            data: { error }
        })
    }
}
export const getComment = async(req, res) => {
    try {
        const comment = await Comment.findById(req.params.id)
        res.status(200).json({
            Status: "Comment retrieved successfully!!",
            Data: { comment }
        })
    } catch (error) {
        res.status(404).json({
            message: `An error occured, Comment with an ID ${req.params.id} not found!!!:new_moon_with_face:`,
            data: { error }
        })
    }
}
export const updateComment = async(req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "Comment changed successfully!!!:fire::fire::fire:",
            data: { comment }
        })
    } catch (error) {
        res.status(404).json({
            message: `Error: Comment with an ID ${req.params.id} not found!!`,
            data: { error }
        })
    }
}
export const deleteComment = async(req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: "Success"
        })
    } catch (error) {
        res.status(404).json({
            message: "An error occured",
            data: { error }
        })
    }
}