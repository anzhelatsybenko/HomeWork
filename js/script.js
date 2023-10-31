"use strict"
//----------Home Work - Without A----------

var str = "vsajyhoo1";
var re = /[^Aa]{6,}/
console.log(re.test(str));
console.log(str.search(re));

//----------Home Work - Paranoia----------

/*var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"Dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

 let arrValid = [];
 for (let i in arr) {
     let re = /^([a-zA-Z0-9]+)\.?([a-zA-Z0-9]+)(@gmail|@yahoo)\.com$/;
     if (re.test(arr[i].email)) {
         arrValid.push(arr[i].email);
     }
 }
 console.log(arrValid);*/