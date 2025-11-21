class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    set width(newWidth) {
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    set height(newHeight) {
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }
    get width(){
        return `${this._width.toFixed(1)} cm`;
    }
    get height(){
        return `${this._height.toFixed(1)} cm`;
    }
    get area(){
        return `${(this._width*this._height).toFixed(1)} cm^2`;
    }
}
const rectangle = new Rectangle(3, 4)

rectangle.width = 20;
rectangle.height = 20;

console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)
//second example

class Person {
    constructor(firstname,lastname,age) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
    set firstname(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstname = newFirstName
        }
        else{
            console.error("First name must be a string and greater than 0");
        }
    }
    set lastname(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastname = newLastName
        }
        else{
            console.error("Last name must be a string and greater than 0");
        }
    }
    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge
        }
        else{
            console.error("Age must be greater than or = 0");
        }
    }
    get firstname(){
        return this._firstname;
    }
    get lastname(){
        return this._lastname
    }
    get age(){
        return this._age
    }
    get fullname(){
        return `${this._firstname} ${this.lastname}`;
    }
}
const person1 = new Person("Nagisa", "Hauer", 26)

console.log(person1.firstname)
console.log(person1.lastname)
console.log(person1.fullname)
console.log(person1.age)


