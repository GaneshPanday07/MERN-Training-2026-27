const Student = require('../models/Student')
async function addStudent(req, res){
    try{
        console.log("adding student.....")
        console.log(req.body)
        let student = new Student(req.body)
        await student.save();
        res.end("we are in process to add student..")
    } catch(err) {
        console.log(err)
    }
}

const getStudents= async(req, res)=> {
    try{
        let students = await Student.find({});
        console.log(students)
        res.send(students)
    } catch(err) {
        console.log(err)
    }
}

const getStudentByRollno = async(req, res)=> {
    try{
        console.log("find student..")
        let rollno = req.params.rollno;
        console.log(rollno)
        let student = await Student.findOne({rollno: rollno})
        res.send(student);
    } catch(err){
        console.log(err)
    }
}

const editstudent = async(req, res)=> {
    try{
        let rollno = req.params.rollno;
        let student = await Student.findOne({rollno: rollno})
        if(student){
            student.fatherName = "shri ram das ji";
            await student.save();
            res.end("student have been updated successfully....")
        }else{
            console.log("student not found.")
        }
    } catch(err) {
        console.log(err)
    }
}

const deletestudent = async(req, res)=>{
    try{
        let rollno = req.params.rollno;
        let student = await Student.Deleteone({rollno: rollno})
            res.end("delete successfully....")
        } catch(err) {
            console.log(err)
    }
}
module.exports = {
  addStudent,
  getStudents,
  getStudentByRollno,
  editstudent,
  deletestudent,
};