// Now we create ECMAScript modules
// These modules are used with .mjs extension. With this extension require('') function is not used to import.

export let greet = ()=>{
    let time = prompt("What is time ?");
    if(time == "morning"){
        console.log("Good-Morning My friend :)");
    }else if(time == "afternoon"){
        console.log("Good After-Noon my friend");
    }else{
        console.log("Good After-Evening my friend");
    }
}
export default function talk(){
    let name = prompt("What's your name ?");
    if(name !== null){
        console.log(`Hey ${name} today is nice weather`);
    }else{
        console.log("Name is not entered!!!!!");
    }
}

// export {talk};
// export default greet;
