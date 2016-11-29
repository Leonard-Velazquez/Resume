
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('information', ['information']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/information', function (req, res) {
  console.log('I received a GET request');

  db.information.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
  
});
app.listen(8080);
console.log("Server running on port 8080");