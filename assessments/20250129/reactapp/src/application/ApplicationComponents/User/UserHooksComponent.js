import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaveUserToDBUsingAxios } from "../../State/User/UserActions";

let UserHooksComponent = (props)=>{
    let user = useSelector((store)=>store.userReducer.user)
    let dispatcher = useDispatch();

    // initializes state and returns a callback which we can use to update the state
    let [uName, setUserName] = useState(user.userName) //user.userName - defined in userReducer 
    let [pass, setPassword] = useState(user.password)

    let onTextChange =(evt)=>{
        let val = evt.target.value
        setUserName(val)
        evt.preventDefault()
    }

    let loginUser = (evt)=>{
        let userObj = {
            userName : uName,
            password : pass
        }
        alert(JSON.stringify(userObj));
        dispatcher(SaveUserToDBUsingAxios(userObj))
        evt.preventDefault();
    }

    return(
        <>
            <h1>Login </h1>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>User Name</b>
                        <input type="text" className="form-control col-md-6 username" 
                                value={uName} //state to update the userName
                            placeholder="User Name" onChange={onTextChange} maxLength={40}/>
                    </div>
                    <div className="col-md-12">
                            <b>Password</b>
                            <input type="password" className="form-control col-md-6 pass" 
                                value={pass} 
                            placeholder="Password" onChange={(evt)=>setPassword(evt.target.value)} maxLength={20}/>
                    </div>
                        
                    <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                                    value={"SignIn-Up"} 
                                    onClick={loginUser}/>
                </div>
            </section>

        
        </>
    )
}

export default UserHooksComponent;