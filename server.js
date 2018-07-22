//Define nodeJs port
const port = 3030;


/*GLOBALS*/

//Load lodash
_ = require('lodash');
ip = require('ip');

//Load routing and data parse libraries
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Load moment for date and time manipulations
moment = require('moment');

//Load message routes
const MessageRoute = require('./routes/messageRoute');

//Load database handler and configuration
const bootstrap = require('./bootstrap');

//Load log mechanism
logManager = require('./logManager');

// Initiate Service Components
bootstrap.init();

//Use bodyParser to parse request body
app.use(bodyParser.json());


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Use the message route for message CRUD
app.use('/message', MessageRoute);

// Nice welcoming message
app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})