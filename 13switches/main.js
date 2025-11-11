let day = 1

switch (day){
    case 1:
        console.log("monday")
        break
    case 2:
        console.log("tuesday")
        break
    case 3:
        console.log("wednesday")
        break
    case 4:
        console.log("thursday")
        break
    case 5:
        console.log("friday")
        break
    case 6:
        console.log("saturday")
        break
    default:
        console.log("sunday")
        break

}
let testScore = 85
let letterGrade
switch(true){
    case testScore >=92:
        letterGrade = "A"
        break
    case testScore >=80:
        letterGrade = "B"
        break
}
console.log(letterGrade)