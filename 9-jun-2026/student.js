let students = [
    {
        name: 'ganesh',
        age: 23,
        course: 'mca',
        marks:'99'
    },
    {
        name: 'gourav',
        age: 22,
        course: 'b.tech',
        marks:'99'
    },
    {
        name: 'mohit',
        age: 23,
        course: 'b.tech',
        marks:'99'
    },
    {
        name: 'ram',
        age: 23,
        course: 'b.trch',
        marks:'99'
    },
    {
        name: 'shayam',
        age: 23,
        course: 'b.tech',
        marks:'99'
    }
]

students.forEach((student)=> {
    if(student.course != 'mca'){
        console.log(student);
    }
})

 console.log(" ");
students.forEach((student) => {
    if(student.age < 23) {
        console.log(student);
    }
})
