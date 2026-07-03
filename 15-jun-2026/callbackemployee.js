let employees = [
    {
        empname: 'ram',
        age: 41,
        salary: 20000,
        location: 'lacknow' 
    },
    {
        empname: 'ram',
        age: 32,
        salary: 20000,
        location: 'lacknow' 
    },
    {
        empname: 'ram',
        age: 25,
        salary: 20000,
        location: 'lacknow' 
    },
    {
        empname: 'ram',
        age: 43,
        salary: 20000,
        location: 'lacknow' 
    },
    {
        empname: 'ram',
        age: 51,
        salary: 45000,
        location: 'shahdara' 
    },
]

let newEmployee = {
        empname: 'aman',
        age: 51,
        salary: 55000,
        location: 'up'
}

function addEmployee(newemployees , callback) {
    setTimeout(()=> {
        console.log("add emp...")
        employees.push(newEmployee);
        console.log("added emoploye...")
        callback();
    },3000)
}

function displayEmployees() {
    console.log("emp list.....");
    employees.forEach((employee)=> {
        console.log(employee);
    })
}
addEmployee(newEmployee, displayEmployees)
