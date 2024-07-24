/// Attributes.
// 1.getAttribute(attr) to get the attribute value.

let div=document.querySelector("div");
console.log(div);

let val=div.getAttribute("id");
console.log(val);

let graphi=document.querySelector("p");
console.log(graphi.getAttribute("class"));


//2.setAttribute(attr, val)to set the attribute value.

let graph=document.querySelector("p");
console.log(graph.setAttribute("class","got"));


//3.Node.style.