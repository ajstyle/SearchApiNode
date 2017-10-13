// grab the things we need
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/searchdb', { useMongoClient: true });
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
// create a schema
var searchSchema = new Schema({
    abbreviation: String,
    available: Boolean,
    category: String,
    id: Number,
    name: String,
    offered_price: Number,
    sub_name: String,
    type: String
});

searchSchema.index({ name: 'text' })

var Search = mongoose.model('Search', searchSchema);

// // make this available to our users in our Node applications
module.exports = Search;