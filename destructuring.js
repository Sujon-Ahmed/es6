//  Destructuring

const user = {
    id : 101,
    name : "Sujon",
    age : 22,
    education : {
        degree : 'Diploma Engineering',
    }
};

// 🔰 object theke name take ber kore ene arekta variable e assign korte hobe jeno onno jaygay use kortee pari

// old way 
// var name = user["name"];

// destructuring way

const { name: title } = user; // you can assign any name alias

// console.log(name);
// console.log(title);

const {education : {degree} = {}} = user; // jodi education property nah tahkee then error asbee tar jonno = {} deuya hoycee

// console.log(degree);

// array destructuring
const arr = [1, 2, 3, 4, [5, 6, 7], 8, 9, 10];

var [,,,,[,a,b]] = arr;

// console.log(a,b);