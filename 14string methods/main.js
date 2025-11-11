let userName = "Bro Code"


console.log(userName.charAt(0))
console.log(userName.indexOf('o'))
console.log(userName.lastIndexOf('o'))
console.log(userName.length)
console.log(userName.trim())
console.log(userName.toUpperCase())
console.log(userName.toLowerCase())
console.log(userName.repeat(3))

let result = userName.startsWith(" ")
console.log(result)
let result2 = userName.includes(" ")
console.log(result2)

let phoneNumber = "123-456-7890"
phoneNumber = phoneNumber.replaceAll("-", "")
console.log(phoneNumber)
phoneNumber = phoneNumber.padEnd(15, "0")
console.log(phoneNumber)





//charAt()      - zwraca litere pod danym indeksem
//indexOf()     - zwraca indeks pod daną literą
//lastIndexOf() - zwraca ostatni indeks pod daną literą
//length        - zwraca długość
//trim()        - usuwa biale znaki
//toUpperCase() - WIELKA LITERA
//toLowerCase() - mala litera
//toLowerCase() - mala litera
//repeat()      - powtarza string
//startsWith()  - boolean sprawdza czy zaczyna sie na dany znak
//endsWith()    - boolean sprawdza czy konczy sie na dany znak
//includes()    - boolean sprawdza czy uwzględnia dany znak
//replaceAll()  - zastępuje dany znak innym
//padStart()    - sprawdza czy string ma podana ilosc znakow a jesli
//                nie to wstawia dany znak na poczatek
//                tak aby wyrównac ilość
//padEnd()      - do the same but at the end