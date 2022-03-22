import express from "express";
import swaggerJsdoc from'swagger-jsdoc';
import swaggerUi from'swagger-ui-express';
const app = express();

    const swaggerOptions ={
        swaggerDefinition:{
            info:{
                title:'Blogs API',
                description:'Blogs API Information',
                contact:{
                    name:'amazing Developer'
                },
                servers:["http://localhost:9000"]
            }
        },
        //['.router/*.js']
        apis:["doc.js"]
    }
    const swaggerDocs = swaggerJsdoc(swaggerOptions);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//Routes
/**
 * @swagger
 * /api/blogs:
 *  get:
 *    description: Use to request all Blogs
 *    responses:
 *        '200':
 *         description: A success response
 */
 app.get('/api/blogs',(req, res)=>{
    console.log("request");
    res.status(200).send("Blogs results applyed here");
});
/**
 * @swagger
 * /api/blogs:
 *  post:
 *    description: Use to request all Blogs
 *    responses:
 *        '200':
 *         description: A success response
 */
 app.post('/api/blogs',(req, res)=>{
    console.log("request");
    res.status(200).send("Blogs results applyed here");
});

export default app