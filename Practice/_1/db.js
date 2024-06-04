const mongoose = require('mongoose');

let mongoUrl = 'mongodb://127.0.0.1:27017/Vegetable-store';

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

    const db = mongoose.connection;
    
    db.on('connected',()=>{
        console.log("Connection Done");
    })
    
    db.on('disconnected',()=>{
        console.log("Connection break");
    })
    
    db.on('error',(err)=>{
        console.log(`Connetion Error : ${ err }`);
    })

module.exports = db;