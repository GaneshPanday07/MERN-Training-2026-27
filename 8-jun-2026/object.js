let employee = {
    name: 'ram',
    age: 45,
    salary: 8000,
    "mobileno": 897489323,
    "first address": "radha kunj" 
}
console.log(employee.name)
console.log(employee['name']);
console.log(employee.mobileno)
console.log(employee['mobileno']);
console.log(employee['first address']);
console.log(Object.keys(employee))

//making object using class
class student {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    getName() {
    console.log(this.name + " " + this.age + " printed...")
}
}
s1 = new student("mohan",23)
console.log(typeof (s1));
console.log(s1.getName())
console.log("the end");


let students = {
    sid: 43246,
    sname: 'ganesh',
    course : 'mca',
    year : 2025-2027
}