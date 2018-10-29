const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('server test', () => {
    
    describe('/', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        author: 'Rinzin'
                    });
                })
                .end(done);
        });    
    });
    
    describe('/users', () => {
        it('should return an array with user rinzin', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res).toInclude({status: 200});
                    expect(res.body).toInclude({name:'Rinzin', age: 21});
                })
                .end(done);
        });
    
    });
});
