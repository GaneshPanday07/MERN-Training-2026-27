//first way
//sum(10, 20)
//function sum(a, b) {
    //a = 20;
    //b = 56;
    //c= a + b;
    //console.log(c);
  //  console.log(arguments)
//}
//sum(10, 45)

add(10, 90)
function sum(a, b){
    return a +b;
}
let result = sum(12, 78);
console.log(result + "...result")

//-------------------------------------------------------------------
//third way (arrow function)
//let multiply = (a, b) => {
 //   let c = a + b;
//    console.log(c);
    //console.log(arguments)
//}
//multiply(90, 3)

let multiply = (a, b) => a * b
let result = multiply(90, 3);
console.log(result+ " result")
//--------------------------------------------------------------------

//second way
//add(10, 90)
let sum1=10;
let add = function(a, b) {
    let c=a+b;
    console.log(c);
    //console.log(arguments)
}
add(10,78)
console.log(typeof(add))
//----------------------------------------------------------------
