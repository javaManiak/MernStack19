import React from "react";
import {NavLink} from "react-router-dom";


let Header = (props) => {

    let user = {
        userName: props.userName
    }
    console.log(user);
    const userName = user && user.userName ? user.userName : props.userName;

    return(
        <>
            <div>
                <NavLink to= "/signin" className="button" activeclassname="true">Signin</NavLink> 
                <NavLink to ="/successcomponent" className="button" activeclassname="true">Success</NavLink>           
                <NavLink to ="/successchild" className="button" activeclsuccessassname="true">Success Child</NavLink> 
                <NavLink to ="/successstory" className="button" activeclsuccessassname="true">Success Story</NavLink> 
                <NavLink to ="/lifecycle" className="button" activeclsuccessassname="true">LC Demo</NavLink> 
                <NavLink to ="/statechange" className="button" activeclsuccessassname="true">State Change Demo</NavLink> 
                <NavLink to ="/assessment" className="button" activeclsuccessassname="true">Assessment Qs/As</NavLink> 
                        
            </div>
        </>
    )
}

export default Header;