///built-in function to manpulate a string. 
// strings are immutable.

// str.toUpperCase()  "abc"-->"ABC"

let str="hii this is tofan";
let str2=str.toUpperCase();
console.log(str2);

// str.toLocaleLowerCase()  "ABC"-->"abc"

let str3="Hii This IS TOFAN";
let str4=str3.toLowerCase();
console.log(str4);

/// str.trim()  "   This is tofan   "

let str5="   This is tofan   ";
console.log(str5.trim());


/// str.slice(start,end?) return part of string. The end part is optional. 

let str6="tofan";
console.log(str6.slice(1,4));

/// str1.concat(str2) to jaion two string.

let str7="i'm ";
let str8="tofan"; 
// let res=str7.concat(str8);
// let res=str7+str8;
let res="tofan"+ 2104;
console.log(res);
// console.log(str8.concat(str7)); 


