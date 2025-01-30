import React, {Component} from "react";

class AtmComponent extends React.Component {

state = {
    value: 0,
    arry: []
  };

  valueChange(e) {
    var value = e.target.value;
    this.setState({
      value
    });
  }

  priceCalculation(stateValue) {
    const divideBy = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    var resultArray = []; // getting array
    var total = stateValue; // input value get

    divideBy.map(c => {
      resultArray.push(Math.floor(total / c));
      total = total % c;
    });
    this.setState({
      arry: resultArray
    });
  }
  render() {
    const { arry } = this.state;
    let sum = arry.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.valueChange(e)}
        />
        <button onClick={() => this.priceCalculation(this.state.value)}>
          Get Dispensed Notes
        </button>
       
        <div>
        
          <p>{arry[9]} note Rs 1</p>
          <p>{arry[8]} note Rs 2</p>
          <p>{arry[7]} note Rs 5</p> 
          <p>{arry[6]} note Rs 10</p>
          <p>{arry[5]} note Rs 20</p> 
          <p>{arry[4]} note Rs 50</p>
          <p>{arry[3]} note Rs 100</p>
          <p>{arry[2]} note Rs 200</p>
          <p>{arry[1]} notes Rs 500 </p>
          <p>{arry[0]} notes Rs 2000</p>
          <p>Total notes dispensed: {sum}</p>
        </div>
      </div>
    );
  }
}
export default AtmComponent