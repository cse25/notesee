var express = require('express')
var router = express.Router()
var db = require('../db.js')
var url = require('url')

// users/ -> return all users and their data
// users/:id -> return user information (name, data joined, etcetera)
// users/:id/classrooms -> return all classrooms user is in
// users/:id/saved -> return all saved notes user has


// grab user information by specifying username
// ex. /users/user/danny => grab all user information for Danny from users table
router.get('/user/:name', function (req, res) {
	var user = req.params.name;
	db.query('SELECT `full_name`, `username`, `createdAt` FROM `USERS` WHERE `username` = ?;',
	 [user], 
	 function (err, rows) {
		if (err) {
			console.error(err)
			res.sendStatus(500)
		} else {
			res.json(rows)
		}
	})
})



module.exports = router