// Inter conversion of Json to an object in nodejs

    // Json string to object
const jsonStr = '{"name":"Ashok", "age":20 ,"city":"New York"}';
const jsonStrToObj = JSON.parse(jsonStr);

console.log("\nString to object :",jsonStrToObj,"\n");

    // Json object to String
const jsonObj = {"name":"Alice", "age":20 ,"city":"New York"};
const jsonObjToString = JSON.stringify(jsonObj);

console.log("\nObject to String :",jsonObjToString+"\n");

console.log(typeof jsonStrToObj);
console.log(typeof jsonObjToString);


