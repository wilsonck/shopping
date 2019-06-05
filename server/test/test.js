let chai = require('chai');

var server = require('../server');
const request = require('supertest');

const host = "http://localhost:5000";

/**
 * Start the server for tests and by defatult run the migration scripts.
 * @param {boolean} migrateDatabase - true means it will run the migration scripts.
 */
const startServer = async () => {
    const server = await require("../server.js");
    agent = request.agent(server);
    return agent;
};

let agent;

describe('Endpoint: /api/products', function () {

    this.timeout(30000);

    describe('#GET', () => {

        before(async () => {
            try {
                agent = await startServer();
            } catch (e) {
                throw new Error(e);
            }
        });
        
        //   after(function () {
        //     server.close();
        //   });

        describe('/GET Products', () => {

            it('Get all Products', async (done) => {
                const res = await agent.request(`${host}/products`);
                const { statusCode, text } = res;
                const products = JSON.parse(text);
                expect(statusCode).to.equal(200);

                expect(products.data["id"]).to.be.equals(2);

                    // .get('/api/artigos') // endpoint que vamos testar
                    // .end((err, res) => { // testes a serem realizados
                    //     res.should.have.status(200); // verificando se o retorno e um status code 200
                    //     res.body.should.be.a('array'); // Verificando se o retorno e um array
                    //   done();
                    // });
            });
        });
        
    });

});