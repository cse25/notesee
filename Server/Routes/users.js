var express = require('express');
var router = express.Router();
var db = require('../db.js')

router.get('/', function(req, res) {
	// send back all registered users
	res.JSON({name: 'Bob'});
})








module.exports = router;