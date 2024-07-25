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

let divv=document.querySelector("div");
console.log(divv);

divv.style.backgroundColor="purple";
divv.style.fontSize="30px";



///Insert elements.   

// let el =document.createElement("div");  example for element create.

// node.append(el)add at the end of node(inside)
// node.append(el)add at the start of node(inside)
// node.append(el)adds before the node(outside)
// node.append(el)add after the  node(outside)


let btn=document.createElement("button");
btn.innerText="hit here";
console.dir(btn);

let divv=document.querySelector("div");

divv.append(btn);  //end(inside)
divv.prepend(btn); //start(inside)
divv.before(btn); //before(outside)
divv.after(btn); //after(outside)

// Delete element.

// node.remove(remove the node)

let para=document.querySelector("p");

para.remove();