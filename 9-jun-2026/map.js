//map always return a new array which size is equal to calling array
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
let names = employees.map((employee)=> 2*employee.salary
)
console.log(names)