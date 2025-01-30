import React from 'react';
import { NavLink } from 'react-router-dom';

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userName: "Someone",
          user: {
            address: "Somewhere on earth",
          },
        };
}

  loggedIn = this.state.user.isLoggedIn;

  
    // Only render if logged in
  render() {
   <nav>
      loggedIn == true ? ( 
        <NavLink to="/hobbies">Hobbies</NavLink>
      ) : <NavLink to="/login"> Login </NavLink>
    </nav>
  }
}

// export default MyComponent;