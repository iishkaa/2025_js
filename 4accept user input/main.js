// window prompt
let username;
//username = window.prompt('Enter username');
//console.log(username);

// HTML textbox
document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `Hello ${username}`;
}
