"use strict"
//Home Work - Converter
// converter km to m
/*let unit = "km", amount = 10;

    switch (unit) {
        case "km":
            console.log(amount + " " + unit + " is" + " " + amount*1000 + " m")
            break
        case 'h':
            console.log(amount + " " + unit + " is" + " " + amount*60 + " min");
            break;
        case 'kg':
            console.log(amount + " " + unit + " is" + " " + amount*1000 + " g");
            break;
        default :
            console.log("unit is unknown");
    }


//converter hours to minutes
unit = "h", amount = 1;

switch (unit) {
    case "km":
        console.log(amount + " " + unit + " is" + " " + amount*1000 + " m")
        break
    case 'h':
        console.log(amount + " " + unit + " is" + " " + amount*60 + " min");
        break;
    case 'kg':
        console.log(amount + " " + unit + " is" + " " + amount*1000 + " g");
        break;
    default :
        console.log("unit is unknown");
}

//converter kg to g
unit = "kg", amount = 1;

switch (unit) {
    case "km":
        console.log(amount + " " + unit + " is" + " " + amount*1000 + " m")
        break
    case 'h':
        console.log(amount + " " + unit + " is" + " " + amount*60 + " min");
        break;
    case 'kg':
        console.log(amount + " " + unit + " is" + " " + amount*1000 + " g");
        break;
    default :
        console.log("unit is unknown");
}*/

// Home Work - Years
let year = prompt("Введіть вік :", "18");

if (year >= 0) {
    if (year % 10 === 1 && year != 11) {
        console.log(year + " рік.");
    } else {
        if ((year % 10 === 2 || year % 10 === 3 || year % 10 === 4) && (year != 12) && (year != 13) && (year != 14)) {
            console.log(year + " роки.");
        } else {
            console.log(year + " років.");
        }
    }
}
else {
    console.log("Year can't be negative");
}