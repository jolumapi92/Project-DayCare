const Nurses = require('../../src/models/nurse')


exports.getDatas = (req, res) => {
    Nurses.find({}, function(err, data) {
      res.render('index_nurses', { 
        nurses: data
      })
  });
}

exports.getData = (req, res) => {
  Nurses.findById(req.params.id)
  .then((result) => {
    res.render('show_nurse', {
      nurse: result
    })
  })
  .catch(() => {
    res.status(404).json({ error: 'Patient not found' })
  })
}