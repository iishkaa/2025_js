let username

/*do{
    username = window.prompt("Please enter your name");
}while(username === "" || username === null)
    console.log(`Hello ${username}`)*/

let loggedIn = false;
let username2
let password

while(!loggedIn){
    username2 = window.prompt("Please enter your name");
    password = window.prompt("Please enter your password");

    if(username2 === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("Logged in")
    }
    else{
        console.log("invalid credentials")
    }
}