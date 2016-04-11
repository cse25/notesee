var express = require('express')
var router = express.Router()
var db = require('../db.js')

// GET
// classrooms -> return all classrooms
// classrooms/:id -> return classroom information (code, metadata, created_at, etcetera)
// classrooms/:id/notes -> return all notes in that classroom
// classrooms/:id/users -> return all users in that classroom

// return ALL classrooms
router.get('/', function (req, res) {
	db.query('SELECT `name` FROM `CLASSROOMS`', function (err, rows) {
		if(err) {
			console.error(err)
			res.status(404).json({success:false})
		} else {
			res.json(rows)
		}
	})
})

// POST
// classrooms/:id/users --> adds user in that classroom
// classrooms/ --> create a classroom

// create a classroom
router.post('/', function (req, res) {
	var classname = req.body.classroom.name;
	db.query('INSERT INTO `CLASSROOMS` SET `name` = ?;', 
		[classname], 
		function (err, rows) {
			if(err) {
				console.error(err)
				res.status(500).json({success:false})
			} else {
				res.status(201).json({success:true})
			}
		})
})
	

module.exports = router