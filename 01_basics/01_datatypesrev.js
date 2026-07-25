// primtive

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const pi = 3.14

const isLoggedIn = true

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false


// Refernce type (non-primitive)

// Array, Objects, Functions

const students = ["mandip", "sam", "kam"]

let myObj = {
    name : "mandip" ,
    age : 20,
}

 const myFunstion = function () {
    console.log("Hello world")
 }

 console.log(typeof myObj)
 console.log(typeof students)