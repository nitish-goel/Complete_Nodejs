// Creation of module and export of module.
// Filename is module name.
// First we create comman/basic modules in nodejs.
// In these type of modules for importing require('') is used and for export module.exports ={} is used.

const planet = ()=>{
    let arr =["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
    arr.forEach(element => {
        console.log(element);
    });
} // Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune

const weather = ()=>{
    let arr = ["Summer","Winter","Spring","Monsoon","Autumn"];
    // console.log("Current Weather is :"+ arr[0]);
    return arr[1];
}

// module.exports = planet; // to export single component
module.exports = { planet, weather}; // to export multiple component

