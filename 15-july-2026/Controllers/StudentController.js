const Student = require('../models/Student')

const students = (req, res)=> {
    res.render('home')
}

const addstudent = async(req, res)=> {
    try{
        console.log(req.body)
        const student = new Student(req.body)
        await student.save()
        res.render('addStudentSuccess')
    } catch(err){
        console.log(err)
    }
}
module.exports = {
  students,
  addstudent,
};