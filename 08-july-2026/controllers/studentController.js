const students = require('../student.json')
const fs = require('fs')
function getStudents(req, res){
    try{
        res.json(students)
    } catch(err) {
        console.log(err)
    }
}

function getStudentByRollno(req, res){
    try{
        let Rollno = req.params.Rollno;
        let student = students.find((student) => student.Rollno == Rollno);
        res.json(student);
    } catch(err){
        console.log(err)
    }
}

function addStudent(req, res){
    try{
         students.push(req.body);
         console.log(req.body);
         fs.writeFile("student.json", JSON.stringify(students), (err) => {
           if (err) {
             console.log("problem in write file");
           } else {
             res.end("file has been added sucessfully......");
           }
         })
    } catch(err){
        console.log(err)
    }
}

function editStudent(req, res){
    try{
        let Rollno = req.params.Rollno;
        console.log(Rollno);
        let index = students.findIndex((student) => student.Rollno == Rollno);
        console.log(index);
        students[index].email = "ys@gmail.com";
        fs.writeFile("student.json", JSON.stringify(students), (err) => {
          if (err) {
            console.log("file updating is fail");
          } else {
            res.end("update file successfully......");
          }
        });
    } catch(err) {
        console.log(err)
    }
}

function deleteStudent(req, res){
    try{
        let Rollno = req.params.Rollno;
        console.log(Rollno);
        let index = students.findIndex((student) => student.Rollno == Rollno);
        students.splice(index, 1);
        fs.writeFile("student.json", JSON.stringify(students), (err) => {
          if (err) {
            console.log("data not delete");
          } else {
            res.end("delete successfully.......");
          }
        });
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
  getStudents,
  getStudentByRollno,
  addStudent,
  editStudent,
  deleteStudent,
};