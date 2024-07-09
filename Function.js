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

