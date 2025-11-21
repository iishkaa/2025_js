let fruits = ["apple", "orange", "banana", "coconut","pineapple"]
let numbers = [1,10,2,9,3,8,4,7,5,6]
fruits.sort()
numbers.sort((a,b) => b - a)

console.log(fruits)
console.log(numbers)
//
const people = [{name: "Nagisa", age: 26, gpa: 3.0},
    {name: "Hazel", age: 17, gpa: 4.0},
    {name: "Ksawery", age: 27, gpa: 2.9},
    {name: "Furrmann", age: 34, gpa: 4.1}]
people.sort((a,b)=> a.gpa - b.gpa)

console.log(people)
people.sort((a,b)=> a.name.localeCompare(a.name))
console.log(people)