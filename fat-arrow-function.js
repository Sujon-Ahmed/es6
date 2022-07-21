// ES6 fat arrow function

// example 1
// ------------------
// const msg = () => 'this is ES6 at arrow message';
// console.log(msg());
// -----------------------

// example 2
// ------------------
//const sum = (a, b) => a * b; // there are no need write return cause fat arrow function always return 
// console.log(sum(15,5));

// example 3
var programmingLanguage = {
    name: 'JavaScript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function () {
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`)); 
    }
}
programmingLanguage.printLibraries();



// ES5 function

// example 1
// ----------------
// function msg () {
//     return 'this is ES5 message';
// }
// console.log(msg());
// ----------------------

// example 2
// ----------------
// function sum(a, b) {
//     return a * b;
// }
// console.log(sum(5,9));
// --------------------------

