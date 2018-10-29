var dbs = require('./db');

module.exports.handleSignup = (email, password) => {
    dbs.saveUser({email, password});
}