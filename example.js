// ///Q.1 check if multiple of 6 or not.
// let x=prompt("Enter a number")
//  if(x%6===0){
//     console.log(x," is  divisible 6 ")
//  }
//  else{
//     console.log("is  not divisible by 6")
//  }


// // Q.2 greade system 90-100(A),70-89(B),60-69(C),50-59(D),<49(F)

// let score=prompt("enter your score");
// let grade;

// if(score>=90&& score<=100){
//     grade="A";
// }
// else if(score>=70&& score<=89){
//     grade="B";
// }else if(score>=60&& score<=69){
//     grade="C";
// }else if(score>=50&& score<=59){
//     grade="D";
// }
// else{
//     grade="f"
// }
// console.log(grade)

// /// Q.3 print all the even numbers from 0 to 100.
//   for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
//   }

// ///Q.4 create a game where you start with any random game number.
// // Ask the user to keep guessing the number until the user enters the correct value.
//      let gameNum=80;
//      let userNum=prompt("Enter the game number")
//      while(userNum!=gameNum){
//          userNum=prompt("you entered the wrong number ")
//      }
//     console.log("congratulation you entered the right number");  

// ///Q.5 prompt the user to enter their fullname.Generate a username based on the input.Starts with @,followed by their fullname 
// // and ending by their fullname length.
//     let str=prompt("Enter your fullname ");
//     let res="@"+str+str.length;
//     console.log(res);

///Q.6 For a given array with mark of students ->[52,64,98,74,55,68].Find the average mark of the entire class.
    //    let marks=[52,64,98,74,55,68];
    //    let sum=0;
    //    for(let i=0;i<marks.length;i++){
    //     sum=sum+marks[i];
    //    }
    //    let avg=sum/marks.length;
    //    console.log(avg);

// or 
    let marks=[52,64,98,74,55,68];
    let sum=0;
    for(let val of marks){
    sum=sum+val;
    }
    let avg=sum/marks.length;
    console.log(avg);

