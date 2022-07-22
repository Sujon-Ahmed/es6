// Definition and Usage
// The findIndex() method executes a function for each array element.

// The findIndex() method returns the index (position) of the first element that passes a test.

// The findIndex() method returns -1 if no match is found.

// The findIndex() method does not execute the function for empty array elements.

// The findIndex() method does not change the original array.

// Array.prototype.findIndex()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = numbers.findIndex(function(currentIndex, arr) {
    return currentIndex > 5;
});

console.log(result);