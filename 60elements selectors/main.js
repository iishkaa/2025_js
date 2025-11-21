/*
1. .getElementById()        - ELEMENT OR NULL
2. .getElementsClassName    - HTML COLLECTION
3. .getElementsByTagName    - HTML COLLECTION
4. .querySelector()         - FIRST MATCH ELEMENT OR NULL
5. .querySelectorAll()      - NODELIST
 */

//1
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "hsl(324,15%,55%)";
myHeading.style.textAlign = "center";
//2
const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "hsl(324,15%,55%)";
fruits[1].style.backgroundColor = "hsl(329,12%,34%)";

for(let fruit of fruits){
    fruit.style.backgroundColor = "hsl(323,43%,79%)";
}
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "pink"
}) // kolekcje w html nie ogarniaja co to forEach - need to converse
//3
const h4Elements = document.getElementsByTagName("h4")
const liElements = document.getElementsByTagName("li")

//h4Elements[1].style.backgroundColor = "hsl(324,15%,55%)";
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "hsl(324,43%,79%)";
}
for (let liElement of liElements){
    liElement.style.backgroundColor = "hsl(323,77%,73%)";
}
Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "hsl(57,100%,69%)";
})
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "hsl(330,54%,85%)";
})
//4
const element = document.querySelector(".fruits")
element.style.backgroundColor = "hsl(271,55%,79%)";
const element2 = document.querySelector("h4")
element2.style.backgroundColor = "hsl(268,62%,69%)";

//5
const fruits2 = document.querySelectorAll("li");
fruits2[0].style.backgroundColor = "hsl(219,43%,79%)";
fruits2.forEach(fruit => {
    fruit.style.backgroundColor = "hsl(323,72%,45%)";
})