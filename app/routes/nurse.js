const express = require('express')
const router = express.Router()
const controller = require('../controllers/nurses')

router.get(
    '/nurses',
    controller.getDatas
)

router.get(
    '/nurses/:id',
    controller.getData
)


module.exports = router