// var names = ['John', 'Ashok', 'Jane'];
//
// names.forEach(function(name) {
//   console.log("forEach", name);
// });
//
// names.forEach((name) => {
//   console.log("arrowFunc", name);
// });
//
// names.forEach((name) => console.log(name));


function add(a, b) {
  return a+b;
}

var addArrowStatement = (a,b) => {
  return a+b;
}

var addArrow = (a,b) => a+b;

console.log(add(1,3));
console.log(addArrowStatement(1,3));
console.log(addArrow(1,3));
