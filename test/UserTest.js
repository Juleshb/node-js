
import chai from 'chai';
import chaiHttp from 'chai-http';
import express from 'express';
import server from '../index.js';

// assertion style
chai.should();

chai.use(chaiHttp);

describe('User TEST', () => {
    /**
     * TEST THE GET ROUTE
     */
describe("GET /api/v1/users", () =>{
    it("it should get all users", (done) =>{
        chai.request(server)
        .get("api/v1/users")
        .end((err, response) => {
           
        done();

        });
    });
});
    /**
     * TEST THE GET BLOG BY ID
     */
     describe("GET /api/v1/users:id", () =>{
        it("it should get user by ID", (done) =>{
            chai.request(server)
            .get("a/pi/v1/usersid")
            .end((err, response) => {
            done();
    
            });
        });
    });
    /**
     * TEST THE POST ROUTE
     */
     describe("POST /api/v1/users", () =>{
        it("it should post user", (done) =>{
            chai.request(server)
            .post("a/pi/v1/users")
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
     describe("PATCH /api/v1/users:id", () =>{
        it("it should UPDATE user by ID", (done) =>{
            chai.request(server)
            .patch("a/pi/v1/users:id")
            .end((err, response) => {
            done();
    
            });
        });
    });

    /**
     * TEST THE DELETE ROUTE
     */
     describe("DELETE /api/v1/users:id", () =>{
        it("it should DELETE user by ID", (done) =>{
            chai.request(server)
            .delete("a/pi/v1/users:id")
            .end((err, response) => {
            done();
    
            });
        });
    });
})