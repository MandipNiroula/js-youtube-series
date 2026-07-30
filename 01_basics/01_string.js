const name = "Mandip"
const age = 20

console.log("Hello my name is " + name +  " and i am "  + age + " years old") // this way of joining string is not recommended

// this is recommmended
console.log(`Hello my name is ${name} and I am ${age} years old`)

// string can also be declared this way
const gameName = new String("eFootball")

console.log(gameName[0])
console.log(typeof gameName)
// they are the methods of string object
console.log(gameName.__proto__)
console.log(gameName.charAt(1))
console.log(gameName.indexOf('F'))

// const newString = gameName.substring(0, 4)
// console.log(newString)

const anotherString = gameName.slice(5,-1) // start should be less than end
console.log(anotherString)

// efootball

const newStringOne = "  mandip  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://mandip.com/mandip%20niroula"
console.log(url.replace('%20','-'))
console.log(url.includes("mandip"))

