const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbRoutes = require('./dbRoutes');

// use express
const app = express();

// set up ports
const port = process.env.PORT || 5000;

// connect to mongodb with mongoose and start server
// database user: username - UWNerds, password - WYVfDXitjVghwwRp
const dbURI = 'mongodb+srv://UWNerds:WYVfDXitjVghwwRp@uofthacks-2022.ttqo9.mongodb.net/data?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then(() => {
        console.log('connected to mongodb database!');
        // set up listening for requests
        app.listen(port, () => {console.log(`Server started on ${port}`)});
    })
    .catch((err) => {
        console.error(err);
    })
// reference to db
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error '))

// set up middleware - use cors for cross something resource sharing, json for parsing json
app.use(cors());
app.use(express.json());
app.use(dbRoutes);


// production condition - serve static files if api middleware does not recognize request
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

