const hello = function(){
    console.log("hello")
}
hello()


//setTimeout(hello, 3000)
setTimeout(function (){
    console.log("hello")
}, 1000)

const numbers = [1,2,3,4,5,6]
const squares = numbers.map(function(element){
                                     return Math.pow(element,2)
})
const cubes = numbers.map(function(element){
    return Math.pow(element,3)
})
const isEven = numbers.filter(function(element){
    return element % 2 === 0
})
const oddNum = numbers.filter(function (element){
    return element % 2 !== 0
})
const total = numbers.reduce(function(accumulator, element){
    return accumulator + element
})
console.log(squares)
console.log(cubes)
console.log(isEven)
console.log(oddNum)
console.log(total)

