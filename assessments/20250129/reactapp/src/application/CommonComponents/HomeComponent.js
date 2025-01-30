import React, { Component} from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Name",
      address: "Address",
      user: props.user,
    };
    this.newAddress = "new address";
    this.refAddress = React.createRef();
    this.refSession = React.createRef();
  }
  componentDidMount() {
    console.log("componentDidMount method is called");
  }
  shouldComponentUpdate(nextPops, nextState) {
    console.log("shouldComponentUpdate method is called");
    console.log("nextPops ", nextPops);
    console.log("nextState ", nextState);

    if (this.state.firstName == nextState.firstName) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    console.log("Render method is called");
    return (
      <div>
        <h1>{this.state.title}</h1>
        <b className="feature">{"Website services:"}</b>
        <b></b>
        <ul>
          <li>Register users.</li>
          <li>Check clock time.</li>
          <li>ATM service.</li>
          <li>And more to come...</li>
        </ul>
      </div>
    );
  }
}
