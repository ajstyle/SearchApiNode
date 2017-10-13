var MongoClient = require('mongodb').MongoClient
var mongoose = require('mongoose');


var getDbConnection = function() {
    test = mongoose.createConnection('mongodb://localhost:27017/searchdb', { useMongoClient: true });
    if (test) {
        console.log(" connnected to  database");
    } else {
        console.log(" connection error database");
    }

}
module.exports.getDbConnection = getDbConnection;