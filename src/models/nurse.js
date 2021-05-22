const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jolumapi92:foamyFOAMY@cluster0.ukcjm.mongodb.net/Care?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

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