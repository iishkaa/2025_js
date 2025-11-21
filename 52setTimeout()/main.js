//setTimeout(callback, delay)
//clearTimeout(timeoutId) = can cancel a timeout before it triggers

/*
function sayHello(){
    window.alert("Hello World!")
}

setTimeout(sayHello, 3000)
//
setTimeout(function (){window.alert("Hello!")},3000)
//
const timeoutId = setTimeout(() => window.alert("Hallo!"), 3000)
clearTimeout(timeoutId)*/
let timeoutId

function startTimer(){
    timeoutId = setTimeout(()=> window.alert("Hello"),3000)
}
function clearTimer(){
    clearTimeout(timeoutId)
    console.log("Clear!")
}