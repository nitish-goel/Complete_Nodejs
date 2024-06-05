// parameterized api using parameterized url
// Express-Routes

const express = require('express');
const app = express();
const PORT = 3000;

const db = require('../HWnode8_db'); // import database file for connection.

const bodyParser = require('body-parser'); // importing middleware to extract body from http request.
app.use(bodyParser.json()); // To use middleware we use the app.use().

// we import Person named model 
// const Person = require('../HWnode8_models/Person');

// import the routes of Person 
const PersonRoutes = require('./personRoutes');

// Import routes of menu
const MenuRoute = require('./MenuRoutes');

app.get('/', function (req, res) {
    // res.setHeader('Content-type', 'text')
    res.send("Hello This is Coder's World");
})

// // POST route to add a person
// app.post('/person', async ( req, res)=>{
//        try{

//         const data = req.body; // Assuming the request body contains the person data.
    
//         // Create a new Person document using the Mongoose model
//         const newPerson = new Person(data);
    
//         // Save the new person to the database
//         const response = await newPerson.save();
//         console.log("Data saved");
//         res.status(200).json(response);

//     }catch(err){
//         console.log(err);
//         res.status(500).json({error:"Internal Server Error"});
//     }
     
// })

// app.get('/person',async (req,res)=>{
//     try{
//         const data = await Person.find();
//         console.log("Data fetched");
//         res.status(200).json(data);
        
//     }catch(err){
//         console.log(err);
//         res.status(500).json({error :" Internal server error"})
//     }
// })

// app.get('/person/:workType',async (req,res)=>{  //http://localhost:3000/person/waiter --> parameterized url
//     try{
//         const workType = req.params.workType; // Extract the worktype from the url parameter
//         if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
//             const response = await Person.find({ work: workType})
//             console.log("Response Fetched");
//             res.status(200).json(response);
//         }else{
//             res.status(404).json({Error:"Invalid work-Type"});
//         }
//     }catch(err){
//         console.log(err);
//         res.status(500).json({Error:"Internal Server Error"})
//     }
// })

// Accessing Person routes
app.use('/person', PersonRoutes);


// Accessing Menu routes
app.use('/',MenuRoute);

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})
