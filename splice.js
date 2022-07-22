// Array.prototype.splice()
// splice() method change main array
// splice() method return deleted elements

const numbers = [1, 2, 6, 7, 6, 7, 8, 9, 10];

let result = numbers.splice(2, 2, 3, 4, 5);

console.log(numbers);
console.log(result); 