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

exports.course_like_plus = function(req, res, next) {
    Course.findByIdAndUpdate(req.params.id)
        .exec(function(err, result){
            if (err) { return next(err) }
            console.log(result)
            result.plus += 1
            Course.findByIdAndUpdate(req.params.id, {$set: {plus: result.plus}}, {runValidator: true, new: true}, function(err, doc) {
                if (err) { return next(err) }
                res.json(doc)
            })
        })
}