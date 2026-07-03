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

function getEmp(Id) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            let Employee = employees.find((employee) => employee.eid === Id)
            if(!Employee) {
                reject("Employee not found");
            } else {
                resolve(Employee);
            }
        },5000)
    });
    return pr;
}

function getBasicsalary(post) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
        if(post === "professor") {
            Basicsalary = 56000
        } else if(post === "Associate professor") {
            Basicsalary = 50000;
        } else {
            Basicsalary = 52000
        }
        resolve(Basicsalary);
        },3000)
    });
    return pr;
}

function getGrossSalary(Basicsalary) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            let GrossSal = Basicsalary + Basicsalary * .80 + Basicsalary * .40 + 5000;
            resolve(GrossSal);
        },2000)
    });
    return pr;
}

getEmp(101)
.then((Employee) => {
    console.log(Employee)
    return getBasicsalary(Employee.post)
})
.then((Basicsalary) => {
    console.log(Basicsalary);
    return getGrossSalary(Basicsalary)
})
.then((GrossSal) => {
    console.log(GrossSal);
})
.catch((err) => console.log("error"))