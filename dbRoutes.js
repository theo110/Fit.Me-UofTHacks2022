// file for handling post, get, etc requests from users
const express = require('express');
const Account = require('./models/accountModel');
const Event = require('./models/eventModel');
const router = express.Router();

router.use(express.json());

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

router.get('/api/userData', (req, res) => {
    Account.find()
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

// routes for editing data (PUT)
router.put('/api/updateLocation/:username', (req, res) => {
    const username = req.params.username;
    console.log(req.body);
    // usernames are unique, so we can query by username
    Account.updateOne({name: username}, {$set: {info: req.body}})
        .then((result) => console.log(`${username} location updated`))
        .catch((err) => console.error(err))
})

// routes for deleting data (DELETE)
router.delete('/api/purgeEvents', (req, res) => {
    Event.deleteMany({}, (err) => {
        if (err) {console.log(err)}
        console.log("Events purged")
    })
})

router.delete('/api/purgeUsers', (req, res) => {
    Account.deleteMany({}, (err) => {
        if (err) {console.log(err)}
        console.log("Accounts purged")
    })
})

module.exports = router;