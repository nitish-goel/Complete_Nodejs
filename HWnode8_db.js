// Connecting MongoDB to Nodejs.

const mongoose = require('mongoose');

// Define the mongoDB connection URL
// const mongoURL = 'mongodb://localhost:27017/mydatabase'; // Replace 'mydatabase with your database name
const mongoURL = 'mongodb://127.0.0.1:27017/Hotel'; 

// Set up MongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
        
// Get the default connection'
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// Defining events listeners for database connection

db.on('connected',()=>{
    console.log("Connection is establish to MongoDB server.");
})

db.on('error',(err)=>{
    console.log("MongoDB connection error.", err);
})

db.on('disconnected',()=>{
    console.log("Disconnected from MongoDB server.");
})

// Export the database connection
module.exports = db;
