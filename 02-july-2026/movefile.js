const math = require('./math')
console.log(math)
let result = math.add(67, 90)
console.log(result);
result= math.substract(70, 21)
console.log(result)

const area = require('./area')
result = area.circle(2)
console.log(result);
result = area.rectangle(2, 4)
console.log(result);
result = area.triangle(5, 10)
console.log(result);


const volume = require('./volumes/volume')
result = volume.volume_cone(10, 20);
console.log(result)