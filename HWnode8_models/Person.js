// Model : It is a representation of a specific collection in MongoDB. Like a Person.
//          Once you have defined a module, you can create, read, update and delete documents in the corresponding MongoDB collection.
// Schema : Mongoose allows you to define a schema for your documents. A schema is like a blueprint that defines the structure and data types of your documents within a collection/model.

const mongoose = require('mongoose');

// Define the Person schema
const personSchema = new mongoose.Schema({
    name:{
        type : String,                 // visit : https://mongoosejs.com/docs/guide.html    --> to learn more about schema parameters and many more.
        required : true
    },
    age:{
        type : Number,
    },
    work:{
        type : String,
        enum: ['chef','waiter','manager'],
        required: true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    salary:{
        type : Number,
        required : true
    }
})

// Create Person model                      👇:to define schema for collection/model  
const Person = mongoose.model('Person', personSchema);
                             //  ^--: To create Person collection/model 

module.exports = Person;