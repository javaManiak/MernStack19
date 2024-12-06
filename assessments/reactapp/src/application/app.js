 import React, {PureComponent} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";

import PropTypes from "prop-types";
import Header from "./CommonComponents/HeaderComponent";
import NotFound from "./CommonComponents/NotFoundComponent";
import Home from "./CommonComponents/UserSignInComponent";
import {SuccessComponent} from "./CommonComponents/SuccessComponent";
import SuccessChild from "./CommonComponents/SuccessChildComponent"
import SuccessStory from "./CommonComponents/SuccessStoryComponent";
import LifeCycle from "./CommonComponents/LifeCycleComponent";
import ReactAssessment from "./CommonComponents/ReactAssessment";
import { StateChange } from "./CommonComponents/StateChangeComponent";

// export default class Application extends React.Component {
export default class Application extends PureComponent {
    constructor(props) {
        super(props);
        //state - object is used to allow udpdation of values via react rendering life cycle
        this.state = {
            userName : "Duncan",
        }
    }

    //render - method is responsible to create virtual dom for every change of state or props
    render(){
        console.log("Render is called!! ", this.state.userName)
        return(
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home user={this.state.user}/>}/>
                <Route path="signin" element={<Home />}/>
                <Route path="successcomponent" element={<SuccessComponent />} />
                <Route path="successchild" element={<SuccessChild />} />
                <Route path="successstory" element={<SuccessStory />} />
                <Route path="lifecycle" element={<LifeCycle />} />
                <Route path="assessment" element={<ReactAssessment />} />
                <Route path="statechange" element={<StateChange />} />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>)
    }
}

Home.proptypes = {
    user : PropTypes.string.isRequired
}