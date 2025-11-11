const fullName = "Bro Code"
const fullName2 = "iishkaa cosplay"

let firstName = fullName.slice(0, 3)
let lastName = fullName.slice(4)

let firstName2 = fullName2.slice(0, 7)
let lastName2 = fullName2.slice(8)

let firstChar = fullName.slice(0,1)
let lastChar = fullName.slice(7)

console.log(firstName)
console.log(lastName)
console.log(firstName2)
console.log(lastName2)
console.log(firstChar)
console.log(lastChar)

let firstNameD = fullName.slice(0, fullName.indexOf(" "))
let lastNameD = fullName.slice(fullName.indexOf(" ")+1)
console.log(firstNameD)
console.log(lastNameD)

//ex
const email = "Bro1@gmail.com"
let userName = email.slice(0, email.indexOf('@'))
let extension = email.slice(email.indexOf('@')+1)
console.log(userName)
console.log(extension)
