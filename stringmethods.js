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


/// str.replace(searchVal,newVal). used to search the value in the string.

let str9="tofan";
console.log(str9.replace("t","f"));

let str10="tofananan";
console.log(str10.replace("an","al")); //replace onetime
console.log(str10.replaceAll("an","al"));

/// str.charAt(idx) . Findout the character at string index.
let str11="tofan";
console.log(str11.charAt(3));