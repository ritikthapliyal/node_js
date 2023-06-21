const express = require('express')
const {toursRoute, toursRouteWithId, checkID} = require('../controllers/toursControllers')

const router = express.Router()

router.param('id',checkID)

router.get('/',toursRoute)

router.get('/:id',toursRouteWithId)

module.exports = router