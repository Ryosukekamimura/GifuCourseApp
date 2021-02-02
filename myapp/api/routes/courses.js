var express = require('express')
var router = express.Router()

// Require controller modules
var course_controller = require('../controllers/courseController')

/// COURSES ROUTES ///
router.get('/', course_controller.course_list)

module.exports = router