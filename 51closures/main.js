function outer(){
    let message = "Hello"
    function inner(){
        console.log(message)
    }
    inner();
}
outer()
//
function createCounter(){
    let count = 0

    function increment(){

        count++
        console.log(`Count increased to ${count}`)

    }
    function getCount(){
        return count;
    }
    return {increment, getCount}
}
const counter = createCounter();
counter.increment();
counter.increment();

//counter.count = 0
//console.log(count)
//console.log(counter.count)
console.log(`The current count is ${counter.getCount()}`)
//
function createGame() {
    let score = 0

    function increaseScore(points) {
        score += points;
        console.log(`+${points} pts(d)`)
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points} pts(d)`)
    }

    function getScore() {
        return score;
    }


    return {increaseScore, decreaseScore, getScore}
}
const game = createGame();
game.increaseScore(5)
game.increaseScore(6)
game.decreaseScore(3)
console.log(`The final score is ${game.getScore()}`)