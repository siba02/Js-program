/*primitive(7),nonprimitive(object-Array,function).
Number,string,boolean,undefined,null,BigInt,symbol.*/
 let age=22;
 console.log(age);
 let fullName="tofan";      string
 isFollow=true;
//   let x;
//  let x=null;
//  let x=BigInt(123);
 let y =Symbol("hi");


///object-collection of values.
/// key:values,


//   const student={
//      fullName:"Sibaprasad",
//      age:22,
//      isPass :true,
//      cgpa:8.5,
//      address:"Angul"
//   };
//  console.log(student.cgpa);
///To access student object student["fullName"]/ student.fullName

const student={
      fullName:"Sibaprasad",
       age:22,
       isPass :true,
       cgpa:8.5,
       address:"Angul"
 };
  student.age=student.age+1  
 student.fullName="tofan";
 student.isPass=false;
/* can't assign a new value to constant variable. 
 can change the key of the const object.*/
   console.log(student.isPass);
/// if you add something to the string it simply connect to the string.
//  123+123=246
//  "123"+123=123+123
/// "123" is a string
//  "asd"+654=asd654





