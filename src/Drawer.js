import React, { Fragment } from "react";
import Form from "./Form";

export default class Drawer extends React.Component {
  state = {
    handleClick: null
  };

  setClickHandler = callback => {
    this.setState({
      handleClick: callback
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.handleClick == null;
  }

  render() {
    const { message } = this.props;
    return (
      <Fragment>
        <p>I'm the drawer and I've got a button</p>
        {this.state.handleClick && (
          <button onClick={this.state.handleClick(message)}>click me </button>
        )}
        <Form setClickHandler={this.setClickHandler} />
      </Fragment>
    );
  }
}
