let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// ADD CSS/HTML PROPERTIES
buttons.forEach(button =>{
    button.style.backgroundColor = "lightpink"
    button.textContent += "😘❤️"
})
// ADD CLICK EVENT LISTENER
buttons.forEach(button =>{
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "hotpink"
    })
})
// ADD MOUSEOVER + MOUSEOUT event listener
buttons.forEach(button =>{
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "purple"
    })
})
buttons.forEach(button=>{
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "lightpink"
    })
})
// ADD AN ELEMENT
const newButton = document.createElement("button"); //STEP 1

newButton.textContent = "Button 5" //STEP 2
newButton.classList = ("myButtons")
document.body.appendChild(newButton); //STEP 3
buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

// REMOVE AN ELEMENT
buttons.forEach(button =>{
    button.addEventListener("click", event => {
        event.target.remove()
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    })
})