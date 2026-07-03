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
]

function getEmployee(id, callback) {
    setTimeout(() => {
    let emp = employees.find((employee) => employee.eid === id);
    console.log(emp);
    callback(emp);
    },5000)
}
function getBasicSalary(post, callback) {
    setTimeout(()=> {
        if(post == 'professor') {
            basicsalay = 56000;
        } else if(post == 'Assistant professor'){
            basicsalay= 50000;
        } else {
            basicsalay = 52000;
        }
        console.log(basicsalay);
        callback(basicsalay);
    },3000)
}
function calculateSalary(basicsalary) {
    let grosssalary = 0;
    hra = basicsalary* .40;
    da = basicsalary* .80;
    //fixAmount = 5000;
    grosssalary = basicsalary + hra + da;
    console.log(grosssalary); 
}
getEmployee(101, (emp) => {
    getBasicSalary(emp.post, (basicsalay) => {
        calculateSalary(basicsalay);
        
    });    
});