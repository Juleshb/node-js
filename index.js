import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import express from 'express';
import cors from "cors";
import userRouter from "./routes/userRoutes.js"
import messageRouter from "./routes/messageRoutes.js"
import blogRouter from "./routes/blogRoutes.js"
import commentRouter from "./routes/commentRoutes.js"
import swaggertest from "./swagger/app.js"
import { login } from './controllers/userController.js';
const app = express();
app.use(cors());
app.use(express.json());

//swagger definition
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
      title: "Express API for My Blog Articles",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:9000",
        description: "Development server",
      },
    ],
  };
  const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ["./swagger/app.js"],
  };
  const swaggerSpec = swaggerJSDoc(options);

app.get('/',(req,res)=>res.json({message:'request received, thanks then'}));
app.use("/api/v1/users",userRouter)
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1/blogs",blogRouter)
app.use("/api/v1/comment",commentRouter)
//app.use("/api/v1/comments",commentRouter)
app.use("/api/v1/messages",messageRouter)
app.use("/api/v1/login",login)
export default app