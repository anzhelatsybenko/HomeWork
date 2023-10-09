"use strict"
let unit, amount;
// converter km to m
unit = "km";
amount = 10;
if ((unit === "km") || (unit === "h") || (unit === "kg"))
{
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
    }
} else console.log("unit is unknown");

//converter hours to minutes
unit = "h";
amount = 1;

if ((unit === "km") || (unit === "h") || (unit === "kg"))
{
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
    }
} else console.log("unit is unknown");

//converter kg to g
unit = "kg";
amount = 1;

if ((unit === "km") || (unit === "h") || (unit === "kg"))
{
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
    }
} else console.log("unit is unknown");