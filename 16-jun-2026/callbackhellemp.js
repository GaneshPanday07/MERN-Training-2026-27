let employees = [
    {
        eid: 101,
        ename: 'ram',
        mobileno: 1234567890,
        post: 'professor'
    },
    {
        eid: 102,
        ename: 'shyaam',
        mobileno: 1234787890,
        post: 'Assosiate professor'
    },
    {
        eid: 103,
        ename: 'saman',
        mobileno: 1298767890,
        post: 'Assistant professor'
    },
    {
        eid: 104,
        ename: 'aman',
        mobileno: 7863456890,
        post: 'professor'
    },
]

function getemployee(Id, callback) {
    setTimeout(()=> {
        let emp = employees.find((employee)=> employee.eid === Id);
        console.log(emp);
        callback(emp);
    },5000)
}
function getsalary(post, callback) {
    setTimeout(()=> {
        if(post == 'professor'){
            basicsalary=56000;
        }else if(post == 'Assosiate professor'){
            basicsalary = 50000;
        } else {
            basicsalary = 40000;
        }
        console.log(basicsalary);
        callback(basicsalary)
    },3000)
}

function getgrosssalary(basicsalary) {
    hra = basicsalary * .40;
    dr = basicsalary * .80;
   let getgrosssalary = basicsalary + hra + dr;
   console.log(getgrosssalary);
}
getemployee(102, (emp)=> {
    getsalary(emp.post, (basicsalary)=> {
        getgrosssalary(basicsalary)
    });
});
