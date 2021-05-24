const express = require('express')
const router = express.Router()
const controller = require('../controllers/patients')

router.get(
    '/patients',
    controller.getDatas
)

router.get(
    '/patients/:id',
    controller.getData
)

router.get(
    '/patients.new',
    controller.getForm
)

// Post Methods

router.post(
    '/patients.new',
    controller.insertData
) 

// Update Method

router.put(
    '/patients/:id',
    controller.updateSingle
)

// Delete Method

router.delete(
    '/patients/:id',
    controller.deleteSingle
)

module.exports = router