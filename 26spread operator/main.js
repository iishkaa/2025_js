let numbers = [1,2,3,4,5]
let max = Math.max(...numbers)
let min = Math.min(...numbers)
let username = "iishkaa labubu"
let letters = [...username].join("-")

console.log(max)
console.log(min)
console.log(letters)

let fruits = ["apple", "orange", "banana"]
let vegetables = ["carrots", "celery", "potatoes"]

let newFruits = [...fruits]
let foods = [...fruits, ...vegetables, "eggs", "milk"]

console.log(newFruits)
console.log(foods)
//.join() - dodaje jakis znak
