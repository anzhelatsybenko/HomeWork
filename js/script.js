"use strict"

// converter km to m
let unit = "km", amount = 10;

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
}