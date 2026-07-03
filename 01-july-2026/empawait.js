// list of employee [id, name, post]
// getemp(id) => return Emp with 3 sec
// getBasicSalary(emp.post) => return BasicSalary with 2 sec
// getHRA(basicSalary) => HRA with 1 sec
// Calculater salary => bs + HRA + da 

let employees = [
    {
        id: 101,
        name: 'Ram kumar',
        post: 'professor'
    },
    {
        id: 102,
        name: 'Navdeep kumar',
        post: 'Astt. professor'
    },
    {
        id: 103,
        name: 'Rakesh Mishra',
        post: 'Astt. professor'
    },
    {
        id: 104,
        name: 'gaurav kumar',
        post: 'professor'
    },
    {
        id: 105,
        name: 'Rajesh kumar',
        post: 'professor'
    },
]

function getemp(id) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(()=> {
            let emp = employees.find((employee) =>employee.id === id);
            if(emp){
                resolve(emp);
            }else{
                reject("Employee not found...")
            }
        },3000)
    });
    return pr;
}
function getBasicSalary(post) {
    let pr = new Promise((resolve, reject)=> {
        setTimeout(() => {
            let basicSalary = 0;
            if(post === 'professor'){
                basicSalary = 60000;
            } else if(post === 'Astt. professor'){
                basicSalary = 50000;
            }else {
                basicSalary = 40000;
            }
            resolve(basicSalary)
        },2000)
    });
    return pr;
}
function getHRA(basicSalary){
    let pr = new Promise((resolve, reject)=> {
        let hra = 0;
        setTimeout(()=> {
            
            if(basicSalary > 50000){
                hra = 15000;
            } else if(basicSalary >= 30000 && basicSalary < 50000 ) {
                 hra = 12000;
            } else {
                hra =10000;
            }
            
            resolve(hra); 
        },1000)
    });
    return pr;
}
function calculateSalary(hra , basicSalary) {
    let pr = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            let grossSalary = basicSalary + hra + basicSalary *.10;
            resolve(grossSalary);
        },3000)
    });
    return pr;
}
const employeeSummary = async()=> {
    try {
        let emp = await getemp(101);
        console.log("emp",emp);
        let basicSalary = await getBasicSalary(emp.post)
        console.log("basicSalary"+basicSalary);
        let hra = await getHRA(basicSalary)
        console.log("hra"+hra);
        let finileSalary = await calculateSalary(hra, basicSalary)
        console.log(finileSalary);
    } catch (err) {
        console.log("err");  
    }
}
employeeSummary();