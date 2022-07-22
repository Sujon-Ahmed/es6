// Array.prototype.filter()

const numbers = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10];

let result = numbers.filter( (currentValue, currentIndex, arr) => currentValue > 4);
console.log(result);