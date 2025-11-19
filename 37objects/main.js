const person = {
    firstName: "Nagisa",
    lastName: "Hauer",
    age: 26,
    isEmployed: true,
    sayHello: function (){
        console.log("hallo? why you starin' at me like tha'?🤨")
    }
}
const person2 = {
    firstName: "Ksawery",
    lastName: "Czajka",
    age: 27,
    isEmployed: true,
    sayHello: function (){
        console.log("Siema co tam skurwiele, u mnie dobrze kochany😊👌😘")
    }
}
const person3 = {
    firstName: "Hazel",
    lastName: "Green",
    age: 17,
    isEmployed: false,
    sayHello: function (){
        console.log("Hi... How are you??😊")
    }
}
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.isEmployed)
person.sayHello()
console.log(person2.firstName)
console.log(person2.lastName)
console.log(person2.age)
console.log(person2.isEmployed)
person2.sayHello()
console.log(person3.firstName)
console.log(person3.lastName)
console.log(person3.age)
console.log(person3.isEmployed)
person3.sayHello()