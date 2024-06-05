const express = require('express');
const router = express.Router();
const Person = require('./../HWnode8_models/Person');



// POST route to add a person
// router.post('/person', async (req, res) => {
router.post('/', async (req, res) => {
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

// router.get('/person', async (req, res) => {
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("Data fetched");
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: " Internal server error" })
    }
})

// router.get('/person/:workType', async (req, res) => {  //http://localhost:3000/person/waiter --> parameterized url
router.get('/:workType', async (req, res) => {  //http://localhost:3000/person/waiter --> parameterized url
    try {
        const workType = req.params.workType; // Extract the worktype from the url parameter
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType })
            console.log("Response Fetched");
            res.status(200).json(response);
        } else {
            res.status(404).json({ Error: "Invalid work-Type" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "Internal Server Error" })
    }
})

module.exports = router;