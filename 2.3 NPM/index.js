// npm i sillyname = npm install --- ; here i means install
// this how we install packages 

// var nameGenarator = require("sillyname");


// as we have changed the type to module in package.json file so we dont need to use require keyword we can use import
// but we have to change type to module to every new installed package to work with each and every package

import nameGenarator from 'sillyname'
var Sillyname = nameGenarator();

console.log(`my name is ${Sillyname}`);  // here these are not single quotes these are backtickes