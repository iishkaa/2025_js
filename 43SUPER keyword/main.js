class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    move(){
        console.log(`the ${this.name} moves at a speed of ${this.speed} km`);
    }
}
class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name,age)
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`this ${this.name} can run`)
        super.move(this.runSpeed);
    }
}
class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name,age);
        this.runSpeed = swimSpeed;

    }
    swim(){
        console.log(`this ${this.name} can swim`)
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name,age)
        this.runSpeed = flySpeed;
    }
    fly(){
        console.log(`this ${this.name} can fly`)
        super.move(this.flySpeed);
    }
}
const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);
console.log(rabbit.name)
console.log(rabbit.age)
rabbit.run()
rabbit.run()