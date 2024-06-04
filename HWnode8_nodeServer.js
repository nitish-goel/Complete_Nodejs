
const express = require('express');
const app = express();
const PORT = 3000;

const db = require('./HWnode8_db'); // import database file for connection.

const bodyParser = require('body-parser'); // importing middleware to extract body from http request.
app.use(bodyParser.json()); // To use middleware we use the app.use().

// we import Person named model 
const Person = require('./HWnode8_models/Person');



app.get('/', function (req, res) {
  res.send("Hello This is Coder's World");
})


app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})
















