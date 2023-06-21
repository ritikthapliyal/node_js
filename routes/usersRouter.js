const express = require('express')
const {usersRoute, usersRouteWithId} = require('../controllers/usersControllers')

const router = express.Router()

router.get('/',usersRoute)

router.get('/:id',usersRouteWithId)

module.exports = router