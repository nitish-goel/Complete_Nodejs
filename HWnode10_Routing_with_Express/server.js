// parameterized api using parameterized url
// Express-Routes

const express = require('express');
const app = express();
const PORT = 3000;

const db = require('../HWnode8_db'); // import database file for connection.

const bodyParser = require('body-parser'); // importing middleware to extract body from http request.
app.use(bodyParser.json()); // To use middleware we use the app.use().

// import the routes of Person 
const PersonRoutes = require('./personRoutes');

// Import routes of menu
const MenuRoute = require('./MenuRoutes');

app.get('/', function (req, res) {
    // res.setHeader('Content-type', 'text')
    res.send("Hello This is Coder's World");
})


// Accessing Person routes
app.use('/person', PersonRoutes);


// Accessing Menu routes
app.use('/',MenuRoute);

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})
