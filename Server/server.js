var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var db = require('./db.js')

// your routes requires go here
var users = require('./Routes/users')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan('dev'));

// declare path here 
app.use('/api/users/', users)



var port = process.env.PORT || 8080








app.listen(port, console.log('Magic happens on port', port))

// GET
// classrooms -> return all classrooms
// classrooms/:id -> return classroom information (code, metadata, created_at, etcetera)
// classrooms/:id/notes -> return all notes in that classroom
// classrooms/:id/users -> return all users in that classroom
// users/ -> return all users and their data
// users/:id -> return user information (name, data joined, etcetera)
// users/:id/classrooms -> return all classrooms user is in
// users/:id/saved -> return all saved notes user has


// POST
