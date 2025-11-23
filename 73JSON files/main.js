const names = ["nagisa","ksawery","hazel","simon"]
const jsonString = JSON.stringify(names)

//console.log(jsonString)
const person = {
    "name": "nagisa",
    "age": 26,
    "isEmployed": true,
    "hobbies": ["killing men","cooking","balisong"]
}
const jsonString2 = JSON.stringify(person)
console.log(jsonString2)
//JSON.stringify() - convertuje JS object do JSON string
//JSON.parse() - convertujr JSON string do JS object