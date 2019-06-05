const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

async function getAgent() {
    const server = await require("../server.js");   
    return await request.agent(server);
}

let agent = null;

describe('Endpoint: /products', async function () {

    this.timeout(30000);

    before(async () => {
        try {
            agent = await getAgent();
        } catch (e) {
            throw new Error(e);
        }
    });

    describe('#GET /products', () => {

        it('Count all products from API', async () => {
            const res = await agent.get("/products?page_size-1");
            
            const { statusCode, body } = res;
            const products = body.data;
            
            // Check status request
            expect(statusCode).to.equal(200);
            // Check length of array of products
            expect(products).to.have.lengthOf(60);
        });


        it('Test pagination (page 1 and size 3) ', async () => {
            let page = 1;
            let size = 3;
            const res = await agent.get(`/products/?page=${page}&page_size=${size}`);
            const { statusCode, body } = res;
            const products = body.data;

            // Check status request
            expect(statusCode).to.equal(200);

            // Check size array of products
            expect(products).to.have.lengthOf(size);
        });


        it('Test pagination (page 3 and size 15) ', async () => {
            let page = 3;
            let size = 15;
            const res = await agent.get(`/products/?page=${page}&page_size=${size}`);
            const { statusCode, body } = res;
            const products = body.data;

            // Check status request
            expect(statusCode).to.equal(200);

            // Check size array of products
            expect(products).to.have.lengthOf(size);
        });

    });

});