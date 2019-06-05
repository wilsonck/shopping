const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

async function getAgent() {
    const server = await require("../server.js");   
    return await request.agent(server);
}

let agent = null;

describe('Endpoint: /wishlist', async function () {

    this.timeout(30000);

    before(async () => {
        try {
            agent = await getAgent();
        } catch (e) {
            throw new Error(e);
        }
    });

    describe('#WISHLIST /wishlist', () => {

        it('#GET - Count all wishlist products from API', async () => {
            const res = await agent.get("/wishlist");
            
            const { statusCode, body } = res;
            const products = body.data;
            
            // Check status request
            expect(statusCode).to.equal(200);
            // Check length of array of products
            expect(products).to.have.lengthOf(0);
        });


        it('#POST - Put product on wishList', async () => {
            const wishProduct = {
                "productId":'22'
            }
            const res = await agent.post("/wishList").send(wishProduct);
            
            const { statusCode, body } = res;
            const wishlist = body.data;
                        
            // Check status request
            expect(statusCode).to.equal(201);

            // Check wishList return
            assert.equal(wishlist.productId, wishProduct.productId);
        });

        it('#DELETE - Remove product from wishList', async () => {
            const wishProduct = {
                "productId":'22'
            }
            let res = await agent.delete(`/wishList/${wishProduct.productId}`);
            
            let { statusCode, body } = res;
            
            // Check status request
            expect(statusCode).to.equal(201);

            // Get wishlist updated
            res = await agent.get(`/wishList`);
            
            let wishlist = res.body.data;

            // Check wishList return
            expect(wishlist).to.have.lengthOf(0);
        });
    });

});