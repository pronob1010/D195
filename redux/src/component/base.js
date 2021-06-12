import React, { Component } from "react";
// import {useSelector, useDispatch} from 'react-redux';
import { connect } from "react-redux";
import {incNumber, decNumber, resetNumber, divNumber, mulNumber} from "../reduxFiles/actions/actionIndex";

const stateToProps = (state) => {
  console.log(state);
  return {
    num: state.incDecRED,
  };
};

class Base extends Component {
  render() {
    //   const myState = useSelector((state) => state.incDecRED);
    return (
      <div>
        <h2>Inc/Dec Button : </h2>
        <h1> {this.props.num} </h1>

        <button onClick={()=>{this.props.dispatch(decNumber())}}>
          <p>( - )</p>
        </button>
        <span>
          <button onClick={()=>{this.props.dispatch(incNumber())}}>
            <p>( + )</p>
          </button>
        </span>
        <button onClick={()=>{this.props.dispatch(resetNumber())}}>
            <p>( Reset )</p>
          </button>

          <button onClick={()=>{this.props.dispatch(divNumber())}}>
            <p>( DIV by 5 )</p>
          </button>
          <button onClick={()=>{this.props.dispatch(mulNumber())}}>
            <p>( Mul by 5 )</p>
          </button>
      </div>
    );
  }
}

export default connect(stateToProps)(Base);
