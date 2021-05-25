const Patients = require('../../src/models/patient')
const mongoose = require('mongoose');


const parseId = (id) => {
  return mongoose.Types.ObjectId(id)
}

exports.getDatas = (req, res) => {
    Patients.find({}, function(err, data) {
      res.render('index_patients', { 
        patients: data
      })
  });
}

exports.getForm = (req, res) => {
  res.render('new_patient')
}

exports.getData = (req, res) => {
  Patients.findById(req.params.id)
  .then((result) => {
    res.render('show_patient', {
      patient: result
    })
  })
  .catch(() => {
    res.status(404).json({ error: 'Patient not found' })
  })
}

exports.insertData = (req, res) => {
    newPatient = new Patients({
      name: req.body.name,
      age: req.body.age
    })
    newPatient.save();
    res.redirect('/patients');
}

exports.updateSingle = (req, res) => {
  const id = req.params.id
  const body = req.body
    Patients.updateOne(
      { _id: parseId(req.params.id) },
      body, 
      (err, docs) => {
        res.send({
          items: docs
        })
      }
  )
}

exports.deleteSingle = (req, res) => {
  const id = req.params.id
  
  Patients.findByIdAndDelete(id)
  .then((result)=> {
    res.json({ redirect: '/patients' })
  })
  .catch((error)=>{ console.log(error) });
}