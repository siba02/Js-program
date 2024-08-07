/// the change in the state of an object is known as an event.
// inline events-events handle inside the html tag.



//! Event Handling .
    // node.event=()=>{
        // logic goes here.
    // }

    let btn=document.querySelector("#btn");
    btn.onclick=()=>{
        console.log("Button clicked"); //handler.
    };

    

/// The priority of the js handle is higher than the inline handle.
/// If we define multiple handlers the latest handler overrides the previous one.

//! Event object.
// it is a special object that has details about the event.
// All event handlers have access to the event object's properties and methods.

           // node.event=(e)=>{
               // logic goes here.
        // }

        let btn1=document.querySelector("#btn");
        btn.onclick=(e)=>{
            console.log(e); 
            console.log(e.type);
            console.log(e.target); // returns the element that triggered the event.
            console.log(e.clientX, e.clientY);
        };

//! Event listeners.
//  node.addEventListener(event, callback);

// node.removeEventlistener(event,callback);

// the callback reference should be same to remove.

let btn2=document.querySelector("#btn");
btn2.addEventListener("click",() =>{
    console.log("button is on");
});


btn2.addEventListener("click",() =>{
    console.log("button is on 2x");
});

const handeler3=()=>{
    console.log("button is on 3x");
}
btn2.addEventListener("click",handeler3);

btn2.addEventListener("click",() =>{
    console.log("button is on 4x");
});

btn2.addEventListener("click",() =>{
    console.log("button is off");
});

btn2.removeEventListener("click",handeler3);