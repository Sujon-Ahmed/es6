// set/weakset
const mySet = new Set();
// if add any element in set then use add() method example
mySet.add(1).add(2);
// if delete any element in set then use delete() method
mySet.delete(1);
// if has any element in set then use has() method
mySet.has()
// if clear all element in set then use clear() method
mySet.clear()
// 
// console.log(mySet);

// set uses example

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// set union 
let union = new Set([...a, ...b]);
// console.log(union);

// set intersection
let intersection = new Set([...a].filter(x => b.has(x)));
// console.log(intersection);

// set difference
let difference = new Set([...b].filter(x => !a.has(x)));
console.log(difference);



