var Course = require('../models/course')
const { body, validationResult } = require('express-validator')
var async = require('async')

exports.course_list = function(req, res, next) {
    Course
        .find()
        .then(function(courses) {
            res.json(courses)
        })
}