/*
.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children
 */

// FIRST ELEMENT CHILD
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "hsl(219,43%,79%)";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "hsl(216,18%,54%)";
})
// LAST ELEMENT CHILD
const element2 = document.getElementById("fruits")
const lastChild = element2.lastElementChild;
lastChild.style.backgroundColor = "hsl(305,43%,79%)";

const ulElements2 = document.querySelectorAll("ul")
ulElements2.forEach(ulElement2 => {
    const lastChild = ulElement2.lastElementChild;
    lastChild.style.backgroundColor = "hsl(273,43%,79%)";
})
// NEXT ELEMENT SIBLING
const element3 = document.getElementById("apple")
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor = "hsl(55,43%,79%)";
// PREVIOUS ELEMENT SIBLING
const element4 = document.getElementById("potatoes")
const previousSibling = element4.previousElementSibling;
previousSibling.style.backgroundColor = "hsl(107,43%,79%)";
// PARENT ELEMENT
const element5 = document.getElementById("apple")
const parent = element5.parentElement;
parent.style.backgroundColor = "hsl(222,22%,34%)";
// CHILDREN
const element6 = document.getElementById("fruits")
const children = element6.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "hsl(326,43%,79%)";
})
children[1].style.backgroundColor = "hsl(63,43%,79%)";