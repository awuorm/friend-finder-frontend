import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export const Messages = props => {
  return <div>Hello from messages!</div>;
};

export default connect(state => state,actionCreators)(Messages);
