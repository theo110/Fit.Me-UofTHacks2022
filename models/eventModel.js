const mongoose = require('mongoose');

// event model
const Event = new mongoose.model('Event', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    activityLevel: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    capacity: Number,
    time: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {timestamps: true}));

module.exports = Event;