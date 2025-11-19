class MathUtil {
    static PI = 3.14159
    static getDiameter(radius){
        return radius * 2
    }
    static getcircumference(radius){
        return 2 * this.PI * radius
    }
    static getArea(radius){
        return this.PI * radius * radius
    }

}
console.log(MathUtil.PI)
console.log(MathUtil.getDiameter(10))
console.log(MathUtil.getcircumference(10))
console.log(MathUtil.getArea(10))
//

class User{
    static userCount = 0
    constructor(username){
        this.username = username
        User.userCount++
    }
    static getUserCount(){
        console.log(`there are ${User.userCount} users online`)
    }
    sayHello(){
        console.log(`hello my username is ${this.username}`)
    }
}
const user1 = new User("unh0ly_Ang3l")
const user2 = new User("C4sH")
const user3 = new User("lovebamBi")
console.log(user1.username)
console.log(user2.username)
console.log(user3.username)
console.log(User.userCount)
user1.sayHello()
User.getUserCount()
