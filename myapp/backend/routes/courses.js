var express = require('express')
var router = express.Router()

// Require controller modules
var course_controller = require('../controllers/courseController')

/// COURSES ROUTES ///
router.get('/', function(req, res){
    res.render('course', {title: "GIFU UNIV COURSES"})
})

router.get('/courses_list', course_controller.course_list)


module.exports = router