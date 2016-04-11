var express = require('express')
var router = express.Router()
var db = require('../db.js')


// users/ -> return all users and their data
// users/:id -> return user information (name, data joined, etcetera)
// users/:id/classrooms -> return all classrooms user is in
// users/:id/saved -> return all saved notes user has


// grab user information
router.get('/id:', function(req, res) {
	var user = req.user.id
	db.query('SELECT `full_name`, `username`, `createdAt` FROM `USERS` WHERE `id` = ?;', [user], function (err, rows) {
		if (err) {
			console.error(err)
			res.sendStatus(500)
		} else {
			res.json(rows)
		}
	})
})







module.exports = router