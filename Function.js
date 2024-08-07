/// Block of code that performs a specific task can be invoked whenever needed.
///minimize the redudancy.

// function defination
   //   function functionName(){
       // code here
   //   }

// function call
   // functionName();

//  function functionName(param1, param2){
    // code here
//  }

 function functionName(){
    console.log("Hi there")
}

functionName();

// parameter.
function code(message) {  
    console.log(message);
}

code("tofan"); //argument.


// sum of two numbers.

function sum(a,b){
    console.log(a+b);
}

sum(100,200);

// return
function add(x,y){
    // the parameters are the local variable of the function.And have block scope.  
    s=x+y;
    return s;     //the code written after return never execute.
}
 let val = add(100,200);
 console.log(val);




//!  Arrow function.
    //  compact way of writing a function.

    const functionName=(param1,param2)=>{
        //   code here.
    }  

   const arrowsum= (a,b)=>{
        console.log(a+b);
    }



    const arrowmul=(a,b)=>{
        return a*b;
    }

    const hii=()=>{
        console.log("hii there")
    }


//! for each loop in array.
//  arr.forEach(callBackFunction).
// callBackFunction-Here , it is a function to execute for each element in the array.
//  A callback is a Function passed as an argument to another function.

// arr.forEach((val)=>{
//     console.log(val);
// })

function sum(){
    console.log("hello");
}

function myfunction(sum){      // pass sum as an argument.
    return sum;
}

// Example.                                         //1
let arr = [1,2,3,4,5];                              //2
arr.forEach (function printval(val){                //3
    console.log(val);                               //4
    })                                              //5


// ! 
        arr.forEach((val)=>{
            console.log(val);
        })

/// in forEach function we can pass three parameters - value,Idx,arr.
let arr1=["mumbai","mp","ap","goa"];
arr1.forEach((val,Idx,arr)=>{
    console.log(val.toUpperCase(),Idx,arr); 
})

//?Higher order function/methods .
/* These are the functions or methods in javascript that either take another function as parameter inside them or 
they return another function as their output.*/


// map-create a new array with the result of some operation.The value its callback returns are used to form new array.
// arr.map(callbackfunction(value,Idx,array))

// let newArray=arr.map((val)=>{
    // return val*2;
    // })

 let arr2=[1,2,3,4,5];
 let newArr=arr2.map((val)=>{
     return val*2;
 })

 console.log(newArr); //[2,4,6,8,10]        



 // filter-creates a new array of elements that give true for a condition/filter.
//   let newArray=arr.filter((val)=>{
    //    return val%2==0;
    //   })


let arr3=[1,2,3,4,5,6,7,8];
let evenarray=arr3.filter((val)=>{
    return val%2==0;
})

console.log(evenarray); //[2,4,6,8]

// reduce-perform some operations and reduce the array to a singel value.I returns that single value.
let arr4=[1,2,3,4,5,6,7,8]

const output=arr4.reduce((res,curr)=>{
    return res+curr;

})

console.log(output); //36


// !

let numb=[54,21,65,82,98];
 const res=numb.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
 })
console.log(res);
