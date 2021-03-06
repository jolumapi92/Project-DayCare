const express = require('express')
const bodyParser = require('body-parser')
const path = require("path");
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000

// Connection to a database /////////////////////////////

mongoose.connect(process.env.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on('error', (err) => {
  console.log('Error connecting to database', err)
})
db.once('open', () => {
  console.log('Connection successful')
})

// Established connection /////////////////////////////////////

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

// REST APIS Routers
app.get("/", function(req, res) {
    res.render('index')
});

const patientRouters = require('./app/routes/patient')
app.use(patientRouters)

const nurseRouters = require('./app/routes/nurse')
app.use(nurseRouters)
