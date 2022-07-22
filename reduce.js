// Array.prototype.reduce()

const numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((previousValue, currentValue, currentIndex, arr) => {
    return previousValue + currentValue;
}, 0);


console.log(sum);