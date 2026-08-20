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
    age : 20
}

 const myFunstion = function () {
    console.log("Hello world")
 }

 console.log(typeof myObj)
 console.log(typeof students)

 // *********************************

 // stack (primitive), heap(Non-primitive)  

 let myName = "MAndip"
 let myAnotherName = myName

 myAnotherName = "Mahendra"

 console.log(myName) // Mandip
 console.log(myAnotherName) //Mahendra

 let userOne = {
    name : "mandip",
    age : 20

 }

  let userTwo = userOne

  userTwo.name = "Mahendra"

  console.log(userOne.name) // Mahendra
  console.log(userTwo.name) // Mahendra
    
  /* in stack the copy od the variable will pass but in 
    heap the  reference will be passed */