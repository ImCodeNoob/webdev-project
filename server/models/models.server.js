var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost:27017/cs5610project');
var db = mongoose.connect('mongodb://admin:admin@ds153869.mlab.com:53869/heroku_dc6b4j1b');

module.exports = db;
