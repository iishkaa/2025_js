function happyBirthday(username, age){
    console.log("happy Birthday!");
    console.log("happy Birthday to you!");
    console.log(`happy Birthday dear ${username}!`);
    console.log(`You are ${age} years old!`);
}
happyBirthday("iishkaa", 16);
happyBirthday("Nagisa", 20);

function add(x,y){

    return x + y;
}
function subtract(x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
function divide(x,y){
    return x / y;
}
function isEven(number){
    return number % 2 === 0 ? true : false;
}
function isValidEmail(email){
    return email.includes('@') ? true : false;
}
console.log(add(2,3))
console.log(subtract(2,3))
console.log(multiply(2,3))
console.log(divide(2,3))
console.log(isEven(13))
console.log(isValidEmail("iishkaa@gmail.com"))