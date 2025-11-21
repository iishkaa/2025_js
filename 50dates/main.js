const date = new Date(2024,0,1,
                            2,3,4,5);

const date2 = new Date("2024-01-02T12:00:00Z")

const date3 = new Date(1700000000000)

const today = new Date()

const year = today.getFullYear()
const month = today.getMonth()+1
const day = today.getDate()
const dayOfWeek = today.getDay()
const hour = today.getHours()
const minutes = today.getMinutes()
const seconds = today.getSeconds()
const milliseconds = today.getMilliseconds()

let dayOfWeekFixed = ""
switch (dayOfWeek){
    case 1:
        dayOfWeekFixed = "Monday";
            break;
    case 2:
        dayOfWeekFixed = "Tuesday";
            break;
    case 3:
        dayOfWeekFixed = "Wednesday";
            break;
    case 4:
        dayOfWeekFixed = "Thursday";
            break;
    case 5:
        dayOfWeekFixed = "Friday";
            break;
    case 6:
        dayOfWeekFixed = "Saturday";
            break;
    default:
        dayOfWeekFixed = "Sunday"
            break;

}
console.log(date)
console.log(date2)
console.log(date3)
console.log(today)
console.log(year)
console.log(month)
console.log(day)
console.log(dayOfWeekFixed)
console.log(hour)
console.log(minutes)
console.log(seconds)
console.log(milliseconds)
//
const date4 = new Date()

date4.setFullYear(2024)
date4.setMonth(0)
date4.setDate(1)
date4.setHours(2)
date4.setMinutes(3)
date4.setSeconds(4)

console.log(date4)

const dateOne = new Date("2023-12-31")
const dateTwo = new Date("2023-12-01")

if(dateTwo > dateOne){
    console.log("Happy New Year")
}
