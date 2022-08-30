// Important Object Method

const myObj = {
    name : 'JavaScript',
    estd : '1995',
    founder : 'Brendan Eich',
    ranking : 1
}

let keys = Object.keys(myObj);  // return object keys
let values = Object.values(myObj);  // return object values
let entries = Object.entries(myObj);    // return object key:values pair entries

// console.log(keys); 
// console.log(values);
console.table(entries);