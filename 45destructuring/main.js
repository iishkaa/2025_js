//example 1 -  SWAP
let aa = 1;
let bb = 2;

[aa, bb] = [bb, aa]

console.log(aa)
console.log(bb)
//example 2 - SWAP in ARRAY
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]]
console.log(colors)

//example 3 - ASSIGN array elements to VARIABLES
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extraColors)

//example 4 - EXTRACT values from OBJECTS (example5 - function)
function displayPerson({firstname, lastname, age, job}) {
    console.log(`name: ${firstname} ${lastname}`)
    console.log(`age: ${age}`)
    console.log(`job: ${job}`)
}
const person1 = {
    firstname: "Nagisa",
    lastname: "Hauer",
    age: 26,
    job: "mercenary"
}
const person2 = {
    firstname: "Ksawery",
    lastname: "Czajka",
    age: 27,
}
const {firstname,lastname,age,job="unemployed"}= person2;


//example 5 -
displayPerson(person1)
displayPerson(person2)