const myH1 = document.getElementById("myH1");
const myButton = document.getElementById("myButton");
myH1.classList.add("enabled");
myButton.classList.add("enabled");
myButton.classList.remove("enabled");
myButton.addEventListener("mouseover", event=> {
    event.target.classList.toggle("hover");
})
myButton.addEventListener("mouseout", function () {
    myButton.classList.toggle("hover");
})

myButton.classList.add("enabled");
myButton.addEventListener("click", event=> {
    event.target.classList.replace("enabled", "disabled")
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "❤️"
    }
    else{
        event.target.classList.replace("enabled", "disabled")
    }
})
myH1.addEventListener("click", event=> {
    event.target.classList.replace("enabled", "disabled")
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "❤️"
    }
    else{
        event.target.classList.replace("enabled", "disabled")
    }
})

//4 buttons
let buttons = document.querySelectorAll(".myButtons");
buttons.forEach(button => {
    button.classList.add("enabled");
})
buttons.forEach(button => {
    button.classList.remove("enabled");
})
buttons.forEach(button => {
    button.addEventListener("mouseover", event=> {
        event.target.classList.toggle("hover");
    });


});
buttons.forEach(button => {
    button.addEventListener("mouseout", event=> {
        event.target.classList.toggle("hover");
    });
});
buttons.forEach(button => {
    button.addEventListener("click", event=> {
        if(event.target.classList.contains("disabled")){
            event.target.textContent = "😣"
        }
        else{
            event.target.classList.replace("enabled", "disabled")
        }
        event.target.classList.replace("enabled", "disabled")
    });
});

//add() - dodaje
//remove() - usuwa
//toggle() - usuwa jesli jest/ dodaje jesli nie ma
//replace() - zastepuje stara class nowa class
//contains() - sprawdza czy element ma w sobie class czy nie (boolean)
