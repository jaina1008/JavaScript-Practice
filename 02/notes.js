// var age = 22
var num1 = 10
var num2 = 20
console.log(num1+num2)

// 2
if(true){
    let a = 20
}
// console.log(a)
// a=20
// console.log(a)

// 3
// const value never changes
const age = 22
console.log(age)
// age = 25 -- this will not work

console.log(num1)
num1=50
console.log(num1)

// create an object
const person = {
    firstName: 'A',
    lastName: 'Jain',
    age: 22,
    isLoggedIn: [null, undefined, 'testing these']
}
console.log(person)
console.log(person.age)
console.log(person.isLoggedIn)

// convert string into number
console.log('100' * 2)
// concatenate string
console.log('100' + 2)
// type
console.log(typeof('123' + 100))
console.log(typeof person)

// ternary oeprator = takes three inputs return one
age > 18 ? console.log('Yes') : console.log('No')
let res = age > 18 ? 'Yes' : 'No'
console.log(res)

// Switch statements
const option = 3
switch(option) {
    case 1: console.log('Namaste')
    break
    case 2: console.log('Hello')
    break
    default: console.log('invalid option')
    break
}

// logical operators: and = &&,  or = ||, remainder = %, NOT = !=
const gender = 'male'
if(age > 18 && gender == 'male') {
    console.log('You are an adult male')
}
if(age > 100 || gender == 'male') {
    console.log('You are an adult male')
}

// LOOPS = FOR, WHILE, DO WHILE
for(let i = 1; i < 3; i++) {
    console.log('AJ' + i)
}

let i = 3
do{
    i = i+1
    console.log(i)
} while (i < 4)

// let guess = 0
// do {
//     guess = parseInt(prompt("guess a number"))
//     if (guess == number) {
//         alert("Winner")
        // break
//     }
// } while (guess != 0)


// FUNCTIONS
function addMe(a,b,c=1) {
    return ans = a+b+c
}
console.log(addMe(5,5))

// accept unlimited arguments
function addNumbers(a,b) {
    let ans = 0
    for(let i=0; i < arguments.length; i+= 1){
        ans = ans + arguments[i]
    }
    return ans
    // console.log(arguments)
}
let result = addNumbers(1,2,3,4,5)
console.log(result)

// Spread Operators
function addNumbersV2(...numbers) {
    let ans = 0
    for(let i=0; i < numbers.length; i+= 1){
        ans = ans + arguments[i]
    }
    return ans
    // console.log(numbers)
}
let resultv2 = addNumbersV2(1,2,3)
console.log(resultv2)


// ARROW FUNCTIONS
const sayHello = () => {
    console.log('Hi')
}

// const add = (a, b) => {
//     return a+b
// }
const addv2 = (a,b) => a+b // One liner  when we have one line in body

sayHello()
console.log(addv2(2,3))

// Below will not work beucase arguments is not available in arrow functions.
// const addNs = () => {
//     console.log(arguments)
// }
// addNs(1,2,3,4,5)

const addNs = (...nums) => {
    console.log(nums)
}
addNs(1,2,3,4,5)

// Hoisting below = JS saves function definition in memory so then it does not matter if you call the function befor or after its definition.
// Will not work like this on Arrow functions.
sayHey()
function sayHey() {
    console.log('Heyy there')
}

// This Keyword. on arrow functions This keyword refers to the brower window, bot the imObj object.
const imObj = {
    value: 20,
    myFunction: () => {
        console.log(this)
    }
}
imObj.myFunction()


// HIGH ORDER FUNCTION = FUNCTION taking a FUNCTION as an argument
// Here cb is callback and add is a high order function.
function add(a,b, cb) {
    let result = a+b
    cb(result)
}
// add(2,4, function(val) {
//     console.log(val)
// })
// or
add(2,4, val => console.log(val))