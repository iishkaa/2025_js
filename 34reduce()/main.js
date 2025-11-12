const prices = [5,30,10,25,15,20]
const total = prices.reduce(sum)
console.log(`${total.toFixed(2)}`)

function sum(previous,next) {
    return previous + next
}
const grades = [75,50,90,80,65,95]
const max = grades.reduce(getmax)
console.log(`${max}`)

function getmax(previous,next) {
    return Math.max(previous, next)
}
const min = grades.reduce(getmin)
console.log(`${min}`)

function getmin(previous,next) {
    return Math.min(previous, next)
}








//.reduce() - redukuje array do jednej wartosc