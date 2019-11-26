import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../state/actionCreators";

export const Matches = props => {
    console.log("props from matches",props);
  return <div>Hello from Matches!</div>;
};

export default connect(state => state,actionCreators)(Matches);
