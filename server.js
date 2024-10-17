// function calculateCircleArea(radius){
//   const area = 3.14*(radius*radius);
//   return area;
// }

// const res = require("express/lib/response");

// const result = calculateCircleArea(5);
// console.log(result);

// program2
// function arithmeticOperations(x,y){
//    console.log(`addition:=${x+y}`);
//    console.log(`subtraction:=${x-y}`);
//    console.log(`multiplication:=${x*y}`);
//    console.log(`division:=${x/y}`);  
// }

//  const operation= function performOperation(a,b,callback){
      
//       return arithmeticOperations(a,b);
//  }

//  const result = operation(10,5,arithmeticOperations);
//  console.log(result);

// program3

// var fs = require('fs');
// fs.readFile('notes.txt',"hi,i m here",()=>{
//     console.log("file appended");
    
// })

// // console.log(fs);

// const os = require('os');
// console.log(`free memory:${os.freemem()}`);
// console.log(`free memory:${os.totalmem()}`);
// console.log(`free memory:${os.type()}`);

// const _ = require('lodash');

// let number = [2,4,6,5,8,9,10,23,3,7,9,11]

// function sumOfArray(number){
//   const evenNumber = _.filter(number,num =>num%2 ===0);
//    return _.sumBy(evenNumber);
// }

// console.log(sumOfArray(number));

// const objectConvert ={"name":"alice","age":80,"hobbies":["reading","dancing","listing"]}
// const jsonString = JSON.stringify(objectConvert)
// console.log(jsonString);

// JSON NPM EXPRESS :----



const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const passport = require('./auth');

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;


// Middleware Function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next(); // Move on to the next phase
}
app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})

app.get('/', function (req, res) {
    res.send('Welcome to our Hotel');
})

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuRoutes');

// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);
  
app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})




 


