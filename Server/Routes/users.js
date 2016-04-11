var express = require('express')
var router = express.Router()
var db = require('../db.js')
var url = require('url')

// users/ -> return all users and their data
// users/:id -> return user information (name, data joined, etcetera)
// users/:id/classrooms -> return all classrooms user is in
// users/:id/saved -> return all saved notes user has


// grab user information
router.get('/user/kan', function (req, res) {
	var path = req.route.path;
	var pathArr = path.split('/');
	var user = pathArr[2];
	console.log('pathArr: ', pathArr);
	db.query('SELECT `full_name`, `username`, `createdAt` FROM `USERS` WHERE `username` = ?;', [user], function (err, rows) {
		if (err) {
			console.error(err)
			res.sendStatus(500)
		} else {
			res.json(rows)
		}
	})
})



module.exports = router