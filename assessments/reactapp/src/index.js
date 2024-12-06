import React from "react";
import * as ReactDOM from "react-dom/client";

import ApplicationComponent from "./application/app";

//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

//bootstrapping react application in root element of index.html
root.render(  //first time when our virtual dom is created and loads
        <ApplicationComponent/>
)