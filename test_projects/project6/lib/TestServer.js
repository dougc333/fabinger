var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema=mongoose
var async = require('async');
const schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/twitter', { useNewUrlParser: true, useUnifiedTopology: true });
//const tweets = mongoose.model('tweets',Schema({_id:String}))



const db = mongoose.connection

db.on('error',console.error.bind(console,'connection error'))
db.once('open',function(){
//connect
  console.log("connected")
  //how to query?
  console.log(tweets.find({}))
})