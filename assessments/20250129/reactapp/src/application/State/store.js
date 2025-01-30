
import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import userReducer from "./User/UserReducer";

let rootReducer = combineReducers({  
    userReducer  
    
})

export default configureStore(
    {reducer : rootReducer},
    {},
)
