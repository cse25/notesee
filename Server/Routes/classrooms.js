var express = require('express')
var router = express.Router()
var db = require('../db.js')

// GET
// classrooms -> return all classrooms
// classrooms/:id -> return classroom information (code, metadata, created_at, etcetera)
// classrooms/:id/notes -> return all notes in that classroom
// classrooms/:id/users -> return all users in that classroom



module.exports = router