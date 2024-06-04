// Lodash library in nodejs which is highly using in development


const _ = require('lodash')

// console.log(_);

let arr =["Sun","Moon","Star","Cloud","Sky",365,12,30,7];

let isCopy = _.clone(arr);
console.log(isCopy);
console.log(_.uniq(arr));