// push():add to end.

let frootsItems=["apple","orange","litchi","mango"];

frootsItems.push("banana","watermelon","pineapple");
console.log(frootsItems);

/// pop():remove from end.

frootsItems.pop();
console.log(frootsItems);

 ///to string().converts array to string.
 console.log(frootsItems.toString()); //original array never changed.

 /// concat(): join multiple arrays and returns result.

 let frootsItems2=["grapes","kiwi"];

 let froots=frootsItems.concat(frootsItems2);
 console.log(froots);

 /// unshift():add to start.
 frootsItems2.unshift("pear");
 console.log(frootsItems2);

 /// shift(): remove from start.
 frootsItems2.shift();
 console.log(frootsItems2); //original array changed.  

 ///slice():return a piece of the array. 
 ///slice(startIdx,endIdx)

 let cities=["Delhi","Ap","j&k","goa","Mp"];
 let val=cities.slice(0,4);
 console.log(val);
 console.log(cities); //original array remain same.

 ///splice():change original array(add,remove,replace).
/// splice(startIdx,delCount,newEle..)
let arr=[1,2,3,4,5,6,7,8];
 arr.splice(3,3,64,65,66); // start from idx 3 delete 3 num and add new elements.   
console.log(arr);
//ans-1,2,3,64,65,66,7,8
 
 //Add.Element
 arr.splice(4,0,"hello");
 //ans-1,2,3,64,"hello",65,66,7,8

 //Delete Element
 arr.splice(5,2);
 //1,2,3,64,"hello",7,8

// Replace Element
arr.splice(5,1,69);
//ans-1,2,3,64,"hello",69,8

