var express = require('express');
const db = require('./dbConnection');
var SearchSchema = require('./users');

var app = express();

/* GET home page. */
app.get('/api/search/:name', function(req, res, next) {

    // create a new user called chris
    db.getDbConnection();
    var name = req.params.name;
    console.log("=============", name);
    SearchSchema.find({ "name": { '$regex': name, $options: "i" } }).exec(function(err, doc) {
        if (err) {
            console.log("error occured ", err);
        } else if (doc.length != 0) {
            res.send(doc);
        } else {
            res.send("Sorry No Result Found");
        }


    });

})
app.listen(3001);

module.exports = app;