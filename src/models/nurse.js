const mongoose = require('mongoose');


const NurseSchema = new mongoose.Schema({
    name: { 
      type: String,
      required: true
    },
    age: {
        type: Number,
        required: true
    },
    specialty: {
        type: String,
        required: true,
    },
    patients: [],
    tank: Object
  })
const Nurse = mongoose.model('Nurse', NurseSchema)

module.exports = Nurse
  
// Connecting the database ///////////////////////////////////
const db = mongoose.connection;
db.on('error', (err) => {
  console.log('Error connecting to database', err)
})
db.once('open', () => {
  console.log('Connection successful')
})