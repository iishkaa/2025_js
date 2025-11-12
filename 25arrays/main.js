let fruits = ["apple", "orange", "banana"]

fruits[3] = "coconut"

fruits.push("coconut")
fruits.pop()
fruits.unshift("coconut")
fruits.shift()

let numOfFruits = fruits.length
let index = fruits.indexOf("apple")
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(numOfFruits)
console.log(index)

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}
for (let i = fruits.length -1; i >= 0; i--){
    console.log(fruits[i])
}
for (let fruit of fruits){
    console.log(fruit)
}
fruits.sort().reverse()
console.log(fruits)
//.push      - dodaje nowy element na koniec array
//.pop       - usuwa ostatni element
//.unshifted - dodaje nowy element na poczatek
//.shift()   - usuwa element z poczatku
//.sort()    - sortuje
//.reverse   - reverse

