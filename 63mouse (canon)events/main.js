const myBox = document.getElementById('myBox');
const myBtn = document.getElementById('myBtn');

myBtn.addEventListener("click", event=>{
    myBox.style.backgroundColor = "lightpink"
    myBox.textContent = "OUCH!😣"
});
myBtn.addEventListener("mouseover", event=>{
    myBox.style.backgroundColor = "lightyellow"
    myBox.textContent = "good morning😉"
})
myBtn.addEventListener("mouseout", event=>{
    myBox.style.backgroundColor = "pink"
    myBox.textContent = "Click Me 😘👌"
})