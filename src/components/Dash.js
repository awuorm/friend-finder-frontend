import React from "react";
import logo from "../imgs/logo.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { StyledDash } from "../styles";


export const Dash = props => {
  console.log(props);
  return (
    <StyledDash>
      <div>
      <figure>
        <img alt="logo" src={logo} />
      </figure>
        <NavLink
          style={{ textDecoration: "none", fontWeight: "bold", padding: "1em"}}
          to="/dash/questions"
        >
          Questions
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", fontWeight: "bold", padding: "1em"}}
          to="/dash/matches"
        >
          Matches
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", fontWeight: "bold", padding: "1em"}}
          to="/dash/your-matches"
        >
          Your matches
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", fontWeight: "bold", padding: "1em"}}
          to="/dash/user-profile"
        >
          Profile
        </NavLink>
      </div>
    </StyledDash>
  );
};

export default connect(state => state)(Dash);
