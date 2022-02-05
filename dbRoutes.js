// file for handling post, get, etc requests from users
const express = require('express');
const Account = require('./models/accountModel');
const Event = require('./models/eventModel');
const router = express.Router();

// routes for writing to database (POST)
// route for creating a new user
router.post('/api/newUser', (req, res) => {
    const newAccount = new Account(req.body);
    newAccount.save()
        .then(() => res.redirect('/'))
        .catch((err) => console.error(err));
})

// route for creating a new event
router.post('/api/newEvent', (req, res) => {
    const newEvent = new Event(req.body);
    newEvent.save()
        .then(() => res.redirect('/'))
        .catch((err) => console.error(err));
})

// routes for getting database documents (GET)
router.get('/api/userData/:id', (req, res) => {
    const id = req.params.id;
    Account.findById(id)
        .then((account) => {
            res.json(account);
        })
        .catch((err) => {
            console.err(err);
            res.redirect('/');
        })
});

// get data for all events
router.get('/api/eventData', (req, res) => {
    Event.find().sort({createdAt: -1})
        .then((eventList) => {
            res.json(eventList);
        })
        .catch((err) => {
            console.error(err);
            res.redirect('/')
        })
});

// get data for singular event
router.get('/api/eventData/:id', (req, res) => {
    const id = req.params.id;
    Event.findById(id)
        .then((account) => {
            res.json(account);
        })
        .catch((err) => {
            console.err(err);
            res.redirect('/');
        })
});

module.exports = router;