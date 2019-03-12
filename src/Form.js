import React from "react";

const Form = ({ setClickHandler }) => {
  setClickHandler(valueFromParent => () => {
    alert(valueFromParent);
  });

  return <h1>I'm the form and I say that callback is an alert</h1>;
};

export default Form;
