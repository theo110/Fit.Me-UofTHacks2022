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
            type: String,
            required: true
        },
        preferences: []
    }
}));

module.exports = Account;