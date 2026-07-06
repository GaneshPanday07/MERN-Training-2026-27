/*function add(a, b) {
  let c = a + b;
  console.log("This is add function");
  console.log(c);
  return c;
}
const substract = function (a, b) {
  console.log("This is a substract function");
  let c = a - b;
  console.log(c);
  return c;
};

module.exports = {
  add,
  substract,
};*/

exports.add = function(a, b)  {
  let c = a + b;
  console.log("This is add function");
  return c;
}

exports.substract = function(a, b) {
  console.log("This is a substract function");
  let c = a - b;
  return c;
};
