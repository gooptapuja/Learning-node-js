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


const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body
app.get('/',(req,res)=>{
  res.send('welcome to my hotel...how can i help you???');
}) 

// import the router files
const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);


// import the Menu router files

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

app.listen(3000,()=>{
  console.log("server is on");
  
})








 


