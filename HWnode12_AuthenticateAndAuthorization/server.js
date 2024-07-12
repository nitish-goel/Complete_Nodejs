// Authentication and Authorization
// Using Passport.js middle-ware.

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;
const db = require('../HWnode8_db');

const passport = require('./auth'); 



const bodyParser = require('body-parser'); // importing middleware to extract body from http request.
app.use(bodyParser.json()); // To use middleware we use the app.use().

// import the routes of Person 
const PersonRoutes = require('../HWnode10_Routing_with_Express/personRoutes');

// Import routes of menu
const MenuRoute = require('../HWnode10_Routing_with_Express/MenuRoutes');

// Creating MiddleWare function 
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request made to : ${req.originalUrl}`);
    next();
}


app.use(passport.initialize()); // Ready to use authentication

const localAuthMiddleWare  = passport.authenticate('local', { session: false });

// app.get('/', passport.authenticate('local', { session: false }), function (req, res) { // authentication set on Route.
app.get('/',localAuthMiddleWare , function (req, res) { // authentication set on Route.
    // res.setHeader('Content-type', 'text')
    res.send("Hello This is Coder's World");
})


app.use(logRequest); // To use over all routes

// Accessing Person routes
app.use('/person',localAuthMiddleWare ,PersonRoutes);


// Accessing Menu routes
app.use('/', MenuRoute);


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})
