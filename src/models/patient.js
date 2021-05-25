const mongoose = require('mongoose');


const PatientSchema = new mongoose.Schema({
    name: { 
      type: String,
      required: true
    },
    age: {
        type: Number,
        required: true
    },
    tank: Object
  }, {
    versionKey: false,
    timestamps: true
  })
const Patient = mongoose.model('Patient', PatientSchema)

module.exports = Patient
  
// Connecting the database ///////////////////////////////////
const db = mongoose.connection;
db.on('error', (err) => {
  console.log('Error connecting to database', err)
})
db.once('open', () => {
  console.log('Connection successful')
})