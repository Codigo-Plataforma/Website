const port = process.env.PORT; //Setting the port number

const { urlencoded } = require('express');
const express = require('express'); //Acquiring the express library
const path = require('path'); //Acquiring the inbuilt path library

const db = require('./database'); //importing the mongoose config file

const ListModel = require('./models/list');
const commentModel = require('./models/comment');
const app = express();

//For parsing the form data
app.use(express.urlencoded());
app.use(express.static('assets'));

app.set('view engine', 'ejs'); //setting the app's view engine type to ejs
app.set('views', path.join(__dirname, 'views'));
/* setting the path of the view directory
__dirname returns the current directory */

//Sending the response to the browser
app.get("/", function(req, res) {

    ListModel.find({}, function(err, list) {
        commentModel.find({}, function(err, allcomments) {
            return res.render('index', {
                fields: list,
                commentFields: allcomments
            });
        });


    });
    //rendering our ejs file and sending dynamic data
});

/* app.get("/query", function(req, res) {
    ListModel.find({}, function(err, list) {

        return res.render('main', {
            title: list[2]
        });
    });
}); */



app.listen(port || 3000, function() {
    console.log("server running");
});




//Accepting and responding to the POST request
app.post("/", function(req, res) {
    /*   list.push({
          eventName: req.body.input, //creating a key "eventName" and giving it the value parsed from the form data then pushing this object to the object array named list
      }); */

    //Populating the database
    ListModel.create({
        event: req.body.input,
        stname: req.body.nameInput,
        titleBar: req.body.title,
        createdAt: timeString,
        email: req.body.emailInput
    }, function(err, newList) {
        if (err) {
            console.log('Error in creating a contact!', err);
            return;
        }

        return res.redirect('back');
    });

});

app.post("/comment", function(req, res) {
    commentModel.create({
        commentText: req.body.comment,
        commentBy: req.body.commenter
    }, function(err, comments) {
        if (err) {
            console.log('Error in creating a comment!', err);
            return;
        }
        return res.redirect('back');
    });


});

var currentTime = new Date();

var currentOffset = currentTime.getTimezoneOffset();

var ISTOffset = 330; // IST offset UTC +5:30 

var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);

// ISTTime now represents the time in IST coordinates

var hoursIST = ISTTime.getHours()
var minutesIST = ISTTime.getMinutes()
var dateString = ISTTime.getDate() + "/" + ISTTime.getMonth() + "/" + ISTTime.getFullYear();

var timeString = dateString + "  " + hoursIST + ":" + minutesIST;