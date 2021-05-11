const mongoose = require('mongoose'); //acquiring the library

//connecting our database
mongoose.connect("mongodb+srv://admin:admin123@cluster0.npvt3.mongodb.net/database");

const db = mongoose.connection; //for check

db.on('error', function(err) { console.log("ERRRRRRRRRRRROR", err.message); });

db.once('open', function() {
    console.log('Database fired...!');
}); //if the database is connected and the connection is open print the message