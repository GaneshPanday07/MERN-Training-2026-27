let students = [
    {
        name: 'ram',
        agr: 21,
        marks: 56
    },
    {
        name: 'shyam',
        agr: 22,
        marks: 46   
    },
    {
        name: 'mohan',
        agr: 24,
        marks: 76
    },
    {
        name: 'kumar',
        agr: 25,
        marks: 45
    },
    {
        name: 'nikil',
        agr: 26,
        marks: 36
    }
]
let newStudent = {
    name: 'vineet',
    age: 24,
    marks: 47
}
function addStudent(newStudent) {
    setTimeout(()=>{
        console.log("adding student");
        students.push(newStudent);
        console.log("student added...")
    },3000)
}

function displayStudent() {
    students.forEach((student)=> {
        console.log(student);
    })
}
addStudent(newStudent)
displayStudent()