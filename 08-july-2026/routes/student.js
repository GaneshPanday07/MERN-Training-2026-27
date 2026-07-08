const express = require('express');
const students = require('../student.json')
const fs = require('fs')
const route = express.Router()


// '/student' : for call all student data
route.get('/students', (req, res)=> {
    res.json(students)
})

// http://localhost:3000/student/4
route.get('/student/:Rollno', (req, res)=> {
   
})

//post method =  http://localhost:3000/add/student
route.post('/add/student', (req, res)=> {
   
})

// put method = http://localhost:3000/edit/student/3
route.put('/edit/student/:Rollno', (req, res)=> {
    let Rollno = req.params.Rollno;
    console.log(Rollno)
    let index = students.findIndex((student)=> student.Rollno == Rollno)
    console.log(index)
    students[index].email="gp@gmail.com";
    fs.writeFile('student.json', JSON.stringify(students), (err)=> {
        if(err){
            console.log("file updating is fail");
        }else{
            res.end("update file successfully......")
        }
    })
})

// delete method = http://localhost:3000/delete/student/5
route.delete('/delete/student/:Rollno', (req, res)=> {
    let Rollno = req.params.Rollno;
    console.log(Rollno)
    let index = students.findIndex((student)=> student.Rollno == Rollno)
    students.splice(index, 1);
    fs.writeFile('student.json', JSON.stringify(students), (err)=> {
        if(err){
            console.log("data not delete")
        }else{
            res.end("delete successfully.......")
        }
    })
})
module.exports = route;