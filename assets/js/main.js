
// DATE METHODS - LEVEL-1_1

// console.log(new Date())

// let date1 = new Date("September 2, 2019 09:00:00")
// console.log(date1)

// let date2 = new Date(0)
// console.log(date2)

// let date3 = new Date(31556908800)
// console.log(date3)

// let date4 = new Date(86400000)
// console.log(date4)

const result = document.getElementById("result")

// result.innerHTML = `${new Date()}${" = new Date()"}<br><br>
//                     ${date1}${' = new Date("September 2, 2019 09: 00: 00")'}<br><br>
//                     ${date2}${" = new Date(0)"}<br><br>
//                     ${date3}${" = new Date(31556908800)"}<br><br>
//                     ${date4}${" = new Date(86400000)"}`


// DATE METHODS - LEVEL-1_2


let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

const date1 = new Date()
console.log(date1)
console.log(date1.getFullYear())
console.log(date1.getMonth() + " Monat")
console.log(date1.getDay() + " Tag")
console.log(date1.getHours() + " Stunde")
console.log(date1.getMinutes() + " Minute")
console.log(wochenTag[2])
console.log(monate[2])

const clock = document.getElementById("digitalClock2")

clock.innerHTML = `${wochenTag[2].slice(0, 2)}${" "}${date1.getHours()}${" : "}${date1.getMinutes()}${" : "}${date1.getSeconds()}`


// DATE METHODS - LEVEL-1_3

// console.log(date1)
// date1.setDate(72920) 
// console.log(date1)

// setDate(x) die Nummer die man anstelle von x einträgt, sind die Tage die auf das Aktuelle Datum drauf gerechnet werden. Habe den Sinn der aufgabe nicht verstanden. Wenn der Aktuelle Monat z.B. 31 Tage hat gibt man bei setDate(32) ein um das Datum auf den ersten des nächsten Monats einzustellen.

// 


// DATE METHODS - LEVEL-2_1


let date = new Date()
console.log(date)

console.log(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear())

result.innerHTML = `${date.getDate()}${"/"}${date.getMonth()}${"/"}${date.getFullYear()}`