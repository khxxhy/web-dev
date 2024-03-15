/*
//strings
let str = "this is me trying";
console.log(str[9]);

let str2 = 'lover boy day';
console.log(str2[7]);

//template literals
let specialString = `i knew you were trouble`;
console.log(typeof specialString);

let obj = {
    item : "pen",
    price : 35,
};
console.log(obj.item, obj.price); //normal way

let output = `${obj.item} ${obj.price}`; //template literal
console.log(output);


let special = `${1+2+3}`
console.log(special);

let string = `khushi\ndivu`  // /n next line
console.log(string);

let strng = `khushi\tdivu` // /t tab space
console.log(strng);
console.log(strng.length); 
*/

/*
let str = "uppercase";
let Str = str.toUpperCase();  // strings are immutable
console.log(str);
console.log(newStr);
*/
/*
let strng = "LOWERCASe";
strng = strng.toLowerCase();
console.log(strng);
*/

/*
let newstr = "      khushi divy     ";
console.log(newstr.trim());

let str = "01234567";
console.log(str.slice(1, 7));

let str1 = "khushi";
let str2 = "divu";
let res = str1.concat(str2);      //concatanation
console.log(res);

let res1 = str + newstr ;
console.log(res1);

let str3 = "khushi";
console.log(str3.replace("khush", "divu"));

let str4 = "khushiiiii";
console.log(str4.replaceAll("i", "divu"));

let str5 = "wfyfuif";
console.log(str5.charAt(5));
*/


// practice
let str = prompt("create your username");
let str1 = "@";
let str2 = str.length;
let res = str1 + str + str2;
console.log(res);
