
import chai from 'chai';
import chaiHttp from 'chai-http';
import express from 'express';
import server from '../index.js';
// assertion style
const should= chai.should();

chai.use(chaiHttp);

describe('BELOG TEST', () => {
    /**
     * TEST THE GET ROUTE
     */
describe("GET /api/v1/blogs", () =>{
    it("it should get all blogs", (done) =>{
        chai.request(server)
        .get("api/v1/blogs")
        .end((err, response) => {
           
        done();

        });
    });
});
    /**
     * TEST THE GET BLOG BY ID
     */
     describe("GET /api/v1/blogs:id", () =>{
        it("it should get blogs by ID", (done) =>{
            chai.request(server)
            .get("api/v1/blogs:id")
            .end((err, response) => {
            done();
    
            });
        });
    });
    /**
     * TEST THE POST ROUTE
     */
     describe("POST /api/v1/blogs", () =>{
        it("it should post blog", (done) =>{
            chai.request(server)
            .post("api/v1/blogs")
            .end((err, response) => { 
            done();
    
            });
        });
    });

    /**
     * TEST THE PUT ROUTE
     */

    /**
     * TEST THE PATCH ROUTE
     */
     describe("PATCH /api/v1/blogs:id", () =>{
        it("it should UPDATE blogs by ID", (done) =>{
            chai.request(server)
            .patch("api/v1/blogs:id")
            .end((err, response) => {
            done();
    
            });
        });
    });

    /**
     * TEST THE DELETE ROUTE
     */
     describe("DELETE /api/v1/blogs:id", () =>{
        it("it should DELETE blogs by ID", (done) =>{
            chai.request(server)
            .delete("api/v1/blogs:id")
            .end((err, response) => {
            done();
    
            });
        });
    });
})