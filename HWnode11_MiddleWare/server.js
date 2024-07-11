// MiddleWare

const express = require('express');
const app = express();

require('dotenv').config();  
const PORT = process.env.PORT || 4000;
const db = require('../HWnode8_db');


const bodyParser = require('body-parser'); // importing middleware to extract body from http request.
app.use(bodyParser.json()); // To use middleware we use the app.use().

// import the routes of Person 
const PersonRoutes = require('../HWnode10_Routing_with_Express/personRoutes');

// Import routes of menu
const MenuRoute = require('../HWnode10_Routing_with_Express/MenuRoutes');

// Creating MiddleWare function 
const logRequest = ( req, res, next)=>{
    console.log(`[${new Date().toLocaleString()}] Request made to : ${req.originalUrl}`);
    next();
}

// app.get('/',logRequest, function (req, res) { // To use in specific route
app.get('/', function (req, res) { 
    // res.setHeader('Content-type', 'text')
    res.send("Hello This is Coder's World");
})


app.use(logRequest); // To use over all routes

// Accessing Person routes
app.use('/person', PersonRoutes);


// Accessing Menu routes
// app.use('/',logRequest,MenuRoute);// To use in specific endpoints
app.use('/',MenuRoute);


app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})
