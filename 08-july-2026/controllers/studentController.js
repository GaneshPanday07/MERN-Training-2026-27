const students = require('../student.json')

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

module.exports = {
  getStudents,
  getStudentByRollno,
  addStudent,
};