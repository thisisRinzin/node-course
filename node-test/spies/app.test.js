const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    }

    app.__set__('dbs', db);

    it('should call saveUser with user object', () => {
        let email = 'rinziii997@gmail.com';
        let password = 'klsdfjkljasf';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
    
    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Rinzin', 21);

        expect(spy).toHaveBeenCalledWith('Rinzin', 21);
        expect()
    });

})