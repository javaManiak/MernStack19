import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

let Header = (props) => {
  let user = props.user;
  console.log(user);

  const usrName = user && user.userName ? user.userName : "";

  return (
    <>
      {usrName != "" ? (
        <h2>Hi {usrName} , Welcome to My Personal Web Page</h2>
      ) : (
        <h2>
          Welcome to my space!
          <h3>Click on Tabs to explore by yourself.</h3>
        </h2>
      )}
      <div>
        <NavLink to="/home" className="button" activeclassname="true"> Home </NavLink>
        <NavLink to="/login" className="button" activeclassname="true"> User </NavLink>
        <NavLink to="/clock" className="button" activeclassname="true"> Clock </NavLink>
        <NavLink to="/atm" className="button" activeclassname="true"> ATM </NavLink>
        <NavLink to="/hobbies" className="button" activeclassname="true"> Hobbies </NavLink>
        {/* <NavLink to="/protected" className="button" activeclassname="true"> Protected </NavLink> */}
      </div>
      <hr />
    </>
  );
};

let mapStateToProps = (store) => {
  return {
    user: store.userReducer.user,
  };
};

export default connect(mapStateToProps, null)(Header);
