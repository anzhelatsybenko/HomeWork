"use strict"
//----------Home Work - GetInfo()----------

var legoset = {
    NameOfSet: "4 Privet Drive",
    NameOfCollection: "Harry Potter",
    NumberOfPieces: '797',
    GetInfo() {
        for (let key in legoset) {
            console.log(key + ': ' + legoset[key]);
        }
    }
}

console.log (" ");
legoset.GetInfo();

legoset.NewProperty = "New property";

console.log (" ");
legoset.GetInfo();

//----------Home Work - Services----------

/*var services = {
    haircut: "60 euro",
    shaving: "80 euro",
    shampooing: "100 euro",
    price() {
        var sum = 0;
        for (let key in services) {
            if (key === "price" || key === "minPrice" || key === "maxPrice") continue;
            else sum = sum + Number(services[key].slice(0,services[key].indexOf(" ")));
        }
        return sum;
    },
    minPrice () {
        var min = Number(services.haircut.slice(0, services.haircut.indexOf(" ")));
        for (let key in services) {
            if (key === "price" || key === "minPrice" || key === "maxPrice") continue;
            else {
                if (Number(services[key].slice(0, services[key].indexOf(" "))) < min) {
                    min = Number(services[key].slice(0, services[key].indexOf(" ")));
                }
            }
        }
        return min;
    },
    maxPrice () {
        var max = Number(services.haircut.slice(0, services.haircut.indexOf(" ")));
        for (let key in services) {
            if (key === "price" || key === "minPrice" || key === "maxPrice") continue;
            else {
                if (Number(services[key].slice(0, services[key].indexOf(" "))) > max) {
                    max = Number(services[key].slice(0, services[key].indexOf(" ")));
                }
            }
        }
        return max;
    }
}

console.log (" ");
console.log ("Before adding a new property");
console.log ("Total price : "+services.price()+" euro");
console.log ("Minimal price : "+services.minPrice()+" euro");
console.log ("Maximum price : "+services.maxPrice()+" euro");

services.manicure = "40 euro";
services.pedicure = "200 euro";

console.log (" ");
console.log ("After adding a new property");
console.log ("Total price : "+services.price()+" euro");
console.log ("Minimal price : "+services.minPrice()+" euro");
console.log ("Maximum price : "+services.maxPrice()+" euro");*/
