import React, { Component } from "react";
 
import { connect } from "react-redux";

 

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      yourText: "",
    };
  }

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState((prevValue) => {
      return {
        ...prevValue,
        [name]: [value],
      };
    });
  };

  preventDef = (event) => {
    console.log("My state : ", this.state);

    // submited all data now present in this state.
    // So to pass the data, we have to use dispatch from props.

    this.props.dispatch({
      type: "ADD_VALUS",
      payload: {
        fName: this.state.fName,
        lName: this.state.lName,
        yourText: this.state.yourText,
      },
    });

    this.setState({
      fName: "",
      lName: "",
      yourText: "",
    });

    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.preventDef}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="fName"
                value={this.state.fName}
                onChange={this.onChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lName"
                value={this.state.lName}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label className="px-3" for="exampleFormControlTextarea1">
                You Massege
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="yourText"
                value={this.state.yourText}
                onChange={this.onChange}
              ></textarea>
            </div>
          </div>
          <button className="btn btn-primary mt-1" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Contact);
