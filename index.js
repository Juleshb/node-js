import express from 'express';
import cors from "cors";
import userRouter from "./routes/userRoutes.js"
import messageRouter from "./routes/messageRoutes.js"
import blogRouter from "./routes/blogRoutes.js"
import commentRouter from "./routes/commentRoutes.js"
import swaggertest from "./swagger/doc.js"
import { login } from './controllers/userController.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1',swaggertest)
app.get('/',(req,res)=>res.json({message:'request received, thanks then'}));
app.use("/api/v1/users",userRouter)
app.use("/api/v1/blogs",blogRouter)
app.use("/api/v1/comment",commentRouter)
//app.use("/api/v1/comments",commentRouter)
app.use("/api/v1/messages",messageRouter)
app.use("/api/v1/login",login)
export default app