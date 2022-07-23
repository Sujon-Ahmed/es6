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

console.log(degree);