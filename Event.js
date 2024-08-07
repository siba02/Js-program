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