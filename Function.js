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
    // the parameters are the local variable of the function.
    s=x*y;
    return s;     //the code written after return never execute.
}
 let val = add(100,200);
 console.log(val);




//   Arrow function.
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


//  for each loop in array
//  arr.forEach(callBackFunction)
// callBackFunction-Here , it is a function to execute for each element in the array.
//  A callback is a Function passed as an argument to another function.

arr.forEach((val)=>{
    console.log(val);
})

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
    console.log(val.toUpperCase(),Idx,arr); // console
})

//?Higher order function/methods .

