import React, { useState } from "react"; // {useState} - named import can be imported many names ones
import { useParams } from "react-router-dom";

let SuccessStory = (props) => {
  let params = useParams();
  let msg =  "Everyone who has made it to this world is a success, bleassed by the dear God. You are a gift from him, never forget about that. " +
          "Never, ever give up but stand your ground firmly, and don't be afraid to fight evils, for yourself, your family, and lastly" +
          "your dear dreams!";
  
  let [userName, setUserName] = useState("Ben Ma");

    return (
      <>
      <div>
        <h3 align="center">A Great Story of Success</h3>
        <p align="left" style={{marginLeft: '40px'}}>
          Everyone who has made it to this world is a success, bleassed by the dear God. You are a gift from him, never forget about that. 
        </p>
        <p align="left" style={{marginLeft: '40px'}}>
        Never, ever give up but stand your ground firmly, and don't be afraid to fight evils, for yourself, your family, and lastly
          your dear dreams!
          </p>
      </div>
      </>
    );
  };

export default SuccessStory;
