import React from "react";
import Drawer from "./Drawer";

const Parent = props => (
  <React.Fragment>
    <Drawer
      message={"I'm the parent and I want to pass down a message to show"}
    />
  </React.Fragment>
);

export default Parent;
