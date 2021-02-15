var express = require('express')
var router = express.Router()
// Require controller modules
var course_controller = require('../controllers/courseController')

/// COURSES ROUTES ///

// GET request for course list
router.get('/', course_controller.course_list)

// GET request for course details
router.get('/:id', course_controller.course_details)

// // get plus button
// router.get('/likes/:id/plus/', course_controller.course_like_plus)
//
// // get minus button
// router.get('/likes/:id/minus/', course_controller.course_like_minus)


// GET request for comments list
router.get('/:id/comments', course_controller.comments_list)

// POST request for posting comments
router.post('/create/comments', course_controller.comments_craete_post)




module.exports = router