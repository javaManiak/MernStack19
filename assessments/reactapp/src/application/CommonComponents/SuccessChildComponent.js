import React, { useState } from "react";

export default function SuccessChildComponent(props) {
    
    let [newMessage, setMessage, otherComponent] = useState("")

    // this.state= {
    //     component : props.child, // property we get from parent - app component
    // }
    // compnent = props.SuccessStoryComponent;

    let sendDataBack = ()=>{
        alert(newMessage)
        props.callBackEvent(newMessage)
    }
   
    return(
        <>
            {/* <div>props.component</div> */}
            
            <div className="header">
                <input value={newMessage} onChange={(evt)=>setMessage(evt.target.value)} placeholder="Type new value"></input>
                <button onClick={()=>sendDataBack()} >Send Changed Property from Child To Success</button>
            </div>
        </>
    )
}