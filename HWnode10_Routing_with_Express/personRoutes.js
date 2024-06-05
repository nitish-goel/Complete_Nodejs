// Update and Delete Method 
// Adding Updation and Deletion End-Point  in Person-Routes

const express = require('express');
const router = express.Router();
const Person = require('./../HWnode8_models/Person');



// POST route to add a person
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

// Parameterized End-Point
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

// Updation End-Point / Person Updation Method : we can use both PUT and PATCH for updation
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Extract the person's ID from the URL parameter
        const updationData = req.body; // data for updation

        const response = await Person.findByIdAndUpdate(personId, updationData, {
            new: true, // Retrun  the updated document
            runValidators: true, // Run Mongoose validation
        })

        
        
        if(!response){ // if id is not matched
            return res.status(404).json({Error:"Person not Found"});
        }
        
        console.log("Data is Updated");
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "Internal Server Error" })
    }

})

// Deletion End-Point / Person Deletion Method : we use DELETE for delete.
router.delete('/:id',async (req,res)=>{
    try{
        const personId = req.params.id; // Extract the person's ID from the URL parameter
        
        // Assuming you have a Person model
        const response = await Person.findByIdAndDelete(personId);
        
        if(!response){ // if id is not matched
            return res.status(404).json({Error:"Person not Found"});
        }
        
        console.log("Data is Deleted");
        res.status(200).json({message :"Person deleted Sucessfully"});
    }catch(err){
        console.log(err);
        res.status(500).json({ Error: "Internal Server Error" })
    }
})

module.exports = router;