const request = require('supertest');
const app=require('../../src/app')
const { user } = require("../../src/models");
describe("Authentication",() => {
    it("verify the creation of the object", async () => {
       const usuar = await User.create({
            name: "Luiza", 
            email: "luiza@gmail.com",
            password_hash: "12345"
        });
        expect(usuar.email).toBe("luiza@gmail.com");
        // const response = await request(app)
        //     .post('/sessions')
        //     .send({
        //         email: user.email,
        //         password_hash: "12345"
        //     });

        // expect(response.status).toBe(200);
    
    });   
});