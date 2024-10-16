const mongoose = require('mongoose');

// define the mongoDB connection URL

 const mongoURL = 'mongodb://localhost:27017/myhotel' //Replace "Mydatabase with ur database name

//  set up mongoDB connection

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// get the default connection
// Mongoose maintains a default connection object represting the mongoDB connection.

const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected',()=>{
    console.log('connected to mongoDB server ');
    
 });

 db.on('error',()=>{
    console.log('Mongconnected connection error',err);

 });
 db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
 });

//  export the db connection

module.exports = db;
