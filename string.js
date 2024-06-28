///sequence of character  used to represent text.
let str1="tofan";
 let str2='tofan';
// str.length - gives the length of the string
console.log(str1[3]); //gives the 3rd index



///Template literals
// A way to have embaded expressions in string.
`template literals`

/// string interpolation
// To create string by doing substitution of placeholders.
//    string txt ${expression} stringtxt. 


let obj={
    item :"book",
    price:20,
};

console.log("the price of the ",obj.item,"is",obj.price,"rupees");
let output=`the cost of the ${obj.item} is ${obj.price} rupees`; // convert single string
console.log(output);


     let str=`This is the value ${1+2+3}`; // first calculate the value then part of the string.
     console.log(str);