import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./app.css";
import Header from "./CommonComponents/HeaderComponent";
import Home from "./CommonComponents/HomeComponent";
import NotFound from "./CommonComponents/NotFoundComponent";
import UserHooks from "./ApplicationComponents/User/UserHooksComponent";
import MyClock from "./ApplicationComponents/MyComponents/MyClock";
import Atm from "./ApplicationComponents/MyComponents/Atm";
import MyHobbies from "./ApplicationComponents/MyComponents/MyHobbies.js"
import Protected from "./ApplicationComponents/Security/MySecuredLink"

export default class ApplicationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Someone",
      user: {
        address: "Somewhere on earth",
      },
    };
  }
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home user={this.state.user} />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<UserHooks />} />      
          <Route path="/clock" element={<MyClock />} />
          <Route path="/atm" element={<Atm />} />
          <Route path="/hobbies" element={< MyHobbies />} />
          {/* <Route path="/protected" element={< Protected />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}
