var express = require('express');
const db = require('./dbConnection');
var SearchSchema = require('./users');
var MongoClient = require('mongodb').MongoClient;

var app = express();

/* GET home page. */
app.get('/api/search/:name', function(req, res, next) {

    // // create a new user called chris

    // var name = req.params.name;
    // console.log("=============", name);
    // .find({ "name": { '$regex': name, $options: "i" } }).exec(function(err, doc) {
    //     if (err) {
    //         console.log("error occured ", err);
    //     } else if (doc.length != 0) {
    //         res.send(doc);
    //     } else {
    //         res.send("Sorry No Result Found");
    //     }


    // });
    var name = req.params.name;
    console.log("query: "+name);
var url = 'mongodb://localhost:27017/searchdb'
    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query = { "name": { '$regex': name, $options: "i" } } ; 
  db.collection("Search").find(query).toArray(function(err, result) {
    if (err) throw err;
    res.send(result);
    db.close();
  });
});
})
app.listen(3001);

module.exports = app;