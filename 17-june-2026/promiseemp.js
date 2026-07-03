let employees = [
    {
        eid: 101,
        ename : 'mohit',
        mobileno : 988888888,
        post : 'professor'
    },
    {
        eid: 102,
        ename : 'nikil',
        mobileno : 988888828,
        post : 'professor'
    },
    {
        eid: 103,
        ename : 'navdeep',
        mobileno : 988888888,
        post : 'Assistant professor'
    },
    {
        eid: 104,
        ename : 'nishant',
        mobileno : 988348888,
        post : 'Associate professor'
    },
    {
        eid: 105,
        ename : 'nishu',
        mobileno : 988498888,
        post : 'professor'
    }
]

let newEmp = {
        eid: 106,
        ename : 'nishant',
        mobileno : 988498778,
        post : 'professor'
}

function addemp(newEmp) {
    let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        employees.push(newEmp);
        resolve(employees);
    },4000)
}); return pr;
}

addemp(newEmp) 
.then((employees) => {
    console.log(employees)
})
.catch((err) => {
    console.log(err)
})