import styled from "styled-components";
import app_back from "./imgs/app_back.jpg";

export const StyledApp = styled.div`
  background-image: url(${app_back});
  background-size: cover;
  width: 100vw;
  height: 100vh;

  figure {
    margin: 0;
    width: 15vw;
    height: 15vh;
    img {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
`;

export const StyledBanner = styled.div`
  margin-top: 15vh;
  text-align: center;
  background-color: white;
  width: 40vw;
  height: 40vh;
  margin-left: 30vw;
  font-family: "Pacifico", cursive;
  border-radius: 1.5em;
  /* figure {
    width: 8vw;
    height: 10vh;
    
    img {
      width: 100%;
      height: 100%;
    }
  } */
  p {
    color: #4a769f;
    font-weight: bold;
    font-size: 1.5em;
    padding-top: 1em;
    margin-bottom: 0;
  }
  span {
    color: lightcoral;
    margin-top: 0;
    font-weight: bold;
    font-size: 1.5em;
  }
`;
