// Array.prototype.find()
let numbers = [1, 2, 3, 4, 5];

let result = numbers.find(function(currentValue, currentIndex, arr) {
    return currentValue > 3;
});

console.log(result);


