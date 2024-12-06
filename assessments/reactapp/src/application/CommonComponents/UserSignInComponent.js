import React, { Component, PureComponent } from "react";
import {PropTypes} from "prop-types";

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state= {
            userName : "John Doe",
            password : "***",
            user : props.user, // property we get from parent - app component
        }
        this.refName = React.createRef();
        this.refPassword = React.createRef();
    }

    formSubmit = (evt)=>{
        let userName = this.refName.current.value
        let password = this.refPassword.current.value
        this.setState({
            userName,
            password
        })
        evt.preventDefault();
    }
    render()
    {
        console.log("Render method is called")
        return(
            <>
                <h3 align="center">User Signin Page</h3>

                {/* creating component in un-controlled way using ref keyword */}
                <form className="form-control col-md-12" action="/api/loginuser" 
                                method="post" onSubmit={this.formSubmit}>
                    <b>User Name</b>
                    <input type="text" className="form-control" placeholder={"Input a name"} 
                        ref={this.refName} maxLength={20} required></input>
                    <b>Password</b>
                    <input type="password" className="form-control" placeholder={"Input password"} 
                        ref={this.refPassword} maxLength={20} required></input>

                    <button type="submit"> Login </button>
                </form>

                <label>{this.state.userName}</label>
                <hr/>
                <label>{this.state.password}</label>
            </>
        )
    }
}