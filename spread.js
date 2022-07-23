const numbers = [1, 2, 3, 4, 5];

const newNumber = [...numbers];     // exact copy numbers array

numbers.push(6);

// console.log(newNumber);
// console.log(numbers);

let number1 = [1, 2, 3];
let number2 = [4, 5, 6];

let number3 = [...number1, ...number2];
// console.log(number3);

const myObj1 = {
    x : 1,
    y : 2
}

const myObj2 = {
    a : 3,
    b : 4
}


console.log({
    ...myObj1,
    ...myObj2
});