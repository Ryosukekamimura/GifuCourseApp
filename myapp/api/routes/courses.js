var express = require('express')
var router = express.Router()

// Require controller modules
var course_controller = require('../controllers/courseController')

/// COURSES ROUTES ///
router.get('/', course_controller.course_list)

router.get('/likes/:id/plus/', course_controller.course_like_plus)

module.exports = router