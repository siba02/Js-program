///variables are containers of data.

 fullname="tofan";
 age=24;
 price=100.55;
 x=null;
 y= undefined;
 console.log(fullname);
 console.log(age);
 console.log(price);
 console.log(x);
 console.log(y);

/*variable names are case sensitive:a andA are different.
letters,digits,underscore(_) and $ allowed.
letter,underscore and $ should be 1st character.
Reserved words can't be variables name.*/

 fullName="siba";
  console.log(fullName);

// keywords: var,let & const.
//var- can be re-declared & updated.A global scope variable.
 var age=22;
 var age=24;
 var age=26;
 console.log(age);

///let- variable can't be re-declared but can be updated. A block scope variable.
   let age=22;
   age=24;
   age=29;
   console.log(age);

///const- variable can't be re-declared or updated. A block scope variable.
 const PI=3.14;
   console.log(PI);

 let a;
 a=20;
console.log(a);

//   const a=32;
//   console.log(a);

/// block  scope variable.

 {
     let a=54;
     console.log(a);
 }
 {
     let a=69;
     console.log(a);
 }