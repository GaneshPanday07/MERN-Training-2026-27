const express = require('express')
const StudentController = require('../Controllers/StudentController')
const router = express.Router();
router.use(express.urlencoded({extended: false}))

//get method: http://localhost:3000/
router.get('/', (req, res)=>{
    StudentController.students(req,res)
})

router.post('/add/student', (req, res)=> {
    StudentController.addstudent(req, res)
})

module.exports = router
