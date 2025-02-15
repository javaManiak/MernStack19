import React from "react";

export class StateChange extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            userName : "Duncan",
            user : {
                address : "Somewhere on earth",
                session : "Somehwere on webex"
            }
        }
    }
    // event defined and listened
    onclick = (evt)=>{
        console.log("Name change click is clicked")  
        this.setState({
            userName : "Sierra"
        })
        console.log("After setstate called", this.state.userName)
        evt.preventDefault();  // this is to prevent a server API call
    }

     //render - method is responsible to create virtual dom for every change of state or props
    render(){
        console.log("Render is called!! ", this.state.userName)
        let myname = "Windie"
        let nameList = ["Nilay", "Gesan", "Jimmy", "Ben Ma", "Jay", "And Everyone else"]
        let nameListWorking = []
        return(
        <>
            {nameList && nameList.map((name)=>{
                return <h2>{name}</h2>}
            )}
            <h3>Still Working</h3>
            {nameListWorking && nameListWorking.map((name)=>{ //nameListWorking && => checks if variable is not null and undefined
                return <b><hr/>{name}</b>})}
            <hr/>
            <h2 name="h2_element">{this.state.userName}</h2>
            <button onClick={this.onclick}> Change Name</button>
        </>)
    }
}