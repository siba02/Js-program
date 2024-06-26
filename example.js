///Q.1 check if multiple of 6 or not.
let x=prompt("Enter a number")
 if(x%6===0){
    console.log(x," is  divisible 6 ")
 }
 else{
    console.log("is  not divisible by 6")
 }


// Q.2greade system 90-100(A),70-89(B),60-69(C),50-59(D),<49(F)

let score=prompt("enter your score");
let grade;

if(score>=90&& score<=100){
    grade="A";
}
else if(score>=70&& score<=89){
    grade="B";
}else if(score>=60&& score<=69){
    grade="C";
}else if(score>=50&& score<=59){
    grade="D";
}
else{
    grade="f"
}
console.log(grade)