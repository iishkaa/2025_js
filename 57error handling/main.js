
try{
    console.log("hello")
}
catch (error){
    console.error(error)
}
finally{
    //clean up
    //close connections
    console.log("this always executes.")
}

console.log("you have reached the end! ")

//
try{
    const dividend = Number(window.prompt("enter a dividend: "))
    const divisor = Number(window.prompt("enter a divisor: "))
    if(divisor == 0){
        throw new Error("you cant divide by 0")
    }
    if(isNaN(dividend)||isNaN(divisor)){
        throw new Error("values must be a number")
    }
    const result = dividend / divisor
    console.log(result)
}
catch (error){
    console.error(error)
}
console.log("you have reached the end! ")
