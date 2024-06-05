// Send data from client to server

const express = require('express');
const app = express();
const PORT = 3000;

const db = require('../HWnode8_db'); // import database file for connection.

const bodyParser = require('body-parser'); // importing middleware to extract body from http request.
app.use(bodyParser.json()); // To use middleware we use the app.use().

// we import Person named model 
const Person = require('../HWnode8_models/Person');

// Home-work : to create GET / POST endpoint for menucard
const MenuItem = require('../HWnode8_models/MenuItem');


// Person routes
app.get('/', function (req, res) {
    res.send("Hello This is Coder's World");
})

// POST route to add a person

app.post('/person', async (req, res) => {
    // const data = req.body; // Assuming the request body contains the person data.

    // // Create a new Person document using the Mongoose model
    // const newPerson = new Person(data);

    // // Save the new person to the database
    // newPerson.save((error , savedPerson)=>{
    //     if(error){
    //         console.log("Error while saving person",error);
    //         res.status(500).json({error:'Internal server error'})
    //     }else{
    //         console.log("Data saved successfully");
    //         res.status(200).json(savedPerson);
    //     }
    // })

    try {

        const data = req.body; // Assuming the request body contains the person data.

        // Create a new Person document using the Mongoose model
        const newPerson = new Person(data);

        // Save the new person to the database
        const response = await newPerson.save();
        console.log("Data saved");
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }

})

app.get('/person', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("Data fetched");
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: " Internal server error" })
    }
})

// MenuItem routes
// GET method to get menu items
app.get('/menuitem', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log("Menu-Items fetched");
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "Internal Server Error" })
    }
})

// POST endpoint to add new item in menu
app.post('/menuitem', async (req, res) => {
    try {
        const data = req.body;
        const newitem = new MenuItem(data);
        const response = await newitem.save();
        console.log("New-Item Inserted");
        res.status(200).json(response)
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "Intenal Server Error" });
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})
















