import React from "react";
import { StyledBanner } from "../styles";
import {NavLink} from "react-router-dom";
import logo from "../imgs/logo.png";




const LandingPage = () => {
    return (
        <StyledBanner>
            <figure>
        <img alt="logo" src={logo} />
      </figure>
            <div>
        <p>Friends forever?</p>
        <span>Let's help you find your people.<br/></span>
        <span>
          Create an account <NavLink to="/register">Register</NavLink>{" "}
       <br/> </span>
        <span> or<br/></span>
        <span>
         <NavLink to="/login">Sign in</NavLink>
        </span>
        </div>
      </StyledBanner>
    
    )
}

export default LandingPage;

