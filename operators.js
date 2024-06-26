// let a=10;
// let b=20;
console.log("a= ",a,"& b= ",b);
console.log("a+b = ",a+b);
console.log("a-b = ",a-b);
console.log("a*b = ",a*b);
console.log("a/b = ",a/b);
console.log("a%b = ",a%b);
console.log("a**b = ",a**b);
// a=1
// b=2
// c=3

// a=b
// b=c
// c=a
// console.log(a,b,c); 

/// unary operator ( increment,decrement)

// let a=10;
// let b=5;
 a++;11
 a--;9
console.log(a)
 console.log("a++= ",a++);   10
 console.log(a);   11
console.log("++a= ",++a); 12
console.log("a--= ",a--);   12
console.log(a);   11
 console.log("--a= ",--a); 10


/// Assignment operator(=,+=,-=,*=,%=,**=)

// let a=10;
// let b=6;

a +=5;   //a=a+5 =15
a -=5;  //a=a-5  =10
a *=5; //a=a*5   =50
a %=4;//a=a%4    =2 
a**=5;//a=**5    =32
console.log("a= ",a)


///comparison operator (==,!=,===,!===,<,<=,>,>=)

//  let a=10;
//  let b="10";

 console.log("a==b",a==b); //false
 console.log("a!=b",a!=b); //true
 console.log("a==b",a==b); //true if b is same number but string ,js convert string to number then check with other number 
 console.log("a===b",a===b); // false  because strictly check
 console.log("a!==b",a!==b); //true



///logical operator(&&,||,!)

let a=10;
let b=20;
 
let cond1= a>=b;
let cond2= b==20;
 
console.log("cond1&&cond2=",cond1&&cond2); // both true result true
console.log("cond1||cond2=",cond1||cond2);// one true result true
console.log("!(a>=b)=",!(a>=b));


///Ternary operator
let age=10

let result=age>=18?"vote":"no vote"  //simpler or compact if-else
console.log(result);






