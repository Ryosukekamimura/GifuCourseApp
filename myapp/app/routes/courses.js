var express = require('express')
var router = express.Router()

/// COURSES ROUTES ///
router.get('/', function(req, res){
    res.send("Hello World to Courses.js")
})

module.exports = router