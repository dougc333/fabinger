//can iterate here also
//question and answer a little different formatting 
const data = require('./data.json')
//let d = JSON.parse(data);
console.log(typeof(data),typeof(d));
console.log(data);
console.log("------");
console.log(Object.keys(data));
for (x of Object.keys(data)){
   console.log(x);
   console.log(data[x]);
}

