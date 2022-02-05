const mongoose = require('mongoose');

// set up mongodb models/schema
// account model
const Account = new mongoose.model('Account', new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    info: {
        location: {
            //Should this be
            type: String,
            required: false
        },
        preferences: []
    }
}));

module.exports = Account;