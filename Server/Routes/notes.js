var express = require('express')
var router = express.Router()
var db = require('../db.js')

router.post('/classroom/:id/upload', function (req, res) {
	var id = req.params.id;
	var photo = req.body.photo;  //string of binary
	//upload photo to storage (S3)
		//return image URL
			//insert URL into DB, attaching it to specific classroom
				//return to client error/success

				function uploadToStorage(photo) {
					//promise upload function 
					  // usually you will have a options parameter where you can 
					  // dictate what you want the promise to return
					  // i.e. just the image url
					promiseUpload(photo, options)
					  .then(function(url) {
					  	// store the url in the DB attaching it to the specified classroom
					  	db.query('INSERT url into classrooms where classroom_id = ?'), 
					  	[url, id], 
					  	function (err, row) {
					  		// if error
					  		// respond with error to client
					  		// on success
					  		// respond success to client
					  	}
					  })
				}
})

module.exports = router

//notesee.bucket.s3-website-us-west-1.amazonaws.com

// You should store the Object Key in DB. You specify a key 
// while storing the object in S3, and then go ahead and store 
// this in the DB. From this key the download URL can be constructed.

// Object Key and Metadata - Amazon Simple Storage Service : http:
// docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html

