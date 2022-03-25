import express from'express';
import swaggerJsdoc from'swagger-jsdoc';
import swaggerUi from'swagger-ui-express';

const app =express();




//Routes
/**
 * @swagger
 * /api/v1/blogs:
 *  get:
 *    description: Use to request all Blogs
 *    responses:
 *        '200':
 *         description: A success response
 */

app.get('/api/v1/blogs',(req, res)=>{
    console.log("request");
    res.status(200).send("Blogs results applyed here");
});

/**
 * @swagger
 * /api/v1/blogs/:id:
 *  get:
 *     tags:
 *        - ID param
 *     description: Get by id
 *     parameters:
 *          - name: id
 *            description: id to get by
 *            in: path
 *            type: integer
 *            required: true
 *     responses:
 *         '200':
 *            description: A success response
 */
app.get('/api/v1/blogs:id',(req, res)=>{
    console.log('request');
    res.status(200).send("get blog on id")
})


/**
 * @swagger
 * /api/v1/blogs:id:
 *  patch:
 *    description: Use to update a blogs
 *    responses:
 *        '201':
 *         description: A successful response
 */

 app.patch('/api/v1/blogs/:id',(req, res)=>{
    console.log("request");
    res.status(201).send("successfully updated Blog");
});

/**
 * @swagger
 * /api/v1/blogs:id:
 *  delete:
 *    description: Use to delete a Blog
 *    responses:
 *        '200':
 *         description: A successful response
 */

 app.delete('/api/blogs/:id',(req, res)=>{
    console.log("request");
    res.status(200).send("successfully deleted Blog");
});

/**
 * @swagger
 * /api/v1/blogs:
 *  post:
 *    description: Use to add a Blogs
 *    responses:
 *        '200':
 *         description: A successful response
 */

 app.post('/api/v1/blogs',(req, res)=>{
    console.log("request");
    res.status(200).send("successfully created customer");
});

export default app