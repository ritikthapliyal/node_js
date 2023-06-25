const express = require('express')
const {toursRoute, toursRouteWithId, checkID , extraMiddleware, createTour} = require('../controllers/toursControllers')

const router = express.Router()

router.param('id',checkID)

router.get('/',toursRoute)
router.get('/:id',extraMiddleware,toursRouteWithId)

router.post('/',createTour)

module.exports = router