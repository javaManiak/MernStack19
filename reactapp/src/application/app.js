// import React from "react";

// export default class Application extends React.Component {
//   render() {

//     let myname = "Ben - JSX => Javascript Like XML Structure"
//     let namelist = ["Nilay", "Gesang", "Jimmy", "Ben Ma", "Jay"];
//     let namelistWorking = ["Duncan", "Stacy", "Windie"];
    
// return(
//     <>
//     <h2>This is my first react page from application Component</h2>
//     <h2>This is my first react page wit dat ${myname}</h2>
//     <h3>Done</h3>
//     {nameList && nameList.map((name) => {
//         return <b> <hr/>{name}</b>})}
//     <h3>Still working</h3>
//     {namelistWorking && namelistWorking.map((name) => {
//       return <b><hr/>{name}</b>})}
//     </>)
//   }
// }

import React from "react";

export default class Application extends React.Component {
    render(){
        let myname = "'Ben Ma'" // JSX => Javascript Like XML Structure
        let nameList = ["Nilay", "Gesan", "Jimmy", "Ben Ma", "Jay", "Stacy", "Duncan"]
        let nameListWorking = ["Windie"]
        return(
        <>
            <h3>My first react page from application component</h3>
            <h3>{myname} first react page with data</h3>
            <h1>Done</h1>
            {nameList && nameList.map((name)=>{
                return <b><hr/>{name}</b>})}
            
            <h1>Still Working</h1>
            {nameListWorking && nameListWorking.map((name)=>{
                return <b><hr/>{name}</b>})}
        </>)
    }
}