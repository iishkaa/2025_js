function Hello(){
    console.log("Hello")
}


const hello = function(){
    console.log("Hello")
}
hello()


//
const hello2 = (name,age) => {console.log(`Hello ${name}`)
                                    console.log(`you are amazing ,${name}`)
                                    console.log(`you are ${age} years old`)}
hello2("iishkaa", 16)
setTimeout(function(){
    console.log("Hello")
}, 3000)
setTimeout(()=> console.log("Hello"), 3000)

//w reduce() n map()
const numbers = [1,2,3,4,5,6]
const squares = numbers.map((element) => Math.pow(element,2))
const cubes = numbers.map((element) => Math.pow(element,3))
const evenNum = numbers.filter((element)=> element % 2 === 0)
const oddNum = numbers.filter((element)=> element % 2 !== 0)
const total = numbers.reduce((acc, element) => acc + element)

console.log(squares)
console.log(cubes)
console.log(evenNum)
console.log(oddNum)
console.log(total)