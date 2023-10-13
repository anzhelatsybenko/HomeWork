"use strict"
//----------Home Work - Triangle----------

// --Version 1 - with "for"--
function triangle_v1 (heigt, symbol){
    let s = symbol;
    for (let i = 1; i<=heigt; i++) {
            console.log(symbol);
            symbol = symbol + s;
    }
}

triangle_v1(5,"+");

// --Version 2 - with "while"--
/*function triangle_v2 (heigt, symbol){
    let s = symbol;
    let i = 1;
    while (i<=heigt) {
        console.log(symbol);
        symbol = symbol + s;
        i++;
    }
}

triangle_v2(5,"+");*/

//----------Home Work - Summary----------
/*function summary () {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i%3) sum = sum + i;
    }
    return sum;
}
console.log(summary ());*/

//----------Home Work - Pow----------
/*function pow (numb, pow) {
    let n = numb;
    for (let i = 1; i < pow; i++) {
        numb = numb*n;
    }
    return numb;
}
console.log(pow (3,2));*/