import React from "react";
import SuccessChildComponent from "./SuccessChildComponent";
import SuccessStory from "./SuccessStoryComponent";

export  class SuccessComponent extends React.Component {
    constructor(props) {
        super(props);
        //state - object is used to allow udpdation of values via react rendering life cycle
        this.state = {
            userName : "Duncan (name)",
            address : "Somewhere on earth(address)",
            child : {SuccessStory}
        }
    }

    onclick = (evt)=>{
        this.setState({
            userName : "Sierra"
        })

        console.log("After setstate called", this.state.userName)
        evt.preventDefault();
    }

    //even to be executed in child component
    changeNameFromChild = (nm)=>{
        this.setState({
            userName : nm
        })
    }
    changeAddressFromChild = (addr)=>{
        this.setState({
            address : addr
        })
    }

    passComponentToChild = (SuccessStory)=>{
        this.setState({
            child: SuccessStory.msg
        })
    }

    //render - method is responsible to create virtual dom for every change of state or props
    render(){
        console.log("Render is called!! ", this.state.userName)
        
        let msg = ["Some Famous Success Quotes","Winston Churchill: \"Success is not final; failure is not fatal: It is the courage to continue that counts\"",
            "Dale Carnegie: \"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success\".",
            "Henry Ford: \"Coming together is a beginning; keeping together is progress; working together is success\"."]
        return(
        <>
        {msg && msg.map((name)=>{
                return <h4 align="center">{name}</h4>}
            )}

            <h3>{this.state.userName}</h3>
            <h3>{this.state.address}</h3>

            <SuccessChildComponent callBackEvent={this.changeNameFromChild} />
            <SuccessChildComponent callBackEvent={this.changeAddressFromChild} />

            <SuccessStory callBackEvent = {this.passComponentToChild} msg ={msg}>
                <h3>SuccessStory as part of props in parent</h3>
            </SuccessStory>

        </>)
    }
}
