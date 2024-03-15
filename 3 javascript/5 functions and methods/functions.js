/*
function myFunction() {
console.log("hello hello");
}

myFunction ();

function myfunction (msg) {
    console.log(msg); //parameter
}
myfunction ("hekleleeoooe"); //arguement

function sum (x, y) {
    console.log(x + y);
}

sum (100, 2);
*/

/*
function sum1 (x, y) {  //local variables
s = x + y;
return s;
}
//func params -> local variables of func -> block scope
let val = sum1(1,4);
console.log(val);
*/

/*
 function sum (a, b) {
     return a+b;
}

//modern js
const arrowSum = (a, b) => {
console.log(a + b);
};
*/

//mul
// const arrowmul = (a, b) => {
//     console.log(a * b);
// }

//let printHello = () => console.log("hello");

/*
//practice
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if ( char ==="a" || char === "e" || char==="i" || char==="o" || char==="u")
        {
             count++;
        }
    }
         console.log(count);
    }

    //arrow func
    let countVowels = (str) => {
        count = 0;
for (let char of str) {
    if ( char ==="a" || char === "e" || char==="i" || char==="o" || char==="u")
    {
        count++;
    }
}
console.log(count);
 }
 */

/*
 function abc() {
    console.log("hello");
 }

 function myfunc(abc) {
    return abc;
 }
 //callback is a function passed as an argurment to another function.
*/

let arr =[1, 2, 3, 4, 5];
arr.ForEach(function myFunc (val) {
console.log(val);
});