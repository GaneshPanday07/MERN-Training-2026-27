let students = [
    {
        name: 'aman',
        email: 'aman@123',
        mobileno: 12345678,
        age: 25
    },
    {
        name: 'naman',
        email: 'naman@123',
        mobileno: 92345678,
        age: 23
    },
    {
        name: 'amaan',
        email: 'amaan@123',
        mobileno: 98345678,
        age: 21
    },
    {
        name: 'ayush',
        email: 'ayush@123',
        mobileno: 98745678,
        age: 19
    },
    {
        name: 'rohan',
        email: 'rohan@123',
        mobileno: 98765678,
        age: 14
    },
]

let newStudent = {
        name: 'ram',
        email: 'ram@123',
        mobileno: 98745378,
        age: 26
        
}

function addstudent(newStudent){
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(newStudent.age < 17) {
                console.log('can not add ');
            }else {
                students.push(newStudent);
            }
            resolve(students);
        },4000)
    });
    return pr;
}

addstudent(newStudent)
.then((students) => {
    console.log(students);
})
.catch((err) => {
    console.log('err');
})