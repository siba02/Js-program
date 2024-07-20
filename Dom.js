/* window object.
window object represents an open window in a browser.It is browser's object(not javascript's) and is automatically created by browser.
It is a global object with lots of properties and methods.*/

console.log(window);

console.log("hii");

window.console.log("hello");

// both these are same because window is a global object not javascript's object.


///DOM(document object model).
// when a web page is loaded,the browser creates a Document Object Model of the page.
// console.dir(window.document);  // dir because it is a object.

// document.body.style.background="blue"; example-to change the page dynamically. 

/// DOM Manupulation.
/// selecting with id.

// document.getElementById("example");

let button=document.getElementById("myid");    //id's are generally denoted by # symbols.
console.dir(button);

///selecting with class.

// document.getElementsByClassName("myclass"); It return a htlm collection.

let headings=document.getElementsByClassName("heading"); //class is usually denoted by . symbol.
console.dir(headings);

/// selecting with tagname.

// document.getElementsByTagName("mytag"); 

let paragraphs=document.getElementsByTagName("p");
console.dir(paragraphs);
