const express = require('express')
const {toursRoute, toursRouteWithId} = require('../controllers/toursControllers')

const router = express.Router()

router.get('/',toursRoute)

router.get('/:id',toursRouteWithId)

module.exports = router