const express = require('express')
const StudentController = require('../controllers/StudentController')
const route = express.Router()
// post method: http://localhost:3000/add/student
route.post('/add/student', (req, res)=> {
    StudentController.addStudent(req, res)
})

route.get('/students', (req, res)=> {
    StudentController.getStudents(req, res)
})

route.get('/student/:rollno', (req, res)=> {
    StudentController.getStudentByRollno(req, res)
})

//put method: http://localhost:3000/edit/student/101
route.put('/edit/student/:rollno', (req, res)=>{
    StudentController.editstudent(req, res)
})

//delete method: http://localhost:3000/delete/student/104
route.delete('/delete/student/:rollno', (req, res)=> {
    StudentController.deletestudent(req, res)
})
module.exports = route