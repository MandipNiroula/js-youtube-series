let score = "99oo"

console.log(typeof score);

let valueInNumber = Number(score) 
console.log(typeof valueInNumber)
console.log(valueInNumber) // Nan

// "33" => 33
// "33as" => Nan(not an number)
// true => 1 ; false => 0

let isLoggedIn = "mandip"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)  // true

// 1 => true ; 0 => false
// "" => false
// "hello" => true

const  pi = "hello"

let numCons = Number(pi)
console.log(numCons)
console.log(typeof numCons)

// so constant data type can also be changed.