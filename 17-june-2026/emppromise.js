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
/* problem statement.
we will make 2 function, 1>addemployee() which will take 3 second.
2>displayEmployee() which will take 0 second */

let newEmployee = {
        eid: 106,
        ename : 'ankur sharma',
        mobileno : 9883480098,
        post : 'Assistant professor'
}

function addEmployee(newEmployee) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            employees.push(newEmployee);
            resolve(employees)
        },3000)
    });
    return pr;
}

addEmployee(newEmployee)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })