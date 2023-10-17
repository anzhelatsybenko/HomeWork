"use strict"
//----------Home Work - isNaN----------
//For verification : null, undefined, 20, "test", NaN, true, "test"/20, "123", "12,12", "12.12"
function isNotnumber (v) {
    if (v!==null && v!==true && v!== false)
    {
        if (Number(v) !== Number(v)) console.log("true");
        else console.log("false");
    }
else console.log("false");
}

let v = 20;
isNotnumber(v);
console.log(isNaN(v));

//----------Home Work - Pad----------

/*function pad (str, symb, numbOfsymb, direction) {

   let str_symb = symb.repeat(numbOfsymb-str.length);

   if (direction === false) return str.concat(str_symb);
   else return str_symb.concat (str);

}

console.log (pad ("test", "*", 10,false));*/

//----------Home Work - checkProbabilityTheory ----------

/*function checkProbabilityTheory (count) {
    //count_odd : Number of odd numbers; count_even : Number of even numbers.
    let count_odd = 0, count_even = 0, res;

    //Cycle to generate random numbers
    for (let i = 1; i <= count; i++) {
        //round : rounded random integer
        let round = Math.round(Math.random() * 1000);
        //Selection of numbers from 100 to 1000
        if (round < 100 || round > 1000) i--;
        else {
            //Check for parity of a number and count the number of even and odd numbers
            if (round % 2) count_odd++;
            else count_even++;
        }
    }
    //Check whether the parcentage is close to 50%
    if (Math.round(count_even / count * 100) >= 40 && Math.round(count_even / count * 100) <= 60)
        //Create result string
        return res = "Total numbers : " + count + "\n" +
            "Number of even numbers : " + count_even + "\n" +
            "Number of odd numbers : " + count_odd + "\n" +
            "Percentage of even to odd numbers : " + Math.round(count_even / count * 100) + " % " + Math.round(count_odd / count * 100) + "\n" +
            "Percentage ratio is close to 50%50.";
    else return res = "Total numbers : " + count + "\n" +
        "Number of even numbers : " + count_even + "\n" +
        "Number of odd numbers : " + count_odd + "\n" +
        "Percentage of even to odd numbers : " + Math.round(count_even / count * 100) + " % " + Math.round(count_odd / count * 100) + "\n" +
        "Percentage ratio is not close to 50%50.";

}
console.log(checkProbabilityTheory(100));*/