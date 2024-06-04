const express = require('express');
const app = express();
let port = 3000;

const Vegetable = require("./model/vegetable"); // 

const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // middleWare help to extract http data in req.body

console.log("Server testing is on");

app.get('/vegestore', async (req, res) => {
    try {
        const data = await Vegetable.find();
        console.log("Data fetched");
        res.status(200).json( data);
    } catch (err) {
        console.log(err);
        res.status(500).json(`Internal Error while data accessing`);
    }
})

app.post('/vegestore', async (req, res) => {
    try {
        const data = req.body; // fetch data from http body with the help of middleware.
        const newVege = new Vegetable(data); // create document of to add new vegetable.
        const respone = await newVege.save();
        console.log("Data Inserted");
        res.status(200).json(respone);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
}) 

app.listen(port, () => {
    console.log(`Server is Running ${port} port`);
})