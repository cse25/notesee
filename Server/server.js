var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require("body-parser")
var db = require('./db.js')
var router = require('express').Router()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api', router)

var port = process.env.PORT || 8080


router.get('/', function (req, res){
  res.json({ message: 'Notesee API working' })
})

// login
router.get('/users/:id', function (req, res) {})

// signup/create a user
router.post('/users', function (req, res) {})




app.listen(port, console.log('Magic happens on port', port))

// GET
// classrooms -> return all classrooms
// classrooms/:id -> return classroom information (code, metadata, created_at, etcetera)
// classrooms/:id/notes -> return all notes in that classroom
// classrooms/:id/users -> return all users in that classroom
// users -> return all users
// users/:id -> return user information (name, data joined, etcetera)
// users/:id/classrooms -> return all classrooms user is in
// users/:id/saved -> return all saved notes user has


// POST
