import React from "react"

//React Assessment 4th Dec-2024
let ReactAssessment = (props) => {
    return (
        <>
        <div>
            <p align="left">
            
            <h2>React Assessment 4th Dec-2024</h2>
            
            <p> <h3>1. create a webpack setup, index html and one css file to show css in next questions</h3></p> 
                    <p style={{marginLeft: '40px'}}> mkdir reactapp </p>
                    <p style={{marginLeft: '40px'}}> cd reactapp</p>
                    <p style={{marginLeft: '40px'}}> npm init</p>
                    <p style={{marginLeft: '40px'}}> npm i -D webpack</p> 
                    <p style={{marginLeft: '40px'}}> npm i babel </p>
                    <p style={{marginLeft: '40px'}}> npm i nodemon </p>
                    <p style={{marginLeft: '40px'}}> npm i babel-loader</p>
                    <p style={{marginLeft: '40px'}}> npm i bundle </p>
                    <p style={{marginLeft: '40px'}}> npm i style-loader</p>
                    <p style={{marginLeft: '40px'}}> npm i css-loader </p>
                    <p style={{marginLeft: '40px'}}> npm i react-dom </p>
                    <p style={{marginLeft: '40px'}}> npm run build  (need to set up webpack command in 'script' part in 'package.json')</p>
                    <p style={{marginLeft: '40px'}}> npm start      (same as above to get convenient CLI to start the React application)</p>
        

            <p><h3>2. how react renders dom in conservative manner - explain</h3></p>
        
                    <p style={{marginLeft: '40px'}}> a. React keeps developers away from the real DOM</p>
                    <p style={{marginLeft: '40px'}}> b. Developers working with Virtual DOM, an in memory version of the real DOM</p>
                    <p style={{marginLeft: '40px'}}> c. Developers modify the virtual DOM and the changes will be used by the React to update the virtual DOM first</p>
                    <p style={{marginLeft: '40px'}}> d. Modify real DOM where changes are made (only to the parts changed)</p>
                    <p style={{marginLeft: '40px'}}> e. Use efficient diffing algorithm to detect changes, render only the changed DOM tree (conservatively)</p>
                    <p style={{marginLeft: '40px'}}> f. Very fast and efficient in development point of view (no messing around with the real DOM, easy to make mistake and hard to test)</p>
        
            <p><h3>3. create a class component named - Success and show some quotes (messages) on success in it</h3></p>
        
                    <p style={{marginLeft: '40px'}}> Please see the codes (See SuccessComponent.js). Go to webpage - <a href={'http://localhost:9091/successcomponent'}>Success</a>  </p>
        
            <p><h3>4. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success</h3></p>
        
                    <p style={{marginLeft: '40px'}}> Please see the codes (see SuccessComponent.js). Go to webpage - <a href={'http://localhost:9091/successcomponent'}>Success</a>   </p>
        
            <p><h3>5. create SuccessStory as another component, pass this as props in SuccessChild from Success component</h3></p>
        
                    <p style={{marginLeft: '40px'}}> Please see the codes (See SussessStoryComponent.js and SuccessComponent.js). Go to webpage - <a href={'http://localhost:9091/successstory'}>Success Story</a>   </p>
        
            <p><h3>6. create UserSignIn component using uncontrolled way, should be class component</h3></p>
        
                    <p style={{marginLeft: '40px'}}> Please see the codes   (See UserSigninComponent.js). Go to webpage - <a href={'http://localhost:9091/signin'}>Signin</a>  </p>
        
            <p><h3>7. explain how virtual dom works </h3></p>
        
                    <p style={{marginLeft: '40px'}}>Virtual DOM is a higher level abstraction over DOM and DOM mutation. </p>
        
                    <p style={{marginLeft: '40px'}}> First of all, developer needs to create a virtual, in-memory representation of an HTML-like element, then render() creates virtual DOM tree.</p>
        
                    <p style={{marginLeft: '40px'}}> With the virtual DOM, developers can write UI and make changes as they need. React will create/updates real DOM from the cirtual DOM.</p>
        
                     <p style={{marginLeft: '40px'}}> React only updates/patches the elements that have been changed with advanced diffing algorithm, which makes it easy for developers</p>
                    <p style={{marginLeft: '40px'}}> and more efficient to manage the processing of midifications on DOM.</p>
        
                    <p style={{marginLeft: '40px'}}> The process is a continuous process between the developer and the React, and other aspects (such as events and other changes in </p>
                    <p style={{marginLeft: '40px'}}> the system).</p>
        
        
            <p><h3>8. pass a random value from SuccessStory component back to Success</h3></p>
        
                    <p style={{marginLeft: '40px'}}> Please see the codes.  (See SucessStoryComponent.js and SuccessComponent.js).Gto to webpage: <a href={'http://localhost:9091/successchild'}>Success Child</a>  </p> 
            
            <p><h3>9. Create a class component and show all the life cycle hooks/methods</h3></p>

                    <p style={{marginLeft: '40px'}}>Life cycle has three major stages - Creation, Descruction, and Update.</p>
         
                    <p style={{marginLeft: '40px'}}> Please see LifeCycleComponenet.js  Go to webpage: <a href={'http://localhost:9091/successchild'}>LC Demo</a> </p>
        
            <p><h3>10. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.</h3></p>
        
                <p style={{marginLeft: '40px'}}> Please see the codes (see StateChangeComponent.js). Go to webpage:  <a href={'http://localhost:9091/successchild'}>State Change Demo</a> </p>
            </p>            
         </div>
        </>
    )
}

export default ReactAssessment;