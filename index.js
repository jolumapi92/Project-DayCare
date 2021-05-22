const express = require('express')
const bodyParser = require('body-parser')
const path = require("path");

const app = express()
const port = process.env.PORT || 5000

const Nurses = require('./src/models/nurse');
const Patients = require('./src/models/patient')

app.listen(port)
// Setting up the public file with all the assets
app.use(express.static(path.join(__dirname, "/public/")));
// Set up server to receive data from requests
app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
// Declaring the engine to use
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Retreving info


// REST APIS
app.get("/", function(req, res) {
    res.render('index')
});

app.get("/nurses", function(req, res) {
  Nurses.find({}, function(err, data) {
      res.render('index_nurses', { 
        nurses: data
      })
  });
});

app.get("/patients", function(req, res) {
  Patients.find({}, function(err, data) {
      res.render('index_patients', { 
        patients: data
      })
  });
});
