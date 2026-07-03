let employees = [
    {
        name: 'ram',
        age: 45,
        salary: 56000
    },
    {
        name: 'mohan',
        age: 42,
        salary: 51000
    },
    {
        name: 'sohan',
        age: 43,
        salary: 53000
    },
    {
        name: 'kumar',
        age: 44,
        salary: 56000
    }
]
// foreach loop
let sum=0;
employees.forEach((employee)=> {
    console.log(employee.name)
    sum=sum+employee.salary;
})
console.log("sum of salary..." + sum);
let filterdEmployee = []
employees.forEach((employee)=> {
    if(employee.salary > 52000){
        filterdEmployee.push(employee)
    }
})
console.log("filtered Employee....", filterdEmployee)