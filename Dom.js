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


/// Query selector.

// document.querySelector("myid/myclass/tag"); // return first element.
// document.querySelectorAll("myid/myclass/tag"); // return a node list.

let myElement=document.querySelector("#myid"); //id's are generally denoted by # symbols.
console.dir(myElement);

let myClassElement=document.querySelector(".heading"); //class is usually denoted by . symbol.
console.dir(myClassElement);

let ClassElement=document.querySelectorAll(".heading"); //class is usually denoted by . symbol.
console.dir(ClassElement);

let parh=document.querySelector("p");
console.dir(parh);

let pars=document.querySelectorAll("p");  
console.dir(pars);

// --------------- the above for index.html -------------------


//---------------Dom.html----------------
///Dom manupulation 
// properties.

// In Dom tree there are three types of nodes are present:- text nodes,comment nodes,element nodes.

let div=document.querySelector("div");
      console.dir(div);

let heading=document.querySelector("h1");
    console.dir(heading);


// 1. tagName(return tag for element nodes);
//   example- parh.tagName="p".

// 2. innerText(return the text content of the element and its children);
//    example-'Name of the cities\nDelhi\nMp\nGoa\nAp'
      
// 3.innerHtml(returns the plain text or html content of the element) ;
//   example-'\n <h1>Name of the cities</h1>\n  <ul>\n  <li>Delhi</li>\n  <li>Mp</li>\n  <li>Goa</li>\n  <li>Ap</li>\n  </ul>\n'

// 4.textContent(text content returns textual content even for hidden elements);
//  example- heading.textContent='the text'        