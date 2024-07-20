/* window object.
window object represents an open window in a browser.It is browser's object(not javascript's) and is automatically created by browser.
It is a global object with lots of properties and methods.*/

console.log(window);

console.log("hii");

window.console.log("hello");

// both these are same because window is a global object not javascript's object.


// DOM(document object model).
// when a web page is loaded,the browser creates a Document Object Model of the page.
console.dir(window.document);