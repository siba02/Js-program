///for loop,while loop,do while loop
///for(initialization;stopping condtion;updation)

for (let i=1; i<=10;i++){
     console.log("i=",i );
    console.log("i'm in the room")
 }
  console.log(i);  //if print the i  after the loop it gives i is not defined because let is block scope variables it works in case of var.


// calculate the sum 1 to n;
 let sum=0;
 let n=prompt("enter a number");
 for(let i=1;i<=n;i++){
    sum=sum+i;
 }
 console.log("sum=",sum);

 
///while loop.
 
while(condition){
  updation;
 }

    // let i=1;
    // while(i<=10){
    //     console.log("i'm in the room");
    //     i++;
    // }

    // calculate the sum 1 to z;
         let x=0;
         let i=1;
        const z=prompt("enter a number");
       while(i<=z){
           x=x+i;
           i++; 
        }
        console.log("x=",x);


/// do while loop.   
   
    do{
        updation;
    }while(condition);


///for-of loop   (for string and array)

   for(letVal of strVar){
    condition;
   }
// print all the  character of string 
   Example

 let str="i am invincible"
    let size=0;
 for(let i of str){
    console.log(i);
    size++;
 }
 console.log("size=",size);



// for-in loop (for object and array)

    for(letKey in objVar){
        condition;
    }
    // print the keys in objects.

    let student={
        name:"tofan",
        age:22,
        cgpa:7.5,
        isPass:true,
    };
    for(let key in student){
        console.log(key,"value=",student[key]);
    }

   
        