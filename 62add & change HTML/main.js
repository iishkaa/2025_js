// --------- EXAMPLE 1 <h1> ---------

//1 - CREATE THE ELEMENT
//2 - ADD ATTRIBUTES/PROPERTIES
//3 - APPEND ELEMENT TO DOM
//4 - REMOVE HTML ELEMENT

//1
const newH1 = document.createElement("h1");
//2
newH1.textContent = "i like femboys";
newH1.id = "myH1";
newH1.style.color = "pink";
newH1.style.textAlign = "center";
//3
//document.body.append(newH1)  - last child
//document.body.prepend(newH1) - first child
document.getElementById("box1").append(newH1)
document.getElementById("box1").prepend(newH1)

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2); //wjebanie h1 przed box2
//alternatywa jesli nie maja id:
const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1,boxes[3])
//4
document.body.removeChild(newH1);


// --------- EXAMPLE 3 <li> ---------
//1
const newListItem = document.createElement("li");
//2
newListItem.textContent = "cockconut";
newListItem.id = "cockconut"
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "pink";
//3
document.body.append(newListItem);
document.getElementById("fruits").prepend(newListItem)
const banana = document.getElementById("banana")
document.getElementById("fruits").insertBefore(newListItem, banana);
//alternatywa dla braku id:
const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[1]);
//4
document.getElementById("fruits").removeChild(newListItem);