import React from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";

export const Dashboard = props => {
  return <div>Hello from dashboard!</div>;
};

export default connect(state => state,actionCreators)(Dashboard);
