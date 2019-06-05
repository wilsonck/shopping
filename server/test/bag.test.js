const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

async function getAgent() {
    const server = await require("../server.js");   
    return await request.agent(server);
}

let agent = null;

describe('Endpoint: /bag', async function () {

    this.timeout(30000);

    before(async () => {
        try {
            agent = await getAgent();
        } catch (e) {
            throw new Error(e);
        }
    });

    describe('#BAG /bag', () => {

        it('#GET - Count all products on bag from API', async () => {
            const res = await agent.get("/bag");
            
            const { statusCode, body } = res;
            const bag = body.data;
            
            // Check status request
            expect(statusCode).to.equal(200);

            // Check length of array
            expect(bag).to.have.lengthOf(0);
        });


        it('#POST - Put product on bag', async () => {
            const bagProduct = {
                'productId':'22',
                'quantity': 2
            }
            const res = await agent.post("/bag").send(bagProduct);
            
            const { statusCode, body } = res;
            const bag = body.data;
                        
            // Check status request
            expect(statusCode).to.equal(201);

            // Check wishList return
            assert.equal(bag.productId, bagProduct.productId);
            assert.equal(bag.quantity, bagProduct.quantity);
        });

        it('#DELETE - Remove product from bag', async () => {
            const wishProduct = {
                "productId":'22'
            }
            let res = await agent.delete(`/bag/${wishProduct.productId}`);
            
            let { statusCode } = res;
            
            // Check status request
            expect(statusCode).to.equal(201);

            // Get wishlist updated
            res = await agent.get(`/bag`);
            
            let bag = res.body.data;

            // Check wishList return
            expect(bag).to.have.lengthOf(0);
        });
    });

});