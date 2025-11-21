const person = {
    fullname: "Nagisa Hauer",
    age: 26,
    isStudent: false,
    hobbies: ["cleaning guns", "hunting","cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Botton",
        country: "United Kingdom",
    }
}
console.log(person.fullname);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[0]);
console.log(person.address.street);

for(const property in person.address){
    console.log(person.address[property])
}
//
class Person{
    constructor(name,age,...address) {
        this.name=name
        this.age=age
        this.address= new Address(...address)
    }
}
class Address{
    constructor(street,city,country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
const person1 = new Person("Ksawery",
                                    27,
                                "123 COnch st.",
                                        "Bikini Bottom",
                                        "United Kingdom");
const person2 = new Person("Hazel", 17,
                                "128 Conch St.",
                                        "Bikini Bottom",
                                        "United Kingdom");
const person3 = new Person("Nagisa", 26,
    "134 Conch St.",
    "Bikini Bottom",
    "United Kingdom");
console.log(person1.address);