const express = require('express');
const students = require('../student.json')
const StudentController = require('../controllers/studentController')
const fs = require('fs')
const route = express.Router()


// '/student' : http://localhost:3000/students
route.get('/students', (req, res)=> {
    StudentController.getStudents(req, res)
})

// http://localhost:3000/student/4
route.get('/student/:Rollno', (req, res)=> {
   StudentController.getStudentByRollno(req, res)
})

//post method =  http://localhost:3000/add/student
route.post('/add/student', (req, res)=> {
   StudentController.addStudent(req, res)
})

// put method = http://localhost:3000/edit/student/3
route.put('/edit/student/:Rollno', (req, res)=> {
    StudentController.editStudent(req, res)
})

// delete method = http://localhost:3000/delete/student/5
route.delete('/delete/student/:Rollno', (req, res)=> {
    StudentController.deleteStudent(req, res)
})
module.exports = route;